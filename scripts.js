const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('passwordConfirmation')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === ""){
        setErrorFor(username,'O nome de usuário é obritatório');
    } else {
        setSuccessFor (username);
    }

    if(emailValue === ""){
        setErrorFor(email,'O e-mail é obrigatório.');  
    } else if (!checkEmail(emailValue)){
        setErrorFor(email, "Insira um email válido");

    } else {
        setSuccessFor(email)
    }

    {
        if(passwordValue === ''){
            setErrorFor(password, "A senha é obrigatoria.");
        } else if (passwordValue.length < 7){
            setErrorFor(password, 'A senha precisa ter no minimo 7 caracteres.')
        } else {
            setSuccessFor(password);
        }
    }
        if(passwordConfirmationValue === ''){
            setErrorFor(passwordConfirmation,'Confirme a senha digitada.');
        } else if(passwordConfirmationValue != passwordValue){
            setErrorFor(passwordConfirmation, 'As senhas não conferem.');
        } else {
            setSuccessFor(passwordConfirmation);
        }
        const formControls = form.querySelectorAll('.form-control');

            const formIsValid = [...formControls].every(formControl => {
                return (formControl.className === 'form-control success');
            });

        if (formIsValid) {
            console.log('formulário 100% valido!')
        }
}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector ('small');

  //Adicionar msg de erro
  small.innerText = message;

  //Adiciona classe de erro
  formControl.className = "form-control error";
}
function setSuccessFor (input){
    const formControl = input.parentElement;

    //Adiciona a classe de sucesso
    formControl.className = "form-control success";
    }
 
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}    