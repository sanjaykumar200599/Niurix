import React, { useEffect, useState } from "react";
// import Niurixinstall from "assets/homepage/Niurixinstall.mp4";
// import Niurixinstall from "../../../assets/homepage/Niurixinstall.mp4"
// import boxtogether from "../../../assets/homepage/boxtogether.webp"
import Box1 from "../../../assets/homepage/Box 1.svg";
import Box2 from "../../../assets/homepage/Box 2.svg";
import Box3 from "../../../assets/homepage/Box 3.svg";
import Box4 from "../../../assets/homepage/Box 4.svg";
import Box5 from "../../../assets/homepage/Box 5.svg";

import Styles from "./hwcard.module.css";
function HardwareAnimation() {
    const [scrolling, setScrolling] = useState(1);

    // Add your custom class names here

    useEffect(() => {
        // Function to handle the scroll event
        const handleScroll = () => {
            // Check if the user has scrolled past a certain point (e.g., 100 pixels from the top)
            // if (window.scrollY > 900) {
            //     setScrolling(true);
            // } else {
            //     setScrolling(false);
            // }

            const scrollY = window.scrollY;
            const positions = [0, 200, 500, 700, 950];
            // const positions = [0, 225, 400, 600, 800];
            if (scrollY >= positions[4]) {
                setScrolling(5);
            } else if (scrollY >= positions[3]) {
                setScrolling(4);
            } else if (scrollY >= positions[2]) {
                setScrolling(3);
            } else if (scrollY >= positions[1]) {
                setScrolling(2);
            } else {
                setScrolling(1);
            }
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={Styles.video_wrapper_hardware}>
            <div className={Styles.boxes}>
                <img
                    className={
                        scrolling === 1
                            ? Styles.box1
                            : scrolling === 2
                            ? Styles.secondscroll_box1
                            : scrolling === 3
                            ? Styles.thirdscroll_box1
                            : scrolling === 4
                            ? Styles.fourthscroll_box1
                            : Styles.finalScroll1
                    }
                    src={Box5}
                />
            </div>
            <div className={Styles.boxes}>
                <img
                    className={
                        scrolling === 1
                            ? Styles.box2
                            : scrolling === 2
                            ? Styles.secondscroll_box2
                            : scrolling === 3
                            ? Styles.thirdscroll_box2
                            : scrolling === 4
                            ? Styles.fourthscroll_box2
                            : Styles.finalScroll2
                    }
                    src={Box4}
                />
            </div>
            <div className={Styles.boxes}>
                <img
                    className={
                        scrolling === 1
                            ? Styles.box3
                            : scrolling === 2
                            ? Styles.secondscroll_box3
                            : scrolling === 3
                            ? Styles.thirdscroll_box3
                            : scrolling === 4
                            ? Styles.fourthscroll_box3
                            : Styles.finalScroll3
                    }
                    src={Box3}
                />
            </div>
            <div className={Styles.boxes}>
                <img
                    className={
                        scrolling === 1
                            ? Styles.box4
                            : scrolling === 2
                            ? Styles.secondscroll_box4
                            : scrolling === 3
                            ? Styles.thirdscroll_box4
                            : scrolling === 4
                            ? Styles.fourthscroll_box4
                            : Styles.finalScroll4
                    }
                    src={Box2}
                />
            </div>
            <div className={Styles.boxes}>
                <img
                    className={
                        scrolling === 1
                            ? Styles.box5
                            : scrolling === 2
                            ? Styles.secondscroll_box5
                            : scrolling === 3
                            ? Styles.thirdscroll_box5
                            : scrolling === 4
                            ? Styles.fourthscroll_box5
                            : Styles.finalScroll5
                    }
                    src={Box1}
                />
            </div>
        </div>
    );
}

export default HardwareAnimation;
