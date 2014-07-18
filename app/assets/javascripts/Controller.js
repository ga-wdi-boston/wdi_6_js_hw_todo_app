function Controller(model, view){
  this.model = model;
  this.view = view;
  this.sortComparator = function(a, b){
    return a.id < b.id ? -1 : (a.id > b.id ? 1 : 0);
  };

  var that = this;
  this.view.bind('newTodo', function(title){
    that.create(title);
  });
  this.view.bind('sortAlpha', function(){
    that.sortComparator = function(a, b){
      return a.title < b.title ? -1 : (a.title > b.title ? 1 : 0)
    };
  });
  this.view.bind('sortCreated', function(){
    that.sortComparator = function(a, b){
      return a.createdAt < b.createdAt ? -1 : (a.createdAt > b.reatedAt ? 1 : 0);
    };
  });
  this.view.bind('sortCompleted', function(){
    that.sortComparator = function(a, b){
      return a.completedAt < b.createdAt ? -1 : (a.completedAt > b.completedAt ? 1 : 0);
    };
  });

  this._refresh();
}

Controller.prototype = {
  show : function(){
    this._showActive();
    this._showCompleted();

    var that = this;
    this.view.bind('itemToggle', function(item){
      that.toggleComplete(item.id, item.completed);
    });

    this.view.bind('itemRemove', function(item){
      that.remove(item.id);
    });
  },

  create : function(title){
    if(title.trim() === '') {
      return;
    }
    var that = this;
    var todo = this.model.create(title, function(){
      that.view.render('clearNewTodo');
      that._refresh();
    });
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

  remove : function(id){
    this.model.remove(id);
    this._refresh();
  },

  removeCompleted : function(){
    var that = this;
    var items = this.model.read({completed: true});
    items.forEach(function(todo){
      that.remove(todo.id);
    });
  },

  toggleComplete : function(id, flag){
    var that = this;
    var data = {
      completed: flag,
      completedAt : new Date()
    };
    this.model.update(id, data, function(){
      that.view.render('itemComplete', {id: id, completed: flag});
      that._refresh();
    });
  },

  toggleAll : function(flag){
    var that = this;
    var items = this.model.read({completed: !flag});
    items.forEach(function(todo){
      that.toggleComplete(todo.id, flag);
    });
  },

  _refresh : function(){
    this._updateCount();
    this.show();
  },

  _showActive : function(){
    var that = this;
    this.model.read({completed : false}, function(data){
      that.view.render('showActive', {data: data, comparator: that.sortComparator});
    });
  },

  _showCompleted : function(){
    var that = this;
    this.model.read({completed : true}, function(data){
      that.view.render('showCompleted', {data: data, comparator: that.sortComparator});
    });
  },

  _updateCount : function(){
    var that = this;
    this.model.getCount(function(status){
      that.view.render('updateElementCount', status);
    });
  }
};
