let newsone = document.querySelector("#newsone")
let newstwo = document.querySelector("#newsone")
let newsthree = document.querySelector("#newsone")
let newsfour = document.querySelector("#newsone")

function editannouncement(){
    newnews = window.prompt("write new announcement")
    if(newsone == ""){
        newsone.textContent = newnews
    }
    else if(newsone != "" && newstwo == ""){
        newstwo.textContent = newnews
    }
    else if(newsone != "" && newstwo != "" && newsthree == ""){
        newsthree.textContent = newnews
    }
    else if(newsone != "" && newstwo != "" && newsthree != "" && newsfour == ""){
        newsfour.textContent = newnews
    }
    else{
        newsone.textContent = newnews
    }

}
function resetnews(){
    newsone.textContent = ""
    newstwo.textContent = ""
    newsthree.textContent = ""
    newsfour.textContent = ""
}
setInterval(resetnews, 604800000)
