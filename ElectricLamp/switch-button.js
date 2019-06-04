function SwitchButton(lamp, supperhero) {
    this.status = true;
    this.lamp = lamp;
    this.supperhero = supperhero;
    this.connectToLamp = function () {
        if (this.status) {
            this.lamp.turnOn();
        } else {
            this.lamp.turnOff();
        }
        if (this.status) {
            this.supperhero.turnOn();
        } else {
            this.supperhero.turnOff();
        }
    };
    this.switchOff = function () {
        this.status = false;
    };
    this.switchOn = function () {
        this.status = true;
    };
}
