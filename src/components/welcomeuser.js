import React, { Fragment } from "react";
import ImageFemale from "./avatarImg/imageFemale.PNG";
import "./welcomeuser.css";

const welcomeuser = () => {
  return (
    <Fragment>
      <section className="container">
        <section className="row justify-content-center">
          <section className="col-12">
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <div className="wellocomeuser">
                <h4>Welcome Sikandar Quraihsi!</h4>
              </div>
              <div className="userimage">
                {" "}
                <img src={ImageFemale} alt="ImageFemale" />{" "}
              </div>
              <div className="locationinterests">
                <p className="paragraph-grey">
                  Your location is "Noida" Your interests are:"Web Development"
                </p>
              </div>
              <div id="twbtn" className="twobutton">
                <button type="button" className="btn btn-outline-primary">
                  Interest 1
                </button>
                <button type="button" className="btn btn-outline-primary">
                  Interest 2
                </button>
              </div>
              <div id="onbtn" className="Startblogging">
                <button
                  type="submit"
                  id="Next-button"
                  className="btn-start btn-primary"
                >
                  Start Blogging
                </button>
              </div>
            </div>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

export default welcomeuser;
