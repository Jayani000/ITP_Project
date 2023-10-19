const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection success!");
})


const teacherRouter = require("./routes/teachers.js");
const leaveRouter = require("./routes/leaves.js")
const leavePdfRoute = require("./routes/leavereport.js");
const TeacherRoutes = require("./routes/TeacherRoutes.js");
const subjectRouter = require("./routes/subjects.js");
const ClassRoutes = require("./routes/ClassRoutes.js");
const ClassTimetableRoutes = require("./routes/ClassTimetableRoutes.js");
const TeacherTimetableRoutes = require("./routes/TeacherTimetableRoutes.js");
const ExamTimetableRoutes = require("./routes/ExamTimetableRoutes.js");
const studentRouter = require("./routes/students.js");
const studentPdfRoute=require("./routes/studentreport.js");
const allStudentPdfRoute=require("./routes/allstudentreport.js");
const clznoticePdfRoute=require("./routes/clznoticereportRoutes.js");
const noticeRoutes = require('./routes/classnotices.js')

app.use(express.json());

//teacher
app.use("/teacher", teacherRouter);
app.use("/leave",leaveRouter);
app.use("/leavereport", leavePdfRoute);
app.use("/teacherJ",TeacherRoutes);
app.use("/subject",subjectRouter);
app.use("/classroom",ClassRoutes);
app.use("/classTimetable",ClassTimetableRoutes);
app.use("/teacherTimetable",TeacherTimetableRoutes);
app.use("/examTimetable",ExamTimetableRoutes);
app.use("/leave",leaveRouter);
app.use("/leavereport",leavePdfRoute);

//student
app.use("/student",studentRouter);
app.use("/allstudentreport",allStudentPdfRoute);
app.use("/studentreport", studentPdfRoute)


//classnotice
app.use('/api/notices', noticeRoutes)
app.use("/clznoticereport",clznoticePdfRoute);


const transportDriverRouter = require("./routes/transportDrivers.js");

app.use(express.json());
app.use("/transportDriver",transportDriverRouter);

const transportStudentRouter = require("./routes/transportStudents.js");

app.use(express.json());
app.use("/transportStudent",transportStudentRouter);

const transportVehicleRouter = require("./routes/transportVehicles.js");

app.use(express.json());
app.use("/transportVehicle",transportVehicleRouter);


const TrnsStudentLeaveRouter = require("./routes/TrnsStudentLeave.js");

app.use(express.json());
app.use("/TrnsStudentLeave",TrnsStudentLeaveRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})
