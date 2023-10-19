import React from 'react';

function Navbar() {

    return(
        <nav class="navbar sticky-top navbar-dark bg-dark">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="https://drive.google.com/uc?id=16dsAg1kliNFBtx78DTZTJUbgmA9bB4ep" width="60" height="60" class="d-inline-block align-top" alt=""/>
                <h4 class="m-0 ml-2">Boomiriya Central College</h4>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled">Disabled</a>
                    
                    
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
///TrnsStudentLeave
//<a class="nav-link" href="/addTrnsStudent">Add Student</a>
                   // <a class="nav-link" href="/addDriver">Add Driver</a>
                    //<a class="nav-link" href="/Vehicle">Vehicle Information</a>
                    //<a class="nav-link" href="/TrnsStudentLeave">Student Leave Form</a>