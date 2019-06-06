function SwitchButton(lamp) {
   this.status = true;
   this.lamp = lamp;

   this.connectToLamp = function () {
       if ( this.status){
           this.lamp.turnOn();
       } else {
           this.lamp.turnOff();
       }
   };

   this.switchOff = function () {
       this.status = false;
   };
   this.switchOn = function () {
       this.status = true;
   };
}