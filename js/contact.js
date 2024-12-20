// hamburger
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// Audio on Focus and Highlight/Blur for Input Fields
let blueButtons = document.querySelectorAll(".contact-box");
let beepAudio = document.getElementById("focus-Sound");

blueButtons.forEach(button => {
    button.addEventListener("focus", function() {
        beepAudio.play();
        // Add highlight on focus
        button.classList.add("highlighted");
    });

    button.addEventListener("blur", function() {
        // Remove highlight on blur
        button.classList.remove("highlighted");
    });
});

// Form Validation and Submission with Confirmation Message
let form = document.getElementById('contactForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let userFirstName = document.getElementById("first-name");
    let userLastName = document.getElementById("last-name");
    let userEmailInput = document.getElementById("email");

    let firstNameError = document.getElementById("firstNameErrorMessage");
    let lastNameError = document.getElementById("lastNameErrorMessage");
    let emailError = document.getElementById("emailErrorMessage");

    let isFormValid = true;

    // Validation checks for each field
    if (userFirstName.value === "") {
        userFirstName.classList.add("error");
        firstNameError.style.display = "inline";
        isFormValid = false;
    } else {
        userFirstName.classList.remove("error");
        firstNameError.style.display = "none";
    }

    if (userLastName.value === "") {
        userLastName.classList.add("error");
        lastNameError.style.display = "inline";
        isFormValid = false;
    } else {
        userLastName.classList.remove("error");
        lastNameError.style.display = "none";
    }

    if (userEmailInput.value === "") {
        userEmailInput.classList.add("error");
        emailError.style.display = "inline";
        isFormValid = false;
    } else {
        userEmailInput.classList.remove("error");
        emailError.style.display = "none";
    }

    // If the form is valid, show a confirmation message with a close button
    if (isFormValid) {
        let successMessage = document.createElement("div");
        successMessage.className = "confirmation-message";
        successMessage.innerHTML = `
            Hey ${userFirstName.value}, your message has been received! We will get back to you shortly.
            <button class="close-btn">Close</button>
        `;

        // Append the confirmation message to the form or another appropriate location
        form.appendChild(successMessage);

        // Add event listener to close the message on button click
        successMessage.querySelector(".close-btn").addEventListener("click", function() {
            successMessage.style.display = "none";
        });
    }
});
