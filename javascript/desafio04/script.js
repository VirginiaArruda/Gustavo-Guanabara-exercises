function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if (num.value.length == 0) {
    alert('Por favor, digite um número!')
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = '' //Recebe nada. Antes de começar a mostrar a tabuada, limpa sua área.
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}` //Não faz sentido para JS, mas outras linguagens fazem uso.
      tab.appendChild(item) // Adiciona elemento filho que é o item.
      c++
    }
  }
  
}
