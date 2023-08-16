import React from "react";
import styles from "../../styles/destination.module.scss";

export const CardDest = ({ value }) => {
    const infoCard = value.infoCard;
    const setActiveCard = value.setActiveCard;
    const activeCard = value.activeCard;
    const buttons = [
        {
            id: 0,
            name: "Moon",
        },
        {
            id: 1,
            name: "Mars",
        },
        {
            id: 2,
            name: "Europa",
        },
        {
            id: 3,
            name: "Titan",
        },
    ];
    const toggleActive = (id) => {
        setActiveCard(id);
    };
    return (
        <div className={styles.cardsDest}>
            <div className={styles.imgCard}>
                <img src={infoCard.image} alt="" />
            </div>
            <div className={styles.infoCard}>
                <div className={styles.buttonsCard}>
                    {buttons.map((button) => (
                        <button
                            key={button.id}
                            className={`${styles.cardButton} ${
                                activeCard === button.id
                                    ? `${styles.activeCardButton}`
                                    : ""
                            }`}
                            onClick={() => toggleActive(button.id)}
                        >
                            {button.name}
                        </button>
                    ))}
                </div>
                <div className={styles.textInfoCard}>
                    <div className={styles.top}>
                        <p className={styles.titleCardPlanet}>
                            {infoCard.title}
                        </p>
                        <p className={styles.descriptionCard}>
                            {infoCard.desc}
                        </p>
                    </div>
                    <div className={styles.lineCard}></div>
                    <div className={styles.travelDataCard}>
                        <div className={styles.itemTravel}>
                            <p className={styles.titleTravel}>
                                Avg. distance
                            </p>
                            <p className={styles.valueTravel}>
                                {infoCard.distance}
                            </p>
                        </div>
                        <div className={styles.itemTravel}>
                            <p className={styles.titleTravel}>
                                est. travel time
                            </p>
                            <p className={styles.valueTravel}>
                                {infoCard.time}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
