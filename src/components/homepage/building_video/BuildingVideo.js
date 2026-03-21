import React from "react";
// import building from "../../../assets/homepage/building.png"
import BuildingVideo1 from "../../../assets/homepage/Nurix Home Page Video.mp4"

import Styles from "./buildingvideo.module.css";


function BuildingVideo() {
  return (
    <div className={Styles.building_video_wrapper}>
      <h2 className={Styles.building_video_header}>Transforming Building <span className={Styles.building_video_text}>Network Architecture</span> with <span  className={Styles.building_video_text}>Fiber</span> </h2>
      <div className={Styles.building_video_center_alignment}>
      <video className={Styles.building_video}autoPlay="autoplay" loop muted width="100%" height="100%" playsInline>
        <source src={BuildingVideo1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img src={building}/> */}
      </div>
    </div>
  );
}

export default BuildingVideo;
