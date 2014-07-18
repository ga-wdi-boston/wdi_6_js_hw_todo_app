var TodoApp = {
  currentItems: [],
  finishedItems: [],

  initialize: function() {

    $('#clara-has-a-form').submit($.proxy(this.createTask, this));

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

    var newListItem = $('<li>');
    newListItem.text(newTask.item);
    newListItem.append(this.buttonMaker());

    $('.to-do-list').append(newListItem);
  },

  buttonMaker: function() {
    var buttonContainer = $('<span>');
    buttonContainer.addClass("buttons");

    var deleteButton = $('<span>');
    deleteButton.addClass("glyphicon glyphicon-trash delete-button");
    var finishButton = $('<span>');
    finishButton.addClass("glyphicon glyphicon-ok finish-button");

    buttonContainer.append(finishButton);
    buttonContainer.append(deleteButton);

    return buttonContainer;
  },

  // displayTask: function(todoitem) {
  //   var newTask = $('<li>');
  //   newTask.text(todoitem.item);
  // },

  // addNewTask: function() {
  //   $('.to-do-list').append(this.displayTask(this.createTask()));
  // }

};
