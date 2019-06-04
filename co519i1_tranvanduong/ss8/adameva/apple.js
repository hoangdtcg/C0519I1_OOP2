function Apple(weight) {

    this.weight = weight;
    this.appleinfo = function () {
        return "can nang con lai cua qua tao la" + this.weight;

    }

    this.decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    }

    this.isEmpty = function () {
        if (this.weight <= 0) {
            return true;
        }
        return false;


    }


    this.getWeight = function () {
        return this.weight;

    }
}


    
