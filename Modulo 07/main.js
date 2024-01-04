const form = document.getElementById('form-deposito');

let formvalid = false

function numeroValido(c1, c2) {
    return c2 > c1
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let c1 = parseFloat(document.getElementById('c1').value);
    let c2 = parseFloat(document.getElementById('c2').value);

    if (numeroValido(c1, c2)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        c1.value = ' ';
        c2.value = ' ';
    } 
    else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }
});