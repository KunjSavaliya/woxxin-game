"use client";

import { useState } from "react";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const winnerInfo = calculateWinner(board);

    const handleClick = (index) => {
        if (board[index] || winnerInfo) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? "X" : "O";
        setBoard(newBoard);
        setIsXTurn(!isXTurn);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
    };

    return (
        <div className="w-full flex flex-col items-center pb-10 justify-center mt-[-2px]  bg-[#6510d5]">

            {/* TITLE */}
            <h2 className="text-3xl md:text-5xl font-light mb-6 text-white ">
                Tic Tac Toe
            </h2>

            {/* STATUS */}
            <p className="mb-6 text-xl text-[#00E5FF]">
                {winnerInfo
                    ? `Winner: ${winnerInfo.winner}`
                    : `Turn: ${isXTurn ? "X" : "O"}`}
            </p>

            {/* BOARD */}
            <div className="grid grid-cols-3 gap-3 w-[90vw] max-w-[400px]">

                {board.map((cell, index) => {
                    const isWinning = winnerInfo?.line.includes(index);

                    return (
                        <button
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`aspect-square text-3xl md:text-5xl font-bold rounded-xl 
              flex items-center justify-center 
              transition-all duration-300 
              ${isWinning
                                    ? "bg-green-500 text-white shadow-[0_0_20px_rgba(0,255,0,0.8)]"
                                    : "bg-[#1a1a2e] text-white hover:bg-[#2a2a4a]"
                                }`}
                        >
                            {cell}
                        </button>
                    );
                })}

            </div>

            {/* RESET BUTTON */}
            <button
                onClick={resetGame}
                className="mt-8 px-6 py-3 rounded-full bg-[#00E5FF] cursor-pointer transition "
            >
                Restart Game
            </button>
        </div>
    );
}

// 🧠 Winner Logic
function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let line of lines) {
        const [a, b, c] = line;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a], line };
        }
    }

    return null;
}