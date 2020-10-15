var numero1 = prompt('Digite o primeiro número:');
var numero2 = prompt('Digite o segundo número:');
var numero3 = prompt('Digite o terceiro número:');

maiorN(numero1, numero2, numero3);

function maiorN(numero1, numero2, numero3) {
  var Numeros = [numero1, numero2, numero3];


if((numero1===numero2)||(numero1===numero3)){
    alert("Os Números repetido são: "+numero1);
}else if((numero2===numero3)){
    alert("Os Números repetido são: "+numero2);
}
    
  Numeros.sort((a, b) => a - b);
  alert("o Maior número é: "+Numeros[Numeros.length - 1]);
}
