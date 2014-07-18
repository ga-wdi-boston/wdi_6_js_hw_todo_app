function Template(){
  this.defaultTemplate =
  '<li data-id="%id%" class="%completed%">' +
    '<div class="view">' +
      '<input type="checkbox" class="toggle" %checked%>'  +
      '<label>%title%</label>' +
      '<button class="destroy"></button>' +
    '</div>' +
  '</li>';
}

Template.prototype.show = function(data){
  var view = '';
  for(var i = 0; i < data.length; i++) {
    var template = this.defaultTemplate;
    var completed = '';
    var checked = '';

    if(data[i].completed) {
      completed = 'completed';
      checked = 'checked';
    }
    template = template.replace('%id%', data[i].id);
    template = template.replace('%completed%', completed);
    template = template.replace('%title%', data[i].title);
    template = template.replace('%checked%', checked);
    view = view + template;
  }
  return view;
};
