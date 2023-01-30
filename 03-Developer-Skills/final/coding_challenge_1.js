`use strict`;
//-------------------- Coding Challenge #1 --------------------
/*
Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up 
into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

/*
// 1- Understand the problem
- Given an array, its values are used to form a String
- Number of days : index + 1

// 2- Breaking the problem into smaller pieces
- Transform array value into String
- Add ºC to the String
- Add (index + 1) day
- add ... at the start & end
*/

const tempArr = [17, 21, 23];

const printForecast = function (arr) {
  let forecast = '...';
  for (let i = 0; i < arr.length; i++) {
    forecast += ` ${String(arr[i])}ºC in ${i + 1} day ...`;
  }
  return forecast;
};

console.log(printForecast(tempArr));
