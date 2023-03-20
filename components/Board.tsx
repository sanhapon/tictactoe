import { useEffect, useState } from "react";
import styles from './Board.module.scss';

const winList = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

const Board = () => {
    const [selected, setSelectd] = useState(new Array(9).fill(null));
    const [winerLine, setWinnerLine] = useState<number[]>([]);
    const [isX, setIsX] = useState<boolean | null>(null);

    useEffect(() => {
        if (isX !== null) {
            const toFind = isX ? "X" : "O";
            const selectedList :number[] = [];

            let i = 0;
            for(i = 0; i<selected.length; i++) {
                if (selected[i] === toFind) {
                    selectedList.push(i);
                }
            }

            for(let win of winList) {
                const winner = win.reduce((prev, curr) => { return prev && selectedList.includes(curr); }, true);
                if (winner) {
                    setWinnerLine(win);
                    console.log(win)
                    break;
                }
            }
        }

    }, [isX, selected])

    const onClick = (ind: number) => {
        if (selected[ind] === null) {
            const target = isX ? "O" : "X";
            setIsX(!isX);

            const newSelected = selected.map((s, i) => ind === i? target : s);
            setSelectd(newSelected);
        }
    }

    return (
        <div className={styles.Board}>
            {selected.map((item, ind) => {
                return (
                    <button key={ind}
                        className={winerLine.includes(ind) ? styles.Win : ""}
                        onClick={(e) => onClick(ind)}>{selected[ind]}
                    </button>
                );
            })}
        </div>
    )
}

export default Board;
