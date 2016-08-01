define('view', [], function() {
  function View(model) {
    var self = this;
    function init() {
      var wrapper = tmpl($('#tmpl-main').html());
      $('body').append(wrapper);
      self.elements = {
        input: $('.add-item'),
        addBtn: $('.add-btn'),
        list: $('.item-list'),
        clearBtn: $('#clear-storage')
      };
      self.renderList(model.data);
    }
    self.renderList = function(data) {
      var addlist = tmpl($('#item-list').html(), {data: data});
      self.elements.list.html(addlist);
    }
    init();
  }
  return View;
});
