/*
const btn1 = document.querySelector('button.action1')
const btn2 = document.querySelector("button.action2")
const btn3 = document.querySelector("button.action3")
const btn4 = document.querySelector("button.action4")
const log = document.querySelector('section.log')

btn1.addEventListener('click', () => {
 log.innerHTML += `<p> Clicou em Ação 1</p>`
})

btn2.addEventListener('click', () => {
  log.innerHTML += `<p> Clicou em Ação 2</p>`
})

btn3.addEventListener('click', () => {
  log.innerHTML += `<p> Clicou em Ação 3</p>`
})

btn4.addEventListener('click', () => {
  log.innerHTML += `<p> Clicou em Ação 4</p>`
}) */

const log = document.querySelector('section.log')

function action1() {
  log.innerHTML += `<p>Clicou em Ação 1</p>`
}

function action2() {
log.innerHTML += `<p>Clicou em Ação 2</p>`
}

function action3() {
log.innerHTML += `<p>Clicou em Ação 3</p>`
}

function action4() {
log.innerHTML += `<p>Clicou em Ação 4</p>`
}
