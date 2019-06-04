const FULL_APPLE = 10;
let Apple = function (count) {
  this.weightApple = FULL_APPLE;
  this.count = count;
  this.decrease = function () {
      this.weightApple--;
  };


  this.getWeight = function () {
      return this.weightApple;
  }
};