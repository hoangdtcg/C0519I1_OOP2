function Validate(number){
        let regexp = /^([0-2][0-9])|[3][0-1](\/)[0][0-9]|(1)[0-2](\/)+ \d{4}$/;
        if(regexp.test(number)){
            return true;
        }else{
            return false;
        }
}

console.log(Validate("31/12/1995"));