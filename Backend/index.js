const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.listen(8000,async()=>{
try{
   
    console.log("Database connection established")
}catch(e){
    console.log(e.message)
}
console.log(`Server is live at port ${8080}`)
})
