import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";

const ConstellationCanvas = React.memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [stars, setStars] = useState<
    { x: number; y: number; z: number; vx: number; vy: number }[]
  >([]);
  const numStars = (window.innerWidth / window.innerHeight) * 100;
  const maxDepth = 30;

  const initStars = useCallback(() => {
    const newStars = [];
    for (let i = 0; i < numStars; i++) {
      newStars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * maxDepth,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }
    setStars(newStars);
  }, [numStars]);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      setCtx(canvas.getContext("2d"));
      initStars();
    }
  }, [initStars]);

  const draw = useCallback(() => {
    if (!ctx) return;
    const { width, height } = ctx.canvas;
    ctx.clearRect(0, 0, width, height);

    stars.forEach((star) => {
      // Update star position
      star.x += star.vx * (maxDepth - star.z);
      star.y += star.vy * (maxDepth - star.z);

      // Wrap around edges
      if (star.x < 0) star.x = width;
      if (star.x > width) star.x = 0;
      if (star.y < 0) star.y = height;
      if (star.y > height) star.y = 0;

      // Draw star
      const size = (1 - star.z / maxDepth) * 2;

      // play with this
      ctx.fillStyle = `rgba(255, 255, 255, ${star.z / maxDepth})`;

      // ./play with this

      ctx.beginPath();
      ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw connections
    for (let i = 0; i < stars.length; i++) {
      for (let j = i + 1; j < stars.length; j++) {
        const dx = stars[i].x - stars[j].x;
        const dy = stars[i].y - stars[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          ctx.strokeStyle = `rgba(100, 100, 100, ${1 - dist / 100})`;
          ctx.setLineDash([1, 2]);
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(stars[j].x, stars[j].y);
          ctx.stroke();
        }
      }
    }
  }, [ctx, stars]);

  useEffect(() => {
    if (!ctx) return;

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animationFrame = () => {
      draw();
      requestAnimationFrame(animationFrame);
    };

    requestAnimationFrame(animationFrame);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [ctx, draw]);

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      className="h-screen w-screen absolute pointer-events-none"
    />
  );
});

export default ConstellationCanvas;
