let animal = "dog";
console.log(animal.length);
// access individual characters in a string
console.log(animal[3]);
// changing  case method
let msg = "i am king";
console.log(msg);
let yellMsg = msg.toUpperCase();
console.log(yellMsg);
let angry = "leaVE mE AloNe";
let lower = angry.toLowerCase();
console.log(lower);
// trim method
let greetings = "      leave me alone plz    ";
console.log(greetings);
let newGreetings = greetings.trim();
console.log(newGreetings);
// indexOf method
let tvShow = "catdog";
let fIndex = tvShow.indexOf("cat");
console.log(fIndex);
// slice method
let str = "lokichogio";
console.log(str);
let partOfStr = str.slice(2 ,5);
console.log(partOfStr);
let trs = "lemantile";
let newTrs = trs.slice(6 ,7);
console.log(newTrs);
// replace method
let annoyingLaugh = 'teehee so funny! teehee!';
console.log(annoyingLaugh);
let fAnnoyingLaugh = annoyingLaugh.replaceAll('teehee','haha');
console.log(fAnnoyingLaugh);
let myName = 'nash\nmbongo';
console.log(myName);
let hName = "nash\'mbongo'";
console.log(hName);
// template literals
let totals = `we are ${20}`;
console.log(totals);
let cohortOne = 15;
let cohortTwo = 20;
let femidevs = `we are ${cohortOne + cohortTwo} in total`;
console.log(femidevs);
let drinks = 'soda';
let quantity = 2;
let price = 970;
let tDrinks = `we bought 2crates of soda @ ${quantity * price}`;
console.log(tDrinks);
let tdDrinks = `we bought 2crates of soda ${drinks} @ kshs.${quantity * price}`;
console.log(tdDrinks);
let pple = 'femidevs community';
console.log(pple);