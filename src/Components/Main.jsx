import React, { useState } from "react";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import styles from "../styles/navbar.module.scss";
import { Destination } from "./destination/Destination";
import { Crew } from "./Crew";
import { Technology } from "./Technology";

export const Main = () => {
    const [activeButtonIndex, setActiveButtonIndex] = useState("HOME");
    const [showHOME, setShowHOME] = useState(true);
    const [showDESTINATION, setShowDESTINATION] = useState(false);
    const [showCREW, setShowCREW] = useState(false);
    const [showTECHNOLOGY, setShowTECHNOLOGY] = useState(false);
    const setters = {
        setShowHOME,
        setShowDESTINATION,
        setShowCREW,
        setShowTECHNOLOGY,
    };

    return (
        <div>
            <Navbar value={{ styles, setters, activeButtonIndex, setActiveButtonIndex }} />
            {showHOME && <Hero value={{setters, setActiveButtonIndex, activeButtonIndex}}/>}
            {showDESTINATION && <Destination />}
            {showCREW && <Crew />}
            {showTECHNOLOGY && <Technology />}
        </div>
    );
};
