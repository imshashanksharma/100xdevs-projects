const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.use(express.static("public")); // this means that whatever is available in public folder should be acessible in the 
// backend server
app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
}) // this means that any route request / which is coming (can be anything)  except /admin /user then send the index.html
// file 

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect('mongodb+srv://kirattechnologies:iRbi4XRDdM7JMMkl@cluster0.e95bnsi.mongodb.net/admin?authSource=admin&replicaSet=atlas-ue73sj-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });

app.listen(3000, () => console.log('Server running on port 3000'));


// any route request comes out if its /admin or /user then send to adminRouter or userRouter else expose the public folder 
// but if the / request does not even exist in the public folder then send the index.html folder

