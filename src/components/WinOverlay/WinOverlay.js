import React from "react";
import styles from "./WinOverlay.module.css";

export default function WinOverlay({ winner, restart }) {
    let playerWon;
    if (winner === "x") {
        playerWon = "Player One won!";
    } else if (winner === "o") {
        playerWon = "Player Two won!";
    } else {
        playerWon = "It is a tie!";
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.winner}>
                {playerWon}
                <button className={styles.button} onClick={restart}>
                    New Game
                </button>
            </div>
        </div>
    );
}
