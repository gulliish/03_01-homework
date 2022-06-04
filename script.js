//1
const a = 10; 
const b = 3;
const module = a % b;
console.log(module);

//2
const st = 2 ** 10;
console.log(st);

//3
let c = "1";
let d = "2";
const e = " белых медведей";
console.log(c+d+e);

//4 
let f = 5; 
let j = 10;
let h ; 
h = f + j--; 
console.log(h);

//5
//const x = 15 * 4 + 25 - 55;
const x = 15 * (4 + 25 - 55);
console.log(x);

//6
// .Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height), шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s. 
let height = 23;
let width = 10;
let s = height * width;
console.log(s + 'sm');

//7
//.Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v. 
height = 10;
width = 4;
let p = 3.14;
let v = p * ((4 / 2) ** 2) * height;
console.log(v + ' metr');

//8
//Даны размер ипотечного кредита (S — 2 млн.сом), процентная ставка (p — 10%), кол-во лет (years — 5). Найти переплату по кредиту, значение переплаты должно содержаться в переменной perepl.
let S = 2;
p = 10;
let year = 5;
let perepl = ( 2 * 0.10) * ( 5 * 12);
console.log(perepl +" mln som")