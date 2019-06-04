function Apple(weight) {
    this.weight = weight;
    this.Decrease = function () {
        if (this.weight > 0) {
            this.weight--;
        }

    };
    this.isEmpty = function () {
        if (this.weight > 0) {
            return true;
        } else {
            return false;
        }
    };
    this.getWeight = function () {
        return this.weight;
    }
}