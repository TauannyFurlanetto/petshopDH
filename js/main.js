// console.log("main.js");
// console.log(document);
// let input = document.querySelectorAll('input');
// console.log(input);
// console.log(input[0].id);
// let nome = document.getElementById('email');
// console.log(nome.name);

// Troca o texto
let tituloPrincipal = document.querySelector('h1');
tituloPrincipal.innerText = "Não trabalhe conosco";

// Coloca um  nov atributo na tag
let inputEmail = document.getElementById('email');
inputEmail.setAttribute("placeholder", "meu email@errado.com");

// Troca tudo de dentro do HTML (.innerHTML)
let cargaHoraria = document.querySelector("#carga-horaria");
console.log(cargaHoraria.innerHTML);

cargaHoraria.innerHTML += "<option value = 'Trainee'> Trainne </option> "

// Mudar o estilo (o css)
tituloPrincipal.style.color = "#aeaeae";

// Modificar classes
tituloPrincipal.classList.add("ativado");
// so o .classList imprime a lista de classes
// pra remover a class se usa .classList.remove
//pra fazer o flipFlop ou um toggle e usar .classList.toggle
//  para verificar se o elemento existe se usa o .classList.contains
let elementoDiv = document.querySelector("div");
elementoDiv.classList.toggle("toggle");
elementoDiv.classList.remove("toggle");