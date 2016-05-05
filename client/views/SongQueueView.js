// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {

    this.$el.html('<th>Queue</th>');
    this.collection.on('add', function() {
      this.render();
    }, this);
    this.render();
  },

  render: function() {
    var html = $('<div></div>');

    if (this.collection.models.length > 0) {
      var newSong = this.collection.models[this.collection.models.length - 1];
      var entryView = new SongQueueEntryView({model: newSong});
      html.append(entryView.render());
    }


    return this.$el.append(html);
  }

});
