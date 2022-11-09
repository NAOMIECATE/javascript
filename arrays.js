// creating arrays
let students = [];
students[0]='femidevs';
console.log(students);
// arrays can apply on strings
let colours= ['red','orange','yellow'];
console.log(colours);
// can apply on numbers
let lottoNums = [19,22,56,12,51];
console.log(lottoNums);
// can apply on mixed values i.e strings,numbers,booleans,null,undefined etc
let stuff = [true,68,'cat',null];
console.log(stuff);
// indexed arrays orange is index 0,apple 1 etc
let fruits =['orange','apple',20,false,undefined];
console.log(fruits.length);
console.log(fruits);
// modifying arrays
let matunda =['orange','apple',20,false,undefined];
matunda[1]='milk'
matunda[0]= 50
console.log(matunda.length);
console.log(matunda);

// array method 'push'
let nice=[];
nice[0] = 'femi' ;
nice[1] = 'devs';
nice.push('bad');
nice.push(4);
console.log(nice);

// array method 'pop'
let bye =[];
bye[0]= 'lie';
bye[1]='die'
bye.pop();
bye.pop();
console.log(bye);

// array method 'shift'
let zuri =[];
zuri[0]='nash';
zuri[1]='cate';
zuri[2]=56;
zuri.shift();
zuri.shift();
console.log(zuri);
// array method 'unshift'
let good =[];
good[0]='pliz';
good[1]=89;
good.unshift('nice');
good.unshift(5);
console.log(good);

// array method 'concat'
let fotballTeams = ['man u','chelsea','arsenal'];
let numOfTeams = [4,6,1];
let merged = fotballTeams.concat(numOfTeams);
let newlyMerged = numOfTeams.concat(fotballTeams);
console.log(newlyMerged);
console.log(merged);
// includes
console.log(merged.includes(4));
// join
// uses a seperator like; (. ! # -)
let items = [1,2,'fruits',false,true];
console.log(items);
console.log(items.join('-'));
// reverse
let items1 =[1,2,'fruits',false,true];
let reversed = items1.reverse();
console.log(reversed);
// slice
let items2 = [1,2,'fruits',false,true];
let sliced = items2.slice(1,4);
console.log(sliced);
// splice
// either removes or replaces
let spoiler = ['mango','fruits','water','true'];
// removing an item using splice
spoiler.splice(2,1);  //'2' index to be deleted '1' no of item to be deleted
console.log(spoiler);
// adding items using splice
spoiler.splice(0,0,'guava');
console.log(spoiler);

// replacing
spoiler.splice(0,1,'banana');
console.log(spoiler);

//sorting arrays
let sorter = ['crocodile','lizard','chameleon','salamander','alligator'];
let sorted =sorter.sort();
console.log(sorted);
//in strings we use sorting while in numbers we use functions.

//nested arrays
const color =[
    ['red','crimson'],  //index 0
    ['orange','pink'], //index 1
    ['yellow','gold'], //index 2
    ['green','olive'], //index 3
    ['blue','navy blue'], //index 4
    ['purple','orchid'] //index 5
]
console.log(color[0]);
console.log(color[0][1]);
console.log(color[4][1]);
console.log(color[3][1]);
console.log(color[4][0]);
console.log(color[2][0]);