var TodoItem = function() {
  this.task = '';
  this.completed = false;
  this.deleted = false;
  this.createdAt = new Date();
  this.completedAt = null;
  this.html = function(){
    var htmlString = "<li>"+this.task+ " " +this.createdAt.toLocaleString();
    var self = this;

    if(this.completed === false) {
      htmlString = htmlString + '<button class="delete">Delete</button>';
      htmlString = htmlString + '<button class="completed">Completed</button>';
    } else {
      htmlString  = htmlString + 'Completed at '+ this.completedAt.toLocaleString();
    }

    htmlString = htmlString + "</li>";

    var htmlObject = $(htmlString);

    htmlObject.find('.delete').click(function(){
      self.deleted = true;
      TodoApp.redrawLists();
    });
    htmlObject.find('.completed').click(function(){
      self.completed = true;
      self.completedAt = new Date();
      TodoApp.redrawLists();
    });

    return htmlObject;
  };
};
