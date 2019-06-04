function Orange(weight) {
    this.weight = weight;
    this.orangeInfo = function () {
        return "Can nang con lai  cua tao la" + this.weight;

    }
    this.decrease1 = function () {
        if (this.weight > 0) {
            this.weight--;
        }
    }

    this.isEmpty1 = function () {
        if (this.weight <= 0) {
            return false;
        }
        return true;

    }
}