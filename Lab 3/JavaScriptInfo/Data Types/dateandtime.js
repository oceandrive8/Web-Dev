/*TASK1. Create a date */
let date1 = new Date(2012, 1, 20, 3, 12);
alert(date1);




/*TASK2. Show a weekday 
Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"*/

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
}
  
let date = new Date(2014, 0, 3); // 3 Jan 2014
alert( getWeekDay(date) ); // FR





/*TASK3. European weekday
European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );       // tuesday, should show 2*/
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
    return day;
}




/*TASK4. Which day of month was many days ago? */
function getDateAgo(date4, days) {
    let dateCopy = new Date(date4);
  
    dateCopy.setDate(date4.getDate() - days);
    return dateCopy.getDate();
}
  
let date4 = new Date(2015, 0, 2);
  
alert( getDateAgo(date4, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date4, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date4, 365) ); // 2, (2 Jan 2014)
  




/*TASK5. Last day of month? */
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}
  
alert( getLastDayOfMonth(2012, 0) ); // 31
alert( getLastDayOfMonth(2012, 1) ); // 29
alert( getLastDayOfMonth(2013, 1) ); // 28





/*TASK6.  How many seconds have passed today?*/
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
  
alert(getSecondsToday());




/*TASK7.How many seconds till tomorrow? */
function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
}





/*TASK8. Format the relative date */
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'right now';
    } else if (diffMin < 1) {
      return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
      return `${diffMin} min. ago`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }
