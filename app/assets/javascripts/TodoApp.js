var TodoApp = {
  unsavedItems: [],
  savedItems: [],

  addItem: function(event) {
    event.preventDefault();
    var content = $('#item-input').val();
    if(content !== '') {
      $('#item-input').val('');
      var theItem = new TodoItem(content);
      TodoApp.unsavedItems.push(theItem);
      $('#unsaved-list').append(theItem.generateElement());
    }
  },
  deleteItem: function(event) {
    event.preventDefault();
    var element = $(this).parents('.to-do-item');
    TodoApp.unsavedItems = TodoApp.filterItems(element.data('id'), TodoApp.unsavedItems);
    TodoApp.savedItems = TodoApp.filterItems(element.data('id'), TodoApp.savedItems);
    element.remove();
  },
  completeItem: function(event) {
    event.preventDefault();
    var element = $(this).parents('.to-do-item');
    TodoApp.unsavedItems = TodoApp.filterItems(element.data('id'), TodoApp.unsavedItems);
    TodoApp.savedItems.push(TodoApp.tempItem);
    element.remove();
    TodoApp.commitElement(element);
    $('#saved-list').append(element);
  },

  filterItems: function(id, array) {
    return array.filter(function(item) {
      if(id === item.id) {
        TodoApp.tempItem = item;
        return false;
      }
      return true;
    });
  },
  commitElement: function(element){
    element.find('.btn-group').remove();
    var delButton = $('<button></button>');
    delButton.addClass('btn btn-default delete');
    delIcon = $('<i></i>').addClass('fa fa-times');
    delButton.append(delIcon);
    element.children('.panel-footer').append(delButton);
  },
  orderUnsavedByDesc: function(event){
    event.preventDefault();
    TodoApp.sortItems(TodoApp.unsavedItems, true);
    TodoApp.regenPage($('#unsaved-list'), TodoApp.unsavedItems);
  },
  orderUnsavedByDate: function(event) {
    event.preventDefault();
    TodoApp.sortItems(TodoApp.unsavedItems, false);
    TodoApp.regenPage($('#unsaved-list'), TodoApp.unsavedItems);
  },
  orderSavedByDesc: function(event) {
    event.preventDefault();
    TodoApp.sortItems(TodoApp.savedItems, true);
    TodoApp.regenPage($('#saved-list'), TodoApp.unsavedItems);
  },
  orderSavedByDate: function(event) {
    event.preventDefault();
    TodoApp.sortItems(TodoApp.savedItems, false);
    TodoApp.regenPage($('#saved-list'), TodoApp.unsavedItems);
  },
  sortItems: function(itemList, isDescription) {
    itemList.sort(function(a,b) {
      if(isDescription) {
        if(a.content > b.content) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if(a.id > b.id) {
          return 1;
        } else {
          return -1;
        }

      }
    });
  },
  regenPage: function(list, array) {
    list.find('.to-do-item').remove();
    array.forEach(function(elem) {
      var theItem = new TodoItem(elem.content);
      list.append(theItem.generateElement());
    });

  }
};
