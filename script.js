//1
let myAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
console.log(myAlphabet.length);

let text = myAlphabet;
function getLength() {
    x = text.length;
    if (x < 4) {
        console.log('error')
    } else {
        console.log('are more then 4 items')
    }
}
getLength();
console.log(x);

//2
const planets = ['Mercury', 'Earth', 'Venus', 'Mars', 'Jupiter'];
console.log(planets);

let index = '';
for (i = 0; i < planets.length; i++) {
    index += planets[i] + ' ';
}
console.log(index);

// 3
let nums = [1, 2, 3, 4, 5];

let sum = 0;

for ( i = 0; i < 5; i++)
{
    sum += nums[i] ;
}
console.log(sum)

// 4

let data = [1, 2, 3, ['first', 'second', 'third']];
let deepCopyData = JSON.parse(JSON.stringify(data));
deepCopyData[1] = 77;
console.log('data', data)
console.log('deepCopyData', deepCopyData);

//5
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
}

console.log(programming);

//5-1
programming.difficulty = 7;
console.log(programming);

//5-2
delete  programming.jokes;
console.log(programming);

//5-3
for (let i of programming.languages){
    console.log(i);
}

//5-4 ?
for (let code in programming){
    console.log(code);
}

let programKeys = Object.keys(programming);
console.log(programKeys)

//5-5
let programValues = Object.values(programming);
console.log(programValues)
