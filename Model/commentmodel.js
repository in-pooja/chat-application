import sequelize from "../Database/dbconfig.js";
import { DataTypes } from "sequelize";
import User from "./usermodel.js";

// const comments =sequelize.define("comments",{
//     text:{
//         type:DataTypes.STRING
//     },
//     authorComment:{
//         type:DataTypes.STRING,
//         //associate with user 
//         references:{
//             model:'userdata',
//             key:'username'
//         }
//     },
//     postcomment:{
//         type:DataTypes.STRING
//         //associate with post table 
//         // references:{
//         //     model:'post',
//         //     key:'author'
//         // }
//     }
// })
// comments.belongsTo(User,{as:'author',foreignKey:'username'});
const comments = sequelize.define("comments", {
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    authorComment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postcomment: {
        type: DataTypes.STRING,
       
    }
});

// Define associations
User.hasMany(comments, {
    foreignKey: 'userId',
  });
comments.belongsTo(User,{foreignkey:'userid'})



sequelize.sync().then(result=>{
    console.log('comment model  created')
}).catch((err)=>{
    console.log(err)
})
export default comments