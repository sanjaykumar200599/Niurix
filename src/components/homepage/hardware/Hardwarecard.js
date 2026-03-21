import React from "react";
// import { homePage as data } from "../../data/homepage/homepage";
import { homePage as data } from "../../../data/homepage/homepage";
import Styles from "./hwcard.module.css";

function Hardwarecard() {
  return (
    <div className={Styles.hwcard_wrapper}>
      <div className={Styles.hwcard_content}>
        <h1 className={Styles.hwcard_heading}>
          Empower Spaces with{" "}
          <span className={Styles.hwcard_header}>High-Performance </span>GPON{" "}
          <span className={Styles.hwcard_header}>Fiber Solutions</span>
        </h1>
      </div>
      <div className={Styles.card_hardware_wrapper}>
        {data.hw_cards.hwcard_items.map((item, index) => (
          <div key={index} className={Styles.hwcard_single_card}>
            <p className={Styles.card_hardware_text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hardwarecard;
