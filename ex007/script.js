// nome
// primeira nota
// segunda nota
// resultado no html
const btn = document.querySelector("button.btn")
const res = document.querySelector("section.res")

btn.addEventListener("click", () => {
  let nome = window.prompt("Ola! Qual o nome do Aluno? ")
  let nota1 = window.prompt(`Qual foi a primeira nota do(a) ${nome}`)
  let nota2 = window.prompt(
    `Além do ${nota1}, qual foi a segunda nota do(a) ${nome}`
  )
  n1 = Number(nota1)
  n2 = Number(nota2)
  med = (n1 + n2) / 2
  alert(med)

  /* res.innerHTML = `<p>Calculando a média final de ${nome}...</p>`
  res.innerHTML += `<p>As notas obitidas foram ${n1} e ${n2}...</p>`
  res.innerHTML += `<p> A média final será: ${med}</p>` */

  res.innerHTML = `<p>Calculando a média final de ${nome}... <br>As notas obitidas foram ${n1} e ${n2}... <br> A média final será: ${med} </p>`
})
