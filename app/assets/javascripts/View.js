function View(template){
  this.template = template;

  this.todoList = $('#todo-list');
  this.todoCounter = $('#todo-counter');
  this.todoActiveList = $('#todo-active-list');
  this.todoActiveCounter = $('#todo-active-counter');
  this.todoCompletedList = $('#todo-completed-list');
  this.todoCompletedCounter = $('#todo-completed-counter');
  this.sortAlpha = $('#sort-alpha');
  this.sortCreated = $('#sort-created');
  this.sortCompleted = $('#sort-completed');
  this.clearCompleted = $('#clear-completed');
  this.main = $('#main');
  this.toggleAll = $('#toggle-all');
  this.newTodo = $('#new-todo');
  this.todoSubmit = $('#todo-submit');
}

View.prototype = {
  bind : function(event, handler){
    var that = this;
    if(event === 'newTodo') {
      this.todoSubmit.on('click', function(event){
        handler(that.newTodo.val());
        event.preventDefault();
      });

    } else if(event === 'itemToggle') {
      $('#todo-active-list').on('click', '.toggle', function(event){
        handler({
          id: that._itemId(this),
          completed: this.checked
        });
      });

    } else if(event === 'itemRemove'){
      $('#todo-active-list, #todo-completed-list').on('click', '.destroy', function(event){
        handler({id: that._itemId(this)});
        event.preventDefault();
      });

    } else if(event === 'removeCompleted') {
      this.clearCompleted.on('click', function(){
        alert('clearCompleted called.');
      });

    } else if(event === 'toggleAll'){
      this.toggleAll.on('click', function(){
        alert('toggleAll called.');
      });

    } else if(event === 'sortAlpha') {
      this.sortAlpha.click(function(event){
        handler();
        event.preventDefault();
      });

    } else if(event === 'sortCreated') {
      this.sortCreated.click(function(event){
        handler();
        event.preventDefault();
      });

    } else if(event === 'sortCompleted') {
      this.sortCompleted.click(function(event){
        handler();
        event.preventDefault();
      });
    }
  },

  render : function(command, args){
    var that = this;
    var commands = {
      showActive : function(){
        that.todoActiveList.html(that.template.show(args.data, args.comparator));
      },

      showCompleted : function(){
        that.todoCompletedList.html(that.template.show(args.data, args.comparator));
      },

      updateElementCount : function(){
        that.todoCounter.text(args.total);
        that.todoActiveCounter.text(args.active);
        that.todoCompletedCounter.text(args.completed);
      },

      toggleAll : function(){
        that.toggleAll.attr(':checked', args.checked);
      },

      clearNewTodo : function(){
        that.newTodo.val('');
      },

      editItem : function(){
        that._editItem(args.id, args.title);
      },

      updateItem : function(){
        that._updateItem(args.id, args.title);
      },

      removeItem : function(){
        that._removeItem(args);
      },

      itemComplete : function(){
        that._itemComplete(args.id, args.completed);
      }
    };
    commands[command]();
  },

  _itemId : function(e){
    var li = $(e).closest('li');
    return li.data('id');
  },

  _itemComplete : function(id, flag){
    var e = $('[data-id="' + id + '"]');
    if(!e) {
      return;
    }

    if(flag) {
      e.addClass('completed');
    } else {
      e.removeClass('completed');
    }
  },

  _editItem : function(id, title){
    var input = document.createElement('input');
    input.className = 'edit';

    var e = $('data-id="' + id + '"');
    e.addClass('editing');
    e.append(input);

    input.focus();
    input.value = title;
  },

  _updateItem : function(id, title){
    var elem = $('data-id="' + id + '"');
    if(!elem) {
      return;
    }

    $('input .edit').remove();
    elem.removeClass('editing');
    elem.children('label').each(function(i, e){
      e.text(title);
    });
  },

  _removeItem : function(id){
    $('data-id="' + id + '"').remove();
  }
};
