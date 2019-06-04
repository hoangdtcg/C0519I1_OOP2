let Apple = function (weight) {
    this.weight = weight;

    this.decrease = function () {
        this.weight -= 10;


    };
    this.isEmpty = function () {
        if (this.weight > 0) {
            return true;

        }
        else
            return false;

    };
    this.getWeight = function () {
        return this.weight;

    };


}