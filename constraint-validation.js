// TODO
document.addEventListener("DOMContentLoaded", function() {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const form = document.querySelector("form");
    
    
    function checkValidation(e) {
        let allValid = false;
    
        // check that firstName is greater than length 3
        if(firstName.value.length < 3) {
            firstName.validity.valid = false;
            firstName.classList.add("invalid");
            firstName.setCustomValidity("Name is too short, needs to be at least 3 characters");
            firstName.reportValidity();
        }
        else {
            firstName.validity.valid = true;
            firstName.classList.remove("invalid");
            allValid = true;
            console.log(`good first name`);
        }

        // check that lastName is greater than length 3
        if(lastName.value.length < 3) {
            lastName.validity.valid = false;
            lastName.classList.add("invalid");
            lastName.setCustomValidity("Name is too short, needs to be at least 3 characters");
            lastName.reportValidity();
        }
        else {
            lastName.validity.valid = true;
            lastName.classList.remove("invalid");
            allValid = true;
            console.log(`good last name`);
        }

        // check email regex
        let emailRegex = new RegExp('/\w+@\w+\.\w+/');
        let emailRegexResult = email = emailRegex.test(email.value);
        if(emailRegexResult) {
            email.validity.valid = true;
            email.classList.remove("invalid");
            allValid = true;
            console.log(`good email`);
        }
        else {
            email.validity.valid = false;
            email.classList.add("invalid");
            email.setCustomValidity("Email is not formatted properly");
            email.reportValidity();
        }

        if(!allValid) {
            e.preventDefault();
            console.log(`Bad Input`);
        }
    }

    form.addEventListener('submit', (e) => {
        // e.preventDefault();
        checkValidation(e);
        
    });
});