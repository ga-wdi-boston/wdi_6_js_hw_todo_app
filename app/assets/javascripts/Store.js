var Store = {
  storage : [],

  save : function(todo, id){
    if(id) {
      for(var i = 0; i < this.storage.length; i++) {
        if(this.storage[i].id === id) {
          for(var key in todo) {
            this.storage[i][key] = todo[key];
          }
          break;
        }
      }
    } else {
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

  find : function(id){
    for(var i = 0; i < this.storage.length; i++) {
        var todo = this.storage[i];
        if(todo.id === id) {
          return todo;
        }
    }
    return null;
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
