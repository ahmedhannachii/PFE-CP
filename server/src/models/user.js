import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: String,
  userName:  String,
  lastName:  String,
  date:  String,
  permission: {type:String, default: "USER" },
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema);
