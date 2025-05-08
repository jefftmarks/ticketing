import { Subjects, Publisher, ExpirationCompleteEvent } from '@chickens_package_factory/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
