import { Publisher, Subjects, TicketCreatedEvent } from '@chickens_package_factory/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
