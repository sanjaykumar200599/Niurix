import React from "react";
import Styles from "./niurixparallax.module.css";

import { ReactComponent as Rightarrow } from "../../../assets/homepage/RightArrow.svg";
import { Link } from "wouter";

function Niurixparallax() {
  return (
    <div className={Styles.parallax_img_padding}>
      <div className={Styles.parallax_img_wrapper}>
        <div className={Styles.parallax_desc_contactus_wrapper}>
          <div className={Styles.parallax_text_content}>
            Transform Your Network Architecture With Us!
          </div>
          <Link href="/contact-us">
            <div className={Styles.parallax_contact_us}>
              Contact us <Rightarrow className={Styles.rightarrow_parallax} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Niurixparallax;
