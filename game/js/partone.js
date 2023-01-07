var button = document.getElementById('read_button');
button.addEventListener('click', function() {

    var schoolbag = document.querySelector('.schoolbag');


    schoolbag.classList.toggle('active');

    if (schoolbag.classList.contains('active')) {

        return button.textContent = 'Fechar mochila';
    }
    
    button.textContent = 'Mochila';
});

function renderChoices(nameChoice)
{

        switch(nameChoice)
        {
            case "next":
                rendernext()
            break;
            default:
                document.getElementById("root").innerHTML = "Pagina nao encontrada";
            break;
        }
}

function rendernext(){
    document.getElementById("root").innerHTML = "Após ver volta sua atenção para a cúpula, põe um cigarro em sua boca e em seguida o acende. A nave usa uma entrada na cúpula, onde ao entrar fica alguns minutos em uma repartição que separa o ambiente da capsula com o restante do planeta. A garota continua fumando até que a sua frente se abre uma imensa abertura no vidro, assim entrando na terceira colônia de Ares, a maior do planeta tendo um total de 200 humanos e 8 mil replicantes.<br> <span onclick=renderChoiceName('prime')>next</span>" ;

}

function renderChoiceName (choiceName){
    switch(choiceName)
    {
        case "prime":
            renderprime()
        break;
        default:
            document.getElementById("root").innerHTML = "Pagina nao encontrada";
        break;
    }
}   

function renderprime(){
    document.getElementById("root").innerHTML = "Enquanto Pixie desce de sua nave já no hangar um homem junto de uma mulher esperam um pouco a frente ao lugar, a jovem caminha até eles e assim o homem inicia. JORDAN: Olá detetive, como foi de viagem? PIXIE: Foi tranquila, Jordan. JORDAN: Quero deixar claro que não fui eu que forcei seu retorno à União, mas precisava mesmo dos seus serviços por aqui.PIXIE: Eu teria que voltar de qualquer forma uma hora...JORDAN: Bom, eu até gostaria de recepcioná-la por aqui, porém tenho que manter a ordem neste lugar, então irei deixar você com a Blue, nossa supervisora de segurança. PIXIE: Ok!.<br> <span onclick=renderChoiceNameName('corithians')>tets</span>" ;
}

function renderChoiceNameName (choiceNameName){
    switch(choiceNameName)
    {
        case "corithians":
            rendercorithians()
        break;
        default:
            document.getElementById("root").innerHTML = "Pagina nao encontrada";
        break;
    }
}   

function rendercorithians(){
    document.getElementById("root").innerHTML = "vai corithians" ;
}