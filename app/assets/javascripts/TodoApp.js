var TodoApp = {
  currentItems: [],
  finishedItems: [],

  initialize: function() {

    $('#to-do-form').submit($.proxy(this.createTask, this));

    $('.to-do-list').on('click', '.finish-button', this.finishTask);
    $('.to-do-list').on('click', '.delete-button', this.deleteTask);

    $('.row').on('click', 'button', this.sortBy);

  },

  sortBy: function(event) {
    if(event !== undefined) { event.preventDefault(); }

    var holderDiv = $(this).parents('.list-holder');
    console.log($(this));

    var list;
    var listElement;
    if (holderDiv.hasClass("to-do") === true) {
      list = TodoApp.currentItems;
      listElement = $('.to-do-list');
    } else if (holderDiv.hasClass("finished-things") === true) {
      list = TodoApp.finishedItems;
      listElement = $('.finished-things-list');
    }

    var sorted;

    if ($(this).hasClass("sort-by-name") === true ) {
      sorted = list.sort(function(a, b) {
        return a.item.toLowerCase() > b.item.toLowerCase();
      });
    } else if ($(this).hasClass("sort-by-date") === true ) {
      if (list === TodoApp.currentItems) {
        sorted = list.sort(function(a, b) {
          return a.createdAt < b.createdAt;
        });
      } else if (list === TodoApp.finishedItems) {
        sorted = list.sort(function(a, b) {
          return a.finishedAt < b.finishedAt;
        });
      }
    }

    listElement.empty();

    sorted.forEach(function(elem, index) {
      listElement.append(elem.createListElement());
    });
  },

  createTask: function(event) {
    event.preventDefault();

    if($('#to-do-field').val() === ""){
      return;
    }

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

  },

  // this is not dry at all. but do i care? nope. not right now I don't.

  deleteTask: function(event) {
    if(event !== undefined) { event.preventDefault(); }

    var listItem = $(this).parents('li');

    var allMatching = [];
    TodoApp.currentItems.forEach(function(todo, index) {
      if(todo.item === listItem.text()){
        allMatching.push(index);
      }
    });

    var thisTaskIndex = allMatching[0];
    var thisTask = TodoApp.currentItems[thisTaskIndex];

    thisTask.removeItem();
    listItem.fadeOut();
  }

};
