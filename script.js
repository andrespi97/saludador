document.getElementById("miboton").addEventListener("click", saludar);
function saludar() {
  if (document.getElementById("frase").innerHTML == "Saludos amigo") {
    document.getElementById("frase").innerHTML = "...";
  } else {
    document.getElementById("frase").innerHTML = "Saludos amigo";
  }
  confetti();
}
