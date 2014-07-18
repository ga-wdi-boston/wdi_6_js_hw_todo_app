function Model(storage){
  this.storage = storage;
}

Model.prototype = {
  create : function(title){
    this.storage.save({title: title});
    return newItem;
  },

  read : function(query){
    if(query) {
      return this.storage.find(query);
    }
    return this.storage.findAll();
  },

  update : function(id, data){
    this.storage.save(data, id);
  },

  remove : function(id){
    this.storage.remove(id);
  },

  removeAll : function(){
    this.storage.drop();
  },

  getCount : function(){
    var status = {
      active : 0,
      completed : 0,
      total : 0
    };
    var todos = this.storage.findAll();
    todos.forEach(function(todo){
      if(todo.completed) {
        status.completed++;
      } else {
        status.active++;
      }
      status.total++;
    });
    return status;
  }
};
