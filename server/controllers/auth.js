import bcryptjs from 'bcryptjs';
import User from '../models/User.js';

export const register = async (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.json("Missing required info: name, email, password");
    }

    try {
        const salt = await bcryptjs.genSalt(10);
        const hashedPass = await bcryptjs.hash(req.body.password, salt);
        
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPass
        });
        await newUser.save();
        return res.status(201).json('new user created');
    } catch(e) {
        return res.status(403).json('server error');
    }
};

export const login = async () => {

};