export function About() {
  return (
    <div className="aboutpage">
      <h1>About</h1>
      <div className="flex">
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
