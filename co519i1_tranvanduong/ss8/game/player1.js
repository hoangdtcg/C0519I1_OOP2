function player1(health) {
    this.health = health;

    this.decreaseHP = function () {
        this.health--;


    }
    this.isAlive = function () {
        if(this.health<=0){
            return false;
        }
        return true;


    }
    this.check = function (player) {



    }
}