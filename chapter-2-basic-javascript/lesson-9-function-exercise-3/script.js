// ? Correct username: pedro
// ? Correct password: 123

function validate_login(username, password) {
    if ((username === 'pedro') && (password === '123')) {
        return true;
    } else {
        return false;
    }
}

let newUser = 'pedro';
let newPassword = '123';

if (validate_login(newUser, newPassword)) {
    console.log(`Successful access. Welcome, ${newUser} :p`);
} else {
    console.log(`Acess denied!`)
}