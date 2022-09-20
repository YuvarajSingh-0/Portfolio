export function WorksCard(props) {
  return (
    <a href={props.href} target="_blank" className={props.className}>
      <p style={{ "font-size": "2rem" }}>{props.title}</p>
      <br />
      <p>{props.desc}</p> <br />
    </a>
  );
}
