const express=require("express");
const app=express();
const POST=3000;

app.get("/",(req,res)=>{
    res.send("hello");
});
app.listen(POST,()=>{
    console.log(`app run in port: ${POST}`);
})