const userInputValue = prompt('Введіть хоча б один символ');
function getUserInputValue() {
    if (userInputValue === null || userInputValue === '') {
        return 'try again';
    } 
    return userInputValue;
}
console.log(getUserInputValue());


