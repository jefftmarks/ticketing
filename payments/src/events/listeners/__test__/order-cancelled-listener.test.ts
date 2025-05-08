import { Message } from 'node-nats-streaming';
import mongoose from "mongoose";
import { OrderCancelledEvent, OrderStatus } from "@chickens_package_factory/common";
import { OrderCancelledListener } from '../order-cancelled-listener';
import { natsWrapper } from "../../../nats-wrapper";
import { Order } from '../../../models/order';

const setup = async () => {
  const listener = new OrderCancelledListener(natsWrapper.client);
 
  const order = Order.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    status: OrderStatus.Created,
    price: 20,
    userId: '123',
    version: 0
  });
  await order.save();

  const data: OrderCancelledEvent['data'] = {
    id: order.id,
    version: 1,
    ticket: {
      id: '123'
    }
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn()
  };

  return { listener, order, data, msg };
};

it('updates the order and acks the message', async () => {
  const { listener, order, data, msg } = await setup();

  await listener.onMessage(data, msg);

  const updatedOrder = await Order.findById(order.id);

  expect(updatedOrder!.status).toEqual(OrderStatus.Cancelled)
  expect(msg.ack).toHaveBeenCalled();
});
