import React, { useEffect, useState, useRef } from "react";
import { homePage as data } from "../../data/homepage/homepage";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
import Niurixparallax from "./parallax/Niurixparallax";
import Hardwarecard from "./hardware/Hardwarecard";
import HardwareAnimation from "./hardware/HardwareAnimation";
import Niurixdatacount from "./datacount/Niurixdatacount";
import EasyInstall from "./easyinstall/EasyInstall";
import NiurixInstallvideo from "./easyinstall/NiurixInstallvideo";
import Niurixindustries from "../homepage/industries/Niurixindustries";
import NiurixProducts from "../homepage/niurix_products/NiurixProducts";
import "swiper/css";
import "swiper/css/pagination";
import { Parallax, Pagination } from "swiper/modules";
import "./homepage-swiper.css";
import Styles from "./homepage.module.css";
import BuildingVideo from "./building_video/BuildingVideo";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

function HompePage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    const handleWindowSize = () => {
        setIsMobile(window.innerWidth <= 767);
    };
    useEffect(() => {
        handleWindowSize();
    }, [window.innerWidth <= 767]);

    const loadBGImg = (name) => {
        try {
            return require(`../../assets/homepage/${name}.webp`);
        } catch (e) {
            return require(`../../assets/homepage/corporate-industries-cropped.webp`);
        }
    };
    const loadBGImgMobile = (name) => {
        try {
            return require(`../../assets/homepage/mobileBanners/${name}.webp`);
        } catch (e) {
            return require(`../../assets/homepage/corporate-industries-cropped.webp`);
        }
    };
    return (
        <div>
            <Helmet>
                <title>{data.meta_title}</title>
                <meta name="description" content={data.meta_description} />
                <link rel="canonical" href="https://niurix.com/" />
            </Helmet>
            {/* Banner */}
            <section>
                <div className="homepage-swipper">
                    <Swiper
                        speed={600}
                        parallax={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Parallax, Pagination]}
                        className="mySwiper">
                        <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div>
                        {data.banner_content.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className={Styles.homepage_banner}>
                                    {isMobile ? (
                                        <img src={loadBGImgMobile(item.img_mobile)} alt={item.alt} width="100%" height="100%" />
                                    ) : (
                                        <img src={loadBGImg(item.img)} alt={item.alt} width="100%" height="100%" />
                                    )}
                                </div>
                                <div className={Styles.homepage_banner_content_wrapper}>
                                    <h2 className={Styles.homepage_title}>{item.title}</h2>
                                    <p className={Styles.homepage_banner_para}>{item.para}</p>
                                    <Link href={`/solutions/${item.url}`}>
                                        <pre
                                            className={Styles.homepage_explore_btn}
                                            dangerouslySetInnerHTML={{ __html: item.button }}></pre>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}{" "}
                    </Swiper>
                </div>
            </section>

            {/* Hardware  */}
            <section className={Styles.Hardwarecard_section}>
                <div className={Styles.hardware_whole_content}>
                    <div className={Styles.video_homepage_wrapper}>
                        <HardwareAnimation />
                    </div>
                    <Hardwarecard />
                </div>
            </section>

            {/* Building video */}
            <section className={Styles.t}>
                <BuildingVideo />
            </section>

            {/* datacount */}
            <section className={Styles.datacount_section}>
                <Niurixdatacount />
            </section>

            {/* Niurix Products */}
            <section className={Styles.niurix_products_section}>
                <h2 className={Styles.products_header_section}>
                    <span className={Styles.niurix_products}>Niurix</span> Products{" "}
                </h2>
                <NiurixProducts />
            </section>

            {/* Our Industries */}
            <section>
                <Niurixindustries />
            </section>

            {/* Easy To Install */}
            <section className={Styles.install_section_wrapper}>
                <h2 className={Styles.install_easy_header}>
                    <span className={Styles.easy_install_header}>Easy To</span> Install{" "}
                </h2>
                <div className={Styles.nuirix_install_wrapper}>
                    <div className={Styles.niurixinstall_video_wrapper}>
                        <NiurixInstallvideo />
                    </div>
                    <div className={Styles.niurixinstall_content_wrapper}>
                        <EasyInstall />
                    </div>
                </div>
            </section>
            <section>
                <Niurixparallax />
            </section>
        </div>
    );
}

export default HompePage;
