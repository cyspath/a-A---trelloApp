TrelloApp.Collections.Lists = Backbone.Collection.extend({
  url: '/api/lists',
  model: TrelloApp.Models.List,

  getOrFetch: function (id) {
    var collection = this;
    var model = collection.get(id);
    if (model) {
      model.fetch();
    } else {
      model = new TrelloApp.Models.List({ id: id });
      model.fetch({
        success: function () { collection.add(model); },
        error: function () { collection.remove(model); }
      });
    }
    return model;
  }

});
