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
