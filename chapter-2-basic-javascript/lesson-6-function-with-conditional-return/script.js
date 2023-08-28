function ofLegalAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

let age = 90;

if (ofLegalAge(age)) {
    console.log('Maior de idade');
} else {
    console.log('Menor de idade');
};