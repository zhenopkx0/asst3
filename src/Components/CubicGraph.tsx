import { useRef, useEffect } from "react";

export const CubicGraph = ({
  a,
  b,
  c,
  d,
}: {
  a: number;
  b: number;
  c: number;
  d: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ✅ Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // -------------------------
    // Draw grid
    // -------------------------
    ctx.strokeStyle = "#848B79";
    ctx.lineWidth = 1;

    for (let i = 0; i <= canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }

    for (let i = 0; i <= canvas.height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    // -------------------------
    // Draw axes
    // -------------------------
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;

    ctx.beginPath();
    // x-axis
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    // y-axis
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    // -------------------------
    // Draw cubic graph
    // -------------------------
    ctx.save(); // ✅ isolate transform
    ctx.translate(canvas.width / 2, canvas.height / 2);

    const scale = 40; // adjust zoom here

    ctx.beginPath();

    let first = true;

    for (let x = -10; x <= 10; x += 0.01) {
      const y = a * x ** 3 + b * x ** 2 + c * x + d;

      const canvasX = x * scale;
      const canvasY = -y * scale;

      if (first) {
        ctx.moveTo(canvasX, canvasY);
        first = false;
      } else {
        ctx.lineTo(canvasX, canvasY);
      }
    }

    ctx.strokeStyle = "#66ccff";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore(); // ✅ reset transform
  }, [a, b, c, d]);

  
  return (
    <div className="flex justify-center mt-6">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="bg-white border border-green-200 rounded-xl shadow-md"
      />
    </div>
  );
};