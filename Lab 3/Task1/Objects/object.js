/* TASK1. Hello, object*/
let user = {};
user.name = "Joanna";
user.surname = "Ocean";
user.name = "Drive";
delete user.name;




/* TASK2. Check for emptiness*/
function isEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false; // If there's at least one property, return false
      }
    }
    return true; // If no properties, return true
  }
  
  let schedule = {};
  alert(isEmpty(schedule)); // true
  schedule["8:30"] = "get up";
  alert(isEmpty(schedule)); // false



  


/* TASK3. Sum object properties*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390






/* TASK4. Multiply numeric property values by 2*/
// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
multiplyNumeric(menu);
  
// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };


function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }


