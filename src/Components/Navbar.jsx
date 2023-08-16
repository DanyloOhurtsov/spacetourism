import React, { useEffect, useState } from "react";
import { images } from "../img/images";
import { stylesAll } from "../styles/styles";

export const Navbar = ({ value }) => {
    const activeButtonIndex = value.activeButtonIndex;
    const setActiveButtonIndex = value.setActiveButtonIndex;
    const styles = stylesAll.navbar;
    const { setShowHOME, setShowDESTINATION, setShowCREW, setShowTECHNOLOGY } =
        value.setters;
    const forButtons = [
        {
            name: "HOME",
            number: "00",
        },
        {
            name: "DESTINATION",
            number: "01",
        },
        {
            name: "CREW",
            number: "02",
        },
        {
            name: "TECHNOLOGY",
            number: "03",
        },
    ];
    // MOBILE
    const [isOpenMobile, setIsOpenMobile] = useState(false);

    useEffect(() => {
        if (isOpenMobile) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100svh";
        } else {
            document.body.style.overflow = "auto";
            document.body.style.height = "auto";
        }
    }, [isOpenMobile]);
    const openMobile = () => {
        setIsOpenMobile(true);
    };
    const closeMobile = () => {
        setIsOpenMobile(false);
    };
    const addClassPagesBtn = (id) => {
        const toggleMap = {
            HOME: setShowHOME,
            DESTINATION: setShowDESTINATION,
            CREW: setShowCREW,
            TECHNOLOGY: setShowTECHNOLOGY,
        };
        const toggleFunction = toggleMap[id];
        if (toggleFunction) {
            if (activeButtonIndex === id) {
                return;
            }
            Object.keys(toggleMap).forEach((key) => {
                if (key !== id) {
                    toggleMap[key](false);
                }
            });
            toggleFunction((prevState) => !prevState);
            setActiveButtonIndex(id);
        }
    };

    return (
        <div className={styles.navbarComp}>
            <div className={styles.insideNavbar}>
                <a href="index.html" className={styles.headerLogo}>
                    <img src={images.headerLogo} alt="headerLogo" />
                </a>
                {/* DESKTOP */}
                <div className={styles.navigationNavbar}>
                    {forButtons.map((button) => (
                        <button
                            key={button.number}
                            className={`${styles.btnNavbar} ${
                                activeButtonIndex === button.name
                                    ? `${styles.activebtnNavbar}`
                                    : ""
                            }`}
                            onClick={() => addClassPagesBtn(button.name)}
                        >
                            <span>{button.number}</span>
                            {button.name}
                        </button>
                    ))}
                </div>
                {/* MOBILE */}
                <div className={styles.navigationNavBarMobile}>
                    <button
                        className={styles.openMobileNavbar}
                        onClick={openMobile}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
            {isOpenMobile === true && (
                <div className={styles.contentNavigationMobile}>
                    <div className={styles.topContentNavigationMobile}>
                        <button
                            className={styles.closeMobileNavbar}
                            onClick={closeMobile}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div className={styles.buttonsMobile}>
                        {forButtons.map((button, index) => (
                            <button
                                key={button.number}
                                className={`${styles.btnNavbarMobile} ${
                                    activeButtonIndex === button.name
                                        ? `${styles.activebtnNavbarMobile}`
                                        : ""
                                }`}
                                onClick={() => {
                                    addClassPagesBtn(button.name);
                                    closeMobile();
                                }}
                            >
                                <span>{button.number}</span>
                                {button.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
