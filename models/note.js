function Note(){
	
};

Note.prototype.add = function(something){
	this.content = something
	this.summary = something.substring(0,20) + '...'
	return true
}

