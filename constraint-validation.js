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
        }

        if(!allValid) {
            e.preventDefault();
        }
    }

    form.addEventListener('submit', (e) => {
        checkValidation(e);
    });
});