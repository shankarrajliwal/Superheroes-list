let heroes;

let input = document.querySelector("input");
let btn = document.querySelector("button");
let sname = document.querySelector(".name");
let power = document.querySelector(".power");
let abilities = document.querySelector(".abilities");
let photo = document.querySelector(".photo");
let mistake = document.querySelector(".error");

async function datafatching(){
    let data = await fetch("data.json");
    let fdata = await data.json();
    heroes = fdata.superheroes;
}

datafatching();

btn.addEventListener("click",()=>{
     let found = false;
    for(let i=0;i<heroes.length;i++){
        if(heroes[i].name.toLowerCase()===input.value){
            photo.src = heroes[i].image;
            sname.textContent = `Name:- ${heroes[i].name}`
            power.textContent = `Superpower:- ${heroes[i].superpowers}`;
            abilities.textContent = `Abilities:- ${heroes[i].abilities}`;
            input.value = "";

             mistake.textContent = "";
            found = true;
            break;
    ;
            }         
    }  if (found==false) {
         photo.src = "";
        sname.textContent = "";
        power.textContent = "";
        abilities.textContent = "";
        input.value = "";
        mistake.textContent = "Cant find this superman. Can try any other.";

    }
})