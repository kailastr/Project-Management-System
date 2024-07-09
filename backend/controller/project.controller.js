import ProjectModel from "../model/project.model.js";

export const createProject = async (req, res) => {
    try {
        const projectDetails = req.body;
        // console.log(projectDetails);

        const title = projectDetails.projectTitle;
        // console.log(title);
        const newProject = await ProjectModel.create(projectDetails);

        return res.status(200).json({ newProject });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export const getAllProject = async (req, res) => {
    try {
        const projects = await ProjectModel.find();
        return res.status(200).json({ projects });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export const getProject = async (req, res) => {

    try {
        const { id } = req.params;
        // console.log(id);
        const project = await ProjectModel.findById(id);

        if (!project) {
            return res.status(404).json({ message: "Project not found with this id" });
        }

        return res.status(200).json({ project });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const validId = await ProjectModel.findById(id);
        if (!validId) {
            return res.status(404).json({ message: "Project not found with this id" });
        }

        const updatedDetails = await ProjectModel.findByIdAndUpdate(
            { _id: id },
            { $set: { ...data } },
            { new: true }
        );

        return res.status(200).json({ updatedDetails });

    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        const validId = await ProjectModel.findById(id);

        if (!validId) {
            return res.status(400).json({ message: "User Not Found With this id" });
        }

        await ProjectModel.deleteOne({ _id: id });

        return res.status(200).send("Successfully Deleted data");
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}