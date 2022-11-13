import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import handleCanvasImageUpdate from "../handlers/handleCanvasImageUpdate.js";
import fetchRoomImage from "./handlers/fetchRoomImage.js";

const socket = io();
const roomId = location.search.slice(1).split("=")[1];

socket.emit("join-room", roomId);
fetchRoomImage(roomId)
