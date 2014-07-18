var TodoApp = {
  initialize: function() {
    $('form').submit(this.addTask);
  },
  addTask: function(event) {
    var newTask = $('#new-task-text').val();

    if(newTask !== '') {
      var tableRow = $('<tr>').text(newTask);
      $('table').append(tableRow);
      $('#new-task-text').val('');
    }

    event.preventDefault();
  }
};
