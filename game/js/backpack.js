var button = document.getElementById('read_button');
button.addEventListener('click', function() {

    var schoolbag = document.querySelector('.schoolbag');


    schoolbag.classList.toggle('active');

    if (schoolbag.classList.contains('active')) {

        return button.textContent = 'Fechar mochila';
    }
    
    button.textContent = 'Mochila';
});