import mongoose from 'mongoose';

const upcomingSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true,
    },
    desc: {
        type: String,
        require:true,
    },
    venue:{
        type: String,
    },
    date:{
        type: Number,
        require:true,
    },
    month:{
        type: String,
        require:true,
    },
    year:{
        type: Number,
        
        require:true,
    },
    link:{
        type: String,
        require:false,
    }
    
},{timestamps: true});

const Upcoming =  mongoose.models.upcomings || mongoose.model('upcomings', upcomingSchema)
export default Upcoming
