var numero1;
var numero2;


numero1 = prompt("Digite o primeiro número: ");
numero2 = prompt("Digite o segundo número: ");

soma = parseFloat(numero1) + parseFloat(numero2);
subtracao = parseFloat(numero1) - parseFloat(numero2);
produto = parseFloat(numero1) * parseFloat(numero2);
divisao = Math.trunc(parseInt(numero1) / parseInt(numero2));
restoDivisao = parseFloat(numero1) % parseFloat(numero2);


alert("Soma: "+soma + "\nSubtração: " + subtracao + "\nProduto: " + produto + "\nDivisão: " + divisao + "\nResto da Divisão: " + restoDivisao);