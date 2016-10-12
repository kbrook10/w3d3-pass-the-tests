var moment = require('moment')
function myNameIs(value) {
    return value = value.split(':')[1]
}
console.log(myNameIs({name:'Your Name Here'}))
//Test to split up and only return right side of colons
// console.assert(myNameIs({name:'Your Name Here'}) === 'Your Name Here')
