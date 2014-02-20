var TodoApp = {
  unfinishedTasks : [],
  finishedTasks   : [],
  addTodo         : function () {
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
  },
  sort            : function (list, field, listId) {
    var length, i, el, domList;
    i = 0;
    domList = document.getElementById(listId);
    list.sort(function (a,b) {
      if (a[field] > b[field])
        return 1;
      if (a[field] < b[field])
        return -1;
      // a must be equal to b
      return 0;
    });
    // update DOM
    length = list.length;
    for (; i < length;) {
      el = list[i].element;
      domList.appendChild(el);
      i = i + 1;
    }
  }
};
