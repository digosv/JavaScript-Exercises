function hoje() {
  const res = document.querySelector("section.res")
  agora = new Date()
  res.innerHTML = `<p>O que eu recebi do sistema foi: <mark>${agora}<mark></p>`
}
