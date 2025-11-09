const request = require('supertest');
const app = require('../app');
const Bug = require('../models/Bug');
jest.mock('../models/Bug');

describe('Bug API', () => {
  it('should create a bug', async () => {
    Bug.create.mockResolvedValue({ title: 'Test Bug', description: 'Desc', status: 'open' });
    const res = await request(app).post('/api/bugs').send({ title: 'Test Bug', description: 'Desc' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Bug');
  });
});
