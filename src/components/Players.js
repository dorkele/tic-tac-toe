import React from "react";
import styles from "./Players.module.css";

export default function Players({ currentPlayerX }) {
    return (
        <div className={styles.players}>
            <div
                className={
                    currentPlayerX
                        ? `${styles.currentPlayer}`
                        : `${styles.otherPlayer}`
                }
            >
                x
            </div>
            <div
                className={
                    currentPlayerX
                        ? `${styles.otherPlayer}`
                        : `${styles.currentPlayer}`
                }
            >
                o
            </div>
        </div>
    );
}
