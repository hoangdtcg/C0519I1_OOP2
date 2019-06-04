let Human = function (nam, gender, apple) {
    this.name = name;
    this.gender = "";
    this.apple = apple;


    this.isMale = function () {
        return this.gender;
    };
    this.setWeight =function () {
        this.weight = weight;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setGender = function (gender) {
        this.gender = gender;
    };
    this.checkApple = function (apple) {
        if (apple.weightApple === 0 && apple.weightApple < 10) {
            alert("het tao roi a`!");
        }
    };
    this.eatApple = function () {
        this.apple.decrease();
    };
    this.say = function () {
        document.getElementById("B").innerHTML = "AN TAO";
    };
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };
};