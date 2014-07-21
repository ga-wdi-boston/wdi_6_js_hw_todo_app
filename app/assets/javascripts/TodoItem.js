var TodoItem = function(args){
  args = args || { title : '' };
  this.title = args.title;
  this.completed = args.completed || false;
};
