function Note(){
this.expandable = false
this.expanded = false
};

Note.prototype.add = function(something){
	this.content = something;
	this.summary = something.substring(0,20)
	if (something.length > 20) { this.expandable = true }
}

Note.prototype.expandContract = function(){
	this.expanded = !this.expanded
}

Note.prototype.getText = function(){
	return ((this.expanded) ? (this.content) : (this.summary))
}
