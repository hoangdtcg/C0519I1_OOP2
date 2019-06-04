let lamp = new ElectricLamp();
let switchLamp = new SwitchButton(lamp);
let count = 0;
function turnOnLamp() {

    if (count < 10){
        switchLamp.switchOn();
        switchLamp.connectToLamp();
        count++;
    } else {
        document.getElementById("lamp").innerHTML = "Den sang";
    }

}

function turnOffLamp() {

    if (count < 10){
        switchLamp.switchOff();
        switchLamp.connectToLamp();
        count++;
    } else {
        document.getElementById("lamp").innerHTML = "Den chay";
    }

}