function Template(){
  this.listTemplate =
  '<li data-id="%id%" class="%completed%">' +
    '<div class="view">' +
      '<div>' +
        '<div>%title%</div>' +
        '<div>Created: %createdAt%</div>' +
        '<div>Completed: %completedAt%</div>' +
      '</div>' +
      '<input type="checkbox" class="toggle" %checked%>Complete'  +
      '<button class="destroy">Delete</button>' +
    '</div>' +
  '</li>';

  this.baseTemplate =
  '<div class="container-fluid">' +
    '<div class="row">' +
      '<input type="text" id="new-todo" placeholder="What would you like to do?" autofocus>' +
      '<button id="todo-submit">Create</button>' +
    '</div>' +
    '<div class="row">' +
      '<span>Total To-dos: </span>' +
      '<span id="todo-counter"></span> | ' +
      '<span><a href="#" id="sort-alpha">Sort by Title</a> | ' +
      '<a href="#" id="sort-created">Sort by Creation Date</a> | ' +
      '<a href="#" id="sort-completed">Sort by Completed Date</a></span>' +
    '</div>' +
    '<div class="row">' +
      '<div class="col-xs-6">' +
        '<div>' +
          '<span>Active: </span>' +
          '<span id="todo-active-counter"></span>' +
        '</div>' +
        '<ul id="todo-active-list"></ul>' +
      '</div>' +
      '<div class="col-xs-6">' +
        '<div>' +
          '<span>Completed: </span>' +
          '<span id="todo-completed-counter"></span>' +
        '</div>' +
        '<ul id="todo-completed-list"></ul>' +
      '</div>' +
    '</div>' +
  '</div>';
}

Template.prototype = {
  show : function(data, comparator){
    data = data || [];
    comparator = comparator || function(a, b){
      return  a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
    };
    var view = '';

    data.sort(comparator);
    for(var i = 0; i < data.length; i++) {
      var template = this.listTemplate;
      var completed = '';
      var checked = '';
      var completedAt = '';

      if(data[i].completed) {
        completed = 'completed';
        checked = 'checked';
        completedAt = data[i].completedAt.toLocaleString();
      }
      template = template.replace('%id%', data[i].id);
      template = template.replace('%completed%', completed);
      template = template.replace('%title%', data[i].title);
      template = template.replace('%createdAt%', data[i].createdAt.toLocaleString());
      template = template.replace('%completedAt%', completedAt);
      template = template.replace('%checked%', checked);
      view = view + template;
    }
    return view;
  },
};
