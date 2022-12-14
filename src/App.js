import "./App.css";
import "./css/worksPage.scss";
import "./css/landingPage.scss";
import "./css/aboutPage.scss";
import "./css/contactPage.scss";
import { LandingPage } from "./components/landingPage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./components/about";
import { WorksPage } from "./components/worksPage";
import { Contact } from "./components/contact";
function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <WorksPage />
      <Contact />
    </div>
  );
}

export default App;
