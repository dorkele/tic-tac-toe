import React, { useState } from "react";
import Slot from "./Slot";
import styles from "./Board.module.css";
import { calculateWinner } from "./calculateWinner";
import WinOverlay from "./WinOverlay";
import Players from "./Players";

export default function Board() {
    const [slotsArray, setSlotsArray] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState(true);
    const winner = calculateWinner(slotsArray);

    const handleClick = (index) => {
        if (slotsArray[index]) {
            return;
        }
        slotsArray[index] = currentPlayer ? "x" : "o";
        setCurrentPlayer(!currentPlayer);
        setSlotsArray(slotsArray);
    };

    const handleRestart = () => {
        setSlotsArray(Array(9).fill(null));
        setCurrentPlayer(true);
    };

    return (
        <div className={styles.game}>
            {winner ? (
                <WinOverlay winner={winner} restart={handleRestart} />
            ) : (
                <Players currentPlayer={currentPlayer} winner={winner} />
            )}

            <div className={styles.board}>
                {slotsArray.map((slot, index) => {
                    return (
                        <Slot
                            key={index}
                            onClick={() => handleClick(index)}
                            value={slot}
                        />
                    );
                })}
            </div>
        </div>
    );
}
