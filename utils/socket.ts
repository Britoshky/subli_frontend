import { io } from "socket.io-client";


export const socket = io("wss://ws.subli.cl", {
  transports: ["websocket"],
});
