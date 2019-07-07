//task 1
//task 1
function multiply() {
    if (!arguments.length) return 0;
    let result = 1;

    for (let i = 0; i < arguments.length; i++) {
        result = result * arguments[i];
    }

    return result;
}
multiply(2, 5, 6);
multiply();

// task 2
function reverseString(str) {
    if (typeof str != "string") {
        console.log("it is not a string");
    }

    return str
        .split("")
        .reverse()
        .join("");
}
reverseString("test");

// task 3
function getCodeString(str) {
    let newString = "";
    for (let i = 0; i <= str.length - 1; i++) {
        if (i === str.length - 1) {
            newString += str.charCodeAt(i);
        } else {
            newString += str.charCodeAt(i) + " ";
        }
    }

    return newString;
}
getCodeString("hello");

// task 4

function getRandomNumber(num) {
    if (num >= 11) {
        console.log("enter number from 1 to 10");
    }
    if (num <= 0) {
        console.log("enter number from 1 to 10");
    }
    let i = Math.floor(Math.random() * 11);
    if (num == i) {
        return "You won";
    } else {
        return (
            "you were wrong, you suggested" +
            " " +
            num +
            " " +
            "but the right number is" +
            " " +
            i
        );
    }
}
getRandomNumber(6);

//task 5

function createArray(n) {
    let newArray = [];
    for (let i = 1; i <= n; i++) {
        newArray.push(i);
    }

    return newArray;
}
createArray(17);

//task 6
function doubleArray(n) {
    let firstPartOfArray = n.slice(0);
    let finalArray = firstPartOfArray.concat(firstPartOfArray);

    return finalArray;
}
doubleArray([5, 6, 7]);

// task 7

function changeArray() {
    let args = [];

    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i].splice(1, 2));
    }
    return args;
}
changeArray([5, 6, 7], [8, 3, 6]);

// task 8

const users = [{
        name: "Denis",
        age: "29",
        gender: "male"
    },
    {
        name: "Lea",
        age: "30",
        gender: "woman"
    },
    {
        name: "Ivan",
        age: "20",
        gender: "male"
    }
];

function filterUsers(arr, key = "", value = "") {
    if (!Array.isArray(arr)) return [];
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][key] === value) {
            res.push(arr[i]);
        }
    }
    return res;
}
const fiteredUsers = filterUsers(users, "gender", "male");
console.log(fiteredUsers);