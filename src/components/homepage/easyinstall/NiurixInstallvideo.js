import React from "react";
import Niurixinstall from "../../../assets/homepage/Niurixinstall.mp4"
import Styles from "./easyinstall.module.css";


function NiurixInstallvideo() {
  return (
    
     
      <div className={Styles.niurix_install_video_wrapper}>
      <video className={Styles.building_video}autoPlay="autoplay" muted width="100%" height="100%" playsInline>
        <source src={Niurixinstall} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
   
  );
}

export default NiurixInstallvideo;
