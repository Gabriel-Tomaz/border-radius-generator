const range = document.querySelectorAll('input[type="range"]');
const input = document.querySelectorAll('input[type="number"]');
const main = document.querySelector('.main');

const borderElement = document.querySelector('.borderElement');


//Borda do topo esquerdo.
range[0].addEventListener('change', () => {
    input[0].value = range[0].value
    borderElement.style.borderTopLeftRadius = range[0].value + "%";
});

input[0].addEventListener('change', () => {
    range[0].value =  input[0].value;
    borderElement.style.borderTopLeftRadius = range.value + "%";
});

//Borda do topo direiro
range[1].addEventListener('change', () => {
    input[1].value = range[1].value
    borderElement.style.borderTopRightRadius = range[1].value + "%";
});

input[1].addEventListener('change', () => {
    range[1].value =  input[1].value;
    borderElement.style.borderTopRightRadius = range[1].value + "%";
});

//Borda inferior esquerda
range[2].addEventListener('change', () => {
    input[2].value = range[2].value
    borderElement.style.borderBottomLeftRadius = range[2].value + "%";
});

input[2].addEventListener('change', () => {
    range[2].value =  input[2].value;
    borderElement.style.borderBottomLeftRadius = range[2].value + "%";
});

//Borda inferior direitta
range[3].addEventListener('change', () => {
    input[3].value = range[3].value
    borderElement.style.borderBottomRightRadius = range[3].value + "%";
});

input[3].addEventListener('change', () => {
    range[3].value =  input[3].value;
    borderElement.style.borderBottomRightRadius = range[3].value + "%";
});






