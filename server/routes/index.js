import express from "express";
import taskRoutes from './tasks.js'
import authRoutes from './auth.js'
import usersRoutes from './users.js'
import checkAuth from "../utils/checkAuth.js";

const router = express.Router();

//checkAuth are middlewares used in tasks and users paths to check if user is authenticated
router.use('/auth', authRoutes);
router.use('/tasks', checkAuth, taskRoutes);
router.use('/users',checkAuth, usersRoutes);

export default router;