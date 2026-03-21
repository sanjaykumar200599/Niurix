import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Styles from "./contactus.module.css";
import "./contactus.css";
import { validateEmail } from "../../helper/ValidateEmail";
import Banner from "../../assets/contactus/banner.webp";
import MobileProduct from "../../assets/contactus/all product mobile.webp";
import MobileBanner from "../../assets/contactus/Contact banner mobile.webp";
import Contactimg from "../../assets/contactus/all product.webp";
import Productimg from "../../assets/contactus/Product.webp";
import Layersvg from "../../assets/contactus/Layer 2.svg";
import axios from "axios";

const ConatctUs = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    const handleWindowSize = () => {
        setIsMobile(window.innerWidth <= 767);
    };

    useEffect(() => {
        handleWindowSize();
    }, [window.innerWidth <= 767]);
    const [Name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [sent, setSent] = useState(false);
    let timeoutVar;

    const validateForm = () => {
        let isValid = true;

        if (Name === "") {
            setName("");
            isValid = false;
        }

        if (email === "" || !validateEmail(email)) {
            setEmail("");
            isValid = false;
        }
        return isValid;
    };
    const sendInformation = () => {
        clearTimeout(timeoutVar);
        if (validateForm()) {
            const dataObj = {
                name: `${Name}`,
                email: email,
                phoneNumber: phoneNumber,
                message: message,
            };
            setResponse("Message is being sent...");
            axios
                .post("https://app.sclera.com/alert/acknowledgementEmail", dataObj, {
                    headers: { "Content-Type": "application/json" },
                })

                .then((response) => {
                    setName("");
                    setEmail("");
                    setPhoneNumber("");
                    setMessage("");
                    setResponse("Message has been sent successfully.");
                    setSent(true);
                })
                .catch((error) => {
                    setResponse("Message not sent! Please try again.");
                    setSent(false);
                })
                .finally(() => {
                    setIsLoading(false);
                    setSubmitted(false);

                    timeoutVar = setTimeout(() => {
                        setResponse("");
                    }, 5000);
                });
        } else {
            timeoutVar = setTimeout(() => {
                setIsLoading(false);
                setSubmitted(false);
            }, 5000);
        }
        setResponse("");
        setIsLoading(true);
        setSubmitted(true);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    const handlePhoneChange = (value, country, e, formattedValue) => {
        setPhoneNumber(formattedValue);

        setSubmitted(false);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setSubmitted(false);
    };
    return (
        <main>
            <div>
                {/* for img and title */}
                <div className={Styles.contact_us_section_banner}>{isMobile ? <img src={MobileBanner} /> : <img src={Banner} />}</div>
                <div className={Styles.contact_section_banner_content}>
                    Want to know more about our product? Have any query? Or just simply want to say hello! We would love to hear from you.{" "}
                </div>
            </div>
            <div className={Styles.contact_us_main}>
                <div className={Styles.contact_us_content}>
                    <div className={Styles.contact_us_heading_content}>
                        <p className={Styles.contact_us_main_heading}>
                            <span className={Styles.contact_us_subpart}>Contact</span>
                            <span className={Styles.us}> Us</span>
                        </p>
                        <p className={Styles.contact_us_main_heading_content}>
                            Niurix is headquartered at the beautiful city of Illinois, USA. To contact us, use any of the below means and we
                            will always be available to assist you.
                        </p>
                    </div>

                    <div className={Styles.contact_details}>
                        <div className={Styles.contact_us_subdetails1}>
                            <p className={Styles.contact_us_address}>Address</p>
                            <p className={Styles.contactus_full_address}>2130 Foster Ave
Wheeling IL, 60090
USA</p>
                        </div>
                        <div className={Styles.contact_us_subdetails2}>
                            <div className={Styles.contactno_main}>
                                <p className={Styles.contact_no}>Contact No.</p>
                                <span>+1 847-957-6900</span>
                            </div>
                            <div className={Styles.emailid_main}>
                                <p className={Styles.contact_no}>Email ID</p>
                                <span>salesinfo@niurix.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Styles.product_img}>
                    <img src={Productimg} />
                </div>
            </div>
            <div className={Styles.getintouch_container}>
                <div className={Styles.getintouch_subcontainer}>
                    <p className={Styles.contact_us_main_heading}>
                        <span className={Styles.contact_us_subpart}>Get in</span> <span className={Styles.touch}>Touch</span>
                    </p>
                    <p className={Styles.contact_main_heading_content}>
                        Let's connect. Your feedback, questions, and ideas matter to us and we are there to provide answers and support.
                        Enter your details in the form below and we will be in touch with you as soon as possible.
                    </p>

                    <form className={Styles.contactus_form}>
                        <div className={Styles.contact_us_form}>
                            {/* first row  */}
                            <div className={Styles.name_form}>
                                <input
                                    className={Styles.name_input}
                                    type="text"
                                    id="first_name"
                                    value={Name}
                                    placeholder="Name"
                                    onChange={handleNameChange}
                                />

                                {submitted && !Name && <div>Name cannot be empty!</div>}
                            </div>

                            {/* phone number */}

                            <div className={Styles.phone_form}>
                                <PhoneInput
                                    className={Styles.phone_input}
                                    placeholder="Phone Number"
                                    id="phone"
                                    country="us"
                                    enableSearch={true}
                                    value={phoneNumber}
                                    disabled={false}
                                    onChange={handlePhoneChange}
                                />
                            </div>
                        </div>
                        {/* email */}
                        <div className={Styles.name_form}>
                            <input
                                className={Styles.name_input}
                                id="email"
                                type="text"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Email"
                            />
                            {submitted && !email && <div>Work email cannot be empty!</div>}
                        </div>
                        {/* message */}
                        <div className={Styles.message_form}>
                            <textarea
                                className={Styles.message_input}
                                id="message"
                                value={message}
                                onChange={handleMessageChange}
                                placeholder="Message"
                            />
                        </div>
                        <div id="response"></div>
                        <div className={Styles.contact_us_submit}>
                            <button
                                className={Styles.submit_btn}
                                type="button"
                                id="sendmail"
                                onClick={sendInformation}
                                disabled={isLoading}>
                                Submit
                            </button>
                        </div>
                        {response && (
                            <div className={sent ? Styles.response : Styles.response3}>
                                <div className={Styles.response2}>{response}</div>
                            </div>
                        )}
                    </form>
                </div>

                {/* tech support */}
                <div className={Styles.tech_support_main}>
                    <div className={Styles.contact_us_tech_support}>
                        <div className={Styles.contact_us_tech_support_heading}>
                            <div className={Styles.contact_us_icon_block}>
                                <img src={Layersvg} />{" "}
                            </div>
                            <div className={Styles.technical_support}>
                                <p className={Styles.technical_support_font}> Technical support</p>
                            </div>
                        </div>
                        <div className={Styles.contact_number}>
                            <p className={Styles.contactno_font}>Contact No.</p>
                            <span className={Styles.number}>+1 847-957-6900</span>
                        </div>
                        <div className={Styles.mail_id}>
                            <p className={Styles.mail}>Email ID</p>
                            <span className={Styles.niurix_mail}>support@niurix.com</span>
                        </div>
                    </div>
                </div>

                {/* submit */}
            </div>

            {/* niurix box  */}
            <div className={Styles.box_img}>{isMobile ? <img src={MobileProduct} /> : <img src={Contactimg} />}</div>
        </main>
    );
};

export default ConatctUs;
