 const image = document.querySelector('img');
 let start;
 
 let stop = false;
 function step(timeStamp) {
    if (start === undefined) {
        start = timeStamp;
    }

    const elapsed = timeStamp - start;
    if (elapsed > 5000) {
        stop = true;
    }

    if (stop) {
        return;
    }

    image.style.transform = `translateX(${elapsed / 20}px) rotate(${elapsed / 20}deg)`;

    requestAnimationFrame(step);
 }

 requestAnimationFrame(step);