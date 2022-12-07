import mongoose from 'mongoose';

const connectDB = () => {
  mongoose.set('strictQuery', true);
  mongoose.connect('mongodb://localhost:27017/proManzaDB', (err) => {
    if (err) return console.log('DB connection error', err);
    console.log('DB connected');
  });
};

export { connectDB as default };

