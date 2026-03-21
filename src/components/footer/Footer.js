import React, { useState, useEffect } from "react";
import Styles from "./footer.module.css";
import { Link } from "wouter";
import { ReactComponent as ScrollTotop } from "../../assets/footer/scrolltotop.svg";
import Footerlogo from "../../assets/footer/niurixlogo.svg";
import Linkedinlogo from "../../assets/footer/linkedin.svg";
import Twitterlogo from "../../assets/footer/twitter.svg";

function Footer() {
    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleLinkClick = () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    };
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer_container}>
                <div className={Styles.footer_wrapper}>
                    <div className={Styles.footer_logo}>
                        <Link href="/">
                            <img src={Footerlogo} alt="footer-logo" />
                        </Link>
                    </div>
                    <div className={Styles.footer_list}>
                        <div className={Styles.footer_list_items1}>
                            <p className={Styles.footer_list_heading}>Solutions</p>
                            <Link href="/solutions/optimized-fiber-optic-solution" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Optimized Fiber Optic Solution</p>
                            </Link>
                            <Link href="/solutions/fibers-edge-over-copper" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Fiber's Edge Over Copper</p>
                            </Link>
                            <Link href="/solutions/scalable-and-future-ready-design" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Scalable and Future Ready Design</p>
                            </Link>
                            <Link href="/solutions/configurations-and-personalized-support" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Configurations and Personalized Support</p>
                            </Link>
                        </div>
                        <div className={Styles.footer_list_items2}>
                            <p className={Styles.footer_list_heading}>Products</p>
                            <Link href="/products/ONT-P4200R" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>P4200R</p>
                            </Link>
                            <Link href="/products/ONT-G2410" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>G2410</p>
                            </Link>
                            <Link href="/products/OLT-SOLT33-8P" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>SOLT33- 8P</p>
                            </Link>
                            <Link href="/products/OLT-SOLT33-16P" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>SOLT33- 16P</p>
                            </Link>
                        </div>
                        <div className={Styles.footer_list_items3}>
                            <Link href="/software" onClick={handleLinkClick}>
                                <p className={Styles.footer_list_heading}>Software</p>
                            </Link>
                            <Link href="/software" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Centralized Login and Access control</p>
                            </Link>
                            <Link href="/software" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Streamlined ONT and OLT</p>
                            </Link>
                            <Link href="/software" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Real-time ONT Monitoring</p>
                            </Link>
                            <Link href="/software" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Network Topology Visualization</p>
                            </Link>
                            <Link href="/software">
                                <p className={Styles.list_sub_item}>Remote Monitoring and Management</p>
                            </Link>
                        </div>
                        <div className={Styles.footer_list_items4}>
                            <p className={Styles.footer_list_heading}>Industries</p>
                            <Link href="/industries/hospitality" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Hospitality</p>
                            </Link>
                            <Link href="/industries/corporate-workspaces" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Corporate Workspaces</p>
                            </Link>
                            <Link href="/industries/residential-real-estate" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Residential Real Estate</p>
                            </Link>
                            <Link href="/industries/student-living" onClick={handleLinkClick}>
                                <p className={Styles.list_sub_item}>Student Living</p>
                            </Link>
                        </div>
                        {/* <div className={Styles.footer_blog}>Blog</div> */}
                    </div>
                </div>
                <div className={Styles.footer_underline}>
                    <div className={Styles.footer_arr}>
                        <p className={Styles.footer_2023}>© 2023 All rights reserved</p>
                    </div>
                    <div className={Styles.footer_underline_container}>
                        <div className={Styles.terms_privacy}>
                            <div className={Styles.terms}>Terms & Conditions</div>
                            <div className={Styles.privacy}>Privacy Policy</div>
                        </div>
                        <div className={Styles.finduson}>
                            <p className={Styles.findus}>Find us on</p>
                            <div className={Styles.linkedin_logo}>
                                <a href="https://www.linkedin.com/company/niurix/" target="_blank">
                                    <img src={Linkedinlogo} />
                                </a>
                            </div>
                            <div className={Styles.twitter_logo}>
                                <img src={Twitterlogo} />
                            </div>
                            <div className={Styles.footer_mobile}>
                                <div className={Styles.linkedin_Logo}>
                                    <a href="https://www.linkedin.com/company/niurix/" target="_blank">
                                        <img src={Linkedinlogo} />
                                    </a>
                                </div>
                                <div className={Styles.twitter_Logo}>
                                    <img src={Twitterlogo} />
                                </div>
                            </div>
                        </div>
                        <div className={Styles.scrolltotop} onClick={ScrollToTop}>
                            <ScrollTotop alt="svg" className={Styles.scrolllogo_destop} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
