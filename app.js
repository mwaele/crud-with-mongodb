const express = require("express")
const app = express()
const blogRouter = require("./routes/BlogRoutes.");

const mongoose = require("mongoose");

app.use("/api/blogs", blogRouter);

// Connect to MongoDB database using Mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
)

//middleware
app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

module.exports = app;