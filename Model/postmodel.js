import sequelize from "../Database/dbconfig.js";
import { DataTypes } from "sequelize";
// import comments from "./commentmodel.js";
// import User from "./usermodel.js";
// import User from "./usermodel.js";

const posts = sequelize.define("posts",{
    caption:{
        type:DataTypes.STRING,
        allowNull:true

    },
    Image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    author:{
        type:DataTypes.STRING
        //associate with user table username or user id
        // references:{
        //     model:'User',
        //     key:'username'
        // }
    },
    totallikes:{
        type:DataTypes.INTEGER
        //associate with user table 
        //     references:{
        //         model:'User',
        //         key:'username'
            
        // }
    },
    comment:{
        type:DataTypes.STRING,
        //associate with comment table
        // references:{
        // model:'comment',
        // key:'commentid'
        // }
    }
})
//associate with user table username or user id
        // references:{
        //     model:'User',
        //     key:'username'
        // }

//   posts.hasOne(User,{as:'author',foreignKey:'userId'});
//   User.belongsTo(posts,{foreignKey:'userId'});
//   posts.belongsToMany(posts,{as:'likes',through:'postLikes',foreignKey:'id'})


//associate with comment table
        // references:{
        // model:'comment',
        // key:'commentid'
        // }
        // posts.belongsTo(User,{as:'userid',foreignKey:'author'});


//   posts.hasMany(comments,{as:'Comments',foreignKey:'commentid'});



 



       

sequelize.sync().then((result)=>{
    console.log("POST TABLE CREATED SUCCESFULLY")
}).catch((reject)=>{
    console.log("SOMETHING WENT WRONG",reject)
})

export default posts