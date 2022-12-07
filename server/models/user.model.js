import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    match: /^[a-z\d]+$/i,
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model('users', userSchema);
console.log(userModel);

export { userModel as default };

