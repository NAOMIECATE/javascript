   // start at 1  //stops at 10  //add 1 each time
for(let i= 1;        i <= 10;       i++){
    console.log(i);
}
//another way of writing the above
for(let i= 1; i<10; i++){
    console.log(i);
}
for(let n= 0; n <= 20; n++){
    console.log(n);
}
for(let m =20; m >= 1; m--){
    console.log(m);
}
for(let b = 50; b >=0; b-=10){
    console.log(b);
}
for(let z =0; z <= 50; z+=10){
    console.log(z);
}
//to llop over an array,start at 0 continue to the last index
const animal = ['lion','tiger','bears'];
for(let i=0; i <animal.length; i++){
    console.log(`animal at index of ${i} : ${animal[i]}`);
}

//nested loops ()
let str = 'LOL';
for(let i = 0; i<=4; i++){
    console.log('outer:',i);
    for(let j = 0; j<str.length; j++){
        console.log('inner:',str[j]);
    }
}
//while loops-continues to run as long as it tests condition is true
let  num =0;
while (num <10){
    console.log(num);
    num++;
}

//a common pattern
//math.round(gives round off to the nearest whole number)
//math.floor (gives cuts off decimal numbers)
//math.ceil(rounded up adds 1 to interger)
//math.pow(returns the value of x to the power of y(x raised to y)written like this in lapi(2,4 ans =16))
//math.random (generates no. btn 0 and 1 in decimal)
//math.sign()
//math.sqrt
//math.max
//math.min

let targetNum = Math.floor(Math.random()*10); //*10,*6 etc generates numbers btn 0 and 10 an cut off the decimalpart
let guess = Math.floor(Math.random()*10);    //generates numbers btn 0 and 10 an cut off the decimalpart
while(guess !== targetNum){
    console.log(`Guessed ${guess}...Incorrect!`);
   guess = Math.floor(Math.random()*10);
}
console.log(`correct! Guessed: ${guess} & target was: ${targetNum}`);

let targetNum1 = Math.floor(Math.random()*10); //generate numbers btn 0 and 10 an cut off the decimal part
let guesses = Math.floor(Math.random()*10); //generate numbers btn 0 and 10 an cut off the decimal part

while(guesses !==targetNum1){
    console.log(`Guessed ${guesses}...Incorrect!`);
    guesses =Math.floor(Math.random()*10)
}
console.log(`correct! Guessed: ${guesses} & target was: ${targetNum1}`);
//for..of loop
for (let s of'yell'){
    console.log(s);
}
let subreddits =['soccer','popheads','cringe','books'];
for(let sub of subreddits){
    console.log(`${sub} - www.reddit.com/r/${sub}`);
}
//nested for..of
const magicSquare = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
];
//accesing arrays and elements wthin nested arrays.
console.log(magicSquare[0][1]);

for(let row of magicSquare){
    let sum = 0; 
    for(let num of row){
        // console.log(num);
        sum += num;
    }
    // console.log(sum +=num);
    // console.log(sum);
    console.log(`Row of ${row} sums to ${sum}`);
}

//objects in loops(Object.keys())
const movieReviews = {
    Amadeus: 10,
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8
};
for (let movie of Object.keys(movieReviews)){
let score = movieReviews[movie];
console.log(movie);
console.log(`i rated ${movie} ${score}/10`);
}
const futBallTeams = {
    mancity : 1,
    manuntd : 2,
    arsenal  : 3,
    chelsea : 4,
    liverpool : 5
};
for(let teams of Object.keys(futBallTeams)){
    let postn = futBallTeams[teams];
    console.log(`${teams} is at  position ${postn} in epl`);
}
//Object.values()
Object.values(futBallTeams)
console.log(futBallTeams);


//for..in (only applies in objects)
const jeopardyWinnings = {
    regularPlay : 2522700,
    watsonChallenge : 300000,
    tournamentOfChampions : 500000,
    battleOfTheDecades : 100000
}; 
let total = 0;
for(let key in jeopardyWinnings){
    console.log(key);
    total += jeopardyWinnings[key];
}
console.log(`Ken Jennings Total winnings :$${total}`);
