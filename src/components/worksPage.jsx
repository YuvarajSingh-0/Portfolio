import { WorksCard } from "./worksCard";
export function WorksPage() {
  return (
    <div className="workspage">
      <a
        href="https://yuvarajsingh-0.github.io/"
        rel="noreferrer"
        target="_blank"
      >
        <h1>My Works</h1>
      </a>
      <div className="g-list">
        <WorksCard
          anime="green_flicker"
          href="https://yuvarajsingh-0.github.io/clock.html"
          className="item workscard"
          title="Digital Clock"
          desc="Live Digital Clock with 12 Hour Format implemented in Vanilla JS"
        />

        <WorksCard
          anime="green_flicker"
          href="https://yuvarajsingh-0.github.io/stopwatch.html"
          className="item workscard"
          title="StopWatch"
          desc="A Simple Stopwatch with Start, Stop, Reset Buttons implemented in Vanilla JS"
        />

        <WorksCard
          anime="green_flicker"
          href="https://todoo-web-app.herokuapp.com/"
          className="item workscard"
          title="ToDo List Web App"
          desc=" A Simple Todo List with Authentication, MongoDB implemented in
          ExpressJS and MongooseJS for MongoDB integration and CRUD operations
          on MongoDB"
        />

        <WorksCard
          anime="green_flicker"
          href="https://yuvarajsingh-0.github.io/simplest-qrcode-gen/"
          className="item workscard"
          title="Simplest QR Code Gen"
          desc=" The Simplest QR Code Generator you will find implemented with React JS and a public QR code API"
        />

        <WorksCard
          anime="green_flicker"
          href="https://discord.gg/FpaMaS8ppf"
          className="item workscard"
          title="Discord Bot"
          desc="A simple and general Discord bot constantly improving and adding
          features in my free time which is implemented in discord.py
          Collaborators are anytime welcomed with any suggestions.
          Join the Discord To Interact and know more."
        />
        {/* <WorksCard className="item workscard" /> */}
      </div>
    </div>
  );
}
