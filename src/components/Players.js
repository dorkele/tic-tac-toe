import React from "react";
import styles from "./Players.module.css";

export default function Players({ currentPlayer, winner }) {
    return (
        <div className={styles.players}>
            <div
                className={
                    currentPlayer
                        ? `${styles.currentPlayer}`
                        : `${styles.otherPlayer}`
                }
            >
                x
            </div>
            <div
                className={
                    currentPlayer
                        ? `${styles.otherPlayer}`
                        : `${styles.currentPlayer}`
                }
            >
                o
            </div>
        </div>
    );
}
