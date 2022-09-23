// import { AnimationOnScroll } from "react-animation-on-scroll";
import React from "react";
import AOS from "aos";
// import "../css/aboutPage.css";
import "aos/dist/aos.css";
export function About() {
  // React.useEffect(() => {
  //   var ele = document.getElementsByClassName("animate__animated")[0];
  //   ele.addEventListener("animationstart", (e) => {
  //     console.log("animationstart", e);
  //     var elem = document.getElementsByClassName("flex")[0];
  //     elem.style.animation = "flicker 1s step-start 5";
  //   });
  // }, []);
  React.useEffect(() => {
    AOS
      .init
      // {
      // duration: 2000,
      // once: true,
      // }
      ();
  }, []);
  return (
    <div className="aboutpage">
      <h1>About</h1>
      <div className="flex" data-aos="flicker">
        <div className="img">
          <img src={require("../img/assasin.png")} alt="person" />
        </div>
        <div className="aboutcontent">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet alias,
          error est incidunt voluptas ad mollitia officia expedita consectetur?
          Ut voluptatem sapiente ratione, officiis, assumenda eius aperiam
          deleniti harum vero eaque animi neque. <br /> <br /> Deleniti,
          accusantium. Officia sed voluptatibus architecto iusto natus hic
          doloremque provident placeat laudantium, voluptate pariatur illo
          aperiam vero adipisci beatae unde dolores enim, eos atque mollitia.
          Esse!
        </div>
      </div>
    </div>
  );
}
