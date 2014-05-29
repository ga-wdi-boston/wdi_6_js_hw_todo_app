// This represents an individual todo item, and handles constructing the DOM
// elements for displaying itself.

//These elements will need to include "complete" and "delete" buttons,
// with appropriate functions bound to their click events.

var TodoItem = function(title){
  this.title = title;
  this.createdAt = new Date();
  this.completedAt = completedAt || '';
};
