notebook = new Notebook

printAllNotes = function(){
  var listOfNotes = ""
  notebook.notes.forEach(function(note){
    listOfNotes += ("<li>" + note.getText() + "<div onclick=''  >...</div> </li>")
  })
  document.getElementById('noteDisplay').innerHTML = listOfNotes
}

emptypage = function(){
  document.getElementById('noteDisplay').innerHTML = ""
}

createNote = function () {
  note = new Note
  note.add(document.getElementById('noteText').value);
  notebook.add(note)
  printAllNotes()
}
