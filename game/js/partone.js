function renderChoices(nameChoice)
{
        switch(nameChoice)
        {
            case "pageOne":
                renderpageOne()
            break;
            default:
                document.getElementById("root").innerHTML = "Pagina nao encontrada";
            break;
        }
}

function renderpageOne(){
    document.getElementById("root").innerHTML = "Após ver volta sua atenção para a cúpula, põe um cigarro em sua boca e em seguida o acende. A nave usa uma entrada na cúpula, onde ao entrar fica alguns minutos em uma repartição que separa o ambiente da capsula com o restante do planeta. A garota continua fumando até que a sua frente se abre uma imensa abertura no vidro, assim entrando na terceira colônia de Ares, a maior do planeta tendo um total de 200 humanos e 8 mil replicantes.<br> <span id=buttonTwo; onclick=renderChoicesTwo('pageTwo')>NEXT</span>" ;

}

function renderChoicesTwo(nameChoice){
    switch(nameChoice)
    {
        case "pageTwo":
            renderpageTwo()
        break;
        default:
            document.getElementById("root").innerHTML = "Pagina nao encontrada";
        break;
    }
}   

function renderpageTwo(){
    document.getElementById("root").innerHTML = "Enquanto Pixie desce de sua nave já no hangar um homem junto de uma mulher esperam um pouco a frente ao lugar, a jovem caminha até eles e assim o homem inicia.<br>   <br>JORDAN: Olá detetive, como foi de viagem? <br>PIXIE: Foi tranquila, Jordan. <br>JORDAN: Quero deixar claro que não fui eu que forcei seu retorno à União, mas precisava mesmo dos seus serviços por aqui. <br>PIXIE: Eu teria que voltar de qualquer forma uma hora... <br>JORDAN: Bom, eu até gostaria de recepcioná-la por aqui, porém tenho que manter a ordem neste lugar, então irei deixar você com a Blue, nossa supervisora de segurança. <br>PIXIE: Ok!.<br> <span onclick=renderChoicesThree('pageThree')>NEXT</span>" ;
}

function renderChoicesThree (nameChoice){
    switch(nameChoice)
    {
        case "pageThree":
            renderpageThree()
        break;
        default:
            document.getElementById("root").innerHTML = "Pagina nao encontrada";
        break;
    }
}   

function renderpageThree(){
    document.getElementById("root").innerHTML = "vai pageThree" ;
}