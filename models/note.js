function Note(){
	this.content = ""
};

Note.prototype.add = function(something){
	this.content = something
	return true
}

