var TodoApp = {
  storage : Store,

  create : function(title){
    var newItem = new TodoItem(title);
    this.storage.save(newItem);
  },

  read : function(id){
    if(id) {
      return this.storage.find(id);
    }
    return this.storage.findAll();
  },

  update : function(data, id){
    this.storage.save(data, id);
  },

  remove : function(id){
    this.storage.remove(id);
  },

  removeAll : function(){

  }
};
