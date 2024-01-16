let newsone = document.querySelector("#newsone")

function editannouncement(){
    let newnews = window.prompt("write new announcement")
    if(newsone == ""){
        newsone = newnews
    }
    else{
        newsone = newnews
    }
    localStorage.setItem("latestnews", newnews)

}
