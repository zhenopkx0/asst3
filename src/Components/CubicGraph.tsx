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

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // -------------------------
    // Draw grid (soft sage)
    // -------------------------
    ctx.strokeStyle = "#d6e2cf";
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
    // Draw axes (earthy dark)
    // -------------------------
    ctx.strokeStyle = "#5c6b4f";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();

    // -------------------------
    // Draw cubic graph
    // -------------------------
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);

    const scale = 40;

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

    // 🌿 earthy green line
    ctx.strokeStyle = "#6b8e23";
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.restore();
  }, [a, b, c, d]);

  return (
    <div className="flex justify-center mt-10">
      <div
        className="
          bg-[#f4f7f2] 
          border border-[#c8d5c0] 
          rounded-2xl 
          shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
          p-6
        "
      >
        <h2 className="text-center text-[#5c6b4f] font-semibold mb-4">
          Cubic Graph
        </h2>

        <canvas
          ref={canvasRef}
          width={400}
          height={400}
          className="
            bg-[#fdfdf9] 
            border border-[#a3b18a] 
            rounded-xl 
            shadow-inner
          "
        />
      </div>
    </div>
  );
};