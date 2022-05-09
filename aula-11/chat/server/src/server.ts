import Console from './util/logger';
import { createServer } from 'http';
import { server as WebSocketServer } from 'websocket';

export const createWebsocketServer = (): WebSocketServer => {
    const port = process.env.PORT || 5000;
    const httpServer = createServer(() => { });

    httpServer.listen(port, () => Console.info(`server listening on port ${port}`))
}