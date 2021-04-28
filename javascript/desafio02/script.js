function carregar() {
  let msg = document.getElementById('msg')
  let img = document.getElementById('imagem')
  let data = new Date()
  //let hora = data.getHours()
  let hora = 19
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    //Bom dia!
    img.src = 'imagens/manha.jpg'
    document.body.style.background = '#D6BC2B'
  } else if (hora >= 12 && hora <= 18) {
    //Boa tarde!
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#FAAE71'
  } else {
    //Boa noite!
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#100021'
  }
}
