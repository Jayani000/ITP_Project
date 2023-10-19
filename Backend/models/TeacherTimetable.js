const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherTimetableSchema = new Schema({
    date : {
        type : String,
        required: true
    },
    teacher : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Teacher',
        required: true
    },
    classes: [{
        classroom: { type: String, default: ''}
    }]
})

const TeacherTimetable = mongoose.model("TeacherTimetable",TeacherTimetableSchema);
module.exports = TeacherTimetable;