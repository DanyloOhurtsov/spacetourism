import React from "react";

export const CardTech = ({ value }) => {
    const styles = value.styles;
    const infoCardTech = value.dataForCard;
    const setActiveSlide = value.setActiveSlide;
    const activeSlide = value.activeSlide;

    const setNewData = (number) => {
        setActiveSlide(number);
    };
    const buttons = [
        {
            id: 0,
            number: 1,
        },
        {
            id: 1,
            number: 2,
        },
        {
            id: 2,
            number: 3,
        },
    ];
    if (activeSlide === 0) {
        console.log(activeSlide);
    }

    return (
        <div className={styles.infoTech}>
            <div className={styles.textInfo}>
                <div className={styles.paginationButtons}>
                    {buttons.map((elem) => (
                        <button
                            key={elem.id}
                            onClick={() => setNewData(elem.id)}
                            className={`${styles.paginationButton} ${
                                activeSlide === elem.id
                                    ? styles.activeButton
                                    : ""
                            }`}
                        >
                            {elem.number}
                        </button>
                    ))}
                </div>
                <div className={styles.textInfoTech}>
                    <p className={styles.titleTech2}>THE TERMINOLOGY…</p>
                    <h2 className={styles.title1Tech}>{infoCardTech.name}</h2>
                    <p className={styles.descriptionTech}>
                        {infoCardTech.desc}
                    </p>
                </div>
            </div>
            <div className={styles.imageInfo}>
                <img src={infoCardTech.image} alt="" />
            </div>
        </div>
    );
};
