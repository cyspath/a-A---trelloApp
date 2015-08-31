TrelloApp.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/index'],

  initialize: function () {
    this.listenTo(this.collection, "add remove", this.render)
    this.listenTo(this.collection, "sync", this.render)
    
  },

  events: { "click button.delete": "deleteBoard" },

  deleteBoard: function (e) {
    var $button = $(e.currentTarget);
    var $board = this.collection.get($button.attr("data-id"));
    $board.destroy();
  },

  render: function () {

    var content = this.template({ boards: this.collection });
    this.$el.html(content);
    return this;
  }
})
