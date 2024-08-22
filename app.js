import express from "express";
import bodyparser from "body-parser";
import cookieparser from "cookie-parser"
import cors from "cors"
import route from "./router/userroute.js";



const app =express();

const PORT = '3100';


app.use(bodyparser.json());
app.use(cookieparser())
app.use(bodyparser.urlencoded({extend:true}));
// app.use(cors());

app.use(cors())


app.use("/user",route)


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
