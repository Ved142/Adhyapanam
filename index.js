const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv');
const md5 = require("js-md5");
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));

dotenv.config({path: './config.env'});

//connecting to database and making schema and model
const DB = process.env.DATABASE;
mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

var userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  specs: { type: String,required: false},
  tokens: [{ token: { type: String, required: true } }],
});

userSchema.methods.generateAuthToken = async function () {
  let token;
    try {
    token = jwt.sign(
      { _id: this._id },
      process.env.SECRET
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

var classSchema = new mongoose.Schema({
  name: { type: String, required: true },
  standard: { type: String, required: true },
  subject: { type: String, required: true },
  topic: { type: String, required: true },
  format: { type: String, required: true},
  date: { type: String, required: true },
  time: { type: String, required: true },
  link: { type: String, required: true },
});

var Classes = mongoose.model("Classes", classSchema);
var Student = mongoose.model("Student", userSchema);
var Mentor = mongoose.model("Mentor", userSchema);


const Authenticate= async (req,res,next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRET);
 
        const rootUser = await Mentor.findOne({_id : verifyToken._id,"tokens.token" : token})
        if(!rootUser) {throw new Error("User not found")}
 
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id; 
        next(); 
    }catch(err) {
      res.status(401).send('Unauthorized: No Token provided');
      console.log(err);
    }
 }

 const AuthenticateStudent = async (req, res,next) => {
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token,process.env.SECRET);

    const rootUser = await Student.findOne({_id : verifyToken._id,"tokens.token" : token})
    if(!rootUser) {throw new Error("User not found")}

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id; 
    next(); 
}catch(err) {
  res.status(401).send('Unauthorized: No Token provided');
  console.log(err);
}

 }

// post routes
app.post("/student/register", (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
  };

  var myData = new Student(user);
  myData
    .save()
    .then(() => {
      res.send("This item has been saved to your database");
    })
    .catch(() => {
      res.status(400).send("Item was not saved to your database");
    });
});

app.post("/mentor/register", (req, res) => {
  const user = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    specs: req.body.specs
  };

  var myData = new Mentor(user);
  myData
    .save()
    .then(() => {
      res.send("This item has been saved to your database");
    })
    .catch(() => {
      res.status(400).send("Item was not saved to your database");
    });
});

app.post("/mentor/schedule", (req, res) => {
  const meet = {
    name: req.body.name,
    standard: req.body.standard,
    subject: req.body.subject,
    topic: req.body.topic,
    format: req.body.format,
    date: req.body.date,
    time: req.body.time,
    link: req.body.link,
  };

  var myData = new Classes(meet);
  myData
    .save()
    .then(() => {
      res.send("This item has been saved to your database");
    })
    .catch(() => {
      res.status(400).send("Item was not saved to your database");
    });
});

app.post("/student/login", async (req, res) => {
  const loginUser = {
    email: req.body.email,
    password: md5(req.body.password),
  };

  const founduser = await Student.findOne({ email: loginUser.email });

  if (founduser) {
    if (founduser.password === loginUser.password) {
      const token = await founduser.generateAuthToken();
      res.cookie("jwtoken",token,{ expires: new Date(Date.now() + 25892000000 ),
        httpOnly: true });
      res.send("bhai ab pakka chlega");
    } else {
      res.sendFile(__dirname + "/login.html");
      console.log("wrong password entered");
    }
  }
});

app.post("/mentor/login", async (req, res) => {
  const loginUser = {
    email: req.body.email,
    password: md5(req.body.password),
  };
  const founduser = await Mentor.findOne({ email: loginUser.email });

  if (founduser) {
    if (founduser.password == loginUser.password) {
        const token = await founduser.generateAuthToken();
        res.cookie("jwtoken",token,{ expires: new Date(Date.now() + 25892000000 ),
        httpOnly: true });
      res.send("bhai ab pakka chlega");
    } else {
      res.sendFile(__dirname + "/login.html");
      console.log("wrong password entered");
    }
  }
});

// To Filter by classes in student dashboard
app.post("/classes/display/filtered", async (req, res) => {
  const standard = req.body.standard;
  const subject = req.body.subject;
  var data;
  if(standard === "all" && subject === "all"){
     data = await Classes.find();
  }else if(standard === "all"){
    data = await Classes.find({subject: subject});
  }else if(subject === "all"){
    data = await Classes.find({standard: standard});
  }
  else{
    data = await Classes.find({standard: standard,subject: subject});
  }
  res.send(data);
});



app.get("/student/dash",AuthenticateStudent, async (req, res) => {
  res.send(req.rootUser);
  });

  app.get("/mentor/dash",Authenticate, async (req, res) => {
    res.send(req.rootUser);
  });

  app.post("/mentor/myclasses",async (req, res)=>{
    const myname = req.body.name;
    const format = req.body.format;
    var data={};
    if(format === "All")
    { 
      data = await Classes.find({ name: myname});
    }else{
      data = await Classes.find({ name: myname,format: format});
    }
    res.send(data);
  })

  if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })


}

app.listen(port, (req, res) => {
  console.log(`Server started on  Port http://localhost:${port}`);
});
