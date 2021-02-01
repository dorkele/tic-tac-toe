import React from "react";
import styles from "./WinOverlay.module.css";

export default function WinOverlay({ winner, restart }) {
    return (
        <div className={styles.overlay}>
            <div className={styles.winner}>
                {winner}
                <button onClick={restart}>Restart the game!</button>
            </div>
        </div>
    );
}
