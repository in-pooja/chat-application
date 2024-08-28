// // // // import express from "express";
// // // import http from "http"; 
// // // import bodyParser from "body-parser";
// // // import cookieParser from "cookie-parser";
// // // import cors from "cors";
// // // import route from "./router/userroute.js";
// // // import socketConfig from "./Socket/socketConfig.js";  // Ensure this path is correct

// // // const app = express();
// // // const PORT = 3100;
// // // const server = http.createServer(app);

// // // app.use(bodyParser.json());
// // // app.use(cookieParser());
// // // app.use(bodyParser.urlencoded({ extended: true }));
// // // app.use(cors());

// // // app.use("/user", route);

// // // const io = socketConfig(server);

// // // app.use((req, res, next) => {
// // //     req.io = io;
// // //     next();
// // // });

// // // server.listen(PORT, () => {
// // //     console.log(`Server is running on port ${PORT}`);
// // // });
// // import express from "express";
// // import http from "http"; 
// // import bodyParser from "body-parser";
// // import cookieParser from "cookie-parser";
// // import cors from "cors";
// // import route from "./router/userroute.js";
// // import socketConfig from "./Socket/socketConfig.js";

// // const app = express();
// // const PORT = 3100;
// // const server = http.createServer(app);

// // app.use(bodyParser.json());
// // app.use(cookieParser());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(cors());

// // app.use("/user", route);

// // const io = socketConfig(server);

// // app.use((req, res, next) => {
// //     req.io = io;
// //     next();
// // });

// // server.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });
// import express from "express";
// import http from "http";
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import route from "./router/userroute.js";
// import socketConfig from "./Socket/socket.js";

// const app = express();
// const PORT = 3100;
// const server = http.createServer(app);

// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.use("/user", route);

// const io = socketConfig(server);

// app.use((req, res, next) => {
//     req.io = io;
//     next();
// });

// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import route from "./router/userroute.js";
import socketConfig from "./Socket/socket.js";

const app = express();
const PORT = 3100;
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Initialize Socket.io
const io = socketConfig(server);

// Attach io to the request object
app.use((req, res, next) => {
    req.io = io;
    next();
});

// Use routes
app.use("/user", route);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
