"use client";

import { useEffect, useRef, useState } from "react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];

export default function SnakeGame() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [dir, setDir] = useState({ x: 1, y: 0 });
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(350);
  const [gameOver, setGameOver] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showEat, setShowEat] = useState(false);

  const randomFood = () => ({
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE)
  });

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(randomFood());
    setDir({ x: 1, y: 0 });
    setScore(0);
    setSpeed(350);
    setGameOver(false);
    setPaused(false);
    setRunning(true);
  };

  const togglePause = () => {
    if (!running) return;
    setPaused(p => !p);
  };

  // 🎮 Game Loop
  useEffect(() => {
    if (!running || paused) return;

    const interval = setInterval(() => {
      setSnake(prev => {
        const head = prev[0];
        const newHead = {
          x: head.x + dir.x,
          y: head.y + dir.y
        };

        // Collision
        if (
          newHead.x < 0 ||
          newHead.y < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y >= GRID_SIZE ||
          prev.some(s => s.x === newHead.x && s.y === newHead.y)
        ) {
          setRunning(false);
          setGameOver(true);
          return prev;
        }

        let newSnake = [newHead, ...prev];

        if (newHead.x === food.x && newHead.y === food.y) {
          setFood(randomFood());
          setScore(s => s + 1);

          setShowEat(true);
          setTimeout(() => setShowEat(false), 500);

          setSpeed(s => Math.max(s - 10, 200));
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [dir, food, running, paused, speed]);

  // 🎨 Draw
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width, height;

    if (isFullscreen) {
      width = window.innerWidth;
      height = window.innerHeight;
    } else {
      width = 400;
      height = 400;
    }

    canvas.width = width;
    canvas.height = height;

    const cell = Math.min(width, height) / GRID_SIZE;

    // Background
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, width, height);

    // Snake
    snake.forEach((s, i) => {
      ctx.fillStyle = i === 0 ? "#4ade80" : "#22c55e";
      ctx.beginPath();
      ctx.roundRect(s.x * cell, s.y * cell, cell, cell, 8);
      ctx.fill();
    });

    // Eyes
    const head = snake[0];
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(head.x * cell + cell * 0.3, head.y * cell + cell * 0.3, 3, 0, Math.PI * 2);
    ctx.arc(head.x * cell + cell * 0.7, head.y * cell + cell * 0.3, 3, 0, Math.PI * 2);
    ctx.fill();

    // Food
    ctx.fillStyle = "#f97316";
    ctx.beginPath();
    ctx.arc(
      food.x * cell + cell / 2,
      food.y * cell + cell / 2,
      cell * 0.35,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }, [snake, food, isFullscreen]);

  // ⌨ Controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowUp") setDir({ x: 0, y: -1 });
      if (e.key === "ArrowDown") setDir({ x: 0, y: 1 });
      if (e.key === "ArrowLeft") setDir({ x: -1, y: 0 });
      if (e.key === "ArrowRight") setDir({ x: 1, y: 0 });
      if (e.key === " ") togglePause();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [running]);

  // Fullscreen listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Resize fix
  useEffect(() => {
    const handleResize = () => {
      setSnake(s => [...s]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`w-full mt-[-2px] pb-10 pt-10 ${isFullscreen ? "fixed inset-0 h-full z-50" : ""
        } flex flex-col items-center justify-center text-white relative bg-[#6510d5]`}
    >
      {/* TOP BAR (ONLY FULLSCREEN) */}
      {!isFullscreen && (
        <h2 className="text-3xl md:text-5xl font-light mb-16 text-white ">
          Snake Game
        </h2>
      )}
      {isFullscreen && (

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-4 z-10">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className="px-3 py-1.5 bg-purple-600 rounded text-sm"
            >
              Exit
            </button>

            {!running && (
              <button
                onClick={startGame}
                className="px-3 py-1.5 bg-orange-500 rounded text-sm"
              >
                Start
              </button>
            )}

            {running && (
              <button
                onClick={togglePause}
                className="px-3 py-1.5 bg-yellow-500 rounded text-sm"
              >
                {paused ? "Resume" : "Pause"}
              </button>
            )}
          </div>

          <h2 className="absolute left-1/2 -translate-x-1/2 text-xl">
            Snake Game
          </h2>

          <div className="text-lg text-[#00E5FF] relative">
            Score: {score}
            {showEat && (
              <span className="absolute -top-5 right-0 text-green-400 text-sm animate-bounce">
                +1 🍎
              </span>
            )}
          </div>
        </div>
      )}

      {/* GAME */}
      <div className="w-full flex flex-col items-center justify-center">
        <canvas
          ref={canvasRef}
          className={`
    ${isFullscreen ? "" : "rounded-lg"}
    w-[360px] sm:w-[450px] lg:w-[420px]
    h-[360px] sm:h-[450px] lg:h-[420px]
  `}
        />
        {/* CONTROLS BELOW (NORMAL MODE) */}
        {!isFullscreen && (
          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="text-xl text-[#00E5FF] relative ">
              Score: {score}
              {showEat && (
                <span className="absolute -top-5 right-0 text-green-400 text-sm animate-bounce">
                  +1
                </span>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {!running && (
                <button
                  onClick={startGame}
                  className="px-4 py-2 bg-orange-500 rounded-md text-xl"
                >
                  Start
                </button>
              )}

              {running && (
                <button
                  onClick={togglePause}
                  className="px-4 py-2 bg-yellow-500 rounded-md text-xl"
                >
                  {paused ? "Resume" : "Pause"}
                </button>
              )}

              <button
                onClick={toggleFullscreen}
                className="px-4 py-2 bg-purple-600 rounded-md text-xl"
              >
                Fullscreen
              </button>
            </div>
          </div>
        )}
      </div>

      {/* GAME OVER */}
      {gameOver && (
        <div className="absolute inset-0 bg-[#6510d5]/90 flex flex-col items-center justify-center">
          <h3 className="text-3xl text-red-500 mb-4">Game Over 💀</h3>
          <p className="mb-4 text-lg">Score: {score}</p>
          <button
            onClick={startGame}
            className="px-8 py-3 bg-orange-500 rounded-full"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}