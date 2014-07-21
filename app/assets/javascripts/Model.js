function Model(storage){
  this.storage = storage;
}

Model.prototype = {
  create : function(title, callback){
    this.storage.save({title: title}, callback);
  },

  read : function(query, callback){
    callback = callback || function(){};

    if(query) {
      return this.storage.find(query, callback);
    }
    return this.storage.findAll(callback);
  },

  update : function(id, data, callback){
    this.storage.save(data, callback, id);
  },

  remove : function(id){
    this.storage.remove(id);
  },

  removeAll : function(){
    this.storage.drop();
  },

  getCount : function(callback){
    var status = {
      active : 0,
      completed : 0,
      total : 0
    };
    this.storage.findAll(function(data){
      data.forEach(function(todo){
        if(todo.completed) {
          status.completed++;
        } else {
          status.active++;
        }
        status.total++;
      });
      callback(status);
    });
  }
};
