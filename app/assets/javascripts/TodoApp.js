var TodoApp = {
  storage : Store,
  model : new Model(this.storage),

  template : new Template(),
  view : new View(this.template),
};
