import express from 'express';
import 'dotenv/config';
import { connectMONGODB } from '../mongoDB/connection.js';
import userRouter from '../mongoDB/routes/user.routes.js';
import { authMiddleware } from './middleware/auth.middleware.js';

const app = express();
const PORT = process.env.PORT;

connectMONGODB(process.env.MONGODB_URL).then(() => 
    console.log(`mongo DB Connected`)
);

app.use(express.json());
app.use(authMiddleware);

app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    
})