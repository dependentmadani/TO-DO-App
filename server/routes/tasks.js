import express from "express";
import { createTask, getAllTasks, getCurrentUsersTasks, updateTask, deleteTask } from "../controllers/task.js";

const router = express.Router();

router.post('/', createTask);
router.get('/all', getAllTasks);
router.get('/myTasks', getCurrentUsersTasks);
router.put('/:taskId', updateTask);
router.delete('/:taskId', deleteTask);

export default router;