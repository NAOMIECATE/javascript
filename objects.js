//property = key + value
const fitBitData = {
    totalSteps    :308727,
    totalMiles    :211.7,
    avgCalorieBurn  :5755,
    workoutsThisWeek  :'5 of 7',
    avgGoodSleep     :'2:13',
    100              :'one hundred'
};
//updating
fitBitData.totalMiles = 300;
fitBitData.totalSteps +=1000;
fitBitData.totalMiles --;
fitBitData.heartStillbeating = true;
console.log(fitBitData);
//use dot notation to access property
console.log(fitBitData.totalMiles);
//anytime you call a variable it has to be in string wen using'[]'
console.log(fitBitData['totalSteps']);
const leaners = {
    fName:'nash',
    lastName: 'mesh',
    strengths : ['music','cooking'],
    exams :{
        midterm: 92,
        final: 88
    }


}
console.log(leaners.strengths[1]);
console.log(pupils.strengths[2]='GBV');
console.log(puils);
//the total examinatins marks = 180
const fResult = `the total examination mark is :${pupils.exams.final}`;
console.log(fResult);
const person = {
    age : 45,
    cohort : {
        cohortOne : 15,
        cohortTwo : 19
    }
}
// the total number of cohorts is : 34!
const person1 = `the total number of the 2 cohorts is : ${person.cohort.cohortOne + person.cohort.cohortTwo}!`;
console.log(person1);
// methods of adding other objects
person.gender = 'female'
console.log(person.age);
console.log(person);
person['city'] = 'europe'
console.log(person);

// updating Objects
person.age -= 20;
console.log(person);

const fNum = {
    one : 1,
    two : 2,
    three : 3
}
const sNum = {
    one : 1,
    two : 2,
    three : 3
}
console.log(typeof fNum);
console.log(typeof sNum);
console.log(fNum === sNum);
