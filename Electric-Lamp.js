// Khai báo lớp bogns đèn

function ElectricLamp() {
    // Khai báo thuộc tính
    this.status = true;
    // Phương thức tắt bóng đèn
    this.turnOff = function () {
        document.getElementsByTagName('img')[0].setAttribute('src', 'https://d14nx13ylsx7x8.cloudfront.net/lesson_image_blocks/assets/000/001/412/original/pic_bulboff.gif');    };
    // Phương thức bật bóng đèn

    this.turnOn = function () {
        document.getElementsByTagName('img')[0].setAttribute('src', 'https://d14nx13ylsx7x8.cloudfront.net/lesson_image_blocks/assets/000/001/413/original/pic_bulbon.gif');     };
}
