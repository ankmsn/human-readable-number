module.exports = function toReadable (number) {
let zeroToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];  
let twentyToNinety = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
return (number < 1 ? 'zero' : number < 20 ? zeroToNineteen[number] : 
number < 100 ? twentyToNinety[number.toString()[0]] + ' ' + zeroToNineteen[number.toString()[1]] : 
+(number.toString().slice(1)) < 20 ? zeroToNineteen[number.toString()[0]] + ' hundred ' + zeroToNineteen[+(number.toString().slice(1))] :
zeroToNineteen[number.toString()[0]] + ' hundred ' + twentyToNinety[number.toString()[1]] + ' ' + zeroToNineteen[number.toString()[2]]).replaceAll("  ", " ").trim();  
}

// console.log(module.exports(12));

