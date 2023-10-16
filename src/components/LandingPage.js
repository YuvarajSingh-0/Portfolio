import * as React from "react";
import Projects from "./Projects";
import Section1 from "./Home";
import Section2 from "./MyPast";
import Section3 from "./AboutMeComponent";
import TechnologiesAndSkills from "./TechnologiesAndSkills";
import ContactForm from "./ContactForm";
import NavBar from "./NavBar";

export default function MyComponent() {
    const handleButtonClick = () => {
        // handle button click event here
    };
    return (
        <>
            <NavBar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Projects />
            <TechnologiesAndSkills/>
            <ContactForm/>
        </>
    );
}
