import express from 'express';
import mongoose  from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import allRoutes from './routes/index.js';

const PORT = process.env.PORT || 8000;
const app = express();

//middleware configuration
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

// use different routes
app.use('/api', allRoutes);

//connect to mongodb atlas database
const connectDB = async () => {
    try {
        console.log(process.env.PORT)
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        console.log('mongodb is connected');
    }catch (e) {
        console.log('something went wrong with database', e);
        process.exit(1);
    }
}

//start listen on the requested port
app.listen(PORT, ()=> {
    connectDB();
    console.log(`The app is listening on port ${PORT}`);
})