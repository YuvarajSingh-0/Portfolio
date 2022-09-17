import { WorksCard } from "./worksCard";

export function Works() {
  return (
    <div className="workspage">
      <h1>My Works</h1>
      <div className="g-list">
        <WorksCard className="item workscard" />
        <WorksCard className="item workscard" />
        <WorksCard className="item workscard" />
        <WorksCard className="item workscard" />
        <WorksCard className="item workscard" />
        <WorksCard className="item workscard" />
      </div>
    </div>
  );
}
