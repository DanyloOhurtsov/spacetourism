import React from "react";
import styles from "../styles/hero.module.scss";

export const Hero = ({ value }) => {
    const setActiveButtonIndex = value.setActiveButtonIndex;
    const { setShowHOME, setShowDESTINATION, setShowCREW, setShowTECHNOLOGY } =
        value.setters;
    const addClassPagesBtn = (id) => {
        const toggleMap = {
            HOME: setShowHOME,
            DESTINATION: setShowDESTINATION,
            CREW: setShowCREW,
            TECHNOLOGY: setShowTECHNOLOGY,
        };
        const toggleFunction = toggleMap[id];
        if (toggleFunction) {
            Object.keys(toggleMap).forEach((key) => {
                if (key !== id) {
                    toggleMap[key](false);
                }
            });

            toggleFunction((prevState) => !prevState);
            setActiveButtonIndex("DESTINATION");
        }
        console.log(id);
    };

    return (
        <div className={styles.heroComp}>
            <div className={styles.contentHero}>
                <div className={styles.textContent}>
                    <h5>SO, YOU WANT TO TRAVEL TO</h5>
                    <h1>space</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <button
                    className={styles.exploreBtn}
                    onClick={() => {
                        addClassPagesBtn("DESTINATION");
                    }}
                >
                    explore
                </button>
            </div>
        </div>
    );
};
