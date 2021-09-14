const request = require('supertest');
const app = require('../app.js');

describe('User API', () => {
  it('should create a new user', async () => {
    console.log('Sending...');
    const res = await request(app).get('/api/user/getUser').send({
      email: 'nathan@slickrocksolutions.com',
    });
    console.log('RES: ', res);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
  });
});
