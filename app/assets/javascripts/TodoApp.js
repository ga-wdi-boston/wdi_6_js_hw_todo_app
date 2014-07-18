var TodoApp = {
  currentItems: [],
  finishedItems: [],

  initialize: function() {
    $('#to-do-form').submit($.proxy(this.createTask, this));

    $('.to-do-list').on('click', '.buttons .glyphicon', this.changeTask);

    $('.row').on('click', 'button', this.sortBy);
  },

  createTask: function(event) {
    event.preventDefault();

    if($('#to-do-field').val() === ""){
      return;
    }

    var newTaskText = $('#to-do-field').val();
    $('#to-do-field').val("");
    var newTask = new TodoItem(newTaskText);
    var newElement = newTask.createListElement();

    $('.to-do-list').append(newElement.hide());
    newElement.slideDown();
  },

  sortBy: function(event) {
    if(event !== undefined) { event.preventDefault(); }

    var holderDiv = $(this).parents('.list-holder');

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

  changeTask: function(event) {
    if(event !== undefined) { event.preventDefault(); }

    var listItemHolder = $(this).parents('li');
    var listItem = listItemHolder.find('div').first();

    var allMatching = [];

    TodoApp.currentItems.forEach(function(todo, index) {
      if(todo.item === listItem.text()){
        allMatching.push(index);
      }
    });

    var indexToBeChanged = allMatching[0];
    var itemToBeChanged = TodoApp.currentItems[indexToBeChanged];

    listItemHolder.slideUp();

    if($(this).hasClass("finish-button") === true) {
      itemToBeChanged.markAsDone();
      var myElement = itemToBeChanged.createListElement().hide();
      $('.finished-things-list').append(myElement);
      myElement.slideDown();
    } else if ($(this).hasClass("delete-button") === true) {
      itemToBeChanged.removeItem();
    } else {
      alert("whoaaa something has gone wrongg??");
    }
  },


};
