function ValidateClass(str){
  let  regexp = /^[CAP][0-9]{4}[GHIKLM]$/;
    if(regexp.test(str)){
            return true;
    }
    return false;
}

console.log(ValidateClass("C0519I"));