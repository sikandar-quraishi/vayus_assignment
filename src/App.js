import React from "react";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Otppage from "./components/otppage";
import Interestpage from "./components/interestpage";
import Welcomeuser from "./components/welcomeuser";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/otppage" component={Otppage} />
        <Route path="/interestpage" component={Interestpage} />
        <Route path="/welcomeuser" component={Welcomeuser} />
      </div>
    </Router>
  );
};

export default App;
