export function WorksCard(props) {
  return (
    <a
      data-aos={props.anime}
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={props.className}
    >
      <p style={{ fontSize: "2rem" }}>{props.title}</p>
      <br />
      <p>{props.desc}</p> <br />
    </a>
  );
}
