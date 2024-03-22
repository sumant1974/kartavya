import mongoose from 'mongoose';

const revsSchema = new mongoose.Schema({
    
    img: {
        required: true,
        type: String,
        
    },
    title: {
        required: true,
        type: String,
        
    },
    desc: {
        required: true,
        type: String,
        
    },
    
},{timestamps: true});

export default mongoose.models.Revs || mongoose.model('Revs', revsSchema)
