var btn = document.querySelector("button.botao")

btn.addEventListener("click", function () {
  let name = window.prompt("Qual é o seu nome?")
  window.alert(`Ola ${name}. é um prazer em conhece-lo`)
})
