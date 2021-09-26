function calcularCrescimento(alt1, tax1, alt2, tax2) {

    if (alt1 == alt2) {
        if (tax1 == tax2) {
            return 'As crianças tem a mesma altura e mesma taxa de crescimento!'
        } else if (tax1 > tax2) {
            return 'A criança 1 ultrapassara a criança 2 em 1 ano'
        } else {
            return 'A criança 2 ultrapassara a criança 1 em 1 ano'
        }
    } else if (alt1 > alt2) {
        if (tax1 == tax2) {
            return 'As crianças tem alturas diferentes e mesma taxa de crescimento!'
        } else if (tax2 > tax1) {
            return `A criança menor ultrapassará a maior em ${calcularTempo(alt1, tax1, alt2, tax2)} anos` 
        } else {
            return 'As crianças tem alturas diferentes e a criança 2 não ultrapassará a criança1'
        }
    } else {
        if (tax1 == tax2) {
            return 'As crianças tem alturas diferentes e mesma taxa de crescimento!'
        } else if (tax1 > tax2) {
            return `A criança menor ultrapassará a maior em ${calcularTempo(alt1, tax1, alt2, tax2)} anos` 
        } else {
            return 'As crianças tem alturas diferentes e a criança 1 não ultrapassará a criança 2'
        }
    }
}

function calcularTempo (alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    return qtdAnos
}

console.log(calcularCrescimento(150,5,160,4))
