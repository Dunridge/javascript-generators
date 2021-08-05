// Run with Quokka.js
// Steps to install: 
// 1) Install the Quokka.js extension from the marketplace
// 2) Hit Ctrl+Shift+P and press start on current file
// 3) View the JS results displayed in real time


// function* denotes that this is a generator function
function* simpleGenerator() {
    // console.log('Before 1');
    yield 1;
    // console.log('After 1');
    // console.log('Before 2');
    yield 2;
    // console.log('After 2');
    // console.log('Before 3');
    yield 3;
    // console.log('After 3');
}

const generatorObject = simpleGenerator();
// console.log(generatorObject);
// console.log(generatorObject.next()); // 1
// console.log(generatorObject.next()); // 2
// console.log(generatorObject.next()); // 3
// console.log(generatorObject.next()); // undefined

const generatorObject1 = simpleGenerator();
const generatorObject2 = simpleGenerator();
// console.log(generatorObject1.next());
// console.log(generatorObject1.next());
// console.log(generatorObject2.next());
// console.log(generatorObject2.next());

// Use cases 

// generate ids
function* generateIds() {
    let id = 1;
    
    while (true) {
        yield id;
        id++;
    }
}

const generator = generateIds();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// use it as an iterator
// while (object.next().done !== false) {
    // do stuff
// }

// generator for an array 

function* generatorFn(array) {
    for(let i = 0; i < array.length; i++) {
        yield array[i];
    }
}

const generatorObj = generatorFn([1, 3, 5]);
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());


// We can also take it the value from yield
function* generateIdsPassValue() {
    let id = 1;

    while(true) {
        const increment = yield id;
        if (increment != null) {
            id += increment;
        } else {
            id++;
        }
    }
}

const obj = generateIdsPassValue();

console.log(obj.next()); // you can't pass value to next on the first call because there's nothing to yield
console.log(obj.next(1)); // the value is passed to next and its yielded in the function
console.log(obj.throw(new Error('Hi')));
console.log(obj.return(2));
console.log(obj.next(3));


// return function
