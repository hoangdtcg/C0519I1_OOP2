// Tạo mới đối tượng bóng đènlet
lamp = new ElectricLamp();
// Tạo mới đối tượng công tắc
let switchButton = new SwitchButton(lamp);
// Hàm bật công tắc
function turnOn() {
    switchButton.switchOn();
    switchButton.connectToLamp();}// Hàm tắt công tắc
function turnOff() {
    switchButton.switchOff();
    switchButton.connectToLamp();}