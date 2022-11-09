function madlib(adjective,noun,verb, adverb){
console.log(`the ${adjective} ${noun} ${verb} very ${adverb}`);
};
madlib('brown','fox','jumped','swiftly');
//write function 
//pass arguments adjectives procedure
//use 'return' function instead of console log
//call 3 functions wth different sentence
function madlib(adjective,noun,verb,adverb){
    return`the ${adjective} ${noun} ${verb} ${adverb}.`
};
let mad1 = madlib('lazy','cat','walked','majestically');
console.log(mad1);
let mad2 = madlib('fat','peacock','danced','proudly');
console.log(mad2);
let mad3 = madlib('tallest','girrafe','ate','slowly');
console.log(mad3);