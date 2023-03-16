export function WorksCard(props) {
  return (
    <a
      data-aos={props.anime}
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={props.className}
      download
    >
      <p style={{ fontSize: "2rem" }}>{props.title}</p>
      <br />
      <p dangerouslySetInnerHTML={{ __html: props.desc }}></p> <br />
    </a>
  );
}
