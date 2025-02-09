/*TASK1. Turn the object into JSON and back*/
let user = {
    name: "John Smith",
    age: 35
};
  
let user2 = JSON.parse(JSON.stringify(user));







/*TASK2. Exclude backreferences */
let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};
  
room.occupiedBy = meetup;
meetup.self = meetup;
  
alert( JSON.stringify(meetup, function replacer(key, value) {
    if (value === meetup) {
      return undefined; // exclude circular reference
    }
    return value; // keep all other properties
}));
  