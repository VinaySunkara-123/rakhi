let x = document.getElementById("loginform");
let y = document.getElementById("username");
let t = document.getElementById("password");

x.addEventListener("submit", function(event){
    event.preventDefault(); 

    let enteredUsername = y.value.trim();
    let enteredPassword = t.value.trim();

    // Telugu mass dialogues for wrong login

    if (enteredUsername === "Anusha" && enteredPassword === "Needa") {
        alert("Nuvvu sādhinchav raa chinna...  😄");
        window.location.href = "main.html";
    } else {
        alert("Nuvvu wrong route lo veltunnav ra babu 😏")
    }
});