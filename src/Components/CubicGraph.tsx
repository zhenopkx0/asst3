export const CubicGraph = () => {

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

function drawCoordinateAxes() {
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
  }
  
  function drawGrid() {
    if (ctx) {
      for ( let i = 25; i < canvas.width; i += 45) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.strokeStyle = "#5F9EA0";
        ctx.lineWidth= 1.5;
        ctx.stroke();
      }
      for ( let i = -10; i < canvas.height; i += 45) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.strokeStyle = "#FFA8C5";
        ctx.lineWidth= 1.5;
        ctx.stroke();
    }
  }
  }
  
  function drawCubicFunction(a: number, b: number, c: number, d: number) {
    if (ctx) { 
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.beginPath();
      for (let x = -250; x <= 250; x=x+0.1) {
        const y = a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
        const canvasX = x;
        const canvasY = -y;
        if (x === -canvas.width / 2) {
          ctx.moveTo(canvasX*45, canvasY*45);
        } else {
          ctx.lineTo(canvasX*45, canvasY*45);
        }
      }
      ctx.strokeStyle = "#66ccff";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
  
  function circleRoots(a: number, b: number, c: number, d: number) {
    if (ctx) {
      ctx.beginPath();
      for (let x = -250; x <= 250; x=x+0.1) {
        const y = a * Math.pow(x, 3) + b * Math.pow(x, 2) + c * x + d;
        const canvasX = x;
        const canvasY = -y;
        if (Math.abs(canvasY) <= 0.0001) {
          ctx.arc(canvasX*45, canvasY*45, 5, 0, 2 * Math.PI);
        }
      }
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  function updateGraph(a: number, b: number, c: number, d: number) {
    if (ctx) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(); 
    drawCoordinateAxes();
    drawCubicFunction(a, b, c, d); 
    circleRoots(a, b, c, d);
    }
  }
}