let nomeHeroi = "GoKu";
let classificacaoXp = 10001;
let nivel1 = 1000;
let nivel2 = 2000;
let nivel3 = 5000;
let nivel4 = 7000;
let nivel5 = 8000;
let nivel6 = 9000;
let nivel7 = 10000;


if (classificacaoXp <= nivel1) {
    classificacaoXp = "Forte";
}

if (classificacaoXp <= nivel2){
    classificacaoXp = "Bronze";
}

if (classificacaoXp <= nivel3){
    classificacaoXp = "Prata"
}


if (classificacaoXp <= nivel4){
    classificacaoXp = "Ouro"
}

if (classificacaoXp <= nivel5){
    classificacaoXp = "Platina"
}

if (classificacaoXp <= nivel6){
    classificacaoXp = "Ascendente"
}

if (classificacaoXp <= nivel7){
    classificacaoXp = "Imortal"
}

if (classificacaoXp > nivel7){
    classificacaoXp = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + classificacaoXp);