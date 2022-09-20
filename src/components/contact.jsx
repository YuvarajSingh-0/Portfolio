export function Contact() {
  return (
    <div className="contactpage">
      <h1>contact</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Ex: John" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="john@email.com" />
        <br />
        <button type="submit">Submit</button>
      </form>
      <ul className="media">
        <a href="https://github.com/YuvarajSingh-0">
          <li>
            <img src={require("../img/github.png")} alt="" />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/yuvarajsingh">
          <li>
            <img src={require("../img/linkedin.png")} alt="" />
          </li>
        </a>
        <a href="mailto:yuvarajsingh170@gmail.com">
          <li>
            <img src={require("../img/gmail.png")} alt="" />
          </li>
        </a>
      </ul>
    </div>
  );
}
