var TodoItem = function(content, options){
  options = options || {};
  this.content = content;
  this.createdAt = options.createdAt || this.dateFromString(new Date());
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
    footer.append($('<div>').addClass('col-md-9 item-date text-left').text(this.createdAt));
    var btnDiv = $('<div>').addClass('col-md-3');
    footer.append(btnDiv);
    var btnGroup = $('<div></div>');
    btnGroup.addClass('btn-group');
    btnDiv.append(btnGroup);
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
  dateFromString: function(date) {
    return 'Created on: ' +(date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes();
  }

};

     // <div class="panel-footer">
     //      <div class="col-md-9 text-left">
     //        created at
     //      </div>
     //      <div class="col-md-3">
     //        <div class="btn-group">
     //          <button type="button" class="btn btn-default commit"><%= fa_icon "check-square-o" %></button>
     //          <button type="button" class="btn btn-default delete"><%= fa_icon "times" %></button>
     //        </div>
     //      </div>
     //    </div>
