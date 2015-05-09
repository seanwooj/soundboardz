window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function () {
    new App.Routers.AppRouter();
    Backbone.history.start();
  }
};

Backbone.CompositeView = Backbone.View.extend({
  subviews: function () {
    if (!this._subviews) {
      this._subviews = {};
    }

    return this._subviews;
  },

  addSubview: function (selector, view) {
    var selectorSubviews =
      this.subviews()[selector] || (this.subviews()[selector] = []);

    selectorSubviews.push(view);
  },

  renderSubviews: function () {
    var view = this;

    _(this.subviews()).each(function (selectorSubviews, selector){
      var $selectorElemt = this.$(selector);
      $selectorElement.empty();

      _(selectorSubviews).each(function (subview){
        $selectorElement.append(subview.render().$el);
        subview.delegateEvents();
      });
    });
  }
});

$(App.initialize);