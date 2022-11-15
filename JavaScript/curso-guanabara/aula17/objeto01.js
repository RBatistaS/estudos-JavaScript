let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordaar(p=0){
    console.log('engordou')
    this.peso +=p
} }

amigo.engordaar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)