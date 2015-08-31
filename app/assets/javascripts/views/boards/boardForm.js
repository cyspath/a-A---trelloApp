TrelloApp.Views.BoardForm = Backbone.View.extend({

  template: JST['boards/form'],

  events: { 'click button': 'submitForm' },

  tagName: 'form',

  submitForm: function (e) {
    e.preventDefault();
    var attributes = this.$el.serializeJSON();
    var that = this;
    this.model.set(attributes);
    this.model.save(attributes, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("", { trigger: true });
      }
    });
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  }

})


// PostApp.Views.PostForm = Backbone.View.extend({
//   tagName: 'form',
//
//   template: JST["posts/form"],
//
//   events: {
//     'click button': 'submit'
//   },
//
//   render: function () {
//     var renderedContent = this.template({
//       post: this.model
//     });
//     this.$el.html(renderedContent);
//     return this;
//   },
//
//   submit: function (event) {
//     event.preventDefault();
//     var attrs = this.$el.serializeJSON(),
//       that = this;
//
//     this.model.set(attrs);
//     this.model.save({}, {
//       success: function () {
//         that.collection.add(that.model, { merge: true });
//         Backbone.history.navigate("", { trigger: true });
//       }
//     });
//   }
// });
