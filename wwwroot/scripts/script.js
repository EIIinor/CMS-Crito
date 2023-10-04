// contact form validation
const nameInput = document.getElementById("nameInput");
const messageInput = document.getElementById("messageInput");
const emailInput = document.getElementById("emailInput");

nameInput.addEventListener("keyup", function () {
    validateName(this);
});

messageInput.addEventListener("keyup", function () {
    validateMessage(this);
});

 emailInput.addEventListener("keyup", function () {
    validateEmail(this);
});

function validateName(inputElement) {
    const value = inputElement.value.trim();
    const errorSpan = document.getElementById("nameInput-error");

    if (value.length < 3) {
        errorSpan.innerText = "Name must be at least 3 letters.";
        inputElement.classList.add("error");
    } else {
        errorSpan.innerText = "";
        inputElement.classList.remove("error");
    }
}


function validateMessage(inputElement) {
    const value = inputElement.value.trim();
    const errorSpan = document.getElementById("messageInput-error");

    if (value.length < 5) {
        errorSpan.innerText = "Message must be at least 5 characters.";
        inputElement.classList.add("error");
    } else {
        errorSpan.innerText = "";
        inputElement.classList.remove("error");
    }
} 

function validateEmail(inputElement) {
    const value = inputElement.value.trim();
    const errorSpan = document.getElementById("emailInput-error");

    // Regular expression för att kontrollera om e-postadressen är giltig
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(value)) {
        errorSpan.innerText = "Must be a valid email, ex. name@domain.com";
        inputElement.classList.add("error");
    } else {
        errorSpan.innerText = "";
        inputElement.classList.remove("error");
    }
}



// Spara scrollpositionen när sidan laddas

var savedScrollPosition = 0;

window.onload = function () {
    savedScrollPosition = window.scrollY;
};

// Återställ scrollpositionen efter att formuläret har postats

function restoreScrollPosition() {
    window.scrollTo(0, savedScrollPosition);
}


                        