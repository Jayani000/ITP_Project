import React from "react";
import '../styles/styles.StudentDashbord.css';
import {Link} from 'react-router-dom';

function AdminTransportDashbord() {
    return (
        
        <div className="container-fluid">

        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="profile" />
            </div>
            <Link to="/AllDriverTrns" className="btn btn-primary">ADD DRIVER</Link>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
            <img src="https://drive.google.com/uc?id=1jPqkAEZH5rADNZ2Feri2tTBIVMjxnd4A" alt="profile" />
            </div>
            <Link to="/AllStudentTrns" className="btn btn-primary">ADD STUDENT</Link>
          </div>
          <div className="col-md-3">
            <div className="ellipse">
              <img src="https://e7.pngegg.com/pngimages/208/784/png-clipart-car-drawing-car-outline-compact-car-car-thumbnail.png" alt="vehicle" />
            </div>
            <Link to="/Vehicle" className="btn btn-primary">ADD VEHICLE</Link>
          </div>
        </div>

      </div>
    );
  }
  

export default AdminTransportDashbord;