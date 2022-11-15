let num = [5, 4, 8, 3]

//adicionar elemento ao vetor
num.push(2)

//colocar o vetor em ordem 
num.sort()

//se adicioar o num.push apos o num.sort() o push aparecerá fora de ordem pois está apos a leitura do código
num.push(1)

console.log(`Nosso  vetor é o ${num}`)

//mostrar quantas posições tem o vetor
console.log(`o vetor tem ${num.length} posições`)

//mostrar o numero na posição indicada
console.log(num[2])

//buscar a chave do vetor utilizando num.indexOf()
//let pos = num.indexOf(2)
//console.log(`O valor 2 está na posição ${pos}`)

// se o comando para buscar a chave for um numero que não existe no vetor, o programa ira retornar o valor -1 indicando que a chave não existe
let pos = num.indexOf(10   )
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 10 está na posição ${pos}`)
}