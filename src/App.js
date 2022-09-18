import "./App.css";
import "./css/worksPage.css";
import "./css/landingPage.css";
import "./css/aboutPage.css";
import "./css/contactPage.css";
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
