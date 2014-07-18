var TodoItem = function(content, options){
  options = options || {};
  this.content = content;
  this.createdAt = options.createdAt || new Date();
  this.id = options.id || Date.now();
  this.isSaved = options.isSaved || false;
};

TodoItem.prototype = {
  generateElement: function() {
    var newDiv = $('<div></div>');
    newDiv.addClass('panel panel-default to-do-item');
    var innerDiv = $('<div></div>');
    innerDiv.addClass('panel-body');
    innerDiv.text(this.content);
    newDiv.append(innerDiv);
    var footer = $('<div></div>');
    footer.addClass('panel-footer text-right');
    newDiv.append(footer);
    var btnGroup = $('<div></div>');
    btnGroup.addClass('btn-group');
    footer.append(btnGroup);
    var button = $('<button></button>');
    button.addClass('btn btn-default commit');
    btnGroup.append(button);
    var delButton = $('<button></button>');
    delButton.addClass('btn btn-default delete');
    btnGroup.append(delButton);
    checkIcon = $('<i></i>');
    checkIcon.addClass('fa fa-check-square-o');
    button.append(checkIcon);
    delIcon = $('<i></i>');
    delIcon.addClass('fa fa-times');
    delButton.append(delIcon);
    newDiv.data('id', this.id);
    return newDiv;
  },

};


      // <div class="panel panel-default">
      //   <div class="panel-body">
      //     Panel content
      //   </div>
      //    <div class="panel-footer text-right">
      //     <div class="btn-group">
      //       <button type="button" class="btn btn-default commit"><%= fa_icon "check-square-o" %></button>
      //       <button type="button" class="btn btn-default delete"><%= fa_icon "times" %></button>
      //     </div>
      //   </div>
