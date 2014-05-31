$(document).ready(function() {
  $('#todo-field').on('submit', TodoApp.addNewItem);
  $('.todo-list').on('click', ('.btn-danger'), TodoApp.deleteItem);
});

// DOM manipulation documentation!

// DOM .remove() to remove element, or .empty() to remove contents on <li>

// findKeyword: function(keyword){
//   return this.todos.filter(function(todo){ // todos is an array containing the list of todos
//     return todo.indexOf(this.keyword) > -1; // returns true or false
//   });
// }

// deleteing and item from array
// people.filter(function(person) {return person.name === "alex";})[0]
