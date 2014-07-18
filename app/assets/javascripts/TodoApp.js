var TodoApp = {
  currentItems: [],
  finishedItems: [],

  initialize: function() {

    $('#to-do-form').submit($.proxy(this.createTask, this));

    $('.to-do-list').on('click', '.finish-button', this.finishTask);

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

  finishTask: function(event) {
    if(event !== undefined) { event.preventDefault(); }

    var listItem = $(this).parents('li');


    var allMatching = [];
    TodoApp.currentItems.forEach(function(todo, index) {
      if(todo.item === listItem.text()){
        allMatching.push(index);
      }
    });

    var indexToBeFinished = allMatching[0];
    var itemToBeFinished = TodoApp.currentItems[indexToBeFinished];

    itemToBeFinished.markAsDone();

    listItem.fadeOut();

    $('.finished-things-list').append(itemToBeFinished.createListElement());

  }

  // displayTask: function(todoitem) {
  //   var newTask = $('<li>');
  //   newTask.text(todoitem.item);
  // },

  // addNewTask: function() {
  //   $('.to-do-list').append(this.displayTask(this.createTask()));
  // }

};
