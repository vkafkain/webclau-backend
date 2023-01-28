const mongoose = require('mongoose');
const connectDB = require('../database/connectDB');

jest.mock('mongoose', () => {
  return {
    connect: jest.fn(),
    set: jest.fn(),
  };
});

test('connectDB function connects to the database', async () => {
  await connectDB();
  expect(mongoose.connect).toHaveBeenCalled();
});
