/*TASK1.  Uppercase the first character*/
function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("ocean") ); // Ocean




/*TASK2. Check for spam*/
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
  
alert(checkSpam('buy ViAgRA now')); // true
alert(checkSpam('free xxxxx')); // true
alert(checkSpam("innocent rabbit")); // false
  
  


/*TASK3. Truncate the text
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
*/
truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"
truncate("Hi everyone!", 20) == "Hi everyone!"

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}





/*TASK4. Extract the money
We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
The example:
*/
alert( extractCurrencyValue('$120') === 120 ); // true



function extractCurrencyValue(str) {
    return +str.slice(1);
  }
alert(extractCurrencyValue('$120') === 120); // true





