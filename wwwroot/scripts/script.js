// team section slider 


document.addEventListener("DOMContentLoaded", function() {
    var container = document.querySelector('.team-member-container');
    var itemsPerPage = 4;
    var currentPage = 1;

    // Funktion för att visa en sida med teammedlemmar
    function showPage(page) {
        var teamMembers = container.querySelectorAll('.team-member');
        for (var i = 0; i < teamMembers.length; i++) {
            teamMembers[i].style.display = 'none'; // Dölj alla teammedlemmar
        }
        var startIndex = (page - 1) * itemsPerPage;
        var endIndex = startIndex + itemsPerPage;
        for (var i = startIndex; i < endIndex; i++) {
            if (teamMembers[i]) {
                teamMembers[i].style.display = 'block'; // Visa sidans medlemmar
            }
        }
    }

    // Visa första sidan när sidan laddas
    showPage(currentPage);

    // Klickhändelser för nästa och föregående knappar
    var nextButton = document.querySelector('.next-button');
    var prevButton = document.querySelector('.prev-button');

    nextButton.addEventListener("click", function() {
        if (currentPage < Math.ceil(container.querySelectorAll('.team-member').length / itemsPerPage)) {
            currentPage++;
            showPage(currentPage);
        }
    });

    prevButton.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });
});








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


                        