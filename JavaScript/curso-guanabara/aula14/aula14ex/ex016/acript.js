function contar() {
    //Declaração de Variáveis
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf') 
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    //Validação de dados
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'

        //converção de string para number
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p<= 0) {
            alert('Passo inválido! Cosiderado PASSO 1')
            p = 1
        }

        //bloco logico para realizar a contagem/ execução do programa

        if (i < f) {
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1f449}`
            } 
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }

}