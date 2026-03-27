import { useRef, useEffect } from 'react';

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

  if (ctx) {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2.5;
    ctx.stroke();
  }

  if (ctx) {
    for (let i = 0; i < canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.strokeStyle = "#848B79";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.strokeStyle = "#848B79";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

    if (ctx) {
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.beginPath();
      for (let x = -250; x <= 250; x = x + 0.1) {
        const y = a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
        const canvasX = x;
        const canvasY = -y;
        if (x === -canvas.width / 2) {
          ctx.moveTo(canvasX * 45, canvasY * 45);
        } else {
          ctx.lineTo(canvasX * 45, canvasY * 45);
        }
      }
      ctx.strokeStyle = "#848B79";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
   
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




