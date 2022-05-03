/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator (num1,num2){
        this.num1 = num1;
        this.num2 = num2;
        this.count1 = function(){
            console.log(num1+num2);
        }
        this.count2 = function(){
            console.log(num1-num2);
        }
        this.count3 = function(){
            console.log(num1*num2);
        }
        this.count4 = function(){
            console.log(num1/num2);
        }
}
const num = new Calculator(10,2);
num.count3();
num.count1();
num.count2();