function timeToWalk(steps, footprintLength, speedKmH) {
    let distance = steps * footprintLength;
    let speedMs = speedKmH * (5/18);
    let walkingTimeS = distance / speedMs;
    let numberOfBreaks = Math.floor(distance / 500);
    let breakTimeS = numberOfBreaks * 60;
    let totalTimeS = walkingTimeS + breakTimeS;
    let hours = Math.floor(totalTimeS / 3600).toString().padStart(2, "0");
    let minutes = Math.floor((totalTimeS % 3600) / 60).toString().padStart(2, "0");
    let seconds = Math.round(totalTimeS % 60).toString().padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds}`);
}