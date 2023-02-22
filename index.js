const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("What is Express ? <br> Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes")
    res.end();
})

app.get("/api", (req, res) => {
    res.send("<h3>This is api page</h3> <br>What is Express ? <br> Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes")
    res.end();
})

// app.post("/submit",(req,res)=>{
//     res.send("GET wORKED")
//     res.end();
// })
app.listen(3000, () => {
    console.log("Application is Running")
});




