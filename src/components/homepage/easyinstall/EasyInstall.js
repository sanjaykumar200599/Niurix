import React, { useState } from "react";

import { homePage as data } from "../../../data/homepage/homepage";
import Styles from "./easyinstall.module.css";

function EasyInstall() {
  const [selectedStep, setStep] = useState(1);

  return (
    <div className={Styles.easy_to_install_content_main_wrapper}>
      <div className={Styles.easy_install_header}>
        <button
          className={
            selectedStep === 1 ? Styles.orangeButton : Styles.whiteButton
          }
          onClick={() => setStep(1)}
        >
          1
        </button>
        <div className={Styles.easy_install_header_wrapper}>
          <div
            className={selectedStep === 2 ? Styles.orangeDot : Styles.whiteDot}
          >
            <div
              className={
                selectedStep === 2
                  ? Styles.easy_install_dot_1
                  : Styles.easy_install_dot
              }
            ></div>
            <div
              className={
                selectedStep === 2
                  ? Styles.easy_install_dot_1
                  : Styles.easy_install_dot
              }
            ></div>
            <div
              className={
                selectedStep === 2
                  ? Styles.easy_install_dot_1
                  : Styles.easy_install_dot
              }
            ></div>
          </div>
          <button
            className={
              selectedStep === 2 ? Styles.orangeButton : Styles.whiteButton
            }
            onClick={() => setStep(2)}
          >
            2
          </button>
        </div>
        <div className={Styles.easy_install_header_wrapper}>
          <div
            className={selectedStep === 3 ? Styles.orangeDot : Styles.whiteDot}
          >
            <div
              className={
                selectedStep === 3
                  ? Styles.easy_install_dot_1
                  : Styles.easy_install_dot
              }
            ></div>
            <div
              className={
                selectedStep === 3
                  ? Styles.easy_install_dot_1
                  : Styles.easy_install_dot
              }
            ></div>
            <div
              className={
                selectedStep === 3
                  ? Styles.easy_install_dot_1
                  : Styles.easy_install_dot
              }
            ></div>
          </div>
          <button
            className={
              selectedStep === 3 ? Styles.orangeButton : Styles.whiteButton
            }
            onClick={() => setStep(3)}
          >
            3
          </button>
        </div>
      </div>
      <div className={Styles.easy_install_wrapper_content}>
        <h4 className={Styles.easy_install_title}>
          {data.install_content[selectedStep - 1].title}
        </h4>
        <p className={Styles.easy_install_para}>
          {data.install_content[selectedStep - 1].para}
        </p>
      </div>
    </div>
  );
}

export default EasyInstall;
