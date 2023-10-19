import React from "react";
import {Link} from 'react-router-dom';
import '../styles/styles.StudentDashbord.css';

function AdminStudentDashbord() {
    return (
        
        <div className="container-fluid">

        <div className="row justify-content-center" style={{paddingTop: 150}}>

          

          
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1-JsKPBy-rOJO0qfl5LKEGrJlPneWnu1Z" alt="profile" />
            </div>
              <Link to="/addstudent" className="nav-link" style={{color: 'black', fontSize: 25, fontWeight: 'bold', margin: 30}}>ADD PROFILE</Link>
          </div>
          
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1D9QqiNNhrMRZ6Wx0APDYElHdF7DOEsF3" alt="student material" />
            </div>
              <Link to="/studentlist" className="nav-link" style={{color: 'black', fontSize: 24, fontWeight: 'bold', margin: 4}}>SEARCH STUDENTS</Link>
          </div>

          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1bh9TOSoqJnQthPzGdtdoj_GtTugxgFHq" alt="timetables" style={{color: 'black', fontSize: 25, fontWeight: 'bold', margin: 30}} />
            </div>
              <h4 className="">GENERATE REPORTS</h4>
          </div>

        </div>
      </div>
    );
  }
  

export default AdminStudentDashbord;