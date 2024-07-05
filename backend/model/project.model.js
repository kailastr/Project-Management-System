import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    projectTitle: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    deadline: {
        type: Date,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    team: {
        type: [String],
        required: true
    },
    budget: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const ProjectModel = mongoose.model('Project', ProjectSchema);

export default ProjectModel;