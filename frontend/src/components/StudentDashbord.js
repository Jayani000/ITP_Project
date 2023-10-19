import React from "react";
import {Link} from 'react-router-dom';
import '../styles/styles.StudentDashbord.css';

function StudentDashbord() {
    return (
        
        <div className="container-fluid">

        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="profile" />
            </div>
            <Link to="/profile/student/:id" className="nav-link" style={{color: 'black', fontSize: 24, fontWeight: 'bold', margin: 4}}>Profile</Link>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=16yv_Rqi4l8hiRyvZ2uUKqynBOg0ArhZ7" alt="student material" />
            </div>
              <h4 className="">Student Material</h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1ykq57_eHkme6FNLowI8RylcY2tOS9kU8" alt="timetables" />
            </div>
              <h4 className="">Timetables</h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1TtfbXofZTlILpzLhYObIRRBzoME4wD2S" alt="labs" />
            </div>
              <h4 className="">Labs</h4>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1CZjo0rCJCxxrNvYvlDzFH7H0gY5x6uUj" alt="exams" />
            </div>
              <h4 className="">Exams</h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1gNnD27SuBTbSNzKgfq5QjisSII0qXZcT" alt="clubs" />
            </div>
              <h4 className="">Clubs</h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="notices" />
            </div>
              <h4 className="">Notices</h4>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1lzWkBmLjS6uiC6ARUCWg5U6LSgYimJTl" alt="transportation" />
            </div>
              <h4 className="">Transportation</h4>
          </div>
        </div>

      </div>
    );
  }
  

export default StudentDashbord;