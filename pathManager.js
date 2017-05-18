//API Resource manager
//Paul Bauer 2017


//Directory object constructor
function Directory(name, parentDir){
	this.parentDir = parentDir;
	this.name = name + "/";
	
	//Return
	this.get = function(){
		if(parentDir != null){
			return(this.parentDir.get() + this.name);
		}else{
			return(this.name);
		}
	}
}

//Resource object constructor
function Resource(resource, dir){
	this.resource = resource;
	this.dir = dir;
	
	//Return full path
	this.get = function(){
		return(this.dir.get() + this.resource);
	}
}

//API Object constructor
function apiManager(root){
	
	//Root url
	this.root = new Directory(root);
}

