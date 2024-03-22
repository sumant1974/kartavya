import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    
    img: {
        required: true,
        type: String,
        
    },
    name: {
        required: true,
        type: String,
        
    },
    position: {
        required: true,
        type: String,
        
    },
    
},{timestamps: true});

export default mongoose.models.Member || mongoose.model('Member', memberSchema)
