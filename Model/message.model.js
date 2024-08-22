import sequelize  from "../Database/dbconfig.js";
import { DataTypes } from "sequelize";

const Message = sequelize.define('message',{
    senderId:{
        type:DataTypes.INTEGER,
        //associate with user table user id
       
    
    },
    receiver:{
        type:DataTypes.INTEGER,
        //associate with user table user id
       
    },
    message:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
sequelize.sync().then(result=>{
    console.log("message table created")
}).catch(err=>{
    console.log('something went wrong')
})
export default Message;