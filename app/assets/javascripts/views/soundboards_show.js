window.App.Views.SoundboardsShow = Backbone.View.extend({
  template: JST['soundboards/show'],

  initialize: function (options) {
    this.listenTo(
      this.model,
      'sync add',
      this.render.bind(this)
    );
  },

  render: function () {
    var renderedContent = this.template({
      soundboard: this.model
    });

    this.$el.html(renderedContent);

    return this;
  }
});