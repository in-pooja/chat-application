import sequelize from "../Database/dbconfig.js";
import { DataTypes } from "sequelize";
import User from "./usermodel.js";

const profilePicture = sequelize.define("profileImg",{
    profileid:{
        type:DataTypes.INTEGER,
        references:{
            model:'userdata',
            key:'id'
        }
    },
    profileURL:{
        type:DataTypes.STRING,
        allowNull:true
    }

})

sequelize.sync().then((result)=>{
          console.log("profile table created")
}).catch((err)=>{
    console.log("something went wrong",err)
})
export default profilePicture;