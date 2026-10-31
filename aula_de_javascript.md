# exemplo 01

```js

function saldacao(){
    console.log("ola mundo!");
}
saldacao();

```

*resultdo*
```
ola mundo!
```


# exemplo 02
```js
function apresentar(nome){
    console.log("ola meu nome e " + nome );

}

apresentar("ana julia");
apresentar("gabriel");
apresentar("rodrigo");
apresentar("igor");

```
*resultado*
````
ola meu nome e ana julia
ola meu nome e gabriel
ola meu nome e rodrigo
ola meu nome e igor
````


# exemplo 03
```js
function somar(num1,num2){
    let resultado = num1+ num2;
    console.log(resultado);

}
somar(10,5);
somar(21,11);

```
*resultado*
````
15
32
````

# exemplo 04
```js
function somar(a,b){
    return a + b;

}

let resultado = somar(10,20);

console.log("resutado: " + resultado);

```
*resultado*
````
resutado: 30
````

# exemplo 05
```js
function verificaridade(idade){
    if(idade >= 18){
        return "maior de idade";
    }else{
        return "menor de idade";
    }  
}

let idade = Number(prompt("digite sua idade: "));

    console.log(verificaridade(idade));

```
*resultado*
````
digite sua idade: 18

maior de idade
````

# exemplo 06
```js
let alunos = ["ana", "igor","rodrigor","gabriel","joao vitor","kauan"];

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos);

```
*resultado*
````
ana
igor
['ana', 'igor', 'rodrigor', 'gabriel', 'joao vitor', 'kauan']
````

# exemplo 07
```js
let alunos = ["ana", "igor","rodrigor","gabriel","joao vitor","kauan"];

console.log(alunos)
alunos.push("italo"); //acrescentar um item no final 

console.log(alunos);

alunos.pop();

console.log(alunos ); //retirar o ultimo item

```
*resultado*
````
['ana', 'igor', 'rodrigor', 'gabriel', 'joao vitor', 'kauan']
['ana', 'igor', 'rodrigor', 'gabriel', 'joao vitor', 'kauan', 'italo']
['ana', 'igor', 'rodrigor', 'gabriel', 'joao vitor', 'kauan']

````

# exemplo 08
```js
let alunos = ["ana", "igor","rodrigor","gabriel","joao vitor"];

for(let i = 0; i <= alunos.length; i++){
    console.log(alunos[i]);
}

```
*resultado*
````
ana
igor
rodrigor
gabriel
joao vitor
````

# exemplo 09
```js
let frutas = ["maça", "banana","uva","abacaxi","melancia"];

for(let fruta of frutas){
    console.log(fruta);
}
```
*resultado*
````
maça
banana
uva
abacaxi
melancia
````

# exemplo 010
```js
let aluno = {
    nome: "ana julia",
    idade: 18,
    curso: "engenharia de software"
};

console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.curso);


```
*resultado*
````
ana julia
18
engenharia de software
````

# exemplo 011
```js
let produto = {
    nome: "notbook",
    preco: 3800,
    estoque: 10
};

produto.preco = 3200;

console.log(produto.nome);
console.log(produto.preco);
```
*resultado*
````
notbook
3200
````


# exemplo 012
```js
let alunos = [
    {nome: "ana", nota: 9},
    {nome: "italo", nota: 7},
    {nome: "rodrigo", nota: 9}
];

for(let aluno of alunos){
    console.log(aluno.nome + ": " + aluno.nota);
}
```
*resultado*
````
ana: 9
italo: 7
rodrigo: 9
````

# exemplo 013
```js
function calcularmedia(notas){
    let soma = 0;
    for(let nota of notas){
        soma = soma +nota;
    }

    return soma / notas.length;
}

let notas = [];

for (let i = 1; i <= 3; i++){
    let nota = Number(prompt("digite a nota" + i));
    notas.push(nota);
}

let media = calcularmedia(notas);

console.log("notas: ", notas);
console.log("media: ", media);

if(media >= 6){
    console.log("aluno aprovado. ");

}else{
    console.log("aluno reprovado.");
}
```
*resultado*
````
notas:  [9, 5, 6]
media:  6.666666666666667
aluno aprovado. 
````

# exemplo 014
```js

```

````
````

# exemplo 015
```js

```

````
````
