let Human = function (name, gender, apple) {
    this.name = name;
    this.gender = '';
    this.apple = apple;

    this.isMale = function () {
       return this.gender;
    };
    this.setGender = function (gender) {
        this.gender = gender;
    };

    this.getName = function () {
        return this.name;
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.getWeight = function () {
        return this.weight;
    };
    this.setWeight = function (weight) {
        this.weight = weight;
    };
    
    this.say = function () {
        document.getElementById("app").innerHTML = "An tao di";
    };

    this.eatApple = function (apple) {
        this.apple.decrease();
    };
    this.checkApple = function (apple) {
        if (apple.weightApple === 0 && apple.weightApple < 10){
            alert("Het toi ! lam ti thoi anh");
        }
    }
};