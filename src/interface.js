notebook = new Notebook
printAllNotes = function(){
  var listOfNotes = ""
  notebook.notes.forEach(function(note){
    listOfNotes += (`<div class="well" id=${notebook.notes.indexOf(note)} onClick="changeView(this.id)">` + note.getText() + `</div>`)
  })
  document.getElementById('noteDisplay').innerHTML = listOfNotes
}

createNote = function () {
  note = new Note
  note.add(document.getElementById('noteText').value);
  notebook.add(note)
  printAllNotes()
}

changeView = function(id){
  notebook.notes[id].expandContract()
  document.getElementById(id).innerHTML = notebook.notes[id].getText()
}
