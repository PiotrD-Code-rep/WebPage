const form=document.getElementById('Form');
const FirstName=document.getElementById('FirstName');
const LastName=document.getElementById('LastName');
const Email=document.getElementById('Email');
const Password=document.getElementById('Password');
const PasswordConfirm=document.getElementById('PasswordConfirm');
const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const rePassword=/^(?=.*[A-Z])(?=.*\d).{8,}$/;
form.addEventListener('submit',e=>{
    e.preventDefault();

    let formErrors = [];

    if (FirstName.value.length <= 3) {
        formErrors.push("Firstname must be longer then 3 characters");
    } if(!reEmail.test(Email.value)){
        formError.push("That is not email");
    }
    if(!rePassword.test(Password.value)){
        formErrors.push("the password must contain at least 8 characters, 1 capital letter and 1 number");
    }
    if(Password.value!==PasswordConfirm.value){
        formErrors.push("the password and passwordConfirm is diffrent");
    }
    if (!formErrors.length) {
        form.submit();
    }else {
        //jeżeli jednak są jakieś błędy...
        formMessage.innerHTML = `
            <h3 class="form-error-title">Przed wysłaniem proszę poprawić błędy:</h3>
            <ul class="form-error-list">
                ${formErrors.map(el => `<li>${el}</li>`).join("")}
            </ul>
        `;
    }
});




