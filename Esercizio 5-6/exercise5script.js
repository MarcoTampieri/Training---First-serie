alert("Please enter two decimal numbers.")

let bottone = document.getElementById("valider5")

function moltiplica () {
    let primo = Math.floor(document.getElementById("premier_nombre").value);
    let secondo = document.getElementById("deuxieme_nombre").value;
    let risultato = primo * secondo;
    alert("Result of the partially rounded multiplication is :\n" + risultato);
};

bottone.addEventListener("click", moltiplica);