window.App.Collections.Soundboards = Backbone.Collection.extend({
  url: '/api/soundboards',
  model: App.Models.Soundboard,

  getOrFetch: function (id) {
    var model;
    var collection = this;
    if (model = collection.get(id)) {
      model.fetch();
      return model;
    } else {
      model = new App.Models.Soundboard({id: id});
      model.fetch({
        success: function () {
          collection.add(model);
        }
      });
      return model;
    }
  }
});

window.App.Collections.soundboards = new window.App.Collections.Soundboards();