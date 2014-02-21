var TodoItem = function(){
  this.li_el = document.createElement('li'); // Create a new generic list item
};

TodoItem.prototype.getItemElement = function(){
  return this.li_el;
};

// Set the text for this todo item.
TodoItem.prototype.addText = function(txt){
  this.li_el.innerHTML = txt;
};

TodoItem.prototype.clickHandler = function(callback){
  this.li_el.onclick = callback;
};

// Delete button handler
TodoItem.prototype.addDeleteButton = function() {
  this.delete_button = document.createElement('button');
  this.delete_button.innerHTML = "Delete";

  this.delete_button.onclick = function(event) {

    // TodoApp.delete_from_list(this.li_el)
    // this.li_el.parentNode.removeChild(li_el);
    var  containingList = this.parentNode.parentNode,
    containingListItem = this.parentNode;
    containingList.removeChild(containingListItem);

    //event.target.parentElement.parentElement.removeChild(this.parentElement);
    event.preventDefault();
    event.stopPropagation();
  };

  this.li_el.appendChild(this.delete_button)
};

// Complete button hanCdler
TodoItem.prototype.addCompleteButton = function() {
  this.complete_button = document.createElement('button');
  this.complete_button.innerHTML = "Complete";

  this.complete_button.onclick = function(event) {

    var  containingList = this.parentNode.parentNode,
    containingListItem = this.parentNode;
    containingList.removeChild(containingListItem);

    //event.target.parentElement.parentElement.removeChild(this.parentElement);
    event.preventDefault();
    event.stopPropagation();
  };

  this.li_el.appendChild(this.complete_button)
};
