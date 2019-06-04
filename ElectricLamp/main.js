let lamp = new ElectricLamp();
let hero1 = new SupperHero();
let count = 0;
let switchButton = new SwitchButton(lamp, hero1);
function turnOn() {
    if ( count < 10) {

        switchButton.switchOn();

        switchButton.connectToLamp();
        count++;
    } else {
        alert("đèn cháy, siêu anh hùng mệt mỏi");
    }

}


    function turnOff() {
    if (count < 10) {
        switchButton.switchOff();

        switchButton.connectToLamp();
        count++;
    } else {
        alert("đèn cháy, siêu anh hùng mệt mỏi");
    }
}
