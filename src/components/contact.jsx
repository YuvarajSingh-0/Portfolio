export function Contact() {
  return (
    <div className="contactpage">
      <h1>contact</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="name" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="example@email.com" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
