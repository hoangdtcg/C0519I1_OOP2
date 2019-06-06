function ValidatePhone(str) {
    let regexp = /^[0-9]{2}-[0-9]{10}$/;
    if(regexp.test(str)){
        console.log("HopLe");
    }else{
        console.log("KoHopLe");
    }

}

ValidatePhone("84-0967893795");