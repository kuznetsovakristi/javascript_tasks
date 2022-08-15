var workers = [
  {"name":"John","salary":500},
  {"name":"Alex","salary":1000},
  {"name":"Tedd","salary":1200},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500},
];
var select = [];

function selection(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].salary > 1000) {
     select.push(array[i].name);
    }
  }
  return select;
};

console.log(selection(workers));