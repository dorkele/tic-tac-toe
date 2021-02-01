export const calculateWinner = (slotsArray) => {
    const arrayOfWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < arrayOfWins.length; i++) {
        const [a, b, c] = arrayOfWins[i];
        if (
            slotsArray[a] &&
            slotsArray[a] === slotsArray[b] &&
            slotsArray[a] === slotsArray[c]
        ) {
            return slotsArray[a];
        }
    }

    let tie = 0;
    for (let i = 0; i < slotsArray.length; i++) {
        if (slotsArray[i]) {
            tie++;
        }

        if (tie === 9) {
            return "Tie!";
        }
    }
    return null;
};
