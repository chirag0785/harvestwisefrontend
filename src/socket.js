import { io } from "socket.io-client";

const socket=io('https://harvestwisebackend.onrender.com',{
    autoConnect:false
});
export default socket
