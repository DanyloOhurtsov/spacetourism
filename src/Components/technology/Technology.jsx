import React, { useState } from "react";
import { stylesAll } from "../../styles/styles";
import { imagesFolders } from "../../img/images";
import { CardTech } from "./CardTech";

export const Technology = () => {
    const styles = stylesAll.technology;
    const images = imagesFolders.technology;
    const [activeSlide, setActiveSlide] = useState(0)
    const infoForTech = [
        {
            id: 1,
            name: "LAUNCH VEHICLE",
            desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            image: images.tech1
        },
        {
            id: 2,
            name: "SPACEPORT",
            desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            image: images.tech2
        },
        {
            id: 3,
            name: "SPACE CAPSULE",
            desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            image: images.tech3
        },
    ];
    const dataForCard = infoForTech[activeSlide]

    return (
        <div className={styles.technologyComp}>
            <div className={styles.contentTech}>
                <h2 className={styles.titleTech}>
                    <span>03</span>SPACE LAUNCH 101
                </h2>
                <CardTech value={{styles, dataForCard, images, activeSlide, setActiveSlide}}/>
            </div>
        </div>
    );
};
