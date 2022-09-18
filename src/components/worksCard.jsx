export function WorksCard(props) {
  return (
    // <a href="https://www.google.com">
    <div className={props.className}>
      <p style={{ "font-size": "2rem" }}>{props.title}</p>
      <br />
      <p>{props.desc}</p> <br />
    </div>
    // </a>
  );
}
