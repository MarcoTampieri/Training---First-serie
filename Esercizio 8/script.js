let bottone = document.getElementById("valider")

function age () {
    let anni = document.getElementById("age").value;
    if (anni < 18) {
        alert("You're a minor");
    } else {
        alert("You're an adult");
    }
};

bottone.addEventListener("click", age);