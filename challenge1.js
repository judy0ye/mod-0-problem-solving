// Given an array of strings, print only the strings that have exactly 4 characters.
// console.log( something w/ 4 characters)

var string = ["toot", "fruit", "bleh"]

for (i = 0; i < string.length; i++) {
    if (string[i].length === 4)
    console.log(string[i])
}