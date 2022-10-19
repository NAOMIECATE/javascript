// conditions and logistics
// syntax of 'if condition'
// if (put condition) {
//     print result using console.log
// }

let rating =3;
// if 3 is strictly equal to 3 
if (rating=== 3) {
    // then the value declared to the variable above is right
    console.log('that is the right rating');
}
// aplying 'else if condition'
let betting = 2;
if (betting=== 3){
   console.log('not right');
}
else if (betting=== 2){
    console.log('right decision');
};
// days of the week
// applying 'else if condition' multiple times
let Days = 7;
if (Days === 1){
    console.log('sunday');
}
else if (Days === 2) {
    console.log('monday');
}
else if (Days === 3) {
    console.log('tuesday');
}
else if (Days === 4) {
    console.log('wednesday');
}
else if (Days === 5) { 
    console.log('thursday');
}
else if (Days === 6) {
    console.log('friday');
}
else if (Days === 7) {
    console.log('saturday');
}
// declare password variable and give it a value;
// use if statements to:
// ensure that your password has a length of more than six characters
// check if the password has space 
// console.log something if condition is true

let password = 'hello kabambe';
if (password.length >=6) {
if (password.indexOf(' ')=== -1) {
console.log('valid password');
}
    else  {
        console.log('invalid password');
    }
}
// logic operator

if (password.length >=6 && password.indexOf(' ') === -1);


else  {
    console.log('invalid password');
}
let age = 30;
if (age <6 || age >= 65){
    console.log('you get in for free');
}
else{
    console.log(`you need pay ksh.${50} to eat`);
}
// ternary operators
let javascript = 'easy';
 javascript === 'easy'? console.log('okay'):console.log('not true');

