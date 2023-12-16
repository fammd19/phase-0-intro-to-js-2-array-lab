// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(nameOfCat1) {
    cats.push(nameOfCat1);
}

function destructivelyPrependCat(nameOfCat2) {
    cats.unshift(nameOfCat2);
}


function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat (nameOfCat3) {
    const moreCats = [...cats,nameOfCat3];
    return moreCats;
}

function prependCat (nameOfCat4) {
    const moreCats2 = [nameOfCat4,...cats];
    return moreCats2;
}

function removeLastCat () {
    const moreCats3 = cats.slice(0, cats.length-1);
    return moreCats3;
}

function removeFirstCat () {
    const moreCats4 = cats.slice(1);
    return moreCats4;
}