const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Know the difference when to use fillStyle and strokeStyle

// Draw rectangle

ctx.fillStyle = 'green';    // used to fill something in
ctx.fillRect(10, 10, 150, 100);

// Draw Circle
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fill();

// Draw lines

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw Text
ctx.font = '30px Arial';
ctx.lineWidth = 3;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillText('Hello World', 300, 100, 300);