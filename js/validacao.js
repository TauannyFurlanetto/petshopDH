window.addEventListener('load', ()=>{
    console.log("validacao.js");

    const botaoEnviar = document.querySelector('.trabalheConoscoForm button');

    botaoEnviar.onclick = (evento) => {
        // Previne o evento padrao do botao que é enviar
        evento.preventDefault();

        // Selecionando o form e o telefone
        const inputTelefone = document.querySelector("#telefone")
        const form = document.querySelector("form");
        const inputNome= document.querySelector("#nome-completo");
        const inputEmail = document.querySelector("#email");


        // Verificando se o valor preenchido tem pelo menos 10 caracteres
        // if (inputTelefone.value.length < 10 || inputNome.value.length<6 || !inputEmail.value.includes("@")){
        //     alert("Preencha corretamente todos os campos.");

        // } else{
        //     form.submit();
        // }
        let listaErros =[];
        const ulErros = document.querySelector("ul.erros");
        ulErros.innerHTML = "";
        if(inputNome.value.length<6){
            listaErros.push("O campo nome completo deve ter no mínimo 6 caracteres");
        }
        if(!inputEmail.value.includes("@")){
            listaErros.push("O campo de email deve ser preenchido corretamente");
        }
        if(inputTelefone.value.length < 10){
            listaErros.push("O campo telefone deve ter no minimo 10 caracteres");
        }
        if(listaErros.length>0){
            console.log("ul erro");
            listaErros.forEach((mensagemErro)=>{
                ulErros.innerHTML += "<li>" + mensagemErro + "</li>";
            });
        }else{
            form.submit();
        }
    }
})