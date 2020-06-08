import mongoose from 'mongoose';

const validName = (val: string): boolean => (
  val.length >= 2 && val.length < 32
);

const validEMail = (val: string): boolean => (
  val.includes('@')
  && val.length > 2
  && val[0] !== '@'
  && val[val.length - 1] !== '@'
);

const validPassword = (val: string): boolean => (
  val.length > 5
);

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    validate: validName,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: validEMail,
  },
  password: {
    type: String,
    required: true,
    validate: validPassword,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
