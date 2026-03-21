import React, { useEffect, useState, useRef } from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./products.module.css";
import { Link } from "wouter";
import { ReactComponent as DownloadIcon } from "../../assets/products/download.svg";
import  Product16p from '../InteractiveSVG/Product16p'
import   Product8p from '../InteractiveSVG/Product8p'
import Product_G2410 from "../InteractiveSVG/ProductG2410";
import Product_P4200R from "../InteractiveSVG/ProductP4200R";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FooterBanner from "../shared/footer_banner/FooterBanner";
import productsVideo from "../../assets/products/Video.webp";
import "./swiper_product.css";
import { Helmet } from "react-helmet-async";
// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Products = (props) => {
  const [Visible, setVisbile] = useState("Specification");
  const [page, setPage] = useState("");

  const [data, setData] = useState(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const handleWindowSize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  const renderData = (page) => {
    let data;
    switch (page) {
      case "ONT-G2410":
        data = require("../../data/products/ont_g2410");
        setPage("ONT-G2410");
        return data.ont_g2410;
      case "ONT-P4200R":
        data = require("../../data/products/ont_p4200r");

        setPage("ONT-P4200R");

        return data.ont_p4200r;
      case "OLT-SOLT33-16P":
        data = require("../../data/products/olt_solt33_16p");
        setPage("OLT-SOLT33-16P");

        return data.olt_solt33_16p;
      case "OLT-SOLT33-8P":
        data = require("../../data/products/olt_solt33_08p");
        setPage("OLT-SOLT33-8P");

        return data.olt_solt33_08p;

      default:
        return null;
    }
  };


  const renderComponents = (page) => {
    switch (page) {
      case "ONT-G2410":
        return < Product_G2410/>

      case "ONT-P4200R":
        return < Product_P4200R/>

      case "OLT-SOLT33-16P":
        return <Product16p/>

      case "OLT-SOLT33-8P":
        return <Product8p/>
       

      default:
        return null;
    }
  };
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

  const loadBGImg = (name) => {
    try {
      return require(`../../assets/products/${page}/${name}.webp`);
    } catch (e) {
      return require(`../../assets/products/ONT-G2410/g2410 banner.webp`);
    }
  };

  const loadBGImgMobile = (name) => {
    try {
      return require(`../../assets/products/mobile_banners/${page}/${name}.webp`);
    } catch (e) {
      // return require(`../../assets/industries/corporate_workspaces/Corporate Banner.webp`);
    }
  };

  const loadPdfs = (name) => {
    try {
      return require(`../../assets/products/pdfs/${name}.pdf`);
    } catch (e) {
      return require(`../../assets/products/pdfs/Niurix-G2110.pdf`);
    }
  };

  return (
    <div>
      {data ? (
        // <>
        //     <Helmet>
        //         <title>{data.meta_title}</title>
        //         <meta name="description" content={data.meta_description} />
        //         <link rel="canonical" href={`https://niurix.com/products/${page}`}></link>
        //     </Helmet>
        <div className={Styles.product_main_container}>
          <section>
            <div className={Styles.section_one}>
              <div className={Styles.main_img}>
                {isMobile ? (
                  <img
                    src={loadBGImgMobile(data.section1.background_img_mobile)}
                    alt=""
                  />
                ) : (
                  <img src={loadBGImg(data.section1.background_img)} alt="" />
                )}
                {/* <img src={loadBGImg(data.section1.background_img)} /> */}
              </div>
            </div>
          </section>

          <section>
            <div className={Styles.section_two}>
              <pre
                className={Styles.our_products}
                dangerouslySetInnerHTML={{ __html: data.section2.mainHeading }}
              ></pre>

              {/* <p className={Styles.our_product_subtitle}>{data.section2.mainPara}</p> */}
              <div className={Styles.section_two_wrapper}>
                <div className={Styles.section_two_sub_wrapper}>
                  <h1 className={Styles.our_product_title}>
                    {data.section2.subHeading}
                  </h1>
                  <pre
                    className={Styles.our_product_content}
                    dangerouslySetInnerHTML={{ __html: data.section2.para }}
                  ></pre>
                  <div className={Styles.section2_button}>
                    <Link href="/contact-us">Get in touch</Link>
                  </div>
                </div>
                <div className={Styles.image_div_a}>
                  {isMobile ? (
                    <img
                      alt=""
                      src={loadBGImgMobile(
                        data.section2.background_img1_mobile
                      )}
                    ></img>
                  ) : (
                    <img
                      alt=""
                      src={loadBGImg(data.section2.background_img1)}
                    ></img>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={Styles.section_three}>
              <pre
                className={Styles.div_middle_title}
                dangerouslySetInnerHTML={{ __html: data.section3.mainHeading }}
              ></pre>
              <div className={Styles.section_three_wrapper}>
                <div className={Styles.image_div_b}>
                  {/* <img
                    alt=""
                    src={loadBGImg(data.section3.background_img)}
                  ></img>{" "} */}
                  {renderComponents(props.params.page)}
                </div>
                <div className={Styles.content_div_b}>
                  <div className={Styles.sub_content_div_a}>
                    <h2 className={Styles.stay_connected_heading_a}>
                      {data.section3.subHeading1}
                    </h2>

                    <pre
                      className={Styles.stay_connected_para_a}
                      dangerouslySetInnerHTML={{ __html: data.section3.para1 }}
                    ></pre>
                  </div>
                  {/* <div className={Styles.sub_content_div_b}>
                                        <h2 className={Styles.stay_connected_heading_b}>{data.section3.subHeading2}</h2>
                                        <pre
                                            className={Styles.stay_connected_para_b}
                                            dangerouslySetInnerHTML={{ __html: data.section3.para2 }}
                                        ></pre>
                                    </div> */}
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className={Styles.section_four}>
              {/* <div className={Styles.content_four}> */}
              <div className={Styles.img_b}>
                {isMobile ? (
                  <img
                    alt=""
                    src={loadBGImgMobile(data.section4.background_img_mobile)}
                  ></img>
                ) : (
                  <img
                    alt=""
                    src={loadBGImg(data.section4.background_img)}
                  ></img>
                )}
                <div className={Styles.title4_b}>{data.section4.title}</div>
              </div>
              {/* </div> */}

              <div className={Styles.content_c_groups}>
                {data.section4.text_content_groups.map((item, index) => (
                  <div key={index} className={Styles.content_c_groups_together}>
                    <h3 className={Styles.content_group_title}>{item.title}</h3>
                    <div className={Styles.content_group_para}>{item.para}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className={Styles.section_five}>
              <div className={Styles.tab_switch}>
                {data.section5.map((item, index) => (
                  <div key={index} className={Styles.tab_switch_wrapper_five}>
                    {/* title */}
                    <h2 className={Styles.tab_switch_title}>{item.title}</h2>

                    <div className={Styles.tab_switch_content_wrapper}>
                      {/* header-specification and dimension */}
                      <div className={Styles.section_five_wrapper}>
                        {/* specification */}
                        <h3
                          className={
                            Visible === "Specification"
                              ? Styles.specification_head_active
                              : Styles.specification_head
                          }
                          onClick={() => {
                            setVisbile("Specification");
                          }}
                        >
                          {item.specifications}
                        </h3>
                        {/* dimension */}
                        <h3
                          className={
                            Visible === "Dimensions"
                              ? Styles.dimensions_head_active
                              : Styles.dimensions_head
                          }
                          onClick={() => {
                            setVisbile("Dimensions");
                          }}
                        >
                          {item.dimension}
                        </h3>
                        {/* onclick function for tab switch */}
                      </div>
                      {Visible === "Specification" ? (
                        <div className={Styles.specification}>
                          {item.specification.map((item, index) => (
                            <div
                              key={index}
                              className={Styles.specification_wrapper}
                            >
                              <div className={Styles.specification_title}>
                                {item.title}
                              </div>
                              <div className={Styles.specification_value}>
                                {item.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className={Styles.dimensions}>
                          {item.dimensions.map((item, index) => (
                            <div
                              key={index}
                              className={Styles.dimension_wrapper}
                            >
                              <div className={Styles.dimension_title}>
                                {item.title}
                              </div>
                              <div className={Styles.dimension_value}>
                                {item.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <p className={Styles.tab_switch_para}>{item.para}</p>
                    <div className={Styles.section5_button}>
                      <DownloadIcon />
                      <a href={loadPdfs(item.pdf)} target="_blank">
                        Download
                      </a>
                    </div>
                  </div>
                ))}

                {/* <button className="products-btn">Download</button> */}
              </div>
              <div className={Styles.swipper}>
                <Swiper
                  slidesPerView={1}
                  // spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={loadBGImg(data.swipper.img1)}></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={loadBGImg(data.swipper.img2)}></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={loadBGImg(data.swipper.img3)}></img>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={loadBGImg(data.swipper.img4)}></img>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>

          <section>
            <div className={Styles.section_six}>
              {/* <div className={Styles.section_five_video}> */}
              {page === "ONT-G2410" || page === "ONT-P4200R" ? (
                <iframe src="https://www.youtube.com/embed/1gxsPJekHSI"></iframe>
              ) : null}
              {/* </div> */}
            </div>
          </section>

          <section>
            <FooterBanner />
          </section>
        </div>
      ) : // </>
      null}
    </div>
  );
};

export default Products;
