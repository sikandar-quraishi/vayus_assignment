import React, { Fragment } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <Fragment>
      <div>
        <div className="alert alert-danger" role="alert">
        <Link id="otp-page" to="/otppage" style={{color:"#ffffff"}}>OTP PAGE</Link>
        </div>
      </div>
      <section className="container-flud">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <form>
              <div>
                <i className="fa fa-user-circle" aria-hidden="true"></i>
              </div>
              <div className="signupFormInputs">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="show_hide_pword"
                    placeholder="Password"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputFullName"
                    aria-describedby="emailHelp"
                    placeholder="FullName"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputCurrentLocation"
                    aria-describedby="emailHelp"
                    placeholder="Current Location"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Current Location.
                  </div>
                </div>

                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="show_hide_pword"
                    required
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree to all Terms & conditions
                  </label>

                  <div id="signUp-button" style={{ textAlign: "center" }}>
                   {" "}
                    <button type="submit" className="btn btn-primary">
                      Sign up
                    </button>
                    
                    <p className="paragraph">
                      New to the site?{" "}
                      <strong className="clr">
                        <Link to="/">Sign in</Link>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default signup;
