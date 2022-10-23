function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
 
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora>= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagem/manha.jpg'
        document.body.style.background = '#e2cd6f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        document.body.style.background = '#b9846f'
        img.src = 'imagem/tarde.jpg'
    } else {
        //BOA NOITE
        img.src = 'imagem/noite.jpg'
        document.body.style.background = '#515154'
    }
}