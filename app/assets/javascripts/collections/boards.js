TrelloApp.Collections.Boards = Backbone.Collection.extend({
  url: '/api/boards',
  model: TrelloApp.Models.Board,

  getOrFetch: function (id) {
    var collection = this;
    var model = collection.get(id);
    if (model) {
      model.fetch();
    } else {
      model = new TrelloApp.Models.Board({ id: id });
      model.fetch({
        success: function () { collection.add(model); },
        error: function () { collection.remove(model); }
      });
    }
    return model;
  }

});
