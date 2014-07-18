var TodoApp = {
  currentItems: [],
  finishedItems: [],

  initialize: function() {
    $('#to-do-form').submit($.proxy(this.createTask, this));
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

    event.preventDefault();

    var newTaskText = $('#to-do-field').val();
    $('#to-do-field').val("");
    var newTask = new TodoItem(newTaskText);

    $('.to-do-list').append(newTask.createListElement());
  },

  // displayTask: function(todoitem) {
  //   var newTask = $('<li>');
  //   newTask.text(todoitem.item);
  // },

  // addNewTask: function() {
  //   $('.to-do-list').append(this.displayTask(this.createTask()));
  // }

};
