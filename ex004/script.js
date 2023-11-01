var botao = document.querySelector("button.botao")
let res = document.querySelector("section.resultado")

botao.addEventListener("click", () => {
  let nome = window.prompt("Qual o Seu Nome?")
  res.innerHTML = `<p> Ola ${nome}, prazer em conhece-lo!</p>`
})
