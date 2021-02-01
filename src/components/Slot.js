import React from "react";
import styles from "./Slot.module.css";

export default function Slot({ value, onClick }) {
    return (
        <button className={styles.slots} onClick={onClick}>
            <div>{value}</div>
        </button>
    );
}
