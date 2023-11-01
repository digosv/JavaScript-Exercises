function descubra() {
  const res = document.querySelector("section.res")
  let n1 = Number(window.prompt("Digite o primeiro número: "))
  let n2 = Number(window.prompt("Digite o segundo número: "))
  if (n1 > n2) {
    msg = `${n1} é maior`
  } else if (n1 < n2) {
    msg = `${n2} é maior`
  } else {
    msg = `ambos são iguais`
  }

  res.innerHTML = `<p>Analisando os valores ${n1} e ${n2}... ${msg}</p>`
}
