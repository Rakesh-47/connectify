import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors'
import authRoutes from './authroute.js';
import Connection from './db/mongo.js';
import cookieParser from 'cookie-parser';
import messageroute from './messageroute.js';
import userroutes from './userroutes.js';
import { app, server } from './socket/socket.js';

dotenv.config();
const PORT = process.env.PORT || 5000;



app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageroute);
app.use('/api/users', userroutes);


server.listen(PORT, () => {
  Connection();
  console.log(`Server running on port ${PORT}`);
});
