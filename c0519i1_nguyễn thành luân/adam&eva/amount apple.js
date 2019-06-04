const FULL_APPLE = 10;
function Apple(weight) {
    this.weight = weight;
    this.getWeight = function (weight) {
        return this.weight;
    };
    this.decrease = function () {
        if (0 < this.weight && this.weight <= FULL_APPLE) {
            this.weight--;
        }

    };
    this.isEmpty = function (empty) {
        return this.empty = true;
    };
} 