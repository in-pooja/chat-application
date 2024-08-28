// // import express from "express";
// // import { searchUser, signIn, signUp } from "../controller/usercontroller.js";
// // import { Verifytoken } from "../Middleware/auth.js";
// // import { profileImage } from "../controller/profileController.js";
// // const app = express();
// // const route = express.Router();

// // // route.post("/signIn",Verifytoken,signIn);
// // // route.post("/signUp",signUp)
// // route.post("/signUp",signUp);
// // route.post("/signIn",signIn);
// // route.post("/FindUser",searchUser)
// // route.post("/updateProfile",profileImage)

// // export default route;

// // import express from "express";
// // import { searchUser, signIn, signUp } from "../controller/usercontroller.js";
// // import { Verifytoken } from "../Middleware/auth.js";
// // import { profileImage } from "../controller/profileController.js";
// // import { getAllPosts, createPost } from "../controller/PostController.js";

// // const router = express.Router();

// // // User routes
// // router.post("/signUp", signUp);
// // router.post("/signIn", signIn);
// // router.post("/FindUser", searchUser);
// // router.post("/updateProfile", profileImage);

// // // Post routes
// // router.get("/posts", getAllPosts);  // Fetch all posts
// // router.post("/posts", createPost);  // Create a new post

// // export default router;

// // import express from "express";
// // import { searchUser, signIn, signUp } from "../controller/usercontroller.js";
// // import { Verifytoken } from "../Middleware/auth.js";
// // import { profileImage } from "../controller/profileController.js";
// // import { getAllPosts, createPost } from "../controller/PostController.js";

// // const router = express.Router();

// // // User routes
// // router.post("/signUp", signUp);
// // router.post("/signIn", signIn);
// // router.post("/FindUser", searchUser);
// // router.post("/updateProfile", profileImage);

// // // Post routes
// // router.get("/posts", getAllPosts);  // Fetch all posts
// // router.post("/posts", createPost);  // Create a new post

// // export default router;
// import express from "express";
// import { searchUser, signIn, signUp } from "../controller/usercontroller.js";
// import { Verifytoken } from "../Middleware/auth.js";
// import { profileImage } from "../controller/profileController.js";
// import { getAllPosts, createPost } from "../controller/PostController.js";
// // Import multer configuration
// import upload from "../Middleware/ConfigureMulter.js";

// const router = express.Router();

// // User routes
// router.post("/signUp", signUp);
// router.post("/signIn", signIn);
// router.post("/FindUser", searchUser);
// router.post("/updateProfile", profileImage);

// // Post routes
// router.get("/posts", getAllPosts);  // Fetch all posts
// router.post("/posts", multer.single('Image'), createPost);  // Create a new post with an image

// export default router;
import express from "express";
import { searchUser, signIn, signUp } from "../controller/usercontroller.js";
import { Verifytoken } from "../Middleware/auth.js";
import { profileImage } from "../controller/profileController.js";
import { getAllPosts, createPost } from "../controller/PostController.js";
import upload from "../Middleware/ConfigureMulter.js";  // Ensure this path is correct
import { sendMessage, getChatHistory } from "../controller/MessagesController.js";
;


const router = express.Router();

// User routes
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/FindUser", searchUser);
router.post("/updateProfile", profileImage);

// Post routes
router.get("/posts", getAllPosts);  // Fetch all posts
router.post("/postss",  createPost);  // Create a new post with an image

router.post("/messages/send", sendMessage);  // Route to send a message
router.get("/messages/history/:senderId/:receiverId", getChatHistory);

export default router;
