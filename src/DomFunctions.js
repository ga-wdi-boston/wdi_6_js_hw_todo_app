window.onload = function() {
  var submitNewBtn = document.getElementById("submitNew");
  submitNewBtn.onclick = function(event) {
    event.preventDefault();
    var newTodo = TodoApp.onSubmitNew();
  };
}
