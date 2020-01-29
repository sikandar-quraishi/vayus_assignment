import React from "react";
import { Fragment } from "react";
import "./interestpage.css";
import { Link } from "react-router-dom";

const interestpage = () => {
  return (
    <Fragment>
      <section className="container">
        <section className="row justify-content-center">
          <section className="col-12">
            <div>
              <div>
                <p> Hi Sikandar Quraishi! Select your interest</p>
              </div>
              <div className="color-change">
                <button type="button" className="btn btn-outline-primary">
                  Interest 1
                </button>

                <button
                  id="button-primar"
                  type="button"
                  className="btn btn-primary"
                >
                  Interest 2
                </button>
                <button
                  id="button-primar"
                  type="button"
                  className="btn btn-primary"
                >
                  Interest 3
                </button>
                <button type="button" className="btn btn-outline-primary">
                  Interest 4
                </button>
              </div>

              <div id="" style={{ textAlign: "center" }}>
                <Link to="/welcomeuser">
                  <button
                    type="submit"
                    id="Next-button"
                    className="btn btn-primary"
                  >
                    Next
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default interestpage;
