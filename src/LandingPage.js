import * as React from "react";
import Projects from "./sections/Projects";
import Home from "./sections/Home";
import Past from "./sections/MyPast";
import About from "./sections/AboutMe";
import TechnologiesAndSkills from "./sections/TechnologiesAndSkills";
import ContactForm from "./sections/ContactForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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
            <Footer />
        </>
    );
}
