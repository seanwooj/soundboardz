window.App.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": 'soundboardsIndex',
    "soundboards/:id": 'soundboardsShow'
  },

  soundboardsIndex: function () {
    
  },

  soundboardsShow: function (id) {

  },

  swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }

    this.currentView = view;

    $("body").html(view.render().$el);
  }


});