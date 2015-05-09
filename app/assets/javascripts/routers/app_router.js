window.App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": 'soundboardsIndex',
    "soundboards/:id": 'soundboardsShow'
  },

  soundboardsIndex: function () {
    var indexView = new App.Views.SoundboardsIndex({
      collection: App.Collections.soundboards
    });

    App.Collections.soundboards.fetch();
    this._swapView(indexView);
  },

  soundboardsShow: function (id) {
    var soundboard = App.Collections.soundboards.getOrFetch(id);
    var showView = new App.Views.SoundboardsShow({
      model: soundboard
    });
    this._swapView(showView);
  },

  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;

    $("body").html(view.render().$el);
  }


});