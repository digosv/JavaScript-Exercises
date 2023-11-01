const btn = document.querySelector("button.btn")
const res = document.querySelector("section.res")

btn.addEventListener("click", () => {
  let num1 = window.prompt("Digite o primeiro número: ")
  let num2 = window.prompt("Digite o segundo número: ")
  numb1 = Number(num1)
  numb2 = Number(num2)
  let soma = numb1 + numb2
  res.innerHTML = `<p>A soma do número ${numb1} e o número ${numb2} é: ${soma}</p>`
})
