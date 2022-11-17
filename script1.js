let send = document.querySelector("#sendBtn")
let comments = document.querySelector("p")

send.addEventListener("click",onClick)

function onClick(){
console.log("hi");
let inputText = document.querySelector("#commentBtn")
comments.innerHTML +="<br>"+inputText.value+"<br>"
}