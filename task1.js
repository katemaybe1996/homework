//task 1
function Multiply() {
    if (!arguments.length) return 0;
    let result = 1;

    for (let i = 0; i < arguments.length; i++) {
        result = result * arguments[i];
    }

    return result;
}
Multiply(2, 5, 6);
Multiply();
alert(result);

// task 2
function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let newString = reverseArray.join("");

    return newString;
}
reverseString("test");

// task 3
function getCodeString(str) {
    let newString = "";
    for (let i = 0; i <= str.length - 1; i++) {
        newString += str.charCodeAt(i);
    }

    return newString;
}
getCodeString("hello");

// task 4

function getRandomNumber(num) {
    let i = Math.floor(Math.random() * 11);
    if (num == i) {
        return ('You won');
    } else {
        return ('you were wrong, you suggested' + " " + num + " " + 'but the right number is' + " " + i);
    }
}
getRandomNumber(6);

//task 5

function createArray(n) {
    let newArray = [];
    for (let i = 0; i <= n; i++) {
        newArray.push(i);
    }

    return newArray;
}
createArray(17);

//task 6
function doubleArray(n) {
    let firstPartOfArray = n.slice(0);
    let secondPartOfArray = n.slice(0);
    let finalArray = firstPartOfArray.concat(secondPartOfArray);

    return finalArray;
}
doubleArray([5, 6, 7]);

// task 7 ?

// function changeArray() {
//     let args = [];
//     for (let i = 0; i < arguments.length; i++)
//     args[i] = arguments[i];
// 	args.splice(1,2);
//     return args
// }
// changeArray([5,6,7]);
function changeArray(n) {
    let newArray = n.splice(1, 2);

    return newArray;
}
changeArray([5, 6, 7]);
// работает только с одним массивом,
// выше пыталась превратить arguments в массив, чтобы применить splice
// но что-то пошло не так

// task 8

const arrayOfObject = [{
    name: 'Denis',
    age: '29',
    gender: 'male',
}, {
    name: 'Lea',
    age: '30',
    gender: 'woman',
}, {
    name: 'Ivan',
    age: '20',
    gender: 'male',
}];

let genderMale = arrayOfObject.filter(function(obj) {

    for (key in obj) {
        if (obj[key].includes('male')) {
            return obj;
        }
    }
});

console.log(genderMale);