const form=document.getElementById('Form');
const FullName=document.getElementById('FullName');
const Email=document.getElementById('Email');
const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit',e=>{
    e.preventDefault();

    let formErrors = [];

    if (FullName.value.length <= 3) {
        formErrors.push("Firstname must be longer then 3 characters");
    } if(!reEmail.test(Email.value)){
        formError.push("That is not email");
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