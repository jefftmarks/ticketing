import { Publisher, OrderCreatedEvent, Subjects } from '@chickens_package_factory/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
