import "./ourCreations.css";
import deepEarth from "../../../assets/images/desktop/image-deep-earth.jpg";
import nightArcade from "../../../assets/images/desktop/image-night-arcade.jpg";
import soccerTeam from "../../../assets/images/desktop/image-soccer-team.jpg";
import grid from "../../../assets/images/desktop/image-grid.jpg";
import fromAbove from "../../../assets/images/desktop/image-from-above.jpg";
import pocketBorealis from "../../../assets/images/desktop/image-pocket-borealis.jpg";
import curiosity from "../../../assets/images/desktop/image-curiosity.jpg";
import fisheye from "../../../assets/images/desktop/image-fisheye.jpg";
import deepEarthMb from "../../../assets/images/mobile/image-deep-earth.jpg";
import nightArcadeMb from "../../../assets/images/mobile/image-night-arcade.jpg";
import soccerTeamMb from "../../../assets/images/mobile/image-soccer-team.jpg";
import gridMb from "../../../assets/images/mobile/image-grid.jpg";
import fromAboveMb from "../../../assets/images/mobile/image-from-above.jpg";
import pocketBorealisMb from "../../../assets/images/mobile/image-pocket-borealis.jpg";
import curiosityMb from "../../../assets/images/mobile/image-curiosity.jpg";
import fisheyeMb from "../../../assets/images/mobile/image-fisheye.jpg";

const OurCreations = () => {
  return (
    <section className="ourCreations-container">
      <div className="ourCreations-container-heading">
        <h1>Our Creations</h1>
        <button className="ourCreations-btn">See All</button>
      </div>

      <div className="grid">
        <div className="grid-item">
          <picture>
            <source srcSet={deepEarthMb} media="(max-width:768px" />
            <img className="grid-img" src={deepEarth} alt="" />
          </picture>
          <span className="grid-img-name">
            Deep
            <br />
            Earth
          </span>
        </div>
        <div className="grid-item">
          <picture>
            <source srcSet={nightArcadeMb} media="(max-width:768px" />
            <img className="grid-img" src={nightArcade} alt="" />
          </picture>
          <span className="grid-img-name">
            Night
            <br />
            Arcade
          </span>
        </div>
        <div className="grid-item">
          <picture>
            <source srcSet={soccerTeamMb} media="(max-width:768px" />
            <img className="grid-img" src={soccerTeam} alt="" />
          </picture>
          <span className="grid-img-name">
            Soccer
            <br />
            Team VR
          </span>
        </div>
        <div className="grid-item">
          <picture>
            <source srcSet={gridMb} media="(max-width:768px" />
            <img className="grid-img" src={grid} alt="" />
          </picture>
          <span className="grid-img-name">
            The
            <br />
            Grid
          </span>
        </div>
        <div className="grid-item">
          <picture>
            <source srcSet={fromAboveMb} media="(max-width:768px" />
            <img className="grid-img" src={fromAbove} alt="" />
          </picture>
          <span className="grid-img-name">
            From up
            <br />
            Above VR
          </span>
        </div>
        <div className="grid-item">
          <picture>
            <source srcSet={pocketBorealisMb} media="(max-width:768px" />
            <img className="grid-img" src={pocketBorealis} alt="" />
          </picture>
          <span className="grid-img-name">
            Pocket
            <br />
            Borealis
          </span>
        </div>
        <div className="grid-item">
          <picture>
            <source srcSet={curiosityMb} media="(max-width:768px" />
            <img className="grid-img" src={curiosity} alt="" />
          </picture>
          <span className="grid-img-name">
            The
            <br />
            Curiosity
          </span>
        </div>
        <div className="grid-item">
          <picture>
            <source srcSet={fisheyeMb} media="(max-width:768px" />
            <img className="grid-img" src={fisheye} alt="" />
          </picture>
          <span className="grid-img-name">
            Make it
            <br />
            Fisheye
          </span>
        </div>
      </div>
      <button className="ourCreations-btn mb-button">See All</button>
    </section>
  );
};

export default OurCreations;
