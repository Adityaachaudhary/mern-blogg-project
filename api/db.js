// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config('Config.env');

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB!');
}
)
.catch((err) => {
  console.log('Failed to connect to MongoDB:', err);
}
);

const connectDB = mongoose.connection;




export default connectDB;
