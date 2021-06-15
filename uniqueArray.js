// indexOf() 

// filter()


var uniqueArray = [1,2,2,4,4,7];

var unique = function(value, index, self) {
    return self.indexOf(value) === index
} 

var result = uniqueArray.filter(unique);

console.log(result);
