function Human(name, weight, gender) {
    this.name = name;
    this.weight = weight;
    this.gender = gender;
    this.setGender = function (gender) {
        this.gender = gender;
    };
    this.isMale = function () {
        return this.gender;
    };

    this.checkApple = function (apple) {
        if (apple.isEmpty()) {
            return true;
        } else {
            return false;
        }
    };
    this.eat = function (apple) {
        if (this.checkApple(apple)) {
            if(this.weight < 55) {
                apple.Decrease();
                this.weight += 1;
            }else{
                alert("Toi beo qua roi");
            }
            console.log(apple.getWeight());
            console.log(this.weight)
        } else {
            console.log("Het tao");
            return this.checkApple(apple);
        }
    };


    this.say = function (cmt) {
        console.log(cmt);
    };
    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
    }
}