import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import data from "../../data/header";
import Styles from "./header.module.css";
import { Turn as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import { ReactComponent as Divarrow } from "../../assets/header/Divarrow.svg";
import { ReactComponent as Headerlogo } from "../../assets/header/niurixlogo.svg";
import { ReactComponent as Navbarsvg } from "../../assets/header/navbar.svg";
import { ReactComponent as PlusIcon } from "../../assets/header/addicon.svg";

const Header = (props) => {
    const [options, setOptions] = useState([]);
    const [page, setPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [url, setURL] = useState(null);
    const [scrolling, setScrolling] = useState(false);
    const headerClass = scrolling ? `${Styles.header_test}` : `${Styles.header_main}`;

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);
    const [isActive, setIsActive] = useState(null);
    // const [isOpen, setisOpen] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const [showOptions, setShowOptions] = useState("");

    const handleClickOptions = (option) => {
        setShowOptions(option);
    };

    // const handleClick = (item) => {
    //     setIsActive(isActive === item ? null : item);
    // };

    const handleLinkClick = () => {
        setNavbarOpen(false);
    };
    const toggleNavbar = () => {
        setOpen(!isOpen);
        // handleClickOptions("");
        setOptions([]);
    };

    const handleCloseClick = () => {
        setShowNavbar(false);
        setOpen(false);
    };

    const loadHeaderImage = (page, name) => {
        try {
            return require(`../../assets/header/${page}/${name}.webp`);
        } 
        catch (error) {
            return require(`../../assets/header/solutions/Configurations and Personalized Support.webp`);
        }
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 850) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        let currentUrl = window.location.href;
        let urlParts = currentUrl.split("/");
        let page = urlParts[3];

        setPage(page);
    }, [window.location.href]);

    const handleItemClick = (item, option) => {
        if (page === item) {
            setOptions([]);
            setPage(null);
            setURL(null);
        } else {
            setPrevPage(page);
            setPage(item);
            setOptions(option);
            setURL(null);
        }
    };

    return (
        <header className={Styles.header}>
            <div className={headerClass}>
                <div className={Styles.header_logo}>
                    <Link
                        href="/"
                        onClick={() => {
                            setOptions([]);
                            setPage(null);
                            setPrevPage(page);
                            setURL(null);
                            handleCloseClick();
                        }}>
                        <Headerlogo onClick={handleCloseClick} />
                    </Link>
                </div>
                <nav className={Styles.header_container}>
                    <ul className={Styles.header_ul}>
                        <li
                            className={page === "solutions" ? Styles.header_selected : Styles.header_items}
                            onClick={() => handleItemClick("solutions", data.solutions)}>
                            Solutions
                            <div
                                className={
                                    page === "solutions" && options.length && !url ? Styles.solutions_arrow : Styles.dontdisplayarrow
                                }>
                                <Divarrow />
                            </div>
                        </li>
                        <li
                            className={page === "products" ? Styles.header_selected : Styles.header_items}
                            onClick={() => handleItemClick("products", data.products)}>
                            Products
                            <div
                                className={
                                    page === "products" && options.length && !url ? Styles.solutions_arrow : Styles.dontdisplayarrow
                                }>
                                <Divarrow />
                            </div>
                        </li>

                        <li
                            className={page === "software" ? Styles.header_selected : Styles.header_items}
                            onClick={() => handleItemClick("software", [])}>
                            <Link href="/software" className={page === "software" ? Styles.header_selected : Styles.header_items}>
                                Software
                            </Link>
                        </li>

                        <li
                            className={page === "industries" ? Styles.header_selected : Styles.header_items}
                            onClick={() => handleItemClick("industries", data.industries)}>
                            Industries
                            <div
                                className={
                                    page === "industries" && options.length && !url ? Styles.solutions_arrow : Styles.dontdisplayarrow
                                }>
                                <Divarrow />
                            </div>
                        </li>

                        <li className={Styles.contactus_button} onClick={() => handleItemClick("contact-us", [])}>
                            <Link href="/contact-us">
                                <a>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {options.length && !url ? (
                    <div className={Styles.header_dropdown}>
                        <div className={Styles.header_dropdown_content}>
                            {options.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.url}
                                    onClick={() => {
                                        setURL(item.url);
                                        setPrevPage(page);
                                        setPage(item.page);
                                    }}>
                                    {page === "products" ? (
                                        <div className={Styles.header_products}>
                                            <div className={Styles.header_products_img}>
                                                <img src={loadHeaderImage(item.page, item.image)} alt="" />
                                            </div>
                                            <div className={Styles.header_span}>
                                                <span className={Styles.type}>{item.type}</span>
                                                <span className={Styles.model_no}>{item.modelNum}</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className={Styles.header_dropdown_flex}>
                                            <div className={Styles.header_dropdown_img}>
                                                <img src={loadHeaderImage(item.page, item.image)} alt="" />
                                            </div>
                                            <div className={Styles.header_dropdown_heading}>
                                                <p className={Styles.dropdown_link}>{item.name}</p>
                                            </div>
                                        </div>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>

            <div className={isOpen ? Styles.header_mob : Styles.header_initial}>
                <div className={isOpen ? Styles.header_box_shadow_container : Styles.header_wrapper}>
                    <Link to="/">
                        <div className={Styles.header_logo_wrapper}>
                            <Headerlogo />
                        </div>
                    </Link>

                    <div
                        className={Styles.hamburger_logo}
                        //  onClick={toggleNavbar}
                    >
                        <Hamburger
                            size={25}
                            duration={0.5}
                            color="#FF5B02"
                            easing="ease-in"
                            // toggled={this.state.showNavbar}
                            // onToggle={toggleNavbar}
                            // onToggle={(toggled) => {
                            //     setShowNavbar(toggled);
                            //     handleClickOptions();
                            // }}
                            toggled={isOpen}
                            toggle={setOpen}
                        />
                    </div>
                </div>
                {isOpen ? (
                    <div className={Styles.tab_n_mobile_header}>
                        <div className={`${Styles.hamburger_contents_wrapper}`}>
                            <div className={Styles.header_card_wrapper}>
                                <nav className={Styles.header_cards}>
                                    <ul>
                                        <li>
                                            {" "}
                                            <div
                                                onClick={() => {
                                                    showOptions !== "Solutions" ? handleClickOptions("Solutions") : handleClickOptions("");
                                                }}
                                                className={Styles.header_card}>
                                                <div className={Styles.header_card_heading}>Solutions</div>
                                                <div className={Styles.plus_logo}>
                                                    <PlusIcon className={showOptions === "Solutions" ? Styles.close : Styles.plus} />
                                                </div>
                                            </div>
                                            {showOptions === "Solutions" && (
                                                <motion.div
                                                    style={{ overflow: "hidden" }}
                                                    initial={{
                                                        opacity: 1,
                                                        height: "0",
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        height: "12rem",
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                    }}
                                                    className={Styles.header_card_dropdown}>
                                                    <Link
                                                        href="/solutions/optimized-fiber-optic-solution"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            Optimized Fiber-Optic Solution
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/solutions/fibers-edge-over-copper"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            Fiber's Edge Over Copper
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/solutions/scalable-and-future-ready-design"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            Scalable and Future -Ready Design
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/solutions/configurations-and-personalized-support"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            Configurations and Personalized Support
                                                        </p>
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </li>
                                        <li>
                                            <div
                                                onClick={() => {
                                                    showOptions !== "Products" ? handleClickOptions("Products") : handleClickOptions("");
                                                }}
                                                className={Styles.header_card}>
                                                <div className={Styles.header_card_heading}>Products</div>
                                                <div className={Styles.plus_logo}>
                                                    <PlusIcon className={showOptions === "Products" ? Styles.close : Styles.plus} />{" "}
                                                </div>
                                            </div>
                                            {showOptions === "Products" && (
                                                <motion.div
                                                    style={{ overflow: "hidden" }}
                                                    initial={{
                                                        opacity: 1,
                                                        height: "0",
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        height: "12rem",
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                    }}
                                                    className={Styles.header_card_dropdown}>
                                                    <Link
                                                        href="/products/ONT-P4200R"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            P4200R
                                                        </p>
                                                    </Link>

                                                    <Link
                                                        href="/products/ONT-T2001"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            G2410{" "}
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/products/OLT-SOLT33-8P"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            SOLT33- 8P{" "}
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/products/OLT-SOLT33-16P"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            SOLT33- 16P{" "}
                                                        </p>
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </li>
                                        <li>
                                            <div className={Styles.header_card}>
                                                <Link
                                                    href="/software"
                                                    style={{ cursor: "pointer", textDecoration: "none" }}
                                                    onClick={handleLinkClick}>
                                                    {" "}
                                                    <p className={Styles.header_card_heading} onClick={handleCloseClick}>
                                                        Software{" "}
                                                    </p>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            {" "}
                                            <div
                                                onClick={() => {
                                                    showOptions !== "Industries"
                                                        ? handleClickOptions("Industries")
                                                        : handleClickOptions("");
                                                }}
                                                className={Styles.header_card}>
                                                <div className={Styles.header_card_heading}>Industries</div>
                                                <div className={Styles.plus_logo}>
                                                    <PlusIcon className={showOptions === "Industries" ? Styles.close : Styles.plus} />{" "}
                                                </div>
                                            </div>
                                            {showOptions === "Industries" && (
                                                <motion.div
                                                    style={{ overflow: "hidden" }}
                                                    initial={{
                                                        opacity: 1,
                                                        height: "0",
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        height: "12rem",
                                                    }}
                                                    transition={{
                                                        duration: 0.8,
                                                    }}
                                                    className={Styles.header_card_dropdown}>
                                                    <Link
                                                        href="/industries/hospitality"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            Hospitality
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/industries/corporate-workspaces"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            Corporate Workspaces
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/industries/residential-real-estate"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            Residential Real estate{" "}
                                                        </p>
                                                    </Link>
                                                    <Link
                                                        href="/industries/student-living"
                                                        style={{ cursor: "pointer", textDecoration: "none" }}
                                                        onClick={handleLinkClick}>
                                                        {" "}
                                                        <p className={Styles.header_card_content} onClick={handleCloseClick}>
                                                            Student Living{" "}
                                                        </p>
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </li>
                                        <li>
                                            {/* <div className={Styles.header_card}>
                                                <Link to="" style={{ cursor: "pointer", textDecoration: "none" }} onClick={handleLinkClick}>
                                                    {" "}
                                                    <p className={Styles.header_card_heading} onClick={handleCloseClick}>
                                                        Blogs
                                                    </p>
                                                </Link>
                                            </div> */}
                                        </li>
                                    </ul>
                                </nav>
                                <div className={Styles.menu_header_btn}>
                                    <Link href="/contact-us">
                                        <div className={Styles.hamburger_contact_btn}>
                                            <button onClick={handleCloseClick} className={Styles.header_contact_btn}>
                                                Contact Us
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </header>
    );
};
export default Header;
