let redApple = new Apple(10);
let Adam = new Human("Adam", "male", redApple, 60);
let Eva = new Human("Eva", "female", redApple, 270);
Adam.say("eatting");
Eva.say("eatting");
document.write(" Adam : " + Adam.mounth[0] + "<br>" + "<br>");
document.write(" Eva : " + Eva.mounth[0]);


function Eat1() {
    Adam.eatApple();

    if (redApple.weight === 0){
        alert("xong roi, lam thoi eva")
    }
    if ( redApple.weight--) {
        Adam.weight ++;
        console.log("Adam tang len thanh : " + Adam.getWeight() + "kg")
    }
}
function Eat2() {
    Eva.eatApple();
    if (redApple.weight === 0) {
        alert("xong roi, lam thoi adam")
    }
    if (redApple.weight--) {
        Eva.weight ++;
        console.log("Con map dit Eva tang thanh :" + Eva.getWeight() + "kg")
    }
}