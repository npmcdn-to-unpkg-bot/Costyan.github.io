require(
  [
    'model',
    'view',
    'controller'
  ],
  function(Model, View, Controller) {
    var startData = JSON.parse(localStorage.getItem('ToDoList')) || [{case: 'First case', done: 0}, {case: 'Second case', done: 0},  {case: 'Third case', done: 0}];
    var model = new Model(startData);
    if(localStorage.getItem('ToDoList') == undefined) localStorage.setItem('ToDoList', JSON.stringify(startData));
    var view = new View(model);
    var controller = new Controller(model, view);
  }
);
