window.onload = function(){
  document.getElementById('add-item').onclick = function (event) {
    var item, el, list, error;
    item = document.getElementById('new-task-field');
    list = document.getElementById('unfinished');
    error = document.getElementById('error');
    event.preventDefault();
    try {
      el = new TodoItem(item.value);
      item.value = '';
      error.innerHTML = '';
      list.appendChild(el);
    } catch (e) {
      error.innerHTML = e;
    }
  };

};
