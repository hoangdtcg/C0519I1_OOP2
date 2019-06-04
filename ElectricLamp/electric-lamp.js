function ElectricLamp() {
     this.status = true;
     this.turnOff = function () {
         document.getElementsByTagName('img')[0].setAttribute('src', 'https://d14nx13ylsx7x8.cloudfront.net/lesson_image_blocks/assets/000/001/412/original/pic_bulboff.gif');
     };
     this.turnOn = function () {
         document.getElementsByTagName('img')[0].setAttribute('src', 'https://d14nx13ylsx7x8.cloudfront.net/lesson_image_blocks/assets/000/001/413/original/pic_bulbon.gif');
     };
}
function SupperHero() {
    this.status = true;
    this.turnOff = function () {
        document.getElementsByTagName('img')[1].setAttribute('src', 'mario.png' );


    };
    this.turnOn = function () {
        document.getElementsByTagName('img')[1].setAttribute('src', 'ironman.jpg');


    };

};
