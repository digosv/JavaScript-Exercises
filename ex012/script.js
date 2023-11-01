function descobrir() {
  let number = window.prompt('Digite seu número: ')
  const res = document.querySelector('section.res')
  num = Number(number)

  if (num % 2 == 0) {
    msg = "par."
  } else {
    msg = "impar"
  }

  res.innerHTML = `<p>O número ${num} é <strong>${msg}</strong>`
}