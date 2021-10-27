const express = require("express")
const app = express();
const {totalSum, endPoint2} = require("./util")

app.use(express.json());



app.get('/endpoint1', (req,res) =>{
   
    
    const arr = totalSum()

    res.status(200).send({count:arr.length, combinations:arr})


})

app.post("/endpoint2", (req,res) =>{
        const obj = req.body
        const arr = endPoint2(obj)
        res.status(200).send({count:arr.length, combinations: arr})
})

app.listen(5000, () =>{
    console.log("Server is runnin on port 5000")
})