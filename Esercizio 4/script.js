
let bottone = document.getElementById("valider");

function clicca() {
    let nome = document.getElementById("nom").value;
    let cognome = document.getElementById("prenom").value;
    let citta = document.getElementById("ville").value;
    alert("Name : " + nome + "\nFamily name : " + cognome + "\nCity : " + citta);
};

bottone.addEventListener("click", clicca)