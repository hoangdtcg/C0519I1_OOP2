function SwitchLamp(lamp){
    this.status = true;
    this.lamp = lamp;
    this.connectTolamp = function(){
        if(this.status){
            this.lamp.turnOn();
        }else{
            this.lamp.turnOff();
        }
    };
    this.switchOn = function(){
        this.status = true;
    };
    this.switchOff = function(){
        this.status = false;
    }
}