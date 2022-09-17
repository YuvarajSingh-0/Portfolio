export function About() {
  return (
    <div className="aboutpage">
      <h1>About Me</h1>
      <div className="big-card">
        <div className="image">
          <img src={require("../img/businessman.png")} alt="person" />
        </div>
        <div className="about-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum
          vel iste. Quas doloribus officiis est quaerat voluptates officia
          asperiores placeat repudiandae. Earum fugit obcaecati accusantium
          rerum. Veritatis consectetur exercitationem praesentium doloribus
          ducimus quam.
        </div>
      </div>
    </div>
  );
}
