/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

//1
function getUserAverageAge (){
  let ages =((users[0].age + users[1].age + users[2].age + users[3].age + users[4].age + users[5].age + users[6].age + users[7].age + users[8].age)/9)
  console.log(ages)
}
getUserAverageAge();

//2

function getUsersNames(){
  // names = users[0].name + users[1].name + users[2].name + users[3].name + users[4].name + users[5].name + users[6].name + users[7].name + users[8].name
  let naujas =  new Array()
  naujas.push(users[0].name , users[1].name , users[2].name , users[3].name , users[4].name , users[5].name , users[6].name , users[7].name , users[8].name)
  console.log(naujas)
}
getUsersNames()