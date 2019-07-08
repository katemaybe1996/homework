// Arrow functions
function sum(...theArgs) {
    if (!theArgs.length) return 0;
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

sum(1, 2, 3, 4); // 10
sum(); // 0

//Destructuring

//task 1

function devideArr() {

    let [first, ...other] = arguments;
    return { first, other };
}

devideArr(6, 7, 8, 9);
// Task 2

const organisation = {
    name: 'Google',
    info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
};

function getInfo({ name = 'Unknown', info: { partners } }) {
    return `name : ${name}` + ', ' + `partners : ${partners[0]}` + ', ' + `${partners[1]}`;
}
getInfo(organisation);



//High order functions

//task 1
function changeArray(arr, handler) {
    if (!Array.isArray(arr)) return console.error('First argument should be array');
    if (typeof callback !== 'function') return console.error('Second argument should be function');
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
    }
    return 'New value' + res;
}

// function handler1(el) {
//     res.join('');
// }

// changeArray(['my', 'name', 'is', 'Trinity'], handler1());

// function handler2(el) {
//     arr[i] * 10
// }

// function handler3(el) {

// }
// function handler4(el) {
//     res.reverse()
// }
// changeArray(['abc','123'], handler4())


//task 2

function everyFunc(arr, callback) {
    if (!Array.isArray(arr)) return console.error('First argument should be array');
    if (typeof callback !== 'function') return console.error('Second argument should be function');
    if (callback === false) return false;

}

function callback1(el, index, arr) {
    for (i = 0; i < arr.length; i++) {
        if (i < 5) {
            return false;
        } else {
            return true;
        }
    }
}
everyFunc([6, 7, 8], callback1);