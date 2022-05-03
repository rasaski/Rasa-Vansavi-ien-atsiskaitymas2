/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function createh (){
    document.querySelector("form").addEventListener("submit",(e)=>{
        e.preventDefault();
    let kg = document.getElementById("search").value;

    let lb = kg*2.2046 + " Svarai (lb) ";
    let g =  kg/0.0010000 + " Gramai (g) ";
    let oz = kg*35.274 + " Uncijos (oz) ";
    
    document.getElementById("pirmas").innerHTML =  lb;
    document.getElementById("antras").innerHTML =  g;
    document.getElementById("trecias").innerHTML =  oz;
    }) 
}
createh();