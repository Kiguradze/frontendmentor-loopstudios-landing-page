import "./main.css";
import OurCreations from "./ourCreations/OurCreations";
import Interactive from "./sectionInteractive/Interactive";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <Interactive />
        <OurCreations />
      </div>
    </main>
  );
};

export default Main;
