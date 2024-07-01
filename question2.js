function speedDetector(speed){
    constspeedLimit=70;
    const kmPerDemeritpoint = 5;
    const pointsperkmOverdem =1;

if (speed < speedLimit){
    console.log("ok")
    return;
}
let Demeritpoints = math.floor((speed-speedLimit)/kmPerDemeritpoint)
if (Demeritpoints > 12){
    console.log("License Suspended");
}
else {
    console.log('points: ${Demeritpoints}');
}
}
speeddetector()

