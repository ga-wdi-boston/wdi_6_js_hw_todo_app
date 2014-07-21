function Controller(model, view){
  this.model = model;
  this.view = view;
  this.sortComparator = 'createdAt';

  var that = this;
  this.view.bind('newTodo', function(title){
    that.create(title);
  });
  this.view.bind('sortAlpha', function(){
    that.sortComparator = 'alpha';
    that._refresh();
  });
  this.view.bind('sortCreated', function(){
    that.sortComparator = 'createdAt';
    that._refresh();
  });
  this.view.bind('sortCompleted', function(){
    that.sortComparator = 'completedAt';
    that._refresh();
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

  _alphaComparator : function(a, b){
    return a.title < b.title ? -1 : (a.title > b.title ? 1 : 0);
  },

  _createdAtComparator : function(a, b){
    return a.createdAt < b.createdAt ? -1 : (a.createdAt > b.createdAt ? 1 : 0);
  },

  _completedAtComparator : function(a, b){
    return a.completedAt < b.completedAt ? -1 : (a.completedAt > b.completedAt ? 1 : 0);
  },

  _getComparator : function(){
      if(this.sortComparator == 'alpha') {
        return this._alphaComparator;
      } else if(this.sortComparator == 'completedAt') {
        return this._completedAtComparator;
      }
      return this._createdAtComparator;
  },

  _refresh : function(){
    this._updateCount();
    this.show();
  },

  _showActive : function(){
    var that = this;
    this.model.read({completed : false}, function(data){
      var args = {
        data: data,
        comparator: that._getComparator()
      };
      that.view.render('showActive', args);
    });
  },

  _showCompleted : function(){
    var that = this;
    this.model.read({completed : true}, function(data){
      var args = {
        data: data,
        comparator: that._getComparator()
      };
      that.view.render('showCompleted', args);
    });
  },

  _updateCount : function(){
    var that = this;
    this.model.getCount(function(status){
      that.view.render('updateElementCount', status);
    });
  }
};
