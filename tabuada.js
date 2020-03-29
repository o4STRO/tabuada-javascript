var tabela = 3;
var operacao = 'adicao';

var i = 1;
var msg = '';

if(operacao == 'adicao'){
  while (i < 11) {
    msg += i + ' + ' + tabela + ' = ' + (i + tabela) + '<br />';
    i++;
  }
}else{
    while(i < 11){
      msg += i + ' x ' + tabela + ' = ' + (i * tabela) + '<br />';
      i++;
    }
}

var el = document.getElementById("respostas");
el.innerHTML = msg;