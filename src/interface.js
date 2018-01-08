textbox = 'noteText'
display = "display"

postnote = function(){
input = document.getElementbyId(textbox).innerHTML

document.getElementbyId(display).innerHTML += input
}