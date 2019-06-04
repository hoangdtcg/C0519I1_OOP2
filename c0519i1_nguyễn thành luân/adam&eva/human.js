function Human(name, gender, apple, weight) {
    this.apple = apple;
    this.weight = weight;
    this.mounth = [];
    this.name = name;
    this.gender = true;
    this.say = function (string) {
        this.mounth.push(string);

    };
    this.isMale = function () {
        return this.gender = true;

    };
    this.isFemale = function () {
        this.gender = false;

    };
    this.setGender = function (gender) {
        this.gender = gender;

    };
    this.eatApple = function () {
        this.apple.decrease()

    };

    this.getWeight = function () {
        return this.weight
    }

}