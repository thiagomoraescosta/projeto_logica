let nomeHeroi = "GoKu";
let xp = 10001;
let novoXp = "Forte"

switch (true) {
    case xp <= 1000:
        novoXp = "Forte";
        break;
    case xp <= 2000:
        novoXp = "Bronze";
        break;
    case xp <= 5000:
        novoXp = "Prata";
        break;
    case xp <= 7000:
        novoXp = "Ouro";
        break;
    case xp <= 8000:
        novoXp = "Platina";
        break;
    case xp <= 9000:
        novoXp = "Ascendente";
        break;
    case xp <= 10000:
        novoXp = "Imortal";
        break;
    default:
        novoXp = "Radiante";
        break;
}

//console.log("O Herói de nome " + nomeHeroi + " está no nível de " + novoXp);

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${novoXp}`);

