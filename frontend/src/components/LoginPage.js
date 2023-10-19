import React from 'react';
import '../styles/styles.loginPage.css';
import WebFont from 'webfontloader';

function LoginPage() {
    return(
        <div className="container-fluid vh-100">
        <div className="row vh-100 p-4 d-flex align-items-center justify-content-center">
        
            <div className="col-md-6 py-4">
                <img src="https://drive.google.com/uc?id=16dsAg1kliNFBtx78DTZTJUbgmA9bB4ep" className="img-fluid" alt="Image"/>
                <h2 className="text-white mt-4">Boomiriya Central College</h2>
            </div>

            <div className="col" style={{backgroundColor: 'blue'}}>
                <form className="form-container mx-5">

                    <h3>Login</h3>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                        <div className="form-group">
                            <a href="#" className="btnForgetPwd">Forget Password?</a>
                    </div>

                </form>
            </div>

        </div>
    </div>

    )    
}

export default LoginPage;