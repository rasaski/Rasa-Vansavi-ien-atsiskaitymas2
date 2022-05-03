/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */


const ENDPOINT = 'cars.json';
const naujas = JSON.stringify(auto);
const obj = JSON.parse(naujas);

console.log(obj);

const automobiliai = auto;

automobiliai.forEach((item,index)=>{
let cards = document.createElement("div");
cards.setAttribute("class","korteles");

let card1 = document.createElement("h1");
card1.innerText = item.brand;
card1.setAttribute("class","h1");
cards.appendChild(card1);

let card2 = document.createElement("ul");
cards.appendChild(card2);

let card3 = document.createElement("li");
card3.innerText = item.models;
card2.appendChild(card3);

document.getElementById("output").appendChild(cards);

})






