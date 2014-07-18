var TodoApp = {
  currentItems: [],
  finishedItems: [],

  initialize: function() {

    $('#clara-has-a-form').submit(this.createTask);

  },

  sortByName: function(list) {
    return list.sort(function(a, b) {
      return a.item.toLowerCase() - b.item.toLowerCase();
    });
  },

  // this sorts by ascending (i think)
  sortByDate: function(list) {
    return list.sort(function(a, b) {
      return a.createdAt - b.createdAt;
    });
  },

  createTask: function(event) {
    if($('#to-do-field').val() === ""){
      event.preventDefault();
      return;
    }

    var newTaskText = $('#to-do-field').val();
    $('#to-do-field').val("");
    var newTask = new TodoItem(newTaskText);
    var newListItem = $('<li>');
    newListItem.text(newTask.item);
    $('.to-do-list').append(newListItem);

    event.preventDefault();
  },

  // displayTask: function(todoitem) {
  //   var newTask = $('<li>');
  //   newTask.text(todoitem.item);
  // },

  // addNewTask: function() {
  //   $('.to-do-list').append(this.displayTask(this.createTask()));
  // }

};
