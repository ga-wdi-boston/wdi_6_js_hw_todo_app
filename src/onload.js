window.onload = function(){
  document.getElementById('add-item').onclick = function (e) {
    var item, el, list;
    item = document.getElementById('new-task-field');
    list = document.getElementById('unfinished');
    e.preventDefault();
    el = new TodoItem(item.value);
    item.value = '';
    list.appendChild(el);
  };
};
