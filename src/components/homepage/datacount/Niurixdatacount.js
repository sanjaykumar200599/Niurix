import React from "react";

import { homePage as data } from "../../../data/homepage/homepage";
import Styles from "./datacount.module.css";

function Niurixdatacount() {
  return (
    <div className={Styles.niurixdata_wrapper}>
      {data.data_count.map((item, index) => (
        <div key={index} className={Styles.datacount_innerwrapper}>
          <div className={Styles.datacount_count_alignment}>{item.count}</div>
          <div className={Styles.datacount_desc_alignment}>{item.desc}</div>
        </div>
      ))}
    </div>
  );
}

export default Niurixdatacount;
