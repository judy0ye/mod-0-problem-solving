// Start with an array of travel destinations. 
// Print every travel destination in alphabetical order embedded in a sentence using string interpolation. 
// For example, if the destination is "New York City", print something like 
// "The next place I want to visit is New York City!" 

var dest = ["Japan", "Cali", "Bali",]
dest.sort()

for (var i = 0; i < dest.length; i ++) {
    console.log(`The next place I want to visit ${dest[i]}`)
}