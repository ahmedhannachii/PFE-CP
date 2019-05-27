import mongoose from 'mongoose';

const categoriesSchema = mongoose.Schema({
 titre : String, 
}, {
  timestamps: true,
});

export default mongoose.model('Categories', categoriesSchema);
