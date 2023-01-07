function selecionar (qualBotao) {
   switch (qualBotao) {
           case 'P':
           document.getElementById("botaoSelecionado").innerHTML = "Resposta escolhida ";
           break;
           case 'M':
           document.getElementById("botaoSelecionado").innerHTML = "Tamanho M";
           break;
           case 'G':
           document.getElementById("botaoSelecionado").innerHTML = "Tamanho G";
           break;
       default:
           document.getElementById("botaoSelecionado").innerHTML = "erro";
       }
   }