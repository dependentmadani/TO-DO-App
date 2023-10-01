import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to this page');
});

export default router;