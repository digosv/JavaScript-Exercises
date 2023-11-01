const click = document.querySelector("button.click")
const reset = document.querySelector("button.reset")
const res = document.querySelector("section.resultado")
let count = 0

click.addEventListener("click", () => {
  count++
  res.innerHTML = `<p>O contador está com: ${count} cliques</p>`
})

reset.addEventListener("click", () => {
  count = 0
  res.innerHTML = `<p>O contador está com: ${count} cliques</p>`
})
