TrelloApp.Collections.Cards = Backbone.Collection.extend({
  url: '/api/cards',
  model: TrelloApp.Models.Card,

  getOrFetch: function (id) {
    var collection = this;
    var model = collection.get(id);
    if (model) {
      model.fetch();
    } else {
      model = new TrelloApp.Models.Card({ id: id });
      model.fetch({
        success: function () { collection.add(model); },
        error: function () { collection.remove(model); }
      });
    }
    return model;
  }

});
