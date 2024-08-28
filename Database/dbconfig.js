import { Sequelize } from "sequelize";

const sequelize = new Sequelize("TestProject","root","root",{
    host:"localhost",
    dialect:"mysql"
})

sequelize.authenticate().then(result=>{
    console.log("database connected");
}).catch(err=>{
    console.log(err);
})
export default sequelize