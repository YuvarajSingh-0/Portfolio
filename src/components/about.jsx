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
          I'm Yuvaraj, a passionate, enthusiastic, determined programmer as well
          as upcoming developer I've done some begginer level projects or you
          can say 'Tasks' that helped me getting a better understanding upon the
          topics which are used in building those. Ran into multiple weird
          errors but google was always there to help 😅 Googled a lot, found
          some ways that solved the errors and some ways become roots to some
          ideas. <br />
          <br></br>Thats all I have to say regarding the programming aspect of
          myself. Apart from Learning, I watch a lot of movies and webseries out
          of my little time that I have left from learning stuff.
        </div>
      </div>
    </div>
  );
}
