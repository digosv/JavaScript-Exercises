function calcular() {
  const res = document.querySelector('section.res')
  let nome = window.prompt('Qual o nome do aluno?')
  let nota1 = window.prompt('Qual foi a primeira nota?')
  let nota2 = window.prompt('Qual foi a segunda nota?')
  n1 = Number(nota1)
  n2 = Number(nota2)
  media = (n1 + n2) / 2

if (media <=6) {
  msg = "Estude Mais!"
} else {
  msg = "Parabéns!!! Você foi muito bem!"
}

  res.innerHTML += `<p>Calculando a média final de ${nome}</p>`
  res.innerHTML += `<p>As notas obitidas foram ${n1} e ${n2}</p>`
  res.innerHTML += `<p>A média final será ${media}</p>`
  res.innerHTML += `<p>A mensagem que temos é <strong style="color:#FF0000">${msg}</strong></p>`
}