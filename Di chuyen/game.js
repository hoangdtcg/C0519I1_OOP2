function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    };

    this.moveRight = function(){
        this.left += 40;
        console.log('ok: ' + this.left);
    };
    this.moveDown = function(){
        this.top += 40;
        console.log("ok: " + this.top);
    };
    this.moveLeft = function(){
        this.left -= 40;
        console.log("ok: " + this.left);
    };
    this.moveUp = function(){
        this.top -= 40;
        console.log("ok: " + this.top);
    }
}

var hero = new Hero('daibangtungcanh.jpg', 20, 30, 150);

function start(){
    if(hero.left < window.innerWidth -  2*hero.size && hero.top < 70){
        hero.moveRight();
    }else if(hero.top < window.innerHeight - 2*hero.size && hero.left > window.innerWidth - 2*hero.size){
        hero.moveDown();
    }else if(hero.left > hero.size && hero.top > window.innerHeight - 2*hero.size ){
        hero.moveLeft();
    }else{
        hero.moveUp()
    }


    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();