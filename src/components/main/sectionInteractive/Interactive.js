import "./interactive.css";
import imageInteractive from "../../../assets/images/desktop/image-interactive.jpg";

const Interactive = () => {
  return (
    <section className="interactive-container">
      <img className="interactive-img" src={imageInteractive} alt="" />
      <div className="interactive-desc">
        <h1>the leader in interactive vr</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default Interactive;
