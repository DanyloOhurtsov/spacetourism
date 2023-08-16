import React, { useState } from "react";
import { stylesAll } from "../styles/styles";
import { imagesFolders } from "../img/images";

export const Crew = () => {
    const styles = stylesAll.crew;
    const images = imagesFolders.crew;
    const infoCrew = [
        {
            id: 0,
            position: "Commander",
            name: "Douglas Hurley",
            desc: "Douglas Gerald Hurley is an American engineer,former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            image: images.crew1,
        },
        {
            id: 1,
            position: "Mission Specialist ",
            name: "MARK SHUTTLEWORTH",
            desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            image: images.crew2,
        },
        {
            id: 2,
            position: "PILOT",
            name: "Victor Glover",
            desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
            image: images.crew3,
        },
        {
            id: 3,
            position: "Flight Engineer",
            name: "Anousheh Ansari",
            desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            image: images.crew4,
        },
    ];
    const [touchStartX, setTouchStartX] = useState(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideChange = (index) => {
        setActiveSlide(index);
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStartX !== null) {
            const touchEndX = e.changedTouches[0].clientX;
            const touchDiff = touchEndX - touchStartX;

            if (touchDiff > 50) {
                const newActiveSlide =
                    activeSlide === 0 ? infoCrew.length - 1 : activeSlide - 1;
                setActiveSlide(newActiveSlide);
            } else if (touchDiff < -50) {
                const newActiveSlide =
                    activeSlide === infoCrew.length - 1 ? 0 : activeSlide + 1;
                setActiveSlide(newActiveSlide);
            }

            setTouchStartX(null);
        }
    };

    return (
        <div className={styles.crewComp}>
            <div
                className={styles.contentCrew}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <h2 className={styles.titleCrew}>
                    <span>02</span>Meet your crew
                </h2>
                <div className={styles.crewPersonInfo}>
                    <div className={styles.textInfoCrew}>
                        <div className={styles.personInfoCrew}>
                            <div className={styles.namePerson}>
                                <p className={styles.position}>
                                    {infoCrew[activeSlide].position}
                                </p>
                                <h3 className={styles.name}>
                                    {infoCrew[activeSlide].name}
                                </h3>
                            </div>
                            <p className={styles.descriptionPerson}>
                                {infoCrew[activeSlide].desc}
                            </p>
                        </div>
                        <div className={styles.paginationDots}>
                            {infoCrew.map((person, index) => (
                                <div
                                    key={person.id}
                                    className={`${styles.dot} ${
                                        index === activeSlide
                                            ? styles.activeDot
                                            : ""
                                    }`}
                                    onClick={() => handleSlideChange(index)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className={`${styles.imagePerson}`}>
                        <img
                            src={infoCrew[activeSlide].image}
                            alt={infoCrew[activeSlide].name}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
