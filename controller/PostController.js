// import Posts from "../Model/postmodel.js"


// export const getAllPosts = async (req, res) => {
//     try {
//         const posts = await Posts.findAll();
//         res.status(200).json(posts);
//     } catch (error) {
//         res.status(500).json({ message: "Failed to retrieve posts", error });
//     }
// };


// export const createPost = async (req, res, next) => {
//     const {id, caption, image, author, totallike, comment } = req.body;
//     try {
//         const post = await Posts.create({id,caption, image, author, totallike, comment})
//         if (post)
//             return res.status(200).json({ message: "post created sucesfully", post })


//         return res.status(404).json({ messages: "post creation failed" })
//     } catch (err) {
//         console.log(err);
//         return res.status(404).json({ message: "internal server error", err })
//     }
// }
// import UserPosts from "../Model/postmodel.js"; // Ensure this path is correct

// export const getAllPosts = async (req, res) => {
//     try {
//         const posts = await UserPosts.findAll();
//         res.status(200).json(posts);
//     } catch (error) {
//         res.status(500).json({ message: "Failed to retrieve posts", error });
//     }
// };

// export const createPost = async (req, res) => {
//     const {id, caption, imageUrl, userId } = req.body; // Correct field names
//     try {
//         const post = await UserPosts.create({
//             id,
//             caption,
//             imageUrl,
           
//             userId
//         });
//         if (post) {
//             return res.status(201).json({ message: "Post created successfully", post });
//         }
//         return res.status(400).json({ message: "Post creation failed" });
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({ message: "Internal server error", err });
//     }
// };
import UserPosts from "../Model/postmodel.js"; // Ensure this path is correct

// Get all posts
export const getAllPosts = async (req, res) => {
    try {
        const posts = await UserPosts.findAll(); // Fetch all posts
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve posts", error });
    }
};

// Create a new post
// export const createPost = async (req, res) => {
//     const { caption, imageUrl, userId } = req.body; // Correct field names
//     try {
//         // Create a new post entry
//         const post = await UserPosts.create({
//             caption,
//             imageUrl,
//             userId
//         });

//         if (post) {
//             return res.status(201).json({ message: "Post created successfully", post });
//         }

//         return res.status(400).json({ message: "Post creation failed" });
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({ message: "Internal server error", err });
//     }
// };
 // Adjust path as needed

// Create a new post
// export async function createPost(req, res) {
//     try {
//         const { postImage, caption, userId } = req.body;

//         // Validate input
//         if (!postImage) {
//             console.log(postImage);
//             return res.status(400).json({ error: "Post image is required" });
//         }

//         // Create a new post
//         const newPost = await UserPosts.create({
//             postImage,
//             caption,
//             userId
//         });

//         res.status(201).json(newPost);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "An error occurred while creating the post" });
//     }
// }
// export async function createPost(req, res) {
//     try {
//         console.log(req.body); // Check the entire request body
//         const { postImage, caption, userId } = req.body;

//         // Validate input
//         if (!postImage) {
//             return res.status(400).json({ error: "Post image is required" });
//         }

//         // Create a new post
//         const newPost = await UserPosts.create({
//             postImage,
//             caption,
//             userId
//         });

//         res.status(201).json(newPost);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "An error occurred while creating the post" });
//     }
// }
export async function createPost(req, res) {
    try {
        console.log(req.body); // Check the entire request body
        const { imageUrl, caption, userId } = req.body;

        // Validate input
        if (!imageUrl) {
            return res.status(400).json({ error: "Post image is required" });
        }

        // Create a new post
        const newPost = await UserPosts.create({
            postImage: imageUrl, // Map the imageUrl to postImage
            caption,
            userId
        });

        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the post" });
    }
}
