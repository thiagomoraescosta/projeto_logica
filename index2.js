let nomeHeroi = "GoKu";
let xp = 10001;

let nivelXp = [1000, 2000, 5000, 7000, 8000, 9000, 10000]
let novoXp = [];

for ( let i = 0; i < nivelXp.length; i++) { 
   if (xp <= 1000){
    novoXp = "Forte";  
   } else if (xp <= 2000){
    novoXp = "Bronze";
   } else if (xp <= 5000){
    novoXp = "Prata"; 
   } else if (xp <= 7000){
    novoXp = "Ouro"; 
   } else if (xp <= 8000){
    novoXp = "Platina"; 
   } else if (xp <= 9000){
    novoXp = "Ascendente"; 
   } else if (xp <= 10000){
    novoXp = "Imortal"; 
   } else {
    novoXp = "Radiante"; 
   } 
}
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + novoXp);