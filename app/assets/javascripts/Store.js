var Store = {
  storage : [],

  save : function(data, id){
    if(id) {
      for(var i = 0; i < this.storage.length; i++) {
        if(this.storage[i].id === id) {
          for(var prop in data) {
            this.storage[i][prop] = data[prop];
          }
          break;
        }
      }
    } else {
      var todo = new TodoItem(data);
      todo.id = new Date().getTime();
      this.storage.push(todo);
    }
  },

  remove : function(id){
    for(var i = 0; i < this.storage.length; i++) {
      if(this.storage[i].id === id) {
        this.storage.splice(i, 1);
        break;
      }
    }
  },

  find : function(query){
    return this.storage.filter(function(todo){
      for(var prop in query){
        if(query[prop] !== todo[prop]) {
          return false;
        }
        return true;
      }
    });
  },

  findAll : function(){
    var result = [];
    this.storage.forEach(function(e){
      result.push(e);
    });
    return result;
  },

  drop : function(){
    this.storage = [];
  }
};
