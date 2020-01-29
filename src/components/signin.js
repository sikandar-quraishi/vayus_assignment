import React, { Fragment } from "react";
import "./signin.css";
import { Link } from "react-router-dom";


const signin = () => {
  return (
    <Fragment>
     <section className="container-flud">
        <section id="signIn-form" className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-4">
            <form>
              <div
                className="signInFormInputs"
                style={{ textAlign: "center", marginLeft: "130px" }}
              >
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="current-password"
                    placeholder="Password"
                    autoComplete="on"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Forgot Password?
                  </small>
                </div>
                <div id="signIn-button" style={{ textAlign: "center" }}>
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                  <p className="paragraphS">
                    New to the site?{" "}
                    <strong className="clr">
                      <Link to="/signup">Sign up</Link>
                    </strong>
                  </p>
                </div>
              </div>
            </form>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default signin;
