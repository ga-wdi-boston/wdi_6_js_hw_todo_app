// // Holds app logic
// var TodoApp = {
// 	add_new: function(list) {
// 		var new_item = document.createElement('li'),
// 				new_link = document.createElement('a'),
// 				delete_btn = document.createElement('a');

// 				new_content = document.getElementById('list-item').value,
// 				todo = new TodoItem(new_content);
// 				this.task_array.push(todo);

// 		new_item.appendChild(new_link);
// 		new_item.appendChild(delete_btn);
// 		new_item.children[0].innerHTML = todo.body + '<span class="meta-data">' + todo.created_at + '</span>' ;
// 		new_item.children[1].innerHTML = "X" ;
// 		new_item.children[0].href = "#";
// 		new_item.children[1].href = "#";
// 		new_item.children[0].setAttribute("class", "complete");
// 		new_item.children[1].setAttribute("class", "btn delete");

// 		new_item.children[0].onclick = function(e) {
// 			var todo_list = document.getElementById('todo-list')
// 			e.preventDefault();
// 			if (this.parentNode.parentNode === todo_list) {
// 				TodoApp.complete_task(this.parentNode);
// 				return false;
// 			}
// 		}

// 		new_item.children[1].onclick = function(e) {
// 			e.preventDefault();
// 			TodoApp.delete_task(this.parentNode);
// 			return false;
// 		}

// 		if (new_content !== "") {
// 			list.appendChild(new_item);
// 			return document.getElementById('list-item').value = "";
// 		} else {
// 			return false;
// 		}
// 	},
// 	complete_task: function(task) {
// 		var completed_list = document.getElementById('completed-list');
// 		completed_list.appendChild(task);
// 		// this.removeChild(task);
// 		return false;
// 	},

// 	delete_task: function(task) {
// 		task.parentNode.removeChild(task);
// 		return false;
// 	}
// };

// TodoApp.task_array = [];

// window.onload = function() {
// 	var todo_list = document.getElementById('todo-list'),
// 			completed_list = document.getElementById('completed-list'),
// 			add_button = document.getElementById('button');

// 	add_button.onclick = function(e) {
// 		e.preventDefault();
// 		TodoApp.add_new(todo_list);
// 		return false;
// 	};
// };

