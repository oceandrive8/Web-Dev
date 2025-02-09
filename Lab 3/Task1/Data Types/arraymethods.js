/*TASK1. Translate border-left-width to borderLeftWidth
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

function camelize(str) {
    return str
      .split('-')
      .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
}







/*TASK2. Filter range
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance
let arr1 = [5, 3, 8, 1];
let filtered1 = filterRange(arr1, 1, 4);
alert(filtered1); // 3,1 (matching values)
alert(arr1); // 5,3,8,1 (not modified)
*/



function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}
  
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered); // [3, 1]
alert(arr); // [5, 3, 8, 1] (original array remains unchanged)
  





/*TASK3. Filter range "in place"*/
function filterRangeInPlace(arrr, a, b) {
    for (let i = 0; i < arrr.length; i++) {
      if (arrr[i] < a || arrr[i] > b) {
        arrr.splice(i, 1);
        i--; // Adjust index after removal to avoid skipping elements
      }
    }
}
  
let arrr = [5, 3, 8, 1];
filterRangeInPlace(arrr, 1, 4);
alert(arrr); // [3, 1]






/*TASK4. Sort in decreasing order */
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);
alert(arr2);



/*TASK5. Copy and sort array
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.

let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);
alert(sorted); // CSS, HTML, JavaScript
alert(arr3); // HTML, JavaScript, CSS (no changes)
*/


function copySorted(arr3) {
    return [...arr3].sort();
  }
let arr3 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr3);
  
alert(sorted); // CSS, HTML, JavaScript
alert(arr3); // HTML, JavaScript, CSS (no changes)





/*TASK6. Create an extendable calculator */
function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}





/*TASK7.Map to names
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = your code
alert( names ); // John, Pete, Mary */
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);

alert( names ); // John, Pete, Mary





/*TASK8. Map to objects */
let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [john, pete, mary];

let usersMapped = users1.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith




/*TASK9.  Sort users by age*/
function sortByAge(arr8) {
    arr8.sort((a, b) => a.age - b.age);
  }
  
  let john2 = { name: "John", age: 25 };
  let pete2 = { name: "Pete", age: 30 };
  let mary2 = { name: "Mary", age: 28 };
  
  let arr8 = [ pete, john, mary ];
  
  sortByAge(arr8);
  
  // now sorted is: [john, mary, pete]
  alert(arr8[0].name); // John
  alert(arr8[1].name); // Mary
  alert(arr8[2].name); // Pete



/*TASK10.  Shuffle an array*/
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // counts of appearances for all possible permutations
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // show counts of all possible permutations
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }




/*TASK11.Get average age*/

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john11 = { name: "John", age: 25 };
let pete11 = { name: "Pete", age: 30 };
let mary11= { name: "Mary", age: 29 };

let arr11 = [ john11, pete11, mary11 ];
alert( getAverageAge(arr11) ); // 28




/*TASK12. Filter unique array members*/
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(strings) ); // Hare, Krishna, :-O

  


/*TASK13. Create keyed object from array*/
function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }
  