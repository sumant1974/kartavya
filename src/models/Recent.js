import mongoose from 'mongoose';

const recentSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        unique: true
    },
    img: {
        type: String,
        
    },
    title: {
        type: String,
        
    },
    desc: {
        type: String,
        
    },
    
},{timestamps: true});

export default mongoose.models.Recent || mongoose.model('Recent', recentSchema)
