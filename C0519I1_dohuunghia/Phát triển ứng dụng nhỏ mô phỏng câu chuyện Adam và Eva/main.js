

    let apple = new Apple(1);
    let adam = new Human("Adam", "male" , apple);
    let eva = new Human("Eva", "female" , apple);
    // let weight = apple.weightApple;
function adamEat() {
    let weight = apple.weightApple;
    if ( weight > 0){
        adam.eatApple();
        adam.say();
        document.getElementById("app").innerHTML = weight;
    } else {
        document.write("Het tao rui")
    }
}


function evaEat() {
    let weight = apple.weightApple;
    if (weight > 0){
        eva.eatApple();
        eva.say();
        document.getElementById("app").innerHTML = weight;
    } else {
        document.write("Het tao rui")
    }
}