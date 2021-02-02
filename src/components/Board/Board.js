import React, { useState } from "react";
import Slot from "../Slot/Slot";
import styles from "./Board.module.css";
import { calculateWinner } from "../../calculateWinner";
import WinOverlay from "../WinOverlay/WinOverlay";
import Players from "../Players/Players";

export default function Board() {
    const [slotsArray, setSlotsArray] = useState(Array(9).fill(null));
    const [currentPlayerX, setCurrentPlayerX] = useState(true);
    const winner = calculateWinner(slotsArray);

    const handleClick = (index) => {
        if (slotsArray[index]) {
            return;
        }
        slotsArray[index] = currentPlayerX ? "x" : "o";
        setCurrentPlayerX(!currentPlayerX);
        setSlotsArray(slotsArray);
    };

    const handleRestart = () => {
        setSlotsArray(Array(9).fill(null));
        setCurrentPlayerX(true);
    };

    return (
        <div className={styles.game}>
            {winner ? (
                <WinOverlay winner={winner} restart={handleRestart} />
            ) : (
                <Players currentPlayerX={currentPlayerX} />
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
