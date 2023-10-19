import React, { useState } from 'react';
import './GenerateTimetable.css';
import NewClassTimetable from './NewClassTimetable';
import NewExamTimetable from './NewExamTimetable';
import NewTeacherTimetable from './NewTeacherTimetable';

function GenerateTimeTable() {
    const [tabValue, setTab] = useState(1);

    let content;

    switch (tabValue) {
        case 1:
            content = <NewClassTimetable />;
            break;
        case 2:
            content = <NewExamTimetable />;
            break;
        case 3:
            content = <NewTeacherTimetable />;
            break;
        default:
            content = null;
            break;
    }

    return (
        <div>
            <center>
                <button type="button" className="btn btn-light" onClick={() => setTab(1)}>Generate Class Timetable</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-light" onClick={() => setTab(2)}>Generate Exam Timetable</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-light" onClick={() => setTab(3)}>Generate Teacher Timetable</button>
            </center>

            {content}
        </div>
    );
}

export default GenerateTimeTable;

