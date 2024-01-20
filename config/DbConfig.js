const mongoose=require('mongoose')
const ConnectDb=async()=>{
    await mongoose.connect(process.env.DbUrl).then(res=>{
        console.log("Connection esatblished");
    }).catch(err=>{
        console.log(err.message);
    })

}
module.exports=ConnectDb