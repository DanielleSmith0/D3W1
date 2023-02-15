/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let JohnSnowAttack = 25;
let JamieLannisterAttack = 35;

if(JohnSnowAttack > JamieLannisterAttack){
    console.log("John Snow is more beefy");
}else if(JohnSnowAttack === JamieLannisterAttack){
    console.log("Equally strong");
}else{
    console.log("Jamie is og");
}

let JohnSnowHealth = 100;
let JohnSnowDefense = 0;

if(JohnSnowHealth <= JamieLannisterAttack){
    console.log("John Snow SLain");
}else{
    JohnSnowHealth -= JamieLannisterAttack;
    console.log("John's health is down to " + JohnSnowHealth);
}

JohnSnowDefense += 25;
// JohnSnowDefense = JohnSnowDefense + 25; (same thing)

if(JohnSnowHealth <= JamieLannisterAttack){
    console.log("John has been slain");
}else{
    JohnSnowHealth -= JamieLannisterAttack - JohnSnowDefense;
    console.log("John's health is down to " + JohnSnowHealth);
}

if(JohnSnowHealth + 50 >= 100){
    JohnSnowHealth = 100;
}else{
    JohnSnowHealth += 50;
}
console.log(JohnSnowHealth);

let coinLandsHeads = true;

if(coinLandsHeads === true){
    console.log("Fight Continues")
}else{
    console.log("John is allowed to run away")
}

// if(!coinLandsHeads){
//     console.log("Fight Continues")
// }else{
//     console.log("John is allowed to run away")
// }

// if(coinLandsHeads !== false){
//     console.log("Fight Continues")
// }else{
//     console.log("John is allowed to run away")
// }

for(let i=0; i < 5; i++){
    if(JohnSnowHealth <= 0){
        console.log("John Snow has been slain");
    }else{
        JohnSnowHealth -= JamieLannisterAttack - JohnSnowDefense;
        console.log(`John's health is now ${JohnSnowHealth}`);
    }
}

while(JohnSnowHealth > 0){
    JohnSnowHealth -= JamieLannisterAttack - JohnSnowDefense;
    if(JohnSnowHealth <= 0){
        console.log("John Snow is finally dead")
    }else{
        console.log("John's health is now " + JohnSnowHealth);
    }
}

if (JohnSnowAttack > 25 && JohnSnowAttack < 75){
    console.log("John is midlevel beast");
}

if (JamieLannisterAttack < 25 && JamieLannisterAttack > 75){
    console.log("Jamie is strong if he ate his wheaties");
}else{
    console.log("Jamie is midlevel beast");
}
