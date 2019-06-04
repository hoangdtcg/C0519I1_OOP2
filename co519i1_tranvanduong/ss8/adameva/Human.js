function Human(name, weight) {
    this.name = name;
    this.gender = true;
    this.weight = weight;

    this.humaninfo = function () {
        return this.name +" can nang" + this.weight + "gioi tinh la" + this.gender

    }


    this.getName = function () {
        return this.name;


    }
    this.setName = function (name) {
        this.name = name;

    }
    this.getGender = function () {
        return this.gender;

    }
    this.setGender = function (gender) {
        this.gender = gender;

    }
    this.getWeight = function () {
        return this.weight;

    }
    this.setWeight = function (weight) {
        this.weight = weight;

    }

   this.isMale =  function () {
        if(this.gender){
            console.log("nam");
        }else {
            console.log("nu");

        }

   }
    this.checkApple = function (apple) {
       return apple.isEmpty();


    };
    this.eat = function (apple) {
       if(!this.checkApple(apple)){
           apple.decrease();
           this.weight++;
           console.log(apple.appleinfo());
           console.log(human.humaninfo());
       }else {
           console.log("tao het roi");

       }


    }
    this.say = function (sentence) {
        this.sentence = sentence;

    }

}