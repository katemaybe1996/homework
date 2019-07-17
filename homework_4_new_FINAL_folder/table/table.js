let users = [{
        number: 1,
        name: "Buckner Osborne",
        email: "bucknerosborne@empirica.com",
        balance: 2853.33
    },
    {
        number: 2,
        name: "Rosalie Smith",
        email: "rosaliesmith@katakana.com",
        balance: 1464.63
    },
    {
        number: 3,
        name: "Estrada Davenport",
        email: "estradadavenport@ebidco.com",
        balance: 2823.39
    }
];
const usersBalance = users.map(element => element.balance);

let totalValue = usersBalance.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function generateFooter() {
    let tfoot = table.createTFoot();
    let row = tfoot.insertRow();
    row.setAttribute("align", "right");
    let cell = row.insertCell();
    cell.setAttribute("colspan", "4");
    let text = document.createTextNode(
        "Total balance" + " " + ":" + " " + totalValue
    );
    cell.appendChild(text);
}

let table = document.querySelector("table");
let data = Object.keys(users[0]);
generateTableHead(table, data);
generateTable(table, users);
generateFooter();

let btn = document.createElement("BUTTON");
btn.innerHTML = "Sort";
btn.classList = "btn btn-primary";
document.body.insertBefore(btn, document.body.firstChild);

let sortedUsersHigher = users.sort(function(a, b) {
    return a.balance - b.balance;
});
let sortedUsersLower = users.sort(function(c, d) {
    return c.balance - d.balance;
});

function Rise() {
    let table2 = document.createElement("table");
    table2.className = "table";
    let data = Object.keys(sortedUsersHigher[0]);
    generateTableHead(table2, data);
    generateTable(table2, sortedUsersHigher);
    let tfoot = table2.createTFoot();
    let row = tfoot.insertRow();
    row.setAttribute("align", "right");
    let cell = row.insertCell();
    cell.setAttribute("colspan", "4");
    let text = document.createTextNode(
        "Total balance" + " " + ":" + " " + totalValue
    );
    cell.appendChild(text);
    table.parentNode.replaceChild(table2, table);
}

function Low() {
    let table3 = document.createElement("table");
    table3.className = "table";
    let data2 = Object.keys(sortedUsersLower[0]);
    generateTableHead(table3, data2);
    generateTable(table3, sortedUsersLower);
    let tfoot = table2.createTFoot();
    let row = tfoot.insertRow();
    row.setAttribute("align", "right");
    let cell = row.insertCell();
    cell.setAttribute("colspan", "4");
    let text = document.createTextNode(
        "Total balance" + " " + ":" + " " + totalValue
    );
    cell.appendChild(text);
    table2.parentNode.replaceChild(table3, table2);
}

btn.addEventListener("click", Rise, Low);