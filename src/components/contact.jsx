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
        <li>
          <img src={require("../img/github.png")} alt="" />
        </li>
        <li>
          <img src={require("../img/linkedin.png")} alt="" />
        </li>
        <li>
          <img src={require("../img/gmail.png")} alt="" />
        </li>
      </ul>
    </div>
  );
}
