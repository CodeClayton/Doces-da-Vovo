const form = document.querySelector('#formContact');

//Estrutura para verificar campos vazios
form.addEventListener('submit',(e) => {
  //Prevenir o envio imediato do form
  e.preventDefault();

    //Adiciono o valor do input, apos o envio para 
    // validação de campos vazios
    const inputName = document.querySelector('#name').value.trim();
    const inputEmail = document.querySelector('#email').value.trim();
    const inputMessage = document.querySelector('#message').value.trim();

    //console.log(inputEmail + inputMessage + inputName)

    if(inputName === "" || inputEmail === "" || inputMessage ===""){
        alert('Preencha todos os campos!');
    }else{
        alert('Formulário enviado com sucesso \nvocê sera redirecionado!');

        form.submit();
    }
})
