import Queue from 'bull';
import { ExpirationCompletePublisher } from '../events/listeners/publishers/expiration-complete-publisher';
import { natsWrapper } from '../nats-wrapper';

interface Payload {
  orderId: string;
}

const expirationQueue = new Queue<Payload>('order:expiration', {
  redis: {
    host: process.env.REDIS_HOST,
    port: 6379
  }
});

expirationQueue.process(async (job) => {
  new ExpirationCompletePublisher(natsWrapper.client).publish({
    orderId: job.data.orderId
  });
});

export { expirationQueue };
