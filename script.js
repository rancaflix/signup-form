let pwd = document.getElementById('pwd');
let confirmpwd = document.getElementById('confirm-pwd');
let firstNameInput = document.getElementById('first-name')
let emailInput = document.getElementById('mail');
let phoneInput = document.getElementById('phone-number');

// span for email message
let emailSpan = document.createElement('span');
emailSpan.innerHTML = "email required";
emailInput.addEventListener('focus', function(){
    emailInput.before(emailSpan)
});
emailInput.addEventListener('blur', function(){
    emailSpan.remove();
});

// span for name message
let nameSpan = document.createElement('span');
nameSpan.innerHTML = "field required";
firstNameInput.addEventListener('focus', function(){
    firstNameInput.before(nameSpan)
});
firstNameInput.addEventListener('blur', function(){
    nameSpan.remove();
})

// span for phone number
let phoneSpan = document.createElement('span');
phoneSpan.innerHTML = "9 digits minimum";
phoneInput.addEventListener('focus', function(){
    phoneInput.before(phoneSpan)
});
phoneInput.addEventListener('blur', function(){
    phoneSpan.remove();
})

// prevalidation of password
let confirmSpan = document.createElement('span');
confirmpwd.before(confirmSpan);
confirmpwd.addEventListener('focus', validate);
confirmpwd.addEventListener('input', validate);
confirmpwd.addEventListener('blur', validate);

// validation of password
function validate() {   
    if (pwd.value === confirmpwd.value) {
        confirmSpan.innerText= " ";
        return true;
    } else {
    confirmSpan.innerText = "passwords do not match";
    return false;
    }
};

// prevalidation of checkpassword
let pwdSpan = document.createElement('span');
pwd.before(pwdSpan);

// check password
function strongPassword(){
    if (pwd.value.length < 8) {
        pwdSpan.innerText = "8 characters minimum";
    } else {
        pwdSpan.innerText = " ";
    }
}

pwd.addEventListener('focus', strongPassword);
pwd.addEventListener('input', strongPassword);

// form responding to validation
let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
     if (!validate()) {
         event.preventDefault();
     }
});