const numerosUl = document.getElementById('numeros');

if (numerosUl) {

    for (let i = 1; i <= 100; i++) {
        let numero = i;
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                numero = 'TechOps';
            } else {
                numero = 'Tech';
            }
        } else if (i % 5 === 0) {
            numero = 'Ops';
        }

        const li = document.createElement('li');
        li.textContent = numero;
        numerosUl.appendChild(li);
    }   

}