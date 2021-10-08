import React from "react";
import "./App.css";
import Divider from "@material-ui/core/Divider";
import AppBar from "./components/AppBar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Work from "./components/Work/Work";
import Involvements from "./components/Involvements/Involvements";

const App = () => {
  return (
    <React.Fragment>
      <div className="hero_background">
        <Hero />
      </div>
      <div className="body_background">
        <AppBar />
        <div id="about" />
        <About />
        <Divider variant="middle" width="35%" />
        <div id="education" />
        <Education id="education" />
        <Divider variant="middle" width="35%" />
        <div id="work" />
        <Work />
        <Divider variant="middle" width="35%" />
        <div id="involvements" />
        <Involvements />
      </div>
    </React.Fragment>
  );
};

export default App;
