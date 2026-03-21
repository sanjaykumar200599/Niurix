import React, { useEffect, useState } from "react";
// import hospitalityData from "../../data/industries/hospitality";
// import { Link } from "wouter";

import Styles from "./solutions.module.css";
import { Helmet } from "react-helmet-async";

import FooterBanner from "../shared/footer_banner/FooterBanner.js";

const Solutions = (props) => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const handleWindowSize = () => {
    setIsMobile(window.innerWidth <= 767);
  };
  const renderData = (page) => {
    let data;
    switch (page) {
      case "optimized-fiber-optic-solution":
        data = require("../../data/solutions/optimized_fiber_optic_solution");
        setPage("optimized_fiber_optic_solution");
        return data.optimized_fiber_optic_solution;
      case "fibers-edge-over-copper":
        data = require("../../data/solutions/fibers_edge_over_copper");
        setPage("fibers_edge_over_copper");
        return data.fibers_edge_over_copper;
      case "scalable-and-future-ready-design":
        data = require("../../data/solutions/scalable_and_future_ready_design");
        setPage("scalable_and_future_ready_design");
        return data.scalable_and_future_ready_design;
      case "configurations-and-personalized-support":
        data = require("../../data/solutions/configurations_and_personalized_support");
        setPage("configurations_and_personalized_support");
        return data.configurations_and_personalized_support;
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
      return require(`../../assets/solutions/${page}/${name}.webp`);
    } catch (e) {
      return require("../../assets/industries/corporate_workspaces/Corporate Banner.webp");
    }
  };
  const loadBGImgMobile = (name) => {
    try {
      return require(`../../assets/solutions/mobile_banners/${page}/${name}.webp`);
    } catch (e) {
      return require("../../assets/industries/corporate_workspaces/Corporate Banner.webp");
    }
  };
  return (
    <div>
      {data ? (
        // <>
        //   <Helmet>
        //     <title>{data.meta_title}</title>
        //     <meta name="description" content={data.meta_description} />
        //     <link
        //       rel="canonical"
        //       href={`https://niurix.com/solutions/${page}`}
        //     ></link>
        //   </Helmet>
        <section>
          <section>
            <div className={Styles.section1_banner}>
              {isMobile ? (
                <img
                  src={loadBGImgMobile(data.section1.banner_mobile)}
                  alt=""
                />
              ) : (
                <img src={loadBGImg(data.section1.banner)} alt="" />
              )}
            </div>
            <h1 className={Styles.section1_banner_title}>
              {data.section1.title}
            </h1>
          </section>

          <section className={Styles.section2}>
            <h2 className={Styles.section2_heading}>
              {" "}
              <pre
                className={Styles.our_solutions}
                dangerouslySetInnerHTML={{ __html: data.section2.heading }}
              ></pre>{" "}
            </h2>
            <div className={Styles.section2_wrapper}>
              <div className={Styles.section2_content}>
                <div className={Styles.section2_desc}>{data.section2.para}</div>
              </div>
              <div className={Styles.section2_img}>
                <img src={loadBGImg(data.section2.img)} alt="" />
              </div>
            </div>
          </section>

          <section>
            <div className={Styles.section3_container}>
              <div className={Styles.section3_title}>
                {" "}
                <pre
                  className={Styles.our_solutions}
                  dangerouslySetInnerHTML={{
                    __html: data.section3.card_heading,
                  }}
                ></pre>
              </div>
              <div className={Styles.cards_container}>
                {data.section3.cards.map((item, index) => (
                  <div key={index} className={Styles.section3_wrapper}>
                    <div className={Styles.section3_cards}>
                      <div className={Styles.section3_card_title}>
                        {item.title}
                      </div>
                      <div className={Styles.section3_para}>{item.para}</div>
                      <div className={Styles.section3_number}>
                        {item.number}
                      </div>
                      <div className={Styles.section3_img_wrapper}>
                        <div className={Styles.section3_img}>
                          <img src={loadBGImg(item.img)} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <FooterBanner />
          </section>
        </section>
      ) : // </>
      null}
    </div>
  );
};

export default Solutions;
