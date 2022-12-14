//function is two step function
//syntax for function is called function declaration
//define
function grumpus(){
    console.log('uh..you again...');
    console.log('for the last time..');
    console.log('leave me alone!!!');
}
//running/ calling / executing
grumpus(); //you must call a funtion

//No input/argument
function greet(){
    console.log('hi');
};
greet();
//argument/wth input
function greet(name){ //name is the argument
      console.log(`hi, ${name}`);
}
greet('naomi');   //naomi is the argument

//multiply two numbers
         //define function//         //parameter//
function      multiply                     (x,y) {
    console.log(x*y);
};
//calling outside the curly brackets
multiply(2,3); //(2,3)arguments

//finding the average of numbers using function
//function avg(arr){
    //let total = 0;
//}

//division
function division(x,y){
    console.log(x/y);
};
division(20,2);

//addition
function add (x,y){
    console.log(x+y);
}
add(20,2);

//square
function square(x){
    console.log(x*x);
};
square(20);

function greet(word){
    console.log(`hello ${word}`.toUpperCase());
}
greet('world');

function avgs(r,t,m,p){
    console.log((r+t+m+p)/avgs.length);
};
avgs(3,2,5,6);

// function avg(arr){
//     let sum = 0;
//     for(let r=0; r<arr.length; r++){
//         sum = sum + arr[r];
//     }
//     console.log(3,2,5,6);
// };
// avg(3,2,5,6);

function avg(arr){
    let sum = 0;
    for(let r of arr){
        sum+= r;
    }
    const average = sum /arr.length;
    console.log(average);
};
avg([1,2,3,4,5]);
//find largest
function findLargest(x,y){
    if(x>y){
    console.log(`${x} is larger`);
    }
    else if (x<y){
    console.log(`${y} is larger`);
    }
    else{
        console.log(`${x} and ${y} are equal`);
    }
};
findLargest(5,8);

//////return function/////
 ///return values can be captured or stored for future use
 //functions returns only 1 value
 //a function can have multiple return statements
 //return statements ends functio execution

 function add(x,y){
    return x + y; //returning only 1 value
   // console.log('hello world');
    //return [x,y]//returns multiple values
   //(using arrays[] to return multiple values)
 };
 const total = add(2,3);
 console.log(total);

 function isPurple(color){
    if (color =='purple'){
        return true;
    }
    else{
        return false
    }
 };
 const colorr = isPurple('purple');//declaring a new variable to store value
 console.log(colorr);

 //write a isValidPassworrd
 //it accepts 2 parametrs: password and username
 //password must:
 //   -be atleast 8 characters
 //   -cannot contain spaces
 //   -cannot contain the username
 //if all requirements are met return true 
 //otherwise false

 //first method
 function isValidPassword(password,username){
    if (password.length <8){
        return false
    }
    if(password.indexOf(' ') !== -1){ // user1    // user1password
         return false
    }
    if(password.indexOf(username) !== -1){
        return false
    }
    else{
        return true
    }
 };
 const fPassword = isValidPassword('catnashie','nash');
 console.log(fPassword);


//another method using 'or'(||)
 //function isValidPassword(password,username){
   // if (password.length <8 ||
       // password.indexOf(' ') !== -1 ||
       // password.indexOf(username) !== -1)
         //{
           // return false;
         //}
        // return true;
        //};
       // const fPpPassword = isValidPassword('catnashie','nash');
        // console.log(fPpPassword);
        

         //function isValidPassword(password,username){
           // const tooShort = password.length < 8;
           // const hasSpace = password.indexOf(' ') !== -1;
           // const conUsername = password.indexOf(username) !== -1;
            //apply condition
            // if(tooShort || hasSpace || conUsername) return false;
            // return true;
        // }; 
           // const fPaassword = isValidPassword('cathrine','nash');
           //   console.log(fPaassword);  

       // another mthod
        // if(!tooShort && !hasSpace && !conUsername) return true;
           // return false;
          
         // const fPPassword = isValidPassword('hrine','nash');
        // console.log(fPPassword);     



//simpler method
         // return !tooShort &&  !hasSpace && !conUsername;
          
         //const fPassword = isValidPassword('cathrine','nash');
        // console.log(fPassword);


       // a Pangram is a sentence containing every letter of the alphabet from a-z
       //'the quick brown fox jumps over the lazy dog'


       //write a function called isPangram which checks to see if a given sentence  contains every leter of the alphbet
        //make sure you ignore string casing!

        //SOLUTION 1
        function isPangram(sentence){
        let lowerCased = sentence.toLowerCase();
        for(let char of 'abcdefghijklmnopqrstuvwxyz'){
            if(lowerCased.indexOf(char) === -1){
                return false;
            }
            return true;
        }
        };
        const Pangram = isPangram('the quick brown fox jumps over the lazy dog');
       // const PanGram = isPangram('the quick brown fox jumps over  dog'); //FALSE
        console.log(Pangram);
         

        //solution 2
        function isPangram(sentence){
            let lowerCased = sentence.toLowerCase();
            for(let char of 'abcdefghijklmnopqrstuvwxyz'){
                if(!lowerCased.includes(char)){
                    return false;
                }
                return true;
            }
            };
           // const Pangram = isPangram('the quick brown fox jumps over the lazy dog'); //TRUE
            const PanGram = isPangram('the quick brown fox jumps over  dog'); //FALSE
            console.log(PanGram);

     //SCOPE
     //variable visibility

            //FUNCTION SCOPE
            function helpMe(){
                let msg = "I'm on fire!";
                console.log(msg);
                
            }
            

            let bird = 'mandarin duck';
            function birdWatch(){
                let bird = 'golden pheasant';
                console.log(bird);
            }
            console.log(bird);
            birdWatch();
            
            //BLOCK SCOPE
            let radius = 8;
            if(radius > 0){
                const pI = 3.14;
                let circ = 2*pI *radius;
                console.log(circ);

            }

            //LEXICAL SCOPE
  //refers to the fact that nested functions are bound to the parent function
  //are only available in parent function          
            function outer(){
                let hero = 'black panther';
                console.log(hero);
                function inner(){
                    let cryForHelp =`${hero}, please save me!`
                    console.log(cryForHelp);
                }
                inner();
            }
            outer();

            function outter(){
                let movie = 'accident man';//available across the whole function
                 function innerr (){
                     let movie = 'shooter';//available only inside the nested
                     console.log(movie.toUpperCase());

                    //more nesting
                    function extras(){
                        console.log(movie.toUpperCase());//looks for the nearset nested movie function.
                    }
                    extras();
                 }
                 innerr();
                
            }
            outter();

            //method 2 of declaring function is called function expresion
const squarre = function (num){
    return num*num;
    // console.log(squarre);
}
 console.log(squarre(7));
// reasons why functions are stored in a variable
 //

 //HIGHER ORDER FUNCTIOnNS
     //-operate on/wth other functions
     //-they can:-
                  //-accept other functions as arguments
                  //-return othr functions.
function callTwice(func){
   func();
   func();
};
function laugh(){
    console.log('hahaha');
};
callTwice(laugh);
//returns functions
function makeBetweenFunc(min,max){
    return function (val){
    return val >= min && val <= max;
    }
}
const inAgeRange = makeBetweenFunc(18,100);
console.log(inAgeRange(17));
console.log(inAgeRange(68));

     //callback functions.
//a function passed into another function as an argument,
//which is then invoked inside the outer function.
    //HOISTING 
   // variables declared


{
   var X = 1;
};
console.log(X);

console.log(sqquare(5));
function sqquare(m){
    return m*m
};
console.log(animal);
var animal = 'lion';
console.log(animal);

//automatic rpt function a certain number of times
function rage(){
    console.log('i hate everything');
};
function rptNTimes(action, num){
    for(let i = 0; i < num; i++){
        action();
    }
}
rptNTimes(rage, 13);

