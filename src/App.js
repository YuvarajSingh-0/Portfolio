import "./App.css";
import { LandingPage } from "./components/landingPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/about";
import { Works } from "./components/works";
import { Contact } from "./components/contact";
function App() {
  return (
    <>
      <LandingPage />
      <About />
      <Works />
      <Contact />
    </>
  );
}

export default App;
