<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript</title>
</head>
<body>
    
<h1>calculadora</h1>

<input type="number" id="n1" placeholder="digite o primeira num">

<select id="operador">

    <option value="+"> somar</option>
    <option value="-"> subtrair</option>
    <option value="*"> multiplicar</option>
    <option value="/"> dividir</option>

</select>
<input type="number" id="n2" placeholder="digite o segunda num">

<button onclick="calcular()">enviar</button>
<p id="resultado"></p>


<script>
    function calcular(){
        let n1 = Number(document.getElementById("n1").value);
        let n2 = Number(document.getElementById("n2").value);
        
        let operador = document.getElementById("operador").value;

        let resultado;

        switch(operador){
            case "+":
                resultado = n1 + n2;
                break;

            case "-":
                resultado = n1 - n2;
                break;

            case "*":
                resultado = n1 * n2;
                break;

            case "/":
                if(n2 === 0 ){
                    resultado = "nao e possivel dividir por zero ";

                }else{

                    resultado = n1 / n2;
                    break;
                }
        }
        
        document.getElementById("resultado").textContent = "resultado: " + resultado;
    }
</script>

<h1>calculador de somar</h1>
<input type="number" id="numero1" placeholder="digite o primeiro num">
<input type="number" id="numero2" placeholder="digite o segundo num">
<button onclick="somar()"> enviar </button>






<h1>verificacao de idade </h1>
<input type="number" id="idade" placeholder="digite sua idade">
<button onclick="verificaridade()">enviar</button>
<p id="resultado"></p>

<script>
    function verificaridade(){
        let idade = Number(document.getElementById("idade").value);
        if(idade >= 18){
            document.getElementById("resultado").textContent = "voce tem " + idade + "anos. voce e maior de idade ";

        }else{
            document.getElementById("resultado").textContent = "voce tem " + idade + "anos. voce e menor de idade ";
        }

    }
</script>


<h1>verificacao de idade </h1>

<input type="number" id="nota1" placeholder="digite a primeira nota">
<input type="number" id="nota2" placeholder="digite a segunda nota">
<input type="number" id="nota3" placeholder="digite a terceira nota">

<button onclick="calcularmedia()">enviar</button>
<p id="resultado"></p>

<script>
    function calcularmedia(){
        let n1 = Number(document.getElementById("nota1").value);
        let n2 = Number(document.getElementById("nota2").value);
        let n3 = Number(document.getElementById("nota3").value);

        let notas = [n1 , n2, n3 ];

        let soma = 0;

        for(let nota of notas){
            soma = soma + nota;

        }

        let media = soma / notas.length;

        let mensagem = "media: " + media.toFixed(2);

        if(media >= 6 ){
            mensagem += " - aluno aprovado";

        }else{
            mensagem += " - aluno reprovado";
        }

        document.getElementById("resultado").textContent = mensagem;
    }
</script>
</body>
</html>
