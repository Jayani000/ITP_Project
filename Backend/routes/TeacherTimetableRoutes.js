const router = require("express").Router();
let TeacherTimetable = require("../models/TeacherTimetable");

//http://localhost:8070/teachertimetable/add
router.route("/add").post((req,res)=>{
    
    const { teacher, date } = req.body;
    const  classes= [
        { classroom: null },
        { classroom: null },
        { classroom: null },
        { classroom: null },
        { classroom: null },
        { classroom: null },
        { classroom: null },
        { classroom: null },
        { classroom: null }
    ]
    
    const newTeacherTimetable = new TeacherTimetable({
        teacher,
        classes,
        date
    })

    newTeacherTimetable.save().then((result)=> {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "Error with creating teacher", error: err.message});
    })
})

router.route("/").get((req,res)=>{
    TeacherTimetable.find().populate({ path: 'Teacher', select: ['name', 'subject'] }).then((TeacherTimetable)=>{
        res.json(TeacherTimetable)
    }).catch((err)=>{
        console.log(err)
    })

})

//http://localhost:8070/teachertimetable/
router.route("/").put(async(req, res) => {
    const {TtimetableId, classroom} = req.body;
    
    await TeacherTimetable.findByIdAndUpdate({ _id: TtimetableId }, { name: classroom }).then((result) => {
        res.status(200).send({status: "Teacher Time table updated", data: result});
    }).catch((err) => {
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

http://localhost:8070/teachertimetable/delete/
router.route("/delete/:id").delete(async (req, res) => {
     let userId = req.params.id;

     await Teachertimetable.findByIdAndDelete(userId)
     .then(() => {
        res.status(200).send({status: "User deleted"});
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
     })
})

router.route("/:id").get(async (req, res) => {
    const id = req.params.id

    await TeacherTimetable.findById(id).populate({ path: 'teacher', select: ['name', 'subject'] })
    .then((TeacherTimetable) => {
        res.status(200).send(TeacherTimetable)
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "Error with getting timetable", error: err.message});
    })
})

module.exports = router;