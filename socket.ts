import { Server } from "socket.io";
import { createServer } from "http";
import app from './server'

const httpServer = createServer(app);
httpServer.listen(5001)
export const io = new Server(httpServer, { /* path: "/api/messages" */
    cors: {
        origin: "http://localhost:19006"
    }
});

io.on("connection", (socket) => {
    socket.on("send message", (data) => {
        socket.emit("private message", data.from, data.to);
    })
})
