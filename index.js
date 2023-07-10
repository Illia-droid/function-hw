const userInputValue = prompt('Введіть хоча б один символ');
function getUserInputValue(value) {
    if (value === null || value === '') {
        return 'try again';
    } 
    return value;
}
console.log(getUserInputValue(userInputValue));


