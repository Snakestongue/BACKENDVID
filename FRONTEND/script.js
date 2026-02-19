
let boo =true;
let navs = document.getElementsByClassName("navs");

for (let i= 0; i < navs.length; i++) {
    navs[i].addEventListener("mouseover", function() {
        this.style.color = "black";
        if (boo){
            this.style.backgroundColor = "#FFD700";
        } else {
            this.style.backgroundColor = "#00ff2f";
        }
    });
    navs[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = "rgb(15,15,15)";
        if (boo) {
            this.style.color = "#FFD700";
        } else {
            this.style.color = "#00ff2f";
        }
    });
}


function colorSwitchMAIN(){
let navs = document.getElementsByClassName("navs");

    let hT = document.getElementById("headTitle")
    let tongue = document.getElementById("tongue")
    let GS = document.getElementById("GS")
    let mainIndex = document.getElementById("mainIndex")
    let sideIndex = document.getElementById("sideIndex")
   
    boo= !boo
    if (!boo){
        for(let i=0; i<navs.length; i++){
            navs[i].style.color = "#00ff2f";    
        }
        hT.style.color = "#00ff2f"
        GS.style.backgroundColor = "#00ff2f"
        mainIndex.style.boxShadow = "0 0 30px #00ff2f";
        sideIndex.style.boxShadow = "0 0 30px #00ff2f";
        mainIndex.style.border = "3px solid #00ff2f";
        sideIndex.style.border = "3px solid #00ff2f";
        tongue.style.color = "white";

        
    }else{
       for(let i=0; i<navs.length; i++){
            navs[i].style.color = "#FFD700";
             
        }
        hT.style.color = "#FFD700"
        GS.style.backgroundColor = "#FFD700"
        mainIndex.style.boxShadow = "0 0 30px #FFD700";
        sideIndex.style.boxShadow = "0 0 30px #FFD700";
        mainIndex.style.border = "3px solid #FFD700";
        sideIndex.style.border = "3px solid #FFD700";
        tongue.style.color = "white";
    }
}
function colorSwitchLogin(){
     let logins = document.getElementById("loginCard");
    let oLogin = document.getElementById("oLogin");  
        let hT = document.getElementById("headTitle")
    let tongue = document.getElementById("tongue")
let navs = document.getElementsByClassName("navs");
    boo= !boo
    if (!boo){
        for(let i=0; i<navs.length; i++){
            navs[i].style.color = "#00ff2f";
            
        }
        hT.style.color = "#00ff2f"
         tongue.style.color = "white";


        logins.style.border = "3px solid #00ff2f"
        logins.style.boxShadow = "0 0 120px #00ff2f"
        oLogin.style.border = "3px solid #00ff2f"
        
    }else{
       for(let i=0; i<navs.length; i++){
            navs[i].style.color = "#FFD700";
             
        }
         hT.style.color = "#FFD700"
        tongue.style.color = "white";
        
        logins.style.border = "3px solid #FFD700"
        logins.style.boxShadow = "0 0 120px #FFD700"
        oLogin.style.border = "3px solid #FFD700"
    }
}


function colorSwitchNOTES(){
     let textbox = document.getElementById("textbox");
    let view = document.getElementById("view");  
        let hT = document.getElementById("headTitle")
    let tongue = document.getElementById("tongue")
let navs = document.getElementsByClassName("navs");
    boo= !boo
    if (!boo){
        for(let i=0; i<navs.length; i++){
            navs[i].style.color = "#00ff2f";
            
        }
        hT.style.color = "#00ff2f"
         tongue.style.color = "white";


        textbox.style.border = "3px solid #00ff2f"
        textbox.style.boxShadow = "0 0 120px #00ff2f"
         view.style.border = "3px solid #00ff2f"
        view.style.boxShadow = "0 0 120px #00ff2f"
        
    }else{
       for(let i=0; i<navs.length; i++){
            navs[i].style.color = "#FFD700";
             
        }
         hT.style.color = "#FFD700"
        tongue.style.color = "white";
        
        textbox.style.border = "3px solid #FFD700"
        textbox.style.boxShadow = "0 0 120px #FFD700"
         view.style.border = "3px solid #FFD700"
        view.style.boxShadow = "0 0 120px #FFD700"
    }
}


function colorSwitchQA(){
     let card = document.getElementById("QANDACARD");
        let hT = document.getElementById("headTitle")
    let tongue = document.getElementById("tongue")
let navs = document.getElementsByClassName("navs");
    boo= !boo
    if (!boo){
        for(let i=0; i<navs.length; i++){
            navs[i].style.color = "#00ff2f";
            
        }
        hT.style.color = "#00ff2f"
         tongue.style.color = "white";


        card.style.border = "3px solid #00ff2f"
        card.style.boxShadow = "0 0 120px #00ff2f"
     
        
    }else{
       for(let i=0; i<navs.length; i++){
            navs[i].style.color = "#FFD700";
             
        }
         hT.style.color = "#FFD700"
        tongue.style.color = "white";
        
        card.style.border = "3px solid #FFD700"
        card.style.boxShadow = "0 0 120px #FFD700"
        
    }
}

function newKeyboard(){
    let textbox = document.getElementById("textbox");
    let bottomDiv = document.getElementById("buttons")
    textbox.innerHTML = ""
    let main = document.getElementsByTagName("main")[0];
    document.addEventListener("keydown", function(key){
            if (key.key =="Backspace") {
        textbox.innerHTML = textbox.innerHTML.slice(0, -1);
    }
    if (key.key == "Enter") {
        let enterBreak = document.createElement("br")
        textbox.appendChild(enterBreak);
    }
    if (key.key.length === 1) {
        textbox.innerHTML += event.key;
    }
    })

    let resetB = document.createElement("button");
    resetB.style.backgroundColor = "black";
    resetB.style.color = "white";
    resetB.style.width = "90px"
    resetB.innerHTML = ("reset");
    resetB.addEventListener("click", function(){
         textbox.innerHTML = " "
    })
    bottomDiv.appendChild(resetB);


}