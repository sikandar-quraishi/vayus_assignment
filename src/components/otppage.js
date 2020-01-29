import React, { Fragment } from "react";
import "./otppage.css";
import { Link } from "react-router-dom";

const otppage = () => {
  return (
    <Fragment>
      <section className="container-flud">
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-mid-3 ">
            <div id="otppage-form" style={{ textAlign: "center" }}>
              <p>Verify Your Email Address</p>
              <h6>Enter 5 digit OTP sent on squraishi8846@gmail.com</h6>
              <form id="otppage-form" style={{ textAlign: "center" }}>
                <div className="form-row">
                  <div className="col">
                    <input type="text" id="form-control"/>
                  </div>
                  <div className="col">
                    <input type="text" id="form-control"/>
                  </div>
                  <div className="col">
                    <input type="text" id="form-control"/>
                  </div>
                  <div className="col">
                    <input type="text" id="form-control"/>
                  </div>
                  <div className="col">
                    <input type="text" id="form-control" />
                  </div>
                </div>
                <div id="start-blogging-button" style={{ textAlign: "center" }}>
                  <Link to="/interestpage">
                    {" "}
                    <button
                      id="start-button"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Start Blogging
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default otppage;
