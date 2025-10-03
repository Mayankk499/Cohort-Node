import express from 'express';
import { connectMONGODB } from '../mongoDB/connection.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;

connectMONGODB(process.env.MONGODB_URL).then(() => 
    console.log(`mongo DB Connected`)
);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    
})