let data = {
    A: {
        name: "clap",
        sound : "audio/clap.mp3", 
    },
    b: {
        name: "Hithat",
        sound : "audio/hithat.mp3", 
    },
    c: {
        name: "kick",
        sound : "audio/kick.mp3", 
    },

    d: {
        name: "open",
        sound : "audio/open.mp3", 
    },
    e: {
        name: "close",
        sound : "audio/close.mp3", 
    },
    f: {
        name: "sword",
        sound : "audio/sword.mp3", 
    },
    g: {
        name: "church",
        sound : "audio/church.mp3", 
    },
    h: {
        name: "big",
        sound : "audio/big.mp3", 
    },
}   

let drumpkit = document.getElementById("drumkit")
// drumpkit.textContent = data[key].name
// console.log("nameeeeee");
// console.log(drumpkit);
function card(){
    for (let key in data) {
    //   console.log(key)
    let drumElement = document.createElement("div");
        
    drumElement.className="element"

    drumpkit.appendChild(drumElement)
    
    let h2 = document.createElement("h2")
    h2.textContent = key;
    // console.log(h2);
        
    drumElement.appendChild(h2)

    let span = document.createElement("span")
    span.textContent = data[key].name;

    drumElement.appendChild(span)
 
    drumElement.addEventListener("click",function(eve){
        let vaaan=eve.currentTarget.querySelector("h2").textContent;
        // vaaan.sound = data[key].sound;
        // console.log(vaaan);
        let audio = new Audio (data[key].sound)
        audio.play();
        // console.log(audio);
    })
    }   
}
card();
 