var TodoApp = {

  add_to_list: function(list, id) {
    // get text of input field
    new_item_text = document.getElementById('new-item');
    // create new TodoItem with that text
    var todoItem = new TodoItem(new_item_text.value);
    // create new li element with text
    new_li_unfini = document.createElement('li')
    new_li_unfini.id = id;
    // insert li element into the page
    new_button_delete = document.createElement('button');
    new_button_delete.id = id + 1;
    new_button_complete = document.createElement('button');
    new_button_complete.id = id + 2;

    new_li_unfini.innerHTML = todoItem.tex;
    new_item_text.value = "";

    if (new_li_unfini.innerHTML !== "" ){
      list.appendChild(new_li_unfini);
      new_li_unfini.appendChild(new_button_delete);
      new_li_unfini.appendChild(new_button_complete);

    };
    return true;
  },

  delete_from_list: function(id){
    delete_button = document.getElementById("unfini-list")
  }
};


