TrelloApp.Routers.BoardRouter = Backbone.Router.extend({

  initialize: function (options) {
    this.$el = options.$rootEl;
    this.boards = options.boards;
    this.lists = options.lists;
    this.cards = options.cards;
  },

  routes: {
    //boards
    "": "index",
    "boards/new": "new",
    "boards/:id/edit": "edit",
    "boards/:id": "show",
    //lists

  },

  swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$el.html(view.render().$el)
  },

  index: function () {
    this.boards.fetch();
    var indexView = new TrelloApp.Views.BoardsIndex({ collection: this.boards });
    this.swapView(indexView);
  },

  new: function () {
    var newBoard = new TrelloApp.Models.Board();
    var formView = new TrelloApp.Views.BoardForm({
      model: newBoard, collection: this.boards
    });
    this.swapView(formView);
  },

  edit: function (id) {
    var board = this.boards.getOrFetch(id);
    var formView = new TrelloApp.Views.BoardForm({
      model: board, collection: this.boards
    });
    this.swapView(formView);
  },

  show: function (id) {
    var board = this.boards.getOrFetch(id)

    this.lists.fetch();
    this.cards.fetch();

    var showView = new TrelloApp.Views.BoardShow({
      model: board,
      lists: this.lists,
      cards: this.cards,
    });
    this.swapView(showView);
  },

 // lists


})
