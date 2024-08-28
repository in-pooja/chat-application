
// // import sequelize from "../Database/dbconfig.js";
// // import { DataTypes } from "sequelize";
// // import User from "./UserModel.js"; 

// // const userPost = sequelize.define("userPost", {
// //     id: {
// //         type: DataTypes.INTEGER,
// //         primaryKey: true,
// //         autoIncrement: true
// //     },
// //     imageUrl: {
// //         type: DataTypes.STRING,
// //         allowNull: false
// //     },
// //     caption: {
// //         type: DataTypes.STRING,
// //         allowNull: true
// //     },
// //     likes: {
// //         type: DataTypes.INTEGER,
// //         defaultValue: 0
// //     },
// //     authorName: {
// //         type: DataTypes.STRING,
// //         allowNull: false
// //     },
// //     userId: {
// //         type: DataTypes.INTEGER,
// //         allowNull: false,
// //         references: {
// //             model: User, 
// //             key: "id"
// //         },
// //         onDelete: "CASCADE" 
// //     }
// // });


// // User.hasMany(userPost, { foreignKey: "userId" });
// // Post.belongsTo(User, { foreignKey: "userId" });


// // sequelize
// //     .sync()
// //     .then(() => {
// //
// // console.log("POST TABLE CREATED SUCCESSFULLY");
// //     })
// //     .catch((error) => {
// //         console.log("SOMETHING WENT WRONG", error);
// //     });

// // export default userPost;



// import sequelize from "../Database/dbconfig.js";
// import { DataTypes } from "sequelize";
// import User from "./usermodel.js";

// const Post = sequelize.createSchema("userposts", {
//     postid: {
//         type: DataTypes.INTEGER,
//         allownull: false,
//         reference: {
//             model: "userData",
//             key: "userid"
//         }
//     },
//     postImage: {
//         type: DataTypes.STRING,
//         allownull: false
//     },
//     caption: {
//         type: DataTypes.string,
//         allownull:true
//     }
// })

// // Define associations


// sequelize
//     .sync()
//     .then(() => {
//         console.log("UserPost TABLE CREATED SUCCESSFULLY");
//     })
//     .catch((error) => {
//         console.log("SOMETHING WENT WRONG", error);
//     });

// export default Post;
// import sequelize from "../Database/dbconfig.js";
// import { DataTypes } from "sequelize";
// import User from "./usermodel.js"; // Import the User model

// const Post = sequelize.define("UserPost", { // Define the model with proper naming
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     postImage: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     caption: {
//         type: DataTypes.STRING,
//         allowNull: true
//     },
//     userId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//             model: User, // Reference the User model
//             key: 'id'
//         },
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE'
//     }
// }, {
//     timestamps: true // Automatically add `createdAt` and `updatedAt`
// });

// // Define associations
// User.hasMany(Post, { foreignKey: "userId" });
// Post.belongsTo(User, { foreignKey: "userId" });

// sequelize
//     .sync()
//     .then(() => {
//         console.log("UserPost TABLE CREATED SUCCESSFULLY");
//     })
//     .catch((error) => {
//         console.log("SOMETHING WENT WRONG", error);
//     });

// export default Post;
import sequelize from "../Database/dbconfig.js";
import { DataTypes } from "sequelize";
import User from "./usermodel.js"; // Import the User model

const Post = sequelize.define("UserPost", { // Define the model
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    postImage: {
        type: DataTypes.STRING,
        allowNull: false // Ensure this field cannot be null
    },
    caption: {
        type: DataTypes.STRING,
        allowNull: true // Caption can be null
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false, // Ensure this field cannot be null
        references: {
            model: User, // Reference the User model
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    }
}, {
    timestamps: true // Automatically add `createdAt` and `updatedAt`
});

// Define associations
User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });

sequelize
    .sync()
    .then(() => {
        console.log("UserPost TABLE CREATED SUCCESSFULLY");
    })
    .catch((error) => {
        console.log("SOMETHING WENT WRONG", error);
    });

export default Post;
