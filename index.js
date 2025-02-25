function hasTargetSum(array, target) {
  // Write your algorithm here
  // iterate through each number in the array
  for(let i = 0; i < array.length; i++) {

    const complement = target - array[i]
    for(let j = i + 1; j < array.length; j++) {

      if(array[j] === complement) return true;
    }
  }

  // if i reach the end of array 

  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  make a function called has target sum that checks up two numbers from the array adds up to the taget number. 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
