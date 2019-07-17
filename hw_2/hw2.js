// Arrow functions
let sum = (...theArgs) => {
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

function firstFunc(arr, handler) {
    if (!Array.isArray(arr)) return console.error('First argument should be array');
    if (typeof handler !== 'function') return console.error('Second argument should be function');
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        return res + arr[i];
    }

}

const res1 = firstFunc(['my', 'name', 'is', 'Trinity'], (res) => { res.join(' ') });
const res2 = firstFunc([10, 20], (res) => { res *= 10 })
const res3 = firstFunc([{ age: 45, name: 'John' }, { age: 20, name: 'Aaron' }], (res) => { arr.name + 'is' + arr.age })
const res4 = firstFunc((['a, b ,c', '1, 2, 3'], (res) => { res.reverse(' ') }))

console.log(res1, res2, res3, res4);


//task 2

// function everyFunc(arr, callback) {
//     if (!Array.isArray(arr)) return console.error('First argument should be array');
//     if (typeof callback !== 'function') return console.error('Second argument should be function');
//     if (callback === false) return false;

// }

// function callback1(el, index, arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (i < 5) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }
// everyFunc([6, 7, 8], callback1);