alert("Please enter your shoe size and birth year.")

let bottone = document.getElementById("valider");

function calcolo () {
    let misura = document.getElementById("pointure").value;
    let anno = document.getElementById("annee").value;
    let risultato = ((misura * 2) + 5) * 50 - anno + 1766;
    alert("The result of a weird calculation is: \n" + risultato);
};

bottone.addEventListener("click", calcolo);