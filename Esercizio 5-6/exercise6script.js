

let tasto = document.getElementById("valider6")

function remainder () {
    let primo = document.getElementById("premier_nombre").value;
    let secondo = document.getElementById("deuxieme_nombre").value;
    let divisione = primo / secondo;
    let divisioneArr = Math.floor(divisione)
    let resto = divisione - Math.floor(divisione);
    alert(primo + " divided by " + secondo + " equals: " + divisioneArr + "\nWith a remainder of " + resto);
}

tasto.addEventListener("click", remainder);