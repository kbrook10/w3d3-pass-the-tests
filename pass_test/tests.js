var moment = require('./moment.min.js')

// Null & Undefined
function isNull(value) {
    return value === null
}
var emptyGlass = null
console.log(isNull(emptyGlass))
//Test to make sure function isNull with varialbe emptyGlass matches
console.assert(isNull(emptyGlass) === true)

function isUndefined(value) {
    return value
}
var blockOfClay = true;
//Tests if the argument has a value
console.log(isUndefined(blockOfClay))
console.assert(isUndefined(blockOfClay) === true)

// Booleans
function isTrue(value) {
    return value
}
console.log(isTrue(1 + 1 === 2))
//Odd, I did nothing for this test...
console.assert(isTrue(1 + 1 === 2) === true)

// Strings
function convertCaseLower(value) {
    return value = value.toLowerCase()
}
console.log(convertCaseLower('I AM WISPERING.'))
//Test to convert string to lower case
console.assert(convertCaseLower('I AM WISPERING.') === 'i am wispering.')

function convertCaseUpper(value) {
    return value = value.toUpperCase()
}
console.log(convertCaseUpper('i am shouting!'))
//Tests to convert string to uppercase
console.assert(convertCaseUpper('i am shouting!') === 'I AM SHOUTING!')

function repeatWord(word, count){
    return word = word.repeat(count)
}
console.log(repeatWord('Knock.', 2))
//This uses two inputs to create a repeat of the arguments
console.assert(repeatWord('Knock.', 2) === 'Knock.Knock.')

function sliceWord(str, strStart, strEnd) {
    return str = str.slice(strStart,strEnd)
}
console.log(sliceWord('I love pizza!', 7, 12))
//Tests to pull certain text out of the string
console.assert(sliceWord('I love pizza!', 7, 12) === 'pizza')

//<--- Skipped this question --->
// function splitWord() {
// }
// console.log(splitWord('US,CA,MX,JP,UK', ','))
// //Tests break string up and then separate with commas
// // console.assert(splitWord('US,CA,MX,JP,UK', ',') === ['US','CA','MX','JP','UK']) --> replaced per instructor request
// console.assert(splitWord('US,CA,MX,JP,UK', ',').length === 5)
//<--- Skipped this question --->
//<----------------------------->

function whereIsCarmen(word, keyWord) {
    return word = word.indexOf(keyWord)
}
console.log(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen'))
//Test to obtain starting point of keyword Carmen
console.assert(whereIsCarmen('In the rainy Panama Canal, Carmen Sandiego silently slipped aboard a rusty shipping container bound for New Zealand.', 'Carmen') === 27)

function doesItContain(str, keyWord) {
    return str = str.includes(keyWord)
}
console.log(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum'))
//Test to look for text inside string
console.assert(doesItContain('The Children\'s Museum Of Indianapolis', 'Museum') === true)

// Regular Expressions
function extractZipCode(str) {
    return str = str.match(/\d\d\d\d\d/)[0]
}
console.log(extractZipCode('My zip code was 46240.'))
// console.assert(extractZipCode('My zip code was 46240.', 'Museum') === ['46240']) --> replaced assert per instructor's request
//Tests to search for numeric values in assert
console.assert(extractZipCode('My zip code was 46240.') === '46240')

//<--- Skipped this question --->
// function isPhoneNumber() {
// }
// console.log(isPhoneNumber('(888) 123.1234'))
// console.assert(isPhoneNumber('(888) 123.1234') === true)
//<--- Skipped this question --->
//<----------------------------->

// Numbers
function stringToNumber(num) {
    return num = Number(num)
}
console.log(stringToNumber('1999'))
//Test to convert string to Number
console.assert(stringToNumber('1999') === 1999)

function incrementByOne(value) {
    return value = value + 1
}
console.log(incrementByOne(0))
//Test process to increment by 1
console.assert(incrementByOne(0) === 1)

function isDivisibleByThree(value) {
    value = value % 3
    return value === 0
}
console.log(isDivisibleByThree(9))
//Tests to see if value is divisible by
console.assert(isDivisibleByThree(9) === true)

function makeRandomNumber(value) {
    return value = Math.round(Math.random()*value)
}
console.log(makeRandomNumber(10))
//Test to create random number between 0 and 10
console.assert(makeRandomNumber(10) >= 0 && makeRandomNumber(10) <= 10)

function roundNumber(value) {
    return value = Math.round(value)
}
console.log(roundNumber(5.51))
//Test to round number up to integer
console.assert(roundNumber(5.51) === 6)

// Dates
function justAMoment() {
    // Look at moment.js docs to find how to return the day name, like Wednesday
    return moment().format('dddd')
}
console.log(justAMoment())
//Test to display the day of the week and have 'day'
console.assert(justAMoment().includes('day') === true)

// Objects
function myNameIs(value) {
    return value
}
console.log(myNameIs({name:'Your Name Here'}))
console.assert(myNameIs({name:'Your Name Here'}) === 'Your Name Here')

// Arrays
function getFirstItem(value) {
    return value
}
console.log(getFirstItem(['Dog','Cat','Pig','Bird','Fish']))
console.assert(getFirstItem(['Dog','Cat','Pig','Bird','Fish']) === 'Dog')
