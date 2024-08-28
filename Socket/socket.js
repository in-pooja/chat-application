// // // // // Socket/socketConfig.js
// // // // import { Server } from "socket.io";

// // // // const socketConfig = (server) => {
// // // //     const io = new Server(server, {
// // // //         cors: {
// // // //             origin: "*",  // Adjust this to your client's origin
// // // //             methods: ["GET", "POST"]
// // // //         }
// // // //     });

// // // //     io.on("connection", (socket) => {
// // // //         console.log("A user connected");

// // // //         socket.on("register", (userId) => {
// // // //             console.log(`User registered with ID: ${userId}`);
// // // //         });

// // // //         socket.on("disconnect", () => {
// // // //             console.log("User disconnected");
// // // //         });
// // // //     });

// // // //     return io;
// // // // };

// // // // export default socketConfig;
// // // import { Server } from "socket.io";

// // // const socketConfig = (server) => {
// // //     const io = new Server(server, {
// // //         cors: {
// // //             origin: "*",  // Adjust this to your client's origin
// // //             methods: ["GET", "POST"]
// // //         }
// // //     });

// // //     io.on("connection", (socket) => {
// // //         console.log("A user connected");

// // //         socket.on("register", (userId) => {
// // //             console.log(`User registered with ID: ${userId}`);
// // //         });

// // //         socket.on("disconnect", () => {
// // //             console.log("User disconnected");
// // //         });
// // //     });

// // //     return io;
// // // };

// // // export default socketConfig;
// // import { Server } from "socket.io";

// // const socketConfig = (server) => {
// //     const io = new Server(server, {
// //         cors: {
// //             origin: "*",
// //             methods: ["GET", "POST"]
// //         }
// //     });

// //     io.on("connection", (socket) => {
// //         console.log("A user connected");

// //         socket.on("register", (userId) => {
// //             console.log(`User registered with ID: ${userId}`);
// //         });

// //         socket.on("disconnect", () => {
// //             console.log("User disconnected");
// //         });
// //     });

// //     return io;
// // };

// // export default socketConfig;
// import { Server } from "socket.io";

// const socketConfig = (server) => {
//     const io = new Server(server, {
//         cors: {
//             origin: "*",  // Adjust this to your client's origin
//             methods: ["GET", "POST"]
//         }
//     });

//     io.on("connection", (socket) => {
//         console.log("A user connected");

//         socket.on("register", (userId) => {
//             console.log(`User registered with ID: ${userId}`);
//         });

//         socket.on("disconnect", () => {
//             console.log("User disconnected");
//         });
//     });

//     return io;
// };

// export default socketConfig;
import { Server } from "socket.io";

const socketConfig = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",  // Adjust this to your client's origin
            methods: ["GET", "POST"]
        }
    });

    // Initialize userSocketMap
    io.userSocketMap = {};

    io.on("connection", (socket) => {
        console.log("A user connected");

        // Register user and map socket ID
        socket.on("register", (userId) => {
            io.userSocketMap[userId] = socket.id;
            console.log(`User registered with ID: ${userId}`);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });

    return io;
};

export default socketConfig;
