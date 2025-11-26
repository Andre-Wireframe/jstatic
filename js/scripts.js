const navbar = document.getElementById('nav-button');

navbar.addEventListener('click',
    function () {
        const lista = document.getElementById('nav-ul');
        const nav = document.getElementById('navbar');

        if (lista.style.display == 'none')
        {
            lista.style.display = 'flex';
        }
        else
        {
            lista.style.display = 'none';
        }

    }
);