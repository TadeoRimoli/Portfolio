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

  const numStars = 50;

  const initStars = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rootDiv = document.getElementById("root");
    if (!rootDiv) return;

    const documentHeight = rootDiv.offsetHeight; // Usa la altura del div 'root'

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * documentHeight, // Usa la altura total del documento para las estrellas
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

    const rootDiv = document.getElementById("root");
    if (!rootDiv) return;
    const documentHeight = rootDiv.offsetHeight; // Usa la altura del div 'root'

    stars.forEach((star) => {
      star.x += star.speedX;
      star.y += star.speedY;

      // Si la estrella sale por abajo del div, la reinicia en la parte superior
      if (star.x > canvas.width) star.x = 0;
      if (star.y > documentHeight) {
        star.y = 0; // Reinicia su posición en la parte superior del div
        star.x = Math.random() * canvas.width; // También reinicia la posición en X
      }
      if (star.x < 0) star.x = canvas.width;
      if (star.y < 0) star.y = 0;

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
    const rootDiv = document.getElementById("root"); // Obtiene el div con id 'root'
    if (!rootDiv) return;

    canvas.width = window.innerWidth;
    canvas.height = rootDiv.offsetHeight; // Ajusta la altura al tamaño del div 'root'
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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
