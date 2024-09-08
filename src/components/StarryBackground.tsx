import React, { useRef, useEffect } from "react";

function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
  }[] = [];

  const numStars = 50; // Mueve la declaración de numStars fuera de initStars

  const initStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const documentHeight = document.documentElement.scrollHeight;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * documentHeight,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 + 0.5,
        speedY: Math.random() * 2 + 0.5,
      });
    }
  };

  const updateStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach((star) => {
      star.x += star.speedX;
      star.y += star.speedY;

      if (star.x > canvas.width) star.x = 0;
      if (star.y > canvas.height) star.y = 0;
      if (star.x < 0) star.x = canvas.width;
      if (star.y < 0) star.y = canvas.height;

      ctx.fillStyle = "white";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "white";
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
      ctx.fill();
    });
  };

  const animateStars = () => {
    updateStars();
    requestAnimationFrame(animateStars);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const documentHeight = document.documentElement.scrollHeight;
    canvas.width = window.innerWidth;
    canvas.height = documentHeight;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resizeCanvas();
    initStars(); // Inicializa las estrellas una sola vez
    window.addEventListener("resize", resizeCanvas);
    animateStars();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0"></canvas>;
}

export default StarryBackground;
