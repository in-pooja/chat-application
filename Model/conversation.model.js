import sequelize from "../Database/dbconfig.js";
import { DataTypes } from "sequelize";

const Conversation = sequelize.define("conversation",{
    chatparticipants:{
        type:DataTypes.INTEGER
    },
    chatmessages:{
        type:DataTypes.INTEGER
    }
    

})

     //associate with usertable userid
  //associate with message table message id

sequelize.sync().then(result=>{
    console.log("conversation table created");
}).catch((err)=>{
    console.log("something went wrong",err);
})
export default Conversation;