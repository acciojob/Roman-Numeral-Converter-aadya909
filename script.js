function convertToRoman(num) {
  const obj = {
    0: ['M', 1000], 
    1: ['D', 500], 
    2: ['C', 100], 
    3: ['L', 50], 
    4: ['X', 10], 
    5: ['V', 5], 
    6: ['I', 1]
  };

  let result = "";

  // Convert the object to an array for ordered traversal
  const romanSymbols = Object.values(obj); 

  for (let [symbol, value] of romanSymbols) {
    while (num >= value) {
      result += symbol; // Append the symbol to the result
      num -= value; // Subtract the value from num
    }
  }

  return result;
}




// Do not edit below this line
module.exports = convertToRoman;

