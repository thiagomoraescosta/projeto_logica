class Heroi{
    constructor(nome, poder){
        this.nome = nome;
        this.poder = poder;
    }
}

//criar um novo heroi
const heroi = new Heroi("GoKu", 10001 )
switch (true) {
    case heroi.poder <= 1000:
        novoXp = "Forte";
        break;
    case heroi.poder <= 2000:
        novoXp = "Bronze";
        break;
    case heroi.poder <= 5000:
        novoXp = "Prata";
        break;
    case heroi.poder <= 7000:
        novoXp = "Ouro";
        break;
    case heroi.poder <= 8000:
        novoXp = "Platina";
        break;
    case heroi.poder <= 9000:
        novoXp = "Ascendente";
        break;
    case heroi.poder <= 10000:
        novoXp = "Imortal";
        break;
    default:
        novoXp = "Radiante";
        break;
}
console.log("O Herói de nome " + heroi.nome + " está no nível de " + novoXp);