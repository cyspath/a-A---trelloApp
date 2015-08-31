TrelloApp.Views.BoardShow = Backbone.View.extend({
  template: JST['boards/show'],
  templateListIndex: JST['lists/index'],
  templateCardIndex: JST['cards/index'],


  initialize: function (options) {
    this.model = options.model;
    this.lists = options.lists;
    this.cards = options.cards;

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.lists, 'sync', this.render);
    this.listenTo(this.cards, 'sync', this.render);

  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);

    this.addList();

    this.saveSortedCards();
    this.addCard();

    this.activateSortable()
    return this;
  },

  addList: function () {
    var content = this.templateListIndex({
      lists: this.lists,
      board: this.model
    });
    $('div.listsContainer').append(content)
  },

  saveSortedCards: function () {
    // talk to server to save cards
    var cards = $('.cardList')
    console.log(cards);
  },

  addCard: function () {
    var that = this;
    $('.cardsContainer').each(function (idx) {
      // console.log( $(this).attr('list-id'))
      var content = that.templateCardIndex({
        cards: that.cards,
        list_id: $(this).attr('list-id')
      });
      //add cards to its corresponding list
      $(this).append(content);
    })
  },

  activateSortable: function () {
    $('.cardsContainer').sortable({ connectWith: '.cardsContainer' }).disableSelection();

    $('.listListFrame').sortable();
  },

})

// <script>
//   $(function() {
//     $('.cardsContainer').sortable({ connectWith: '.cardsContainer' }).disableSelection();
//   });
// </script>
