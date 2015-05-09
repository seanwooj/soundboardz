window.App.Views.SoundboardsIndex = Backbone.View.extend({
  template: JST['soundboards'],

  initialize: function (options) {
    this.listenTo(
      this.collection,
      'sync add',
      this.render.bind(this)
    );
  },

  render: function () {
    var renderedContent = this.template({
      soundboards: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  }
});