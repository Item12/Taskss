function Controller (model, view) {
	this.model = model;
	this.view = view;
	this.view.on("addToList", this.addToList);
}

Controller.prototype.addToList = function (todoValue1, todoValue2, todoValue3){
	var toAdd = {
		toAdd1: todoValue1,
		toAdd2: todoValue2,
		toAdd3: todoValue3 
	};
	this.model.addToList(toAdd);
	this.view.renderList(toAdd);
}