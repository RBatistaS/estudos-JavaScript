function tabuada() {

    //declaração de variáveis
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    //método
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1

        //utilizado para limpar a aréa da tabuada quando eu escolher outro número
        tab.innerHTML = ''

        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            
            //utilizado para colocar um value entro do opton do html
            item.value = `tab${c}`

            tab.appendChild(item)
            c++
        }
    }

}