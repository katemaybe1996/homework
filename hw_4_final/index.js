///////// TASK 1
function isParent(parent, child) {
    return child.parentElement === parent;
}

isParent(document.querySelector('ul'), document.querySelector('li')); //true
isParent(document.querySelector('ul'), document.querySelector('mark')); //false

/////////////// TASK 2
function getLinks() {
    let links = [...document.querySelectorAll('body a')].filter(link => !link.closest('ul'));
    return links
}
getLinks()

//OR

function getLinks() {
    let links = Array.from(document.querySelectorAll('body a')).filter(link => !link.closest('ul'));
    return links
}
getLinks()

//////////////// TASK 3 
function getPrivoiousSibling() {
    let ulInDoc = document.querySelector('ul').previousSibling;
    return ulInDoc;
}
getPrivoiousSibling()

function getNextSibling() {
    let ulInDoc = document.querySelector('ul').nextSibling;
    return ulInDoc;
}
getNextSibling()

////EVENTS

////task1
let btn = document.getElementById('btn-msg');
btn.addEventListener('click', function() { alert(btn.dataset.text); });

////task3
let nodeOnClick = document.querySelector("body");
nodeOnClick.addEventListener('click', function() {
    let target = event.target;
    console.log(target.tagName);
});