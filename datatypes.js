var moment = require('moment')

//String
// var word = '     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     '

// console.log(word.length) // <--- property (a variable essentially)
// console.log(word.toUpperCase())// <--- method (a function essentially)
// console.log(word.toLowerCase())

// word = word.toUpperCase()
// word = word.trim()
// word = word.toLowerCase()
// word = word.toUpperCase().trim().toLowerCase() //<---Chains the methods together

// var word = 'Knock. '
// word = word.repeat(5)


// word = 'Pizze Is Amazing'.slice(9, 16)
// word = 'Pizza Is Amazing'.substr(0,5) //<-- used

// var word = 'Pizza Is Amazing'
// word = word.split(' ')
// console.log(word)

// var word = 'City of Seattle'
//
// var indianaIndexStart = word.indexOf('Indiana')
// var whatIsTheLetter = word.charAt(8)
// var isItIndianapaolis = word.includes('Seattle')
// // word = word.replace('Seattle, 'Indianapolis')
//
// console.log(isItIndianapolis)

var phoneNumber = 'Phone Number 123-123-1234 888-389-3489'
var hasPhoneNumber = phoneNumber.match(/\d\d\d\-\d\d\d-\d\d\d\d/) // <--
var hasPhoneNumber = phoneNumber.replace(/\d\d\d\-\d\d\d-\d\d\d\d/gi, '[Redacted]') // <--

// console.log(hasPhoneNumber) //<-- using array 0 just gives the number

//<--- End of String Lessons -->
//<---------------------------->

//Number
var number = Number('1')
number = number + (number * 50)
number++

var counter = 0

// console.log(number)

var price = 12.49
// var priceRounded = Math.ceil(price)
var priceRounded = Math.floor(price)
// console.log(priceRounded)
// console.log(Math.PI)

// var randomNumber = Math.random()
var randomNumber = Math.round(Math.random() * 10)

// console.log(randomNumber)

var price = 12.045
var cents = String(price).split('.')[1].substr(0,2)
var dollars = String(price).split('.')[0]
price = dollars + '.' + cents
// price = parseFloat(price) <-- don't use this example
// console.log(price)


// console.log(parseInt('12.045'))


//<--- End of Number Lessons -->
//<---------------------------->

//Date
var today = new Date()
// console.log(today)

var yesterday = moment().subtract(2400, 'seconds');
// console.log(yesterday.format('MM/DD/YYYY HH:mm:ss'))

//<--- End of Date Lessons -->
//<---------------------------->

//Math
//Object
var pizza = Object() // <-- this is the long hand way
var pie = { //<-- this is the shorthand literal way
    ingredients: 'stuff',
    meat: 'pepperoni',
    cheese: 'mozzerella',
    price: 14.99,
    priceRounded: Math.round(14.99),
}
// console.log(pie)

//Array
var ingredients = ['meat', 'cheese', 'sauce', 'spices', 'crust', 12, true, moment().format('MM/DD/YYYY'),
    {
        sausage: 'mystery meat'
        toppings: 'cheezy'
    }]
console.log(ingredients)

// Test Samples
// var name = String('Tom')
// var name2 = 'Tom'
//
// console.log(name === name2)
//
// var number = Number(1)
// var number2 = 1
//
// console.log(number === number2)
//
// var boolean = Boolean(true)
// var boolean2 = true
//
// console.log (boolean === boolean2)
