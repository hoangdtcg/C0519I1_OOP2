function People(name, weight) {
    this.name = name;
    this.weight = weight;
    this.gender = true;
    this.humanINfo = function () {
        return this.name + "gioi tinh la " + this.gender + "co can nang" + this.weight;

    }
    this.ismaLe = function () {
        if (this.gender) {
            console.log("nam");
        } else {
            console.log("nu");
        }
    }

    this.check = function (orange) {
        return orange.isEmpty1();


    }
    this.eatFruit = function (orange) {
        if (this.check(orange)) {
            orange.decrease1();
            this.weight++;
            console.log(orange.orangeInfo());
            console.log(this.humanINfo());
        }else {
            console.log("het cam roi an tao thi an")
        }
    }
    this.Say = function (str) {
        this.str = str;

    }

}