window.onload = function() {
  var submitNewBtn = document.getElementById("submitNew"),
      sortByDate   = document.getElementById("sort-date"),
      sortAlpha    = document.getElementById("sort-alpha");

  submitNewBtn.onclick = function(event) {
    event.preventDefault();
    var newTodo = TodoApp.onSubmitNew();
  };
  sortByDate.onclick = function(event) {
    event.preventDefault();
    TodoApp.sortBy({sort: "date"});
  };
  sortAlpha.onclick = function(event) {
    event.preventDefault();
    TodoApp.sortBy({sort: "alpha"});
  }
}

