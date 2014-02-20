window.onload = function() {
  var submitNewBtn = document.getElementById("submitNew");
  submitNewBtn.onclick = function(event) {
    event.preventDefault();
    var newTodo = TodoApp.onSubmitNew();
  };
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
