import React, { useState, useEffect } from "react";
import Styles from "./footerBanner.module.css";
import Banner from "../../../assets/FooterBanner/footer_banner.png";
import MobileBanner from "../../../assets/FooterBanner/mobile_banner.png";
import { Link } from "wouter";

function FooterBanner() {
    const handleLinkClick = () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    const handleWindowSize = () => {
        setIsMobile(window.innerWidth <= 767);
    };

    useEffect(() => {
        handleWindowSize();
    }, [window.innerWidth <= 767]);
    return (
        <div className={Styles.footerbanner}>
            <div className={Styles.img_wrapper}>
                <img src={isMobile ? MobileBanner : Banner} alt="" />

                <div className={Styles.content_wrapper}>
                    <div className={Styles.content}>
                        <p> Transform Your Network Architecture With Us!</p>
                        <Link href="/contact-us" onClick={handleLinkClick}>
                            <button className={Styles.contact_us_button}>Get in touch</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBanner;
