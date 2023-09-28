
// Spara scrollpositionen när sidan laddas

var savedScrollPosition = 0;

window.onload = function () {
    savedScrollPosition = window.scrollY;
};

// Återställ scrollpositionen efter att formuläret har postats

function restoreScrollPosition() {
    window.scrollTo(0, savedScrollPosition);
}


                        