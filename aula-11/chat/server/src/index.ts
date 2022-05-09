import * as dotenv from 'dotenv'
import Client from './client';
import mongoose from 'mongoose'
import { createWebsocketServer } from './server';

dotenv.config();

const clients: Client[] = [];

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)

        const ws = createWebsocketServer
    } catch (err) {

    }
})();