import Task from "../models/Task.js";
import createError from "../utils/createError.js";

export const createTask = async (req, res, next) => {
    try {
        const createTask = new Task({
            title: req.body.title,
            user: req.user.id,
            completed: req.body.completed
        });

        const savedTask = await createTask.save();
        return res.status(201).json(savedTask);
    } catch(err) {
        return next(err);
    }
}

export const getAllTasks = async (req, res, next) => {
    try {
        const allTasks = await Task.find({});

        return res.status(200).json(allTasks);
    } catch(err) {
        return next(err);
    }
}

export const getCurrentUsersTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({user: req.user.id});

        return res.status(200).json(tasks);
    } catch (err) {
        return next(err);
    }
}

export const updateTask = async (req, res, next) => {
    try {

        const task = await Task.findById(req.params.taskId).exec();
        if (!task) {
            return next(createError({status: 404, message: "Task not found"}));
        }
        if (task.user.toString() !== req.user.id) {
            return next(createError({status: 401, message: "It is not your task"}));
        }

        const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, {
            title: req.body.title,
            completed: req.body.completed
        }, {new : true});

        return res.status(200).json(updatedTask);
    } catch(err) {
        return next(err);
    }
}

export const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.taskId).exec();
        if (!task) {
            return next(createError({status: 404, message: "Task not found"}));
        }
        if (task.user.toString() !== req.user.id) {
            return next(createError({status: 401, message: "It is not your task"}));
        }

        await Task.findByIdAndDelete(req.params.taskId);
        return res.status(200).json('Task deleted successfully!');
    } catch(err) {
        return new(err);
    }
}