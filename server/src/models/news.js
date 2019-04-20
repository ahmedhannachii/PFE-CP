import mongoose from 'mongoose';

const newsSchema = mongoose.Schema({
 titre : String, 
 description: String, 
 image : String, 
 prix : String,
}, {
  timestamps: true,
});

export default mongoose.model('News', newsSchema);
