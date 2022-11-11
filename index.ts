import express from "express";
import { Server } from "socket.io";
import handleConnect from "./server/socketio";

const app = express();
const server = app.listen(3000, () => console.log("App started on port 3000"));
const io = new Server(server);

app.use(express.static("public"));
io.on("connection", handleConnect);
