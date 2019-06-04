function Pokemon(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.getpokemonElements = function () {
        return '<img width="' + this.size + '" ' + ' height="' + this.size + '"' +
            ' src="' + this.image + '" ' + '' +
            ' style="top: ' + this.top + 'px;left: ' + this.left + 'px; position: absolute" />'

    }
    this.moveright = function () {
        this.left += 40;
        console.log("ok" + this.left);

    }
    this.movedown = function () {
        this.top += 40;
        console.log("" + this.top);
    }
    this.moveleft = function () {
        this.left -= 40;
        console.log("" + this.left);


    }
    this.movetop = function () {
        this.top -= 40;
        console.log("" + this.top);

    }
}

let chemande = new Pokemon('pokemon.png', 30, 30, 100);

function start() {
    if (chemande.left < window.innerWidth - chemande.size && chemande.top < 60) {
        chemande.moveright();
    } else if (chemande.top < window.innerHeight - 2 * chemande.size && chemande.left > window.innerWidth - 2 * chemande.size) {
        chemande.movedown();
    } else if(chemande.left > chemande.size && chemande.top > window.innerHeight  - 2*chemande.size ){
        chemande.moveleft();
    } else {
        chemande.movetop();
    }



    document.getElementById("game").innerHTML = chemande.getpokemonElements();
    setTimeout(start, 500);
}

start();