
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");
const productroutes = require("./routes/productroutes");

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/api/products", productroutes);
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected sucessfully"))
.catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Nutrihub Backend is Running");

});


app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});
