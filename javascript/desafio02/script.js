function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtano')
  let res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let gênero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
          //criança
          img.setAttribute('src', 'imagens/menino.jpg')
        } else if (idade < 21) {
          //jovem
          img.setAttribute('src', 'imagens/adolescentehomem.jpg')
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'imagens/adultohomem.jpg')
        } else {
          //idoso
          img.setAttribute('src', 'imagens/idoso.jpg')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
          //criança
          img.setAttribute('src', 'imagens/menina.jpg')
        } else if (idade < 21) {
          //jovem
          img.setAttribute('src', 'imagens/adolescentemulher.jpg')
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'imagens/adultomulher.jpg')
        } else {
          //idoso
          img.setAttribute('src', 'imagens/idosa.jpg')
        }
    }
    foto.style.borderRadius = "100%";
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
  }
}
