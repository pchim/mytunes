// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    _.each(this.collection, function(song) {
      var entryView = new SongQueueEntryView(song);
      entryView.render();
    });
    console.log(this.$el);
    return this.$el;
  }

});
