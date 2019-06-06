function ValidateEmail(str) {
        let regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
        if (regexp.test(str)) {
            return true;
        }
        return false;
}