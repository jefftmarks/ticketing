import { Publisher, OrderCancelledEvent, Subjects } from '@chickens_package_factory/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
