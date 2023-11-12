//strict mode allows us to use a more secure code, helps to avoid errors and bugs
'use strict';

/*let hasDriversLicense =  false;
const passTest = true;

if (passTest) {
    hasDriversLicense=true; // if we change a letter of the variable , the terminal will show an error message thanks to strict mode
}
if (hasDriversLicense) {
    console.log(`I can drive`)
}*/

//const interface =  `Audio`;
//const private=1215

/////////////////////////////FUNCTIONS////////////////////////////////////////

// a piece of code that we can use over and over in our code

function logger() {
  console.log(`My name is Abraham`);
}

logger(); // calling / running /  invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples 🍎 and ${oranges} oranges 🍊.`;
  return juice; // to show it it must be later saved inside a variable but outside the function
}
// we save or capture the function call in a variable in order to show the value inisde "return"
const appleJuice = fruitProcessor(7, 3);
console.log(appleJuice);
// we can log it directly without saving it in a variable previously
console.log(fruitProcessor(10, 9));

/////////////////////////////////////ASSIGNEMENT 1 FUNCTIONS////////////////////////////////////////////////////////////

function describeCountry(country, population, capitalCity) {
  const description = `${country} has ${population} million people and its capital is ${capitalCity}`;
  return description;
}
const latinAmerica = describeCountry(`México`, 20, `Ciudad de México`);
console.log(latinAmerica);
const asia = describeCountry(`Japón`, 15, `Tokyo`);
console.log(asia);
const europa = describeCountry(`Alemania`, 12, `Berlín`);
console.log(europa);

////////////////////////////////////FUNCTION DECLARATIONS VS EXPRESSIONS////////////////////////////////////////////////////////

///////Function DECLARATION://////

// a main characteristic is that functions  can be called before the declaration of the function, *the function expression  must be called always after we declare the function.
function calcAge1(birthYear) {
  /*const age=2037-birthYear;
    return age;*/
  // we can also return a value directly without storing it into a variable
  return 2037 - birthYear;
}

const age1 = calcAge1(1985);
console.log(age1);

////////////////////////////////////////////Function EXPRESSION (anonymus function)////////////////////////////////////////////////////////////////////////////////

// We actually dont give a name to the function
// we save the function directly in a variable
// "expressions produce values"

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);
//log directly the function:
console.log(calcAge2(1991));

/////////////////////ASSIGNMENT 2 FUNCTION DECLARATIONS VS EXPRESSIONS//////////////////////

//DECLARATION FUNCTION METHOD:
//CAN CALL IT BEFORE DEFINNING THE FUNCTION
function percentageOfWorld1(country, population) {
  const percentage = (population / 7900) * 100;
  const percentageCountry = `${country} has ${population} million people, so it's about ${percentage}% of the world population`;
  return percentageCountry;
}

const percentage1 = percentageOfWorld1(`Belgium`, 9200);
console.log(percentage1);

const percentage2 = percentageOfWorld1(`Germany`, 4800);
console.log(percentage2);

const percentage3 = percentageOfWorld1(`Thailand`, 7500);
console.log(percentage3);

//EXPRESSION FUNCTION METHOD:
// ALSO CALLED ANONYMUS FUNCTION AND WE CANNOT CALL IT BEFORE DEFINNING THE FUNCTION
//, ITS A GOOD PRACTICE TO DEFINE ALL THE FUNCTIONS FIRST IN THE CODE AND THEN CALL THEM WHEN NEEDED

const percentageOfWorld2 = function (country, population) {
  const percentage = (population / 7900) * 100;
  const percentageCountry = ` The country of ${country} has ${population} million people, so it's about ${percentage}% of the world population`;
  return percentageCountry;
};

const percentage4 = percentageOfWorld2(`England`, 9200);
console.log(percentage4);

const percentage5 = percentageOfWorld2(`China`, 4800);
console.log(percentage5);

const percentage6 = percentageOfWorld2(`France`, 7500);
console.log(percentage6);

////////////////////////////////////ARROW FUNCTIONS ///////////////////////////////////////////////////////////////
// the return is implicit
// they not get the "this-keyword"

//form 1
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

//form 2
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName}, retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, `Abraham`));
console.log(yearsUntilRetirement(1980, `Ismael`));

/////////////////////ASSIGNMENT 3 ARROW FUNCTIONS/////////////////////
const percentageOfWorld3 = (country, population) => {
  const percentage = (population / 7900) * 100;
  const countryData = `The marvelous country of ${country} has ${population} million people, so it's about ${percentage}% of the world population`;
  return countryData;
};

const percentageArrow = percentageOfWorld3(`Canada`, 7000);
console.log(percentageArrow);
console.log(percentageOfWorld3(`United States`, 4500));

//////////////////////// FUNCTIONS INSIDE FUNCTIONS (function calling functions) ////////////////////////////////////////////////////

const cutPieces = function (fruit) {
  // here we make our function for multiplying the pieces
  return fruit * 4;
};

function fruitMachine(apples, oranges) {
  const applePieces = cutPieces(apples); // here we send the apples value (4) to the cutPieces function just called, then it catches the value and saves it in "fruit" parameter, then multiplies it by 4 . The result is saved in the const applePieces.
  const orangePieces = cutPieces(oranges);

  const juicePieces = `Juice with ${applePieces} apple pieces 🍎 and ${orangePieces} orange pieces 🍊.`;

  return juicePieces;
}

const fruitPieces = fruitMachine(4, 16);
console.log(fruitPieces);

/////////////////ASSIGNMENT Functions Calling Other Functions ////////////////////

function percentageOfWorldCall(population) {
  const percentageCall = (population / 7900) * 100;

  return percentageCall;
}

const describePopulation = (density) => {
  const percetnageOperation = percentageOfWorldCall(density);
  const descriptionText = `The marvelous country of México has 
  ${density} million people, so it's about ${percetnageOperation}% of the world population`;
  return descriptionText;
};

console.log(describePopulation(5900));

/////////////////// REVIEWING FUNCTIONS /////////////////////////////

const calcAge = function (birthyear2) {
  // parameters can be named the same and theres is no problem, they are not related, even we can call like that a variable outside teh functions and it wouldnt also cause any trouble.
  return 2037 - birthyear2;
};

const yearsUntilRetirement2 = function (birthYear2, firstName2) {
  const age4 = calcAge(birthYear2);
  const retirement2 = 65 - age4;
  if (retirement2 > 0) {
    return `${firstName2}, retires in ${retirement2} years`;
  } else {
    return -1; // nothing applies or runs after the returns, because the returns exits the function, so everything afrer de return will never be executed
  }
};
console.log(yearsUntilRetirement2(1991, `Abraham`));
console.log(yearsUntilRetirement2(1970, `Ismael`));

/////////////////////////////////////////////CODING CHALLENGE 2 /////////////////////////////////////////////////////////////

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win ${avgDolphins} vs. ${avgKoalas}`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win ${avgKoalas} vs. ${avgDolphins}`;
  } else return `No team wins! 😕`;
}

const dolphinScore = calcAverage(85, 54, 41);

const KoalaScore = calcAverage(23, 34, 27);

console.log(checkWinner(dolphinScore, KoalaScore)); // dolphins wins
console.log(checkWinner(14, 548)); // koalas wins

/////////////////////////////ARRAYS /////////////////////////////////////////////////////////////

const friend1 = `Michael`;
const friend2 = `Steven`;
const friend3 = `Peter`;

const friends = [`Michael`, `Steven`, `Peter`];
console.log(friends);
console.log(friends[0]); //Michael
console.log(friends[2]); // Peter
console.log(friends.length); //3
console.log(friends[friends.length - 1]); // para saber el ultimo elemento dentro del array "Peter"

const years = new Array(1991, 1984, 2008, 2020); // another form to declare an array
console.log(years);

friends[2] = 'Jay'; //we changed the array
console.log(friends); //[`Michael`, `Steven`, `Jay`];
//we can not change the whole array when it is declared with const, only one element can be changed tat way

//an array can actually hold values of diferent tye:
let newName = 'Abraham';
const jonas = ['Jonas', newName, 2021 - 1985, friends];
console.log(jonas);

/////////////////////////////Exercise//////////////////////////////////////////////////////////
function calcAge1(birthYear) {
  /*const age=2037-birthYear;
    return age;*/
  // we can also return a value directly without storing it into a variable
  return 2037 - birthYear;
}
const años = [1990, 1985, 2021, 2012, 2042];

const calculatedYears = calcAge1(años[0]);
const calculatedYears2 = calcAge1(años[1]);
const calculatedYears3 = calcAge1(años[años.length - 1]);
console.log(
  `ESTA ES LA FUNCION QUE ME INTERESA`,
  calculatedYears,
  calculatedYears2,
  calculatedYears3
);

//We can also store function callings inside an array
const ages = [
  calcAge(años[0]),
  calcAge(años[1]),
  calcAge(años[años.length - 1]),
];
console.log(ages);

/////////////////////////////ARRAY METHODS, PUSH, UNSHIFT, ///////////////////////////
///ADD ELEMENTS PUSH & UNSHIFT
const methods = ['Dulce', 'Sofia', 'Yared'];
console.log(methods);
methods.push('Susana'); // adds last
console.log(methods);

methods.unshift('jhon'); //adds first
console.log(methods);

//////REMOVE ELEMENTS POP & SHIFT

methods.pop(); //removes last
console.log(methods);

methods.shift(); //removes first
console.log(methods);

///////////////INDEX OF ///////////////////////
//This helps us to know in which index position the element is
console.log(methods.indexOf('Yared'));

//we can store  the position in a variable so we can then later change the element in that exact position
const best = methods.indexOf('Yared');
methods[best] = 'sweet';
console.log(methods);
methods[best] = 'Yared';
console.log(methods);

////////////////////INCLUDES/////////////////
//Tells us if the element is in the array(true) or not (false), it returns a boolean value

console.log(methods.includes('Yared'));
console.log(methods.includes('Bob'));

if (methods.includes('Steven')) {
  console.log('You have a friend named Steven');
} else {
  console.log('There is no Steven in the array');
}

if (methods.includes('Yared')) {
  console.log('Cool! Yared is in the array');
} else {
  console.log("Nope, she isn'nt in the array");
}

/////////////////////////////////CODING CHALLENGE WITH ARRAYS EXERCISE 2 /////////////////////////////////////////////

const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return console.log('regresa tip ', tip), tip;
};

/*   const bill = Number(prompt('What is the Bill?')); */
const bills = [125, 555, 44, 100];
let subTotal = [];
let totaLValues = [];
for (let index = 0; index < bills.length; index++) {
  subTotal.push(calcTip(bills[index]));
  totaLValues.push(bills[index] + subTotal[index]);
  console.log(
    `The Bill was ${bills[index]}, the tip was ${subTotal[index]}, and the total value ${totaLValues[index]}`
  );
}
console.log(bills);
console.log(subTotal);
console.log(totaLValues);
/* envio de array a funcion sin ciclo for:
   const bills = [125, 555, 44];
    const subTotal1 = calcTip(bills[0]);
    const subTotal2 = calcTip(bills[1]);
    const subTotal3 = calcTip(bills[2]); */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////   O    B   J   E   C   T   S   ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//They are like arrays but with Key/properties values (in objects THE ORDER doesn't matter)
//OBJECT Literall sintax:
const abyObject = {
  primerNombre: 'Abraham',
  segundoNombre: 'Delgado',
  edad: 2022 - 1985,
  amigos: ['Ale', 'Javy', 'Juan Luis'],
  job: 'Developer',
};
console.log(abyObject);

////Methods to get values out of an object///
// DOT notation :
console.log(abyObject.segundoNombre);

//BRACKETS notation:
console.log(abyObject['segundoNombre']);

const nameKey = 'Nombre';
console.log(abyObject['primer' + nameKey]); // with Brackets notation we can mix variable and operations
bject;
// How to add new properties to the object
abyObject.gaming = 'Playstation';
abyObject['anime'] = 'Kimetsu no yaiba';
abyObject.location = 'México';
abyObject['instagram'] = '@VanDanthek';
console.log(abyObject);

///////Usage difference between DOT and Brackets notation//////////
/* const interestedIn = prompt(
  'What do you want to know about Aby?, Choose between: primerNombre, segundoNombre, edad, amigos y job'
);
console.log(abyObject.interestedIn); // !!!!!!!!!!!!!results undefined because DOT notation needs the exact name property!!!!!!!!!!!!!!!!

if (abyObject[interestedIn]) {
  console.log(abyObject[interestedIn]); // results the property that we defined in the Propmt message because BRACKETS allows us operators and variables
} else {
  console.log(
    'WRONG REQUEST! Choose between: primerNombre, segundoNombre, edad, amigos y job'
  );
} */

/////////////////CHALLENGE , WRITE STRING WITHOUT HARD CODING ANY VALUE///////////
//Form 1
console.log(
  abyObject.primerNombre,
  'has ',
  abyObject.amigos.length,
  'friends',
  'and his best friend is: ',
  abyObject.amigos[0]
);
//Form 2
console.log(
  `${abyObject.primerNombre} has ${abyObject.amigos.length} friends and his best friend is: ${abyObject.amigos[0]}`
);

//////////////////////---------OBJECT METHODS------------/////////////////////////
//functions (functions are just another kind of value) can be added to objects

const newObject = {
  primerNombre: 'Abraham',
  segundoNombre: 'Delgado',
  birth: 2022 - 2000,
  amigos: ['Ale', 'Javy', 'Juan Luis'],
  job: 'Developer',
  hasDriverLicense: true,

  calcAge: function (birth) {
    // Any function attached to an object is called a MEDOTH
    return 2022 - birth;
    // its lke a function (const calcAge= function(){}) but here its a property of the object
  },
};
// calling a method inside an object with dot and [] notations
console.log(newObject.calcAge(1985)); //37
console.log(newObject['calcAge'](1985)); //37

let edadActual = 'calcAge';
console.log(newObject[edadActual](1985)); //37

console.log(newObject.birth); //22
console.log(newObject['birth']); //22
let edad = newObject.birth;
console.log(edad); //22
let suEdad = 'birth';
console.log(newObject[suEdad]); //22

console.log(newObject.calcAge(edad)); //2000 (2022- 22 (birth=22 *2022-2000))
console.log(newObject['calcAge'](edad)); //2000 (2022- 22 (birth=22 *2022-2000))

console.log(newObject.calcAge(newObject.birth)); //2000 (2022- 22 (birth=22 *2022-2000))
console.log(newObject['calcAge'](newObject['birth'])); //2000 (2022- 22 (birth=22 *2022-2000))

//////////////////////////-----------T H I S------------------//////////////////////////
//THIS =  The object in which the method is called (who is calling the method)

// with "THIS" , in this example we will access directly the birth property inside the object instead of passing it to the method as props
const anotherObject = {
  primerNombre: 'Abraham',
  segundoNombre: 'Delgado',
  birth: 1985,
  amigos: ['Ale', 'Javy', 'Juan Luis'],
  job: 'Developer',
  hasDriverLicense: true,

  calcEdad: function () {
    console.log(this); // prints all the "anotherObject" object
    return 2022 - this.birth; // its like anotherObject.birth
  },
};
// with "THIS" we will read the bith property directly from the object
// änotherObject is calling "calcEdad", so this= "anotherObject"
console.log(anotherObject.calcEdad()); //37

/////////// store the method result in a new property inside the object/////////////////

//we do this to avoid multiple calls to a method inside a function if needed
const objectExample = {
  primerNombre: 'Abraham',
  segundoNombre: 'Delgado',
  birth: 1950,
  amigos: ['Ale', 'Javy', 'Juan Luis'],
  job: 'Developer',
  hasDriverLicense: true,

  calcEdad: function () {
    this.laEdad = 2022 - this.birth; // here we create the new "laEdad" property and asign the value
    return this.laEdad;
  },

  challenge: function () {
    this.personBio = `${this.primerNombre} is a ${this.laEdad}-year old ${
      this.job
    } 
    and has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
    return this.personBio;
  },
};
console.log(objectExample.calcEdad()); // 72, we need this to call first the function and then can see the results
console.log(objectExample.laEdad); //72
console.log(objectExample['laEdad']); //72
console.log(objectExample);

console.log(objectExample.challenge()); //Abraham is a 72-year old Developer and has a driver's license
console.log(objectExample.personBio); //Abraham is a 72-year old Developer and has a driver's license
console.log(objectExample['personBio']); //Abraham is a 72-year old Developer and has a driver's license
console.log(objectExample);

/////////////////////////////////////////-----CODING CHALLENGE 3---------------//////////////////////////////
const markData = {
  name: 'Mark Wachowski',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const johnData = {
  name: 'John Stallone',
  mass: 192,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

markData.calcBMI();
johnData.calcBMI();
console.log(
  markData.bmi > johnData.bmi
    ? `${markData.name}'s bmi (${markData.bmi}) is higher than ${johnData.name}'s (${johnData.bmi}) `
    : `${johnData.name}'s bmi (${johnData.bmi}) is higher than ${markData.name}'s (${markData.bmi}) `
);

//////////////////////////ITERATION: THE LOOP ////////////////////////////`

////////////////////FOR/////////////////
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

//////////////////LOOPING ARRAYS//////////////////////////////
const abyArray = [
  'Abraham',
  'Delgado',
  2022 - 1985,
  ['Ale', 'Javy', 'Juan Luis'],
  'DeveLoper',
];

const types = [];

for (let index = 0; index < abyArray.length; index++) {
  // we started the counter index at 0 because its the first element in the array
  //rradfing an array:
  console.log(abyArray[index], 'type: ', typeof abyArray[index]);
  //filling an array
  //types[index] = typeof abyArray[index];
  types.push(typeof abyArray[index]);
}
console.log(types);

/////calculate Age

const theYears = [1991, 2007, 1969, 2020];
const personAges = [];
for (let i = 0; i < theYears.length; i++) {
  personAges.push(2037 - theYears[i]);
}
console.log(personAges);

//CONTINUE AND BREAK STATEMENTS OF THE LOOP FUNCTION /////
//CONTINUE: Let us exit the current iteration of the loop
console.log('----ONLY STRINGS----');
for (let index = 0; index < abyArray.length; index++) {
  if (typeof abyArray[index] !== 'string') continue; // we will only print string items, "continue" here is equal to EXIT or SKIP the current iteration!
  console.log(abyArray[index], 'type: ', typeof abyArray[index]);
}

//BREAK: Terminates the WHOLE loop, not only the current iteration
console.log('----BREAK WITH NUMBERS----');
for (let index = 0; index < abyArray.length; index++) {
  if (typeof abyArray[index] == 'number') break; // when a number appearr or gets fond , the loop is terminated completely
  console.log(abyArray[index], 'type: ', typeof abyArray[index]);
}

/////////////////LOOPING BACKWARDS////////////////
console.log('----LOOPING BACKWARDS----');
for (let index = abyArray.length - 1; index >= 0; index--) {
  console.log(index, abyArray[index], 'type: ', typeof abyArray[index]);
}
/////////////////LOOPS INSIDE LOOP////////////////
console.log('----LOOPS INSIDE LOOP----');

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----------Starting Exercise ${exercise}`);
  for (let rep = 0; rep < 6; rep++) {
    console.log(` Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
////////////////////////////////////////-----------------W H I L E---------- //////////////////////////////////////////////////
console.log('----WHILE LOOP----');
/* This for method makes the same that the while method: for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}
 */
//the while loop can be any condition, not especifically a counter */
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

// we roll a dice while it appears a 6
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice} 🎲`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log('While loop is about to end...');
  }
}

let dado = Math.trunc(Math.random() * 6) + 1;
for (dado; dado !== 6; dado = Math.trunc(Math.random() * 6) + 1) {
  console.log(`Aventaste un ${dado} 🎲`);
}

///////////////////////////--------------------CODING CHALLENGE ----------------------------/////////////////////////////////////
let stevenBill;
function calculateBill(params) {
  let tip;
  stevenBill >= 50 && stevenBill <= 300
    ? (tip = stevenBill * 0.15)
    : (tip = stevenBill * 0.2);
  let billTotal = stevenBill + tip;
  let result = `The bill was ${stevenBill}, the tip was ${tip}, and the total value ${billTotal}`;
  return result;
}
console.log(calculateBill((stevenBill = 400)));

///////////////////////////--------------------CODING CHALLENGE 4 2nd SECTION ----------------------------/////////////////////////////////////

const calculateTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return /* console.log('regresa tip ', tip), */ tip;
};

const newBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let index = 0; index < newBills.length; index++) {
  tips.push(calculateTip(newBills[index]));
  totals.push(newBills[index] + tips[index]);
  console.log(
    `Bill: ${newBills[index]} + Tip: ${tips[index]} = ${totals[index]}`
  );
}
console.log(`----Bills----
 ${newBills}`);
console.log(`----Tips----
 ${tips}`);
console.log(`----total Value----
${totaLValues}`);

console.log(newBills);

//////////////////////-----------------Bonus Challenge ---------------------////////////////////////
let arr = [];
let counter = 1;
while (counter <= 10) {
  arr.push(Math.trunc(Math.random() * 99) + 1);
  counter++;
}
function calcAverage2(arr) {
  let sum = 0;
  let average;
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
  }
  return (
    (average = sum / arr.length),
    console.log(`The average of the array: ${arr} is ${average}`),
    console.log('The average of the array: ', arr, ' is ', average)
  );
}

calcAverage2(arr);

// this example is very usefull to use functions and show them in an html
/* function jsAlert() {
  alert('I am a JS Alert');
  log('You successfully clicked an alert');
}

function jsConfirm() {
  var c = confirm('I am a JS Confirm');
  var result = c === true ? 'Ok' : 'Cancel';
  log('You clicked: ' + result);
}

function jsPrompt() {
  var p = prompt('I am a JS prompt');
  log('You entered: ' + p);
}

function log(msg) {
  var result = document.getElementById('result');
  result.innerHTML = msg;
}
 */

const ora = {
  a: 1,
  b: 2,
  c: 3,
};
const ora2 = {
  ...ora,
  a: 5,
};

console.log(ora2);
console.log(ora2.a);

var pares = 'Abrahamb';
var ocurencias = 0;
var revisados = [];
var caracteresRepetidos = function (str) {
  for (var i = 0; i < str.length; i++) {
    if (
      revisados.includes(str[i]) &&
      str.indexOf(str[i]) == str.lastIndexOf(str[i])
    ) {
      console.log('no se repite');
    } else {
      revisados.push(str[i]);
      ocurencias = ocurencias + 1;
    }
  }

  return ocurencias;
};

console.log(revisados);
console.log(caracteresRepetidos(pares));
