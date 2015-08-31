window.TrelloApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // alert('Hello from Backbone!');
    new TrelloApp.Routers.BoardRouter({
      $rootEl: $('#root'),
      boards: new TrelloApp.Collections.Boards(),
      lists: new TrelloApp.Collections.Lists(),
      cards: new TrelloApp.Collections.Cards(),
     });

    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   TrelloApp.initialize();
// });
