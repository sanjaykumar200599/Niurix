import { useState, useEffect } from "react";
import React from "react";
import { software as data } from "../../data/software/software.js";
import Styles from "./software.module.css";
import Banner from "../../assets/software/Banner.webp";
import Banner_Mobile from "../../assets/software/Software banner Mobile.webp";
import FooterBanner from "../shared/footer_banner/FooterBanner.js";

import { Helmet } from "react-helmet-async";

function Software() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isTab, setIsTab] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1024
  );

  const handleWindowSize = () => {
    setIsMobile(window.innerWidth <= 767);
    setIsTab(window.innerWidth >= 768 && window.innerWidth <= 1024);
  };

  useEffect(() => {
    handleWindowSize();
  }, [window.innerWidth]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const loadImage = (name) => {
    try {
      return require(`../../assets/software/${name}.webp`);
    } catch (e) {
      return require("../../assets/software/Centralized_login.webp");
    }
  };
  return (
    // <>
    //     <Helmet>
    //         <title>{data.meta_title}</title>
    //         <meta name="description" content={data.meta_description} />
    //         <link rel="canonical" href={`https://niurix.com/software`}></link>
    //     </Helmet>
    <section>
      <section>
        <div className={Styles.software_section_banner}>
          {isMobile ? <img src={Banner_Mobile} /> : <img src={Banner} />}
        </div>
        <div className={Styles.software_section_banner_content}>
          <h1>{data.section1.title}</h1>
        </div>
      </section>

      <section>
        <div className={Styles.software_content_body}>
          <div className={Styles.software_section_title}>
            <h2>
              {" "}
              <pre
                className={Styles.our_software}
                dangerouslySetInnerHTML={{ __html: data.section2.title }}
              ></pre>
            </h2>
          </div>
          <div className={Styles.software_section_para}>
            {" "}
            {data.section2.para}
          </div>
        </div>

        <div className={Styles.cards_container}>
          {data.section2.cards.map((item) => (
            <div
              className={Styles.cards_wrapper}
              key={item.id}
              onMouseEnter={() =>
                setTimeout(() => {
                  handleMouseEnter(item.id);
                }, 300)
              }
              onMouseLeave={handleMouseLeave}
            >
              <div className={Styles.cards}>
                <div className={Styles.cards_img_wrapper}>
                  {isMobile || isTab ? (
                    <img src={loadImage(item.card_img_mobile)}></img>
                  ) : (
                    <img src={loadImage(item.card_img)}></img>
                  )}
                </div>
                <div className={Styles.title1}>
                  <p>{item.card_title}</p>
                </div>
              </div>
              {isMobile || isTab ? (
                <div className={Styles.card_desc}>
                  <p className={Styles.card_para}>{item.card_para}</p>
                </div>
              ) : (
                <div className={Styles.card_desc}>
                  {hoveredIndex === item.id ? (
                    <p className={Styles.card_para}>{item.card_para}</p>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <FooterBanner />
      </section>
    </section>
    // </>
  );
}

export default Software;
