//exemplo 01
console.log("ola mundo"); //esse aparece no console


alert("oi "); //este aparece na viuport

//exemplo 02
const nome = "maria joaquina"; //texto
let idade = 18; //inteiro
let altura = 1.65; // num fracionaria
let aprovado = true; // valor lógico
let matricula = null; // ausencia intencional de valor

//interpolação
console.log(`nome: ${nome}, idade: ${idade}, altura: ${altura}`);

//contatenação
console.log("nome: " + nome + ", idade: " + idade + ", altura: " + altura);

//exemplo 03

console.log(10 + 5 );
console.log("10" + "5");
console.log("10 + 5 ");

//exemplo 04

let a = 5;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//exemplo 05

let nota1 = 8;
let nota2 = 6;

let media = (nota1 + nota2 ) / 2;

console.log(media);

//exemplo 06

let Nome = prompt("O SEU BOSTA QUAL O SEU NOME?: ");

alert("ola, " +  Nome + "!");

//exemplo 07

let num1 = Number(prompt("digite o primeiro num: "));
let num2 = Number(prompt("digite o segundo num: "));

let resultado = num1 + num2;

alert("a soma do num informados sao: " +resultado);

//exercício 01

let nome = prompt("digite seu nome: ");
let idade = prompt("digite sua idade: ");
let curso = prompt("digite seu curso: ");
let semestre = prompt("digite seu semestre: ");


console.log(nome);
console.log(idade);
console.log(curso);
console.log(semestre);

//exercício 02

const preco = 25;
const qnt = Number(prompt("digite a quantidade de cardernos quer, caderno e: R$" + preco ));

const mult = qnt * 25;

console.log("preço unitario: R$ " + preco);
console.log("quantidade: " + qnt);
console.log("total da compra: R$ "+ mult);

//exercício 03

let nota1 = Number(prompt("digite a primeira nota: ")); 
let nota2 = Number(prompt("digite a segunda nota: ")); 
let nota3 = Number(prompt("digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

console.log("nota1 "+ nota1);
console.log("nota2 "+ nota2);
console.log("nota3 "+ nota3);
console.log("a sua media e de: "+ media);

//exercício 04

const num1 = Number(prompt("digite o primeiro num: "));
const num2 = Number(prompt("digite o segundo num: "));

const soma = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;

alert("soma:" + soma + "." + "\nsubtração:" + sub + "." + "\nmultiplicação:" + mult + "." + "\ndivisão:" + div + ".");

//exercício 05


const din = Number(prompt("digite seu salario mensal: "));
const per = Number(prompt("digite o percentual do reajuste; "));

const reaj = din * per;
const new_money = din + reaj;

alert("O SEU SALARIO FOI REAJUSTADO!! CONFIRA ABAIXO.\n" + "SALARIO ANTIGO: R$" + din + ".\n" + "A PORCENTAGEM UTILIZADO: " + per + ".\n" + "NOVO SALARIO: R$" + new_money + ".");


