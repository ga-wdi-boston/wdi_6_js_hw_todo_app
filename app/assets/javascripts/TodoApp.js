var TodoApp = {
  init : function(){
    this.template = new Template();
    $('h1').after(this.template.baseTemplate);

    this.storage = new Store();
    this.model = new Model(this.storage);
    this.view = new View(this.template);
    this.controller = new Controller(this.model, this.view);

    this.view.bind();
  }
};
