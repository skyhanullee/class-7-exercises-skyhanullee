document.addEventListener("DOMContentLoaded", function() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const contactReason = document.getElementById("contact-reason");
    const jobGroup = document.querySelectorAll(".job-group");
    const talkGroup = document.querySelectorAll(".talk-group");
    const form = document.querySelector("form");

    
    function checkValidation(e) {
        let allValid = false;
    
        // [used constraint validation on html form for name]
        // check that name is greater than length 3
        if(name.value.length < 3) {
            name.validity.valid = false;
            name.setCustomValidity("Name is too short, needs to be at least 3 characters");
            name.reportValidity();
        }
        else {
            name.validity.valid = true;
            allValid = true;
            console.log(`good name`);
        }


        // [used constraint validation on html form for email]
        // // check email regex
        // let emailRegex = new RegExp('/\w+@\w+\.\w+/');
        // let emailRegexResult = email = emailRegex.test(email.value);
        // if(emailRegexResult) {
        //     email.validity.valid = true;
        //     email.classList.remove("invalid");
        //     allValid = true;
        //     console.log(`good email`);
        // }
        // else {
        //     email.validity.valid = false;
        //     email.classList.add("invalid");
        //     email.setCustomValidity("Email is not formatted properly");
        //     email.reportValidity();
        // }

        // check for 

        if(!allValid) {
            e.preventDefault();
            console.log(`Bad Input`);
        }
    }

    function showOptions(e) {
        if(contactReason.value == 'job-opportunity') {
            console.log(`job opp chosen`);
            jobGroup.forEach(i => {
                i.classList.remove('hide-group');
            });
            talkGroup.forEach(i => {
                i.classList.add('hide-group');
            });
        }
        else if(contactReason.value == 'talk-code') {
            console.log(`talk code chosen`);
            talkGroup.forEach(i => {
                i.classList.remove('hide-group');
            });
            jobGroup.forEach(i => {
                i.classList.add('hide-group');
            });
        }
        else {
            jobGroup.forEach(i => {
                i.classList.add('hide-group');
            });
            talkGroup.forEach(i => {
                i.classList.add('hide-group');
            });
        }

    }

    form.addEventListener('submit', (e) => {
        // e.preventDefault();
        checkValidation(e);
        
    });

    // 
    form.addEventListener('change', (e) => {
        // console.log(`${contactReason.value}`);
        showOptions(e);
    });
});