const btn = document.querySelector("button.btn")
const res = document.querySelector("section.res")

btn.addEventListener("click", () => {
  var number = window.prompt("Digite um número: ")
  num = Number(number)
  var absolute = Math.abs(num)
  var trunc = Math.trunc(num)
  var round = Math.round(num)
  var square = Math.pow(num, 2)
  var cubic = Math.pow(num, 3)
  var sqrr = Math.sqrt(num)
  var cbrt = Math.cbrt(num)
  res.innerHTML = `<p>O número a ser analisado é: ${num}<br>O seu valor absoluto é ${absolute}<br>O seu valor inteiro é ${trunc}<br> O seu valor mais próximo é ${round}<br>A sua raiz quadrada é: ${sqrr}<br>A sua raiz cúbica é: ${cbrt}<br> O valor de ${num}<sup>2</sup> é ${square}<br>O valor de ${num}<sup>3</sup> é ${cubic}</p>`
  /* utilizar o Math
  let inteiro = int(num)
  let sqr = num ** 2 */
})
