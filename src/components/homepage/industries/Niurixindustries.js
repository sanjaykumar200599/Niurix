import React from "react";
import Styles from "./industries.module.css";
import { homePage as data } from "../../../data/homepage/homepage";
import { useState, useEffect } from "react";
import { ReactComponent as Rightarrow } from "../../../assets/homepage/RightArrow.svg";
import { Link } from "wouter";
function Niurixindustries() {
  const [hoveredIndex, setHoveredIndex] = useState(1);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const loadImage = (name) => {
    try {
      return require(`../../../assets/homepage/${name}.webp`);
    } catch (e) {
      return require("../../../assets/homepage/Hospitality.webp");
    }
  };

  return (
    <div>
      <h2 className={Styles.industries_heading}>
        <span>Our</span> Industries
      </h2>
      <div className={Styles.cards_container}>
        {data.our_industries.map((item, index) => (
          <div key={index} onClick={() => handleMouseEnter(item.id)}>
            {" "}
            <div className={Styles.image1}>
              <img src={loadImage(item.img1)} />{" "}
              <div className={Styles.image_title}>{item.url}</div>
            </div>
            {hoveredIndex === item.id ? (
              <div
                className={
                  hoveredIndex === item.id ? Styles.expanded_image : null
                }
              >
                <div className={Styles.img2_wrapper}>
                  <img className={Styles.img2} src={loadImage(item.img)} />
                  <div className={Styles.card_content}>
                    <div className={Styles.card_title}>{item.title}</div>
                    <div className={Styles.card_desc}>{item.desc}</div>

                    <Link href={`/industries/${item.url_link}`}>
                      <div className={Styles.industries_button}>
                        <div>Learn More</div>
                        <Rightarrow className={Styles.rightarrow} />{" "}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className={Styles.cards_container_mob}>
        {data.our_industries.map((item, index) => (
          <div key={index} onClick={() => handleMouseEnter(item.id)}>
            {" "}
            <div className={Styles.image1_mob}>
              <img src={loadImage(item.mob_crop_img)} />{" "}
              <div className={Styles.image_title_mob}>{item.url}</div>
              {hoveredIndex === item.id ? (
                <div
                  className={
                    hoveredIndex === item.id ? Styles.expanded_image_mob : null
                  }
                >
                  <div className={Styles.img2_wrapper_mob}>
                    <img
                      className={Styles.img2_mob}
                      src={loadImage(item.mob_img)}
                    />
                    <div className={Styles.card_content_mob}>
                      <div className={Styles.card_title_mob}>{item.title}</div>
                      <div className={Styles.card_desc_mob}>{item.desc}</div>

                      <Link href={`/industries/${item.url_link}`}>
                        <div className={Styles.industries_button_mob}>
                          <div>Learn More</div>
                          <Rightarrow className={Styles.rightarrow_mob} />{" "}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Niurixindustries;
