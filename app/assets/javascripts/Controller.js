function Controller(model, view){
  this.model = model;
  this.view = view;
}

Controller.prototype = {
  showAll : function(){
    var todos = this.model.read();
  },

  showActive : function(){
    var todos = this.model.read({completed : false});
  },

  showCompleted : function(){
    var todos = this.model.read({completed : true});
  },

  create : function(title){
    if(title.trim() === '') {
      return;
    }
    var todo = this.model.create(title);
  },

  edit : function(id){
    var todo = this.model.read({id: id});
  },

  update : function(id, title){
    if(title.trim()){
      this.model.update(id, {title: title});
    } else {
      this.model.remove(id);
    }
  },

  delete : function(id){
    this.model.remove(id);
  },

  deleteCompleted : function(){
    var that = this;
    var items = this.model.read({completed: true});
    items.forEach(function(todo){
      that.delete(todo.id);
    });
  },

  toggleComplete : function(id, flag){
    this.model.update(id, {completed: flag});
  },

  toggleAll : function(flag){
    var that = this;
    var items = this.model.read({completed: !flag});
    items.forEach(function(todo){
      that.toggleComplete(todo.id, flag);
    });
  },

  updateCount : function(){
    var status = this.model.getCount();
  }
};
