// // import Message from '../Model/MessageModel.js'; // Import the Message model


// // export const createMessage = async (req, res) => {
// //     const { senderId, receiverId, message, referenceUserId } = req.body;

// //     try {
// //         const newMessage = await Message.create({
// //             senderId,
// //             receiverId,
// //             message,
// //             referenceUserId
// //         });

// //         res.status(201).json(newMessage);
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // };

// // export const getMessages = async (req, res) => {
// //     const { senderId, receiverId } = req.params;

// //     try {
// //         const messages = await Message.findAll({
// //             where: {
// //                 senderId,
// //                 receiverId
// //             },
// //             order: [['createdAt', 'ASC']]
// //         });

// //         res.status(200).json(messages);
// //     } catch (error) {
// //         res.status(500).json({ error: error.message });
// //     }
// // };
// import messages from "../Model/MessageModel.js"; // Import your message model

// // Send a message and save it to the database
// export const sendMessage = async (req, res) => {
//     try {
//         const { senderId, receiverId, message, referenceUserId } = req.body;

//         // Save the message to the database
//         const newMessage = await messages.create({
//             senderId,
//             receiverId,
//             message,
//             referenceUserId
//         });

//         // Emit the message to the receiver via Socket.io
//         const receiverSocketId = req.io.userSocketMap[receiverId];
//         if (receiverSocketId) {
//             req.io.to(receiverSocketId).emit("receiveMessage", newMessage);
//         }

//         res.status(201).json({
//             success: true,
//             message: "Message sent successfully",
//             data: newMessage
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to send message",
//             error: error.message
//         });
//     }
// };

// // Fetch chat history between two users
// export const getChatHistory = async (req, res) => {
//     try {
//         const { senderId, receiverId } = req.params;

//         const chatHistory = await messages.findAll({
//             where: {
//                 senderId,
//                 receiverId
//             },
//             order: [["createdAt", "ASC"]]
//         });

//         res.status(200).json({
//             success: true,
//             message: "Chat history fetched successfully",
//             data: chatHistory
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Failed to fetch chat history",
//             error: error.message
//         });
//     }
// };

// Controller/MessageController.js
// import messages from "../Model/MessageModel.js";

// Send a message and save it to the database
// export const sendMessage = async (req, res) => {
//     try {
//         const { senderId, receiverId, message, referenceUserId } = req.body;

//         // Save the message to the database
//         const newMessage = await messages.create({
//             senderId,
//             receiverId,
//             message,
//             referenceUserId
//         });

//         // Emit the message to the receiver via Socket.io
//         const receiverSocketId = req.io.userSocketMap[receiverId];
//         if (receiverSocketId) {
//             req.io.to(receiverSocketId).emit("receiveMessage", newMessage);
//         }

//         res.status(201).json({
//             success: true,
//             message: "Message sent successfully",
//             data: newMessage
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to send message",
//             error: error.message,
            
//         });
//     }
// }
// import messages from "../Model/MessageModel.js";

// // Send a message and save it to the database
// export const sendMessage = async (req, res) => {
//     try {
//         const { senderId, receiverId, message, referenceUserId } = req.body;

//         // Save the message to the database
//         const newMessage = await messages.create({
//             senderId,
//             receiverId,
//             message,
//             referenceUserId
//         });

//         // Emit the message to the receiver via Socket.io
//         const receiverSocketId = req.io.userSocketMap[receiverId];
//         if (receiverSocketId) {
//             req.io.to(receiverSocketId).emit("receiveMessage", newMessage);
//         }

//         res.status(201).json({
//             success: true,
//             message: "Message sent successfully",
//             data: newMessage
//         });
//     } catch (error) {
//         // Log the error to the console
//         console.error('Error sending message:', error);

//         // Send the error response to the client
//         res.status(500).json({
//             success: false,
//             message: "Failed to send message",
//             error: error.message
//         });
//     }
// }
import messages from "../Model/MessageModel.js";

// Send a message and save it to the database
export const sendMessage = async (req, res) => {
    try {
        const { senderId, receiverId, message, referenceUserId } = req.body;

        // Debugging statements
        console.log('req.io:', req.io);
        console.log('req.io.userSocketMap:', req.io ? req.io.userSocketMap : 'req.io is undefined');

        // Save the message to the database
        const newMessage = await messages.create({
            senderId,
            receiverId,
            message,
            referenceUserId
        });

        // Emit the message to the receiver via Socket.io
        const receiverSocketId = req.io.userSocketMap[receiverId];
        if (receiverSocketId) {
            req.io.to(receiverSocketId).emit("receiveMessage", newMessage);
        }

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage
        });
    } catch (error) {
        // Log the error to the console
        console.error('Error sending message:', error);

        // Send the error response to the client
        res.status(500).json({
            success: false,
            message: "Failed to send message",
            error: error.message
        });
    }
}

// Fetch chat history between two users
export const getChatHistory = async (req, res) => {
    try {
        const { senderId, receiverId } = req.params;

        const chatHistory = await messages.findAll({
            where: {
                senderId,
                receiverId
            },
            order: [["createdAt", "ASC"]]
        });

        res.status(200).json({
            success: true,
            message: "Chat history fetched successfully",
            data: chatHistory
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch chat history",
            error: error.message
        });
    }
};
