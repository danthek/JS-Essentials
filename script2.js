/*let country="Mexico";
let continent="America";
let population="7 billion people";

console.log(country,continent,population);

let javascriptIsFun=true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun)

console.log(typeof "practico diario")
console.log(typeof true)
console.log(typeof 777)

javascriptIsFun="La vida es hermosa";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun)

let carBRand;
console.log(carBRand);
console.log(typeof carBRand);

carBRand="Toyota";
console.log(carBRand);
console.log(typeof carBRand);


let country="Mexico";
let continent="America";
let population=7000000;
let isIsland=false;
let language
console.log(typeof isIsland, typeof population, typeof country, typeof language);*/

/*const now=2037;
const ageJonas=now-1991;
const ageSarah=now-2025;
console.log(ageJonas,ageSarah);
console.log(ageJonas*2, ageSarah/2, 2**3);
//2**3 means 2 to the power of 3 = 2*2*2=8

const firstName="abraham";
const lastName= "delgado";
console.log(firstName+ " " + lastName);
// we use the "" for empty space between stings

//assigment operators
let x=10+5;
console.log(x);
x+=20; // this means x=x+20=35
x*=100;// x=x*100=3500
x++; // x=x+1= 3501
x--; //x=x-1=3500
console.log(x);

//comparisson operators (boolean)
console.log(ageJonas>ageSarah); //true
console.log(ageJonas<ageSarah); //false

console.log(ageSarah>=17); //false (greater or equal)

const isFullAge=ageSarah>=5;
console.log(isFullAge);*/

const country = 'Mexico';
const continent = 'America';
let population = 7000000;
const isIsland = false;
let language;
language = 'spanish';
let finlandPopulation = 6000000;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
); // nos da el tipo de variable
console.log(typeof 'practico diario');
console.log(typeof true);
console.log(typeof 777);

if (population >= 33000000) {
  console.log(`${country}'s population is above average`);
} else {
  const average = 33000000 - population;
  console.log(`${country}'s population is ${average} million below average`);
}

let firstHalf = population / 2;
let secondHalf = population / 2;
console.log('first half is', ' ', firstHalf);
console.log('second half is', ' ', secondHalf);
population++;
console.log(population);
console.log(population > finlandPopulation); //imprime un boolean en la terminal

const biggerCountry = population < finlandPopulation; //asigna un boolean a la variable
console.log(biggerCountry);
console.log(population < 30000000); // imprime boolean

let description =
  country +
  ' ' +
  'is in' +
  ' ' +
  continent +
  ' ' +
  'and its' +
  ' ' +
  population +
  ' ' +
  'people speak' +
  ' ' +
  language +
  ' ' +
  777; //strings+variables+ numbers inside a variable
console.log(description);
const newDescription = `${country} is in ${continent} and it's ${population} people speak: ${language}!`;
console.log(newDescription);
/////////////////////////////////////////////////////////////////////////////////////////////////
//lengths de variables
console.log(description.length); // to know the length of a string
let firstLetter = country[0];
console.log(`the fist letter of MEXICO is ${firstLetter}`);
console.log(country[0]); // to know the first or further letter of a string(from zero to ....)

let lastLetter = country[country.length - 1]; //to know the last letter of a string
console.log(lastLetter);

console.log(country[country.length - 1]); // last letter without asigning it a variable

let fourthToLastLetter = country[country.length - 4]; // to know the Nth to last character in a string
console.log(fourthToLastLetter);

/////////////////////////////////////////////////////////////////////////////////////////////////
//ARRAYS
let tacoArray = ['cebolla', 'chile', 'carne', 9]; // storing an Array in a variable
console.log(tacoArray);

let indexArray = tacoArray[2]; //acces data inside arrays using indexex, we put the result of the access insisde the variable indexArray
console.log(indexArray); // imprime carne

tacoArray[2] = 'Tortilla'; // modify of an item value inside an Array
console.log(tacoArray[2]); // imprime tortilla
console.log(tacoArray); // imprime :"cebolla", "chile", "Tortilla", 9

indexArray = tacoArray[2]; // no usamos "let" porque ya la habiamos declarado
console.log(indexArray); // imrprime tortilla

let tacoNestedArray = [
  ['pastor', 3],
  ['carnaza', 2],
]; // nested arrays
console.log(tacoNestedArray);

// lo siguiente guarda arrays multidimensionales dentro de un array
let arr = [
  [1, 2, 3],
  [4, 'cinco', 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
console.log(arr[1]); //[4,cinco,6]
console.log(arr[1][1]); //[cinco]
console.log(arr[3]); //[[10,11,12], 13, 14]
console.log(arr[3][0]); //[10,11,12]
console.log(arr[3][0][2]); //12
console.log(arr[3][1]); //13
console.log(arr[3][2]); //14

/////////////////////////////////////////////////////////////////////////////////////////////////
// lo siguiente nos sirve para agregar otros elementos al final del Array, incluso pueden ser otros Arrays multimensionales

let videoJuegos = ['nintendo', 'sega', 'playstation'];
console.log(videoJuegos);
videoJuegos.push('xbox');
console.log(videoJuegos);

videoJuegos = [1, 2, 3, 4];
console.log(videoJuegos);
videoJuegos.push(5);
console.log(videoJuegos);

videoJuegos = ['nintendo', 'sega', 'playstation'];
console.log(videoJuegos);
console.log(videoJuegos[2]); // playstation
videoJuegos.push(['gameboy', 'psp', 'gamegear']);
console.log(videoJuegos);

//grid [2][3] = 5 para cambiar el valor de una posicion especifica dentro del grid
// lo siguiente nos sirve para sacar el elemento al final del Array, incluso pueden ser otros Arrays multimensionales

let ropaArray = ['pantalon', 'camisa', 'calcetin'];
console.log(ropaArray);
let sacarRopa = ropaArray.pop(); // saca calcetin
console.log(sacarRopa);
console.log(ropaArray); // imprime pantalon, camisa

//Lo siguiente nos permite sacar el primer elemento de un Array
let casaArray = [['cocina', 'baño', 'sala'], 'comedor', 'recamara'];
console.log(casaArray);
let sacarCasa = casaArray.shift(); //saca cocina baño sala
console.log(sacarCasa); //imprime cocina , baño, sala
console.log(casaArray); // imprime comedor recamara

// con lo siguiente agregamos un nuevo elemento al inicio de  de nuestro Array
casaArray.unshift('Cochera');
console.log(casaArray); // imprime cochera comedor recmara

/////////////////////////////////////////////////////////////////////////////////////////////////
// F U N C T I O N S

function miPrimeraFuncion() {
  console.log('Hi World!');
}

miPrimeraFuncion();

function pasarArgumentos(a, b) {
  let c = a + b;
  console.log('el resultado de la suma es ', c); // cuando imprimos no es necesario usar "+"
  //alert("La suma de los numeros es "+c) // cuando guardamos en variable o mandamos alert es necesario utiliza "+"
}

pasarArgumentos(5, 25);

/////////////////////////////////////////////////////////////////////////////////////////////////
// scopes en las variables

let variableGlobal = 100;

function funy1() {
  upsGlobal = 50;
}

function funy2() {
  let elOutput = '';
  if (typeof variableGlobal != 'undefined') {
    elOutput = 'variableGlobal: ' + variableGlobal;
  }
  if (typeof upsGlobal != 'undefined') {
    elOutput += ' upsGlobal: ' + upsGlobal;
  }
  console.log(elOutput);
}

funy1();
funy2();

//Another form of the same function

/*var myGlobal=10;

function fun1() {
oopsGlobal=5;
}


function fun2() {
  var output = "";
  if (typeof myGlobal != undefined) { 
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != undefined) {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1()
fun2()
*/
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = '';

  output = 'myGlobal: ' + myGlobal;

  output += ' oopsGlobal: ' + oopsGlobal;

  console.log(output);
}

fun1();
fun2();

/////////////////////////////////////OPERATORS PRECEDENCE////////////////////////////////////////
let x, y; // we can declare 2 variables at the same time
x = y = 25 - 5 - 10; //x=y=10, the "-" has higher precedence than de =
console.log(x, y);

/////////////////////////////////////////////////////////////////////////////////////////////////
// 1st CODE CHALLENGE

let marckHeight,
  marckMass,
  jhonHeight,
  jhonMass,
  marckBMI,
  jhonBMI,
  marckHigherBMI; // we cannot use "const" because a const variable can't be empty or without asigning it a value.

marckMass = 78;
marckHeight = 1.69;
jhonMass = 292;
jhonHeight = 1.95;

marckBMI = marckMass / marckHeight ** 2; //this means marckHieght*marckHeight
jhonBMI = jhonMass / jhonHeight ** 2;
marckHigherBMI = marckBMI > jhonBMI; // this throws a boolean
console.log(
  "Marck's BMI: ",
  marckBMI,
  " Jhon's BMI: ",
  jhonBMI,
  " Is Marck's BMI higher than Jhon's? ",
  marckHigherBMI
);
//alert("Marck's BMI: "+ marckBMI+ " Jhon's BMI: "+ jhonBMI+ " Is Marck's BMI higher than Jhon's? "+marckHigherBMI )

//////////////////////////////////////////////////////////////////
//TEMPLATE LITERALS (BACKTICKS `` AND ${} MUST BE USED)

const myName = 'Abraham';
const birthyear = 1985;
const currentYear = 2021;
const job = 'developer';
//old way of using strings
const danthek =
  "I'am " +
  myName +
  ', a ' +
  (currentYear - birthyear) +
  ' year old ' +
  job +
  '!';
console.log(danthek);
///////////////// new way with templates and backticks `` and ${}
const danthekTemplate = `I'am ${myName}, a ${
  currentYear - birthyear
} year old ${job}!`;
console.log(danthekTemplate);

// multiline strings
//old way
console.log('esta es\nuna cadena\nen multilinea\na la antigua');

//new way with templates and backticks
console.log(`esta es
una cadena
en multilinea
con templates \`\``);

///////////////////////////////////////////////////////////////////////
//IF ELSE STATEMENTS

const age = 25;
//const isOldEnough=age>=18; we can make this work without this variable

if (age >= 18) {
  console.log(
    `Congratulations you are ${age} years old and can get a driving licence! 😃🚗`
  );
} else {
  const yearsLeft = 18 - age;
  console.log(
    `We are very sorry but you are'nt old enough for a driving licence 🙁 wait another ${yearsLeft} years to get one 😁`
  );
}

const birthdate = 1985;
const century21 = birthdate >= 2000;
let wichCentury;

if (century21) {
  wichCentury = 21;
  console.log(`Wow! you were born in the ${wichCentury} century 😮`);
} else {
  wichCentury = 20;
  console.log(
    `You are a little older,🤤 birth in the past ${wichCentury} century`
  );
}
console.log(wichCentury);

/////////////////////////////////////SECOND CODE CHALLENGE///////////////////////////////////////////////////////////
if (marckBMI > jhonBMI) {
  console.log(`Mark's BMI ${marckBMI} is higher than John's ${jhonBMI}!`);
} else {
  console.log(`John's BMI ${jhonBMI} is higher than Mark's ${marckBMI}!`);
}

/////////////////////////////TYPE CONVERSION AND COERCION //////////////////////////////////////////////////////////
// JS can only convert to 3 types: to a string, to a number or to a boolean

//TYPE CONVERSION

const inputYear = `2000`;
console.log(Number(inputYear) + 150); // we must use the "Number()" in order to convert a string number to a number, Numer must start with a capital "N"
const inputRandom = 1450;
console.log(inputRandom);
console.log(String(inputRandom)); // here we convert  a number to a string

// TYPE COERCION
//solo si usamos "+", se convierte todo a string y nunca  a number

console.log(
  `Esto es para validar coersion con un numero: ` +
    23 +
    ` convertido automaticamente a String`
);

console.log(`23` + 10 + `100`);
////////////////al usar "-,*,/ se convierten en Number automaticamente"////////////
console.log(`23` - `10` - 5); // here it has converted all to numbers //8
console.log(`50` / 2); //25
console.log(`4` * 8); //32

let ejercicio = `1` + 1; // se vuelve un String de `11`
console.log(ejercicio);
ejercicio -= 4; // imprime el Number 7
console.log(ejercicio);

console.log('9' - '5'); // 4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

// TRUTHY AND FALSY VALUES
// 5 FALSY VALUES 0, '', UNDEFINED, NULL, NaN (they will become false when converted to booleam
//everything else are truthy valors(every number that is not zero or every string that is not an empty string) will be converted to true when we atempt to convert them to a boolean.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); //empty object
console.log(Boolean(''));

/////////////////////////////EQUALITY OPERATORS//////////////////////////////////////////////////////////////////////////////
// == VS === (ALWAYS USE DE === FOR GOOD PRACTICE)

const newAge = 18;

if (newAge == 18) console.log(`(LOOSE) You just become an adult! 😀 `);
if (newAge === 18) console.log(`(STRICT) You just become an adult! 😀 `);

/*const favoriteNumber= Number(prompt(`Whats your favorite number?😄`)) // we use number to convert into a number  the string data we recieve via the prompt.
console.log(favoriteNumber)
console.log(typeof favoriteNumber)

if(favoriteNumber===25){
  console.log(`COOL! 25 is an amazing number!🤗`)
  alert(`25 is the best number ever! 👏👏👏👏👏`)
}else if(favoriteNumber===7){
  console.log( favoriteNumber, `is also a GREAT number`)
  alert(favoriteNumber+` is also a GREAT number`)
}else{
  console.log(`The number is neither 25 nor 7`)
  alert(`The number is neither 7 nor 25`)
}

//  !== this means  STRICT different and != means LOOSE different///////////////////////////////////////////////////////////////////////////////
if(favoriteNumber!==7)console.log(`Why not 7?`)*/

///////////////ASIGNMENT EXERCISE FOR EQUALITY OPERATORS ==VS ===//////////////////////////////////////////////////////////////////////////
/*let numNeighbours=Number(prompt(`How many neighbours does your country have?`));
if(numNeighbours===1){
  console.log(`Only 1 border!`)
}else if(numNeighbours>1){
  console.log(`More than 1 border `)
}else{
  console.log(`No borders at all!😕`)
}*/

//////////////////////////LOGICAL OPERATORS AND&&,OR|| & NOT! //////////////////////////////////////////////////////

const hasDriverLicense = true; //A
const hasGoodVision = true; // B
const isTired = false; //C

console.log(hasDriverLicense && hasGoodVision); // true
console.log(hasDriverLicense || hasGoodVision); //true
console.log(!hasDriverLicense); //false
console.log(!hasGoodVision); //false
console.log(isTired); //false
console.log(!isTired); //true

const shouldDrive = hasDriverLicense && hasGoodVision && !isTired;
if (shouldDrive) {
  console.log(`Sarah is able to drive! 😃`);
} else {
  console.log(`Someone else should drive....🙁`);
}
///////////////////////////ASSIGNMENT EXERCISE FOR LOGICAL OPERATORS//////////////////////////////////////////////////
const sarasLanguage = `englishkk`;
const sarasPopulation = 40000000;
const isAnIsland = false;
const sarasCountry = `canada`;

if (
  (sarasLanguage === 'spanish' && sarasPopulation < 50000000 && !isAnIsland) ||
  sarasCountry === 'canada'
) {
  console.log(`you should live in Mexico! 😃 `);
} else {
  console.log(`Mexico does not meet your criteria 😓`);
}

///////////////////////////CODING CHALLENGE #3//////////////////////////////////////////////////

const dolphinsAverage = (296 + 108 + 89) / 3;
const koalasAverage = (96 + 108 + 89) / 3;

console.log(`Dolphins average score= ${dolphinsAverage}`);
console.log(`Koalas average score= ${koalasAverage}`);

if (koalasAverage >= 100 || dolphinsAverage >= 100) {
  if (dolphinsAverage > koalasAverage) {
    console.log(
      `The winners are the Dolphins 🦈with an average score of ${dolphinsAverage}!`
    );
  } else if (koalasAverage > dolphinsAverage) {
    console.log(
      `The winners are the Koalas 🐨 with an average score of ${koalasAverage}!`
    );
  } else if (
    dolphinsAverage === koalasAverage &&
    dolphinsAverage >= 100 &&
    koalasAverage >= 100
  ) {
    console.log(`Its a Draw!`);
  }
} else {
  console.log(`No Team has an average score above 100`);
}

//////////////////THE SWITCH STATEMENT//////////////////
//if we dont use "break", the switch will continue to all the cases

/*const day=prompt(`From which day of the week do you want to know the activities? 📅`);
switch (day) {
  case `monday`:
    console.log(`Start coding in JS`);
    break;
  case `tuesday`:
    console.log(`Do some freebootcamp exercises!`);
    break;
  case `wednesday`:
    console.log(`Take German Lessons`);
  break;
  case `thursday`:
  case `friday`:
    console.log(`Play some videogames`);
    break;
  case `saturday`:
    console.log(`Teamwork with Banshees viel`);
    break;
  case `sunday`:
    console.log(`Chill and watch some flixs`);
    break;
  default:
    console.log(`That isn't a valid day`)
    break;
}*/

/*const switchLanguage=prompt(`What Language do you speak?`)
switch (switchLanguage) {
  case `mandarin`:
    console.log(`MOST number of native speakers!`)
    break;
  case `spanish`:
    console.log(`2nd place in number of native speakers`)
    break;
  case `english`:
    console.log(`3rd place`)
    break;
  case `hindi`:
    console.log(`Number 4`)
    break;
 case `arabic`:
    console.log(`5th most spoken language`)
    break;
  default:
    console.log(`Great langague to! 😀`)
    break;
}*/

/////////////////////////////////////////////THE CONDITIONAL (TERNARY) OPERATOR//////////////////////////////////////
//ITS AN EXPRESSION, NOT A STATEMENT , SO IT CAN RETURN VALUES
//IT WORKS LIKE AN IF/ELSE STATEMENT
// "?" is IF and ":" is else

const drinkAge = 23;

//form1
drinkAge >= 18
  ? console.log(`Ich mag gern Wine drinken 🍷`)
  : console.log(`ich mag lieber Wasser drnken💧`);
//form2 , assigning the whole conditional ternary expression into a variable
const drink = drinkAge >= 18 ? `Wine 🍷` : `Wasser 💧`;
console.log(drink);
// we can use it too in a placeholder
console.log(`I like to drink ${drinkAge >= 18 ? `Wine 🍷` : `Wasser 💧`}`);

////////////////////////TERNARY ASSIGNMENT///////////////////////////////////
const countryPop = 50000000;

//FORM 1
countryPop >= 30000000
  ? console.log(`Portugal's population is above average.`)
  : console.log(`Portugal's population is below average.`);
//FORM 2
const howPop = countryPop >= 30000000 ? `above ` : `below`;
console.log(`Portugal population is ${howPop} average`);
//FORM 3
console.log(
  `Portugal's population is ${
    countryPop >= 30000000 ? `above ` : `below`
  } average`
);

////////////////////////CODING CHALLENGE/////////////////////////
const bill = 40;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

//FORM 1
console.log(
  `The Bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);

//FORM 2
console.log(
  `The Bill was ${bill}, the tip was ${
    bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
  }, and the total value ${bill + tip}`
);
