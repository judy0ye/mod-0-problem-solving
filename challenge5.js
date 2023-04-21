var string = "Turing is the best"

var splitString = string.split(" ")
var newArray = []
console.log(splitString)

for (var i = 0; i < splitString.length; i++) {
   var newString = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)
   newArray.push(newString)

}

console.log(newArray.join(" "))