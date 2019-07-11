// THIS
// Task 1

const rectangle = {
    width: 15,
    height: 10,
    getSquare: getSquare
};

function getSquare() {
    return this.width * this.height
}
rectangle.getSquare();

// Task 2


const price = {
    price: 10,
    discount: '15%',
    getPrice: getPrice,
    getDiscount: getDiscount,
    getPriceWithDiscount: getPriceWithDiscount
};

function getPrice() {
    return this.price
}

function getDiscount() {
    return this.discount;
}

function getPriceWithDiscount() {
    return (this.price - (this.price * parseFloat(this.discount)) / 100)
}
price.getPrice();
price.getPriceWithDiscount();

// Task 3


const obj = {
    height: 10,
    increaseHeight: increaseHeight
};

function increaseHeight() {
    return this.height + 1;
}
obj.increaseHeight();

// Task 4 ? не считает double, остальное отрабатывает


const numerator = {
    value: 1,
    double: function() {
        this.value *= 2;
        return this;
    },
    plusOne: function() {
        this.value++;
        return this;
    },
    minusOne: function() {
        this.value--;
        return this;
    },
}
numerator.double().plusOne().plusOne().minusOne();

// Task 5(slide 16)


const product = {
    price: 10,
    numberOfProducts: 5,
    getPrice: function() {
        return this.price * this.numberOfProducts
    }

};
product.getPrice()

// Task 6 


const info = { price: 10, amount: 5 };

function getPrice() { return this.price * this.amount; }

getPrice.call(info);

const detail = { price: 10, amount: 5 };

getPrice.call(detail);

// Task 7


let sizes = {
        width: 5,
        height: 10
    },
    getSquare = function() {
        return this.width * this.height
    };
getSquare.apply(sizes, [5, 10]);

/// Task 8 


let element = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
};

let getElementHeight = element.getHeight.bind(element);
getElementHeight()

//////////////////////////////////////////////////////// 
///// Array methods

// Task 1 

let numbers = [1, 2, 3, 5, 8, 9, 10];
let newNums = numbers.map(function(num) {
    let odd = !(num % 2 == 0);
    return { odd, num };
});

console.log(newNums)

// Task 2

let numbers = [12, 4, 50, 1, 0, 18, 40];

function isZero(number) {
    return number == 0;
}

console.log(!(numbers.some(isZero)));

// Task 3

let words = ['yes', 'hello', 'no', 'easycode', 'what'];

function checkWordsLength(word) {
    return word.length > 3;
}

console.log(words.some(checkWordsLength));

// Task 4 

let lettersArray = [{ char: "a", index: 12 },
    { char: "w", index: 8 }, { char: "Y", index: 10 }, { char: "p", index: 3 }, { char: "p", index: 2 },
    { char: "N", index: 6 }, { char: " ", index: 5 }, { char: "y", index: 4 }, { char: "r", index: 13 }, { char: "H", index: 0 },
    { char: "e", index: 11 }, { char: "a", index: 1 }, { char: " ", index: 9 }, { char: "!", index: 14 }, { char: "e", index: 7 }
];

let sortedArray = lettersArray.sort(function(a, b) {

    return a.index - b.index
})
const finalArray = sortedArray.reduce((acc, array) => acc + array.char, '');
console.log(finalArray);

// Task 5 (slide 10) 
let arrays = [
    [14, 45],
    [1],
    ['a', 'c', 'd']
];
let sortedArrays = arrays.sort(function(a, b) {
    if (a.length < b.length) return -1;
    if (b.length > a.length) return 1;

})
console.log(sortedArrays);

//Task 6 (slide 10)

let models = [
    { cpu: 'intel', info: { cores: 2, сache: 3 } },
    { cpu: 'intel', info: { cores: 4, сache: 4 } },
    { cpu: 'amd', info: { cores: 1, сache: 1 } },
    { cpu: 'intel', info: { cores: 3, сache: 2 } },
    { cpu: 'amd', info: { cores: 4, сache: 2 } }
];
let sortedModels = models.sort(function(a, b) {

    return a.info.cores - b.info.cores
})

console.log(sortedModels);

//Task 7 (slide 10)

let products = [
    { title: 'prod1', price: 5.2 }, { title: 'prod2', price: 0.18 },
    { title: 'prod3', price: 15 }, { title: 'prod4', price: 25 },
    { title: 'prod5', price: 18.9 }, { title: 'prod6', price: 8 },
    { title: 'prod7', price: 19 }, { title: 'prod8', price: 63 }
];

let filteredArray = products.filter(function filterArray(a, b) {
    return a.price > 14;
});

let sortedProducts = filteredArray.sort(function checkPrice(a, b) {
    return a.price - b.price
})
console.log(sortedProducts);