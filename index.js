window.alert("Raif Laskar created this")
let count = 0

document.getElementById("increase").onclick = function(){
    count += 1
    document.getElementById("Label").innerHTML = count
}
document.getElementById("reset").onclick = function(){
    count = 0
    document.getElementById("Label").innerHTML = count
}
document.getElementById("decrease").onclick = function(){
    count -= 1
    document.getElementById("Label").innerHTML = count
}