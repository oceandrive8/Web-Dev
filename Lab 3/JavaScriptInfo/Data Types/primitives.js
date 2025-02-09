/*TASK1. Can I add a string property?
Consider the following code:
What do you think, will it work? What will be shown?*/
let str = "Hello";
str.test = 5;
alert(str.test);


/* The code will not work as expected.
The output will be undefined because the property test was not successfully added to str.
In JavaScript, primitives (like str) are boxed when they are used in object-like ways (e.g., calling methods on them). But the test property does not actually get added to the string object.*/




