import * as React from "react";
import Projects from "./Projects";
import Home from "./Home";
import Past from "./MyPast";
import About from "./AboutMe";
import TechnologiesAndSkills from "./TechnologiesAndSkills";
import ContactForm from "./ContactForm";
import NavBar from "./NavBar";

export default function MyComponent() {
    return (
        <>
            <NavBar />
            <Home />
            <Past />
            <About />
            <Projects />
            <TechnologiesAndSkills />
            <ContactForm />
        </>
    );
}
