/*TASK1. Destructuring assignment*/
let user = {
    name: "John",
    years: 30
};
  
let {name, years: age, isAdmin = false} = user;
alert(name); // John
alert(age); // 30
alert(isAdmin); // false




/*TASK2.The maximal salary*/
function highestSalary(salaries) {
    let highest = 0;
    let topEmployee = null;
  
    for (let [employee, salary] of Object.entries(salaries)) {
      if (salary > highest) {
        highest = salary;
        topEmployee = employee;
      }
    }
  
    return topEmployee;
}




  