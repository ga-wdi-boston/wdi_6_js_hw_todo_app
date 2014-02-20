var TodoApp = {

  add_to_list: function(list) {
    // get text of input field
    new_item_text = document.getElementById('new-item');
    // create new TodoItem with that text
    var todoItem = new TodoItem(new_item_text.value);
    // create new li element with text
    new_li_unfini = document.createElement('li')
    // insert li element into the page
    new_button_delete_unfini = document.createElement('input')

    new_li_unfini.innerHTML = todoItem.tex;
    new_item_text.value = "";

    if (new_li_unfini.innerHTML !== "" ){
      list.appendChild(new_li_unfini);
    };
    return true;
  }
};


