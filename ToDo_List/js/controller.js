define('controller', [], function() {
  function Controller(model, view) {
    var self = this;
    view.elements.list.on('click', '.item', updateItem);
    view.elements.addBtn.on('click', addItem);
    view.elements.list.on('click', '.del-item', delItem);
    view.elements.list.on('click', '.done', doneItem);
    view.elements.clearBtn.on('click', clearStorage);

    function updateItem() {
        $(this).addClass('--disable');
        $(this).siblings('.item-input-txt').removeClass('--disable').focus();
        $(this).siblings('.item-input-txt').focusout(function() {
          model.updateItem($(this).attr('data-index'), 'case', $(this).val());
          view.renderList(model.data);
        });
    };
    function addItem() {
      model.addItem(view.elements.input.val());
      view.renderList(model.data);
      view.elements.input.val('');
    };
    function delItem() {
      model.delItem($(this).attr('data-index'));
      view.renderList(model.data);
    }
    function doneItem() {
      $(this).addClass('--done').siblings().addClass('--done');
      model.updateItem($(this).attr('data-index'), 'done', 1);
    }
    function clearStorage() {
      localStorage.clear();
    }
  }
  return Controller;
});
