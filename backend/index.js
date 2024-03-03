const express = require("express");
const connectToMongo =require("./db")

connectToMongo();
const app=express();
const cors=require("cors");

app.use(express.json());
const PORT=7000;
app.use(cors())

app.use("/api/foodiejungle",require("./routes/user_routes"));


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})