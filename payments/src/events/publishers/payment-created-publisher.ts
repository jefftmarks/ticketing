import { Publisher, PaymentCreatedEvent, Subjects } from '@chickens_package_factory/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
