`use strict`;
//-------------------- Coding Challenge #2 --------------------
/*
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', function () {
  const fullText = textArea.value.split('\n');
  for (let [index, line] of fullText.entries()) {
    line = line.toLowerCase().split('_');
    fullLine = line[0];
    for (let word of line.slice(1))
      fullLine += word.replace(word[0], word[0].toUpperCase());
    console.log(fullLine.padEnd(20, ' ') + '✅'.repeat(index + 1));
  }
});
