const btn = document.querySelector("button.botao")
const res = document.querySelector("section.resultado")

btn.addEventListener("click", () => {
  let num = window.prompt("Digite um núumero: ")
  let double = num * 2
  let half = num / 2
  res.innerHTML = `<p>O dobro é: ${double} e a metade é: ${half}</p>`
})
