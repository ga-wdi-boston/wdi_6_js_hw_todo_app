function Store(){
  this.storage = [];
}

Store.prototype = {
  save : function(data, callback, id){
    callback = callback || function(){};

    if(id) {
      // For updates
      for(var i = 0; i < this.storage.length; i++) {
        if(this.storage[i].id === id) {
          for(var prop in data) {
            this.storage[i][prop] = data[prop];
          }
          break;
        }
      }
      callback.call(this, this.storage);

    } else {
      // For new items
      var todo = new TodoItem(data);
      todo.createdAt = new Date();
      todo.id = todo.createdAt.getTime();
      this.storage.push(todo);
      callback.call(this, [todo]);
    }
  },

  remove : function(id){
    for(var i = 0; i < this.storage.length; i++) {
      if(this.storage[i].id === id) {
        this.storage.splice(i, 1);
        return true;
      }
    }
    return false;
  },

  find : function(query, callback){
    callback = callback || function(){};

    var data = this.storage.filter(function(todo){
      for(var prop in query){
        if(query[prop] !== todo[prop]) {
          return false;
        }
        return true;
      }
    });
    callback.call(this, data);
  },

  findAll : function(callback){
    callback = callback || function(){};

    var data = [];
    this.storage.forEach(function(e){
      data.push(e);
    });
    callback.call(this, data);
  },

  drop : function(){
    this.storage = [];
  }
};
