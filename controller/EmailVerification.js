import nodemailer from "nodemailer";


const transporter  = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'vikas.shriwastav93@gmail.com ',
        pass: 'qjua ruuo swjf asva'
    }
});

export const sendOtp =(email,otp)=>{
    const mailoptions={
        from:"vikas.shriwastav93@gmail.com",
        to:email,
        subject:"OTP verification from Anonsphere application registration",
        text:`Your OTP is ${otp}`
    }



transporter.sendMail(mailoptions,(err,info)=>{
    if(err){
        console.log('error sending email:',err);
    }else{
        console.log('email sent succesfully',info.response)
    }
})
}