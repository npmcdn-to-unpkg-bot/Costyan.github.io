define('model', [], function() {
  function Model(data) {
    var self = this;
    self.data = data;
    self.addItem = function(item) {
      if (item == undefined || item.length === 0) return
      var tmpCase = {
        case: item,
        done: 0
      };
      self.data.push(tmpCase);
      localStorage.setItem('ToDoList', JSON.stringify(self.data));
      return self.data;
    };
    self.delItem = function(index) {
      self.data.splice(index, 1);
      localStorage.setItem('ToDoList', JSON.stringify(self.data));
      return self.data;
    };
    self.updateItem = function(index, propertyName, value) {
      switch (propertyName) {
        case 'case':
          self.data[index].case = value;
          break;
        case 'done':
          self.data[index].done = value;
          break;
      }
      localStorage.setItem('ToDoList', JSON.stringify(self.data));
      return self.data;
    }
  }
  return Model;
});
