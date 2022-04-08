var num1 = 5;
var num2 = 7;
var num3 = 5;

var sum = num1 +num2 +num3;

console.log(typeof(num1));
num1Str = num1.toString();
console.log(typeof(num1.toString()));

//type of function parseInt and ParseFloat function
//ToString method for conversion

var num4 = "A";
console.log(typeof(num4));
var num5 = parseFloat(num4);
console.log(typeof(num5));
console.log(num5);


// .toFixed() function

var strFloat = 88.95;
console.log(strFloat.toFixed(2));



var doubleQuoteString = "This is a \'Javascript'\ string";
console.log(doubleQuoteString);
// output is : This is a 'Javascript' string

/// In-built functions -97

var myFirstString = "My first Javascript";
console.log(myFirstString.length)
console.log(myFirstString.indexOf("Java"))
console.log(myFirstString.lastIndexOf("Java"))

// get a part of our string slice(start, end)

console.log(myFirstString.slice(0,5))
console.log(myFirstString.slice(10,14))
console.log(myFirstString.slice(5))
console.log(myFirstString.substring(11))
console.log(myFirstString.toUpperCase())
console.log(myFirstString.toLowerCase())

var fName = 'Brijesh'
var lName = 'Dungrani'

console.log(fName.concat(' ',lName))

var hru = '   How    are you   Doing ?';
console.log(hru)
console.log(hru.trim())
console.log(hru.charAt(5))

console.log(myFirstString.split(' '))

var unDefVar
console.log(unDefVar)

var nullVar = null
console.log(nullVar)


/// if else - 100

if(8>5){
    console.log("true");
}
else{
    console.log("false");
}

//switch statement - 101


