let Human = function (name, weight, gender) {
    this.name = name;
    this.weight = weight;
    this.gender = gender;

    this.setName = function (name) {
        this.setName = name;
    };

    this.getname = function () {
        return this.name;
    };

    this.setWeight = function (new_weight) {
        this.weight = new_weight;
    };
    this.getWeight = function () {
        return this.weight;
        console.log(this.weight);
    };
    this.setGender = function (new_gender) {
        this.gender = new_gender;
    };
    this.checkApple = function (apple) {
        if (apple.isEmpty()) {
            return true;
        }
        return false;


    };
    this.eatApple = function (apple) {
        if (this.checkApple(apple)) {
            apple.decrease();
            this.weight += 10;

        }else {        console.log("het tao");
        }


    };


}