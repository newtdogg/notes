function Notebook(){
	this.notes = []
}

Notebook.prototype.add = function(note){
	this.notes.push(note)
}