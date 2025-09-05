import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
    role: {
        type: String,
        enum: ['user', 'assistant'],
        required: true  
    },
    content: {
        type: String,
        required: true  
    },
    timestamp: {
        type: Date,
        default: Date.now  
    }
});

const ThreadSchema = new mongoose.Schema({
    threadId: {
        type: String,
        required: true,
        unique: true  
    },
    messages: [MessageSchema],
    creadtedAt: {
        type: Date,
        default: Date.now  
    },
    updatedAt: {
        type: Date,
        default: Date.now  
    }
}); 

export default mongoose.model('Thread', ThreadSchema);