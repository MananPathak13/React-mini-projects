import React, { useEffect, useState } from 'react'
import './styles.css'

function Square({ value, onClick }) {
    return (<button onClick={onClick} className='square'>{value}</button>)
}


const TicTacToe = () => {

    const [square, setSquare] = useState(Array(9).fill(""))
    const [firstTurn, setFirstTurn] = useState(true);
    const [winner, setWinner] = useState(null)

    const updateButton = (index) => {

        const tempArray = [...square];
        if (tempArray[index] == "") {
            if (firstTurn) {
                tempArray[index] = "O";
            } else {
                tempArray[index] = "X";
            }
            setFirstTurn(!firstTurn);
        }
        setSquare(tempArray);
    };

    function checkWinings() {

        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
        ];

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i];

            if (square[x] && square[y] === square[x] && square[z] === square[x] && winner === null) {
                setWinner(square[x])
            }
        }
    }

    const handleRestart = () => {
        setSquare(Array(9).fill(""));
        setFirstTurn(true);
        setWinner(null);

    }
    useEffect(() => {
        checkWinings();
    }, [firstTurn]);
    return (
        <div className='tictactoe-container'>
            <div className='row'>
                <Square value={square[0]} onClick={() => updateButton(0)} />
                <Square value={square[1]} onClick={() => updateButton(1)} />
                <Square value={square[2]} onClick={() => updateButton(2)} />
            </div>
            <div className='row'>
                <Square value={square[3]} onClick={() => updateButton(3)} />
                <Square value={square[4]} onClick={() => updateButton(4)} />
                <Square value={square[5]} onClick={() => updateButton(5)} />
            </div>
            <div className='row'>
                <Square value={square[6]} onClick={() => updateButton(6)} />
                <Square value={square[7]} onClick={() => updateButton(7)} />
                <Square value={square[8]} onClick={() => updateButton(8)} />
                <h1 className='winner'>Winner:  {winner === null ? "None" : winner}</h1>
                <button onClick={() => handleRestart()}>Restart</button>
            </div>

        </div >
    )
}

export default TicTacToe
