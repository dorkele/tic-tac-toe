import React, { useState } from "react";
import Slot from "./Slot";
import styles from "./Board.module.css";
import { calculateWinner } from "./calculateWinner";

export default function Board() {
    // ovo probaj bez use state, ako ne pazis na data immutability, ako
    // da, dodaj undo funkciju
    const [slotsArray, setSlotsArray] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState(true);
    const winner = calculateWinner(slotsArray);

    const handleClick = (index) => {
        slotsArray[index] = currentPlayer ? "X" : "O";
        setCurrentPlayer(!currentPlayer);
        setSlotsArray(slotsArray);
        console.log(winner);
    };

    return (
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
            <div>Current Player: {currentPlayer ? "X" : "O"}</div>
        </div>
    );
}
