function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagem/boykids.jpg')

            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/yung-man.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/man.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/old-man.jpg')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher' 

            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagem/girlkid.jpg')
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagem/yung-woman.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagem/woman.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagem/old-woman.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos. `
        res.appendChild(img)


       
    }
}