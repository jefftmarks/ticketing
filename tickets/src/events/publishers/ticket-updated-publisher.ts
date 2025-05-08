import { Publisher, Subjects, TicketUpdatedEvent } from '@chickens_package_factory/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
