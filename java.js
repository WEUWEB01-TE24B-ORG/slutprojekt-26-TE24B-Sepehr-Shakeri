
const allaSol = document.querySelectorAll('.solglasogon');
const allaVanliga = document.querySelectorAll('.vanliga-glasogon');


function visaAlla() {
  
    for (let i = 0; i < allaSol.length; i++) {
        allaSol[i].style.display = "block";
    }
    
    for (let i = 0; i < allaVanliga.length; i++) {
        allaVanliga[i].style.display = "block";
    }
}


function visaSol() {
    
    for (let i = 0; i < allaSol.length; i++) {
        allaSol[i].style.display = "block";
    }
   
    for (let i = 0; i < allaVanliga.length; i++) {
        allaVanliga[i].style.display = "none";
    }
}


function visaVanliga() {
   
    for (let i = 0; i < allaSol.length; i++) {
        allaSol[i].style.display = "none";
    }
  
    for (let i = 0; i < allaVanliga.length; i++) {
        allaVanliga[i].style.display = "block";
    }
}