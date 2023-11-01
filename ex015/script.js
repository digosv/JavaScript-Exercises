function analisar() {
  let meses = new Array ("jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez")
  let semana = new Array ('dom', "seg", "ter", "qua", "qui", "sex", "sab")
  const res = document.querySelector('section.res')
  today = new Date
  let dia = today.getDate()
  let sem = today.getDay()
  alert(sem)
 
  res.innerHTML += `<p>Dia: ${dia}</p>`
  res.innerHTML += `<p></p>`
  res.innerHTML += `<p></p>`
  res.innerHTML += `<p></p>`
  res.innerHTML += `<p></p>`
  res.innerHTML += `<p></p>`
  res.innerHTML += `<p></p>`
  
}