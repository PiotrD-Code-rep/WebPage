const form=document.getElementById('Form');
const Password=document.getElementById('Password');
const Email=document.getElementById('Email');
const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const rePassword=/^(?=.*[A-Z])(?=.*\d).{8,}$/;
form.addEventListener('submit',e=>{
    e.preventDefault();

    let formErrors = [];

    if(!reEmail.test(Email.value)){
        formError.push("the password or email is incorrect");
    }
    if(!rePassword.test(Password.value)){
        formErrors.push("the password or email is incorrect");
    }
    if (!formErrors.length) {
        form.submit();
    }else {
        //jeżeli jednak są jakieś błędy...
        formMessage.innerHTML = `
            <ul class="form-error-list">
                ${formErrors.map(el => `<li>${el}</li>`).join("")}
            </ul>
        `;
    }
});