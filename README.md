# pathManager
JavaScript snippet for creating and managing libraries of URLs and file paths


apiManager (apiManger(root))

Defines a new library of resources at a particular root url
example:
myApi = new apiManager("http://Myserver.com/api");

Directory (Directory(name, parentDir))

Defines a directory in your apiManager.
example:
myApi.myDir = new Directory("myDirectory", myApi.root);

Resource (Resource(resource, dir)

Defines a Resource in your apiManager
example:
myApi.myResource = new Resource(doStuff.php, myApi.myDir);

.get()

Returns full path of Directory or Resource
example:
myApi.myResource.get();//Returns "http://Myserver.com/api/myDirectory/doStuff.php"
