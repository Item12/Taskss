function View (model, view) {
	this.events = [];
	this.telBookForm = document.getElementById('telBookForm');
	this.telInputSurname = document.getElementById('telInputSurname');
	this.telInputName = document.getElementById('telInputName');
	this.telInputTel = document.getElementById('telInputTel');
	this.telList = document.getElementById('telList');

	telBookForm.addEventListener('submit', this.handleAddTel);
}

View.prototype.handleAddTel = function(event) {
	event.preventDefault();
	var todoValue1 = this.telInputSurname;
	var todoValue2 = this.telInputName;
	var todoValue3 = this.telInputTel;

	this.emit("addToList", todoValue1, todoValue2, todoValue3);
	this.telInputSurname.value = "";
	this.telInputName.value = "";
	this.telInputTel.value = "";
};

View.prototype.on = function(type, handler) {
	this.events[type] = this.events[type] || [];
	this.events[type].push(handler);
}

View.prototype.emit = function(type, args) {
	if(this.events[type]) {
		this.events[type].forEach( function (handler)) {
			handler(args);
		}
	}
}

View.prototype.renderList = function(type, handler) {
	var toDoLi = document.createElement("li");
	var
}


