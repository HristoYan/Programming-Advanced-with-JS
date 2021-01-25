function walkSolve(steps, stepLength, speed) {
    const speedInSec = speed * 1000 / 3600;
    const distance = stepLength * steps;
    let time = distance / speedInSec;
    const rest = Math.floor(distance / 500) * 60;
    time += rest;
    const hours = Math.floor(time / 3600).toFixed(0).padStart(2, "0");
    const minutes = Math.floor((time - (time / 3600)) / 60).toFixed(0).padStart(2, "0");
    const seconds = (time - hours * 3600 - minutes * 60).toFixed(0).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);
}

walkSolve(4000, 0.60, 5);