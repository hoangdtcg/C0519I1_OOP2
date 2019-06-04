const FULL_APPLE = 10;
let Apple = function () {
    this.weightApple = FULL_APPLE;

    this.decrease = function () {
        this.weightApple--;
    };
    this.getWeight = function () {
        return this.weightApple;
    }
};
