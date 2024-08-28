import sequelize from "../Database/dbconfig.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";


const User = sequelize.define("userData", {
  username:{
    type:DataTypes.STRING,
    allowNull:false,

  },
  email:{
    type:DataTypes.STRING,
    unique:true,
    allowNull:false
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
    set(value){
      let saltKey = bcrypt.genSaltSync(12);
      let encryptedPassword =bcrypt.hashSync(value,saltKey);
      this.setDataValue("password",encryptedPassword);
    }
  },
  bio:{
    type:DataTypes.STRING,
    allowNull:false
  },
  gender:{
    type:DataTypes.ENUM('Male','female'),
    allowNull:false
  }

});



sequelize
  .sync()
  .then((result) => {
    console.log("USER TABLE CREATED SUCCESFULLY");
  })
  .catch((reject) => {
    console.log("SOMETHING WENT WRONG",reject);
  });

User.checkPassword = (password, encryptedPassword) => {
  let status = bcrypt.compareSync(password, encryptedPassword);
  console.log(password, encryptedPassword);
  console.log(status);
  return status;
};
export default User;
