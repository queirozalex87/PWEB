var idade;
var sexo;
var opniao;

idade=0;
soma=0;
media=0;
novo=99999;
velho=0;

var idade=[];

for(var i=0;i<=45;i++){
    idade[i]=prompt("Digite a sua Idade: ");
  }

for(var i=0;i<=4;i++){
     if(novo>=idade[i]){
        novo=idade[i];
    }
    if(velho<=idade[i]){
        velho=idade[i];
    }
    soma+=parseInt(idade[i]);
    
 }
media=soma/45;

alert("novo: "+novo);
alert("velho: "+velho);
alert("media: "+media);
