// Can also be included with a regular script tag

import React from "react";

export function LandingPage() {
  var [txt, setTxt] = React.useState("Yuvaraj Singh");

  React.useEffect(() => {
    var oi = 0;
    var l = ["A Web Developer", "Problem Solver", "Yuvaraj Singh"];
    const interval = setInterval(() => {
      setTxt(l[oi]);
      oi = oi + 1;
      if (oi === l.length) {
        oi = 0;
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landingpage">
      <div className="g-left">
        <div className="typed-out">
          <h2>I am </h2>
          <h1>{txt}</h1>
        </div>
        <div>
          <span>
            <button>button</button>
          </span>
          <span>
            <button className="readmore-btn">read more</button>
          </span>
        </div>
      </div>
      <div className="g-right">
        <img src={require("../img/working.png")} alt="lol" />
      </div>
    </div>
  );
}
