import React, { useEffect, useState } from "react";
// import hospitalityData from "../../data/industries/hospitality";
import { Link } from "wouter";

import Styles from "./industries.module.css";
import { Helmet } from "react-helmet-async";
import FooterBanner from "../shared/footer_banner/FooterBanner.js";

const Industries = (props) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const handleWindowSize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  const renderData = (page) => {
    let data;
    switch (page) {
      case "hospitality":
        data = require("../../data/industries/hospitality");
        setPage("hospitality");
        return data.hospitality;
      case "corporate-workspaces":
        data = require("../../data/industries/corporate_workspaces");
        setPage("corporate_workspaces");
        return data.corporate_workspaces;
      case "residential-real-estate":
        data = require("../../data/industries/residential_real_estate");
        setPage("residential_real_estate");
        return data.residential_real_estate;
      case "student-living":
        data = require("../../data/industries/student_living");
        setPage("student_living");
        return data.student_living;
      default:
        return null;
    }
  };
  //This function is called when the data state is set
  useEffect(() => {
    let data = renderData(props.params.page);

    setData(data);
  }, [data]);
  //This function is called when the pages are switched or the URL changes ( which means props.params.page) has chnaged
  useEffect(() => {
    let data = renderData(props.params.page);

    setData(data);
  }, [props.params.page]);

  useEffect(() => {
    handleWindowSize();
  }, [window.innerWidth <= 767]);

  //Banner images
  const loadBGImg = (name) => {
    try {
      return require(`../../assets/industries/${page}/${name}.webp`);
    } catch (e) {
      return require("../../assets/industries/corporate_workspaces/Corporate Banner.webp");
    }
  };

  const loadBGImgMobile = (name) => {
    try {
      return require(`../../assets/industries/mobile_banners/${page}/${name}.webp`);
    } catch (e) {
      return require("../../assets/industries/corporate_workspaces/Corporate Banner.webp");
    }
  };

  return (
    <div>
      {/* <h1>{props.params.page}</h1>s */}
      {data ? (
        // <>
        //   <Helmet>
        //     <title>{data.meta_title}</title>
        //     <meta name="description" content={data.meta_description} />
        //     <link
        //       rel="canonical"
        //       href={`https://niurix.com/industries/${page}`}
        //     ></link>
        //   </Helmet>
        <section>
          <section>
            <div className={Styles.section1_banner_img}>
              {isMobile ? (
                <img
                  src={loadBGImgMobile(data.section1.banner_img_mobile)}
                  alt=""
                />
              ) : (
                <img src={loadBGImg(data.section1.banner_img)} alt="" />
              )}
            </div>
            <h1 className={Styles.section1_banner_title}>
              {data.section1.title}
            </h1>
          </section>

          <section className={Styles.section2}>
            <h2 className={Styles.section2_heading}>
              <pre
                className={Styles.our_industries}
                dangerouslySetInnerHTML={{ __html: data.section2.title }}
              ></pre>
            </h2>

            <div className={Styles.section2_wrapper}>
              <div className={Styles.section2_content}>
                {/* <div className={Styles.section2_subtitle}>{data.section2.subtitle}</div> */}
                <div className={Styles.section2_desc}>{data.section2.desc}</div>

                <div className={Styles.section2_button}>
                  <Link href="/contact-us">Get in touch</Link>
                </div>
              </div>
              <div className={Styles.section2_img}>
                <img src={loadBGImg(data.section2.img)} alt="" />
              </div>
            </div>
          </section>

          <section className={Styles.section3}>
            {data.section3.map((item, index) => (
              <div key={index} className={Styles.section3_content}>
                <div className={Styles.section3_wrapper}>
                  <div className={Styles.section3_img}>
                    <img src={loadBGImg(item.device_img)} />
                  </div>{" "}
                </div>
                <div className={Styles.section3_title}>{item.device_title}</div>
              </div>
            ))}
          </section>

          <section className={Styles.section4}>
            <div className={Styles.section4_content}>
              <h2 className={Styles.section4_heading}>{data.section4.title}</h2>
              <div className={Styles.section4_desc}>{data.section4.desc}</div>
            </div>
            <div className={Styles.section4_cards}>
              {data.section4.cards.map((item, index) => (
                <div className={Styles.section4_cards_content}>
                  <div className={Styles.section4_cards_img}>
                    <img src={loadBGImg(item.cards_img)} />
                  </div>
                  <div className={Styles.section4_cards_title}>
                    {item.cards_title}
                  </div>
                  {/* <div className={Styles.section4_cards_desc}>{item.cards_desc}</div> */}
                </div>
              ))}
            </div>
          </section>

          <section className={Styles.section5}>
            <FooterBanner />
          </section>
        </section>
      ) : // </>
      null}
    </div>
  );
};

export default Industries;
