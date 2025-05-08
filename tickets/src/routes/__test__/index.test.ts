import request from 'supertest';
import { app } from '../../app';

const createTicket = () => {
  return request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title: 'title',
      price: 30
    });
}

it('can fetch a list of tickets', async () => {
  for(let i = 0; i < 3; i++) {
    await createTicket();
  }

  const response = await request(app)
    .get('/api/tickets')
    .send()
    .expect(200)

  expect(response.body.length).toEqual(3);
});
