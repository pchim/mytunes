// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {

    this.$el.html('<th>Queue</th>');
    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      this.render();
    }, this);

    this.render();
  },

  render: function() {
    var queueHtml = $('<div></div>');
    this.$el.html('<th>Queue</th>');

    _.each(this.collection.models, function(song) {
      console.log('song in each', song);
      var entryView = new SongQueueEntryView({model: song});
      queueHtml.append(entryView.render());
    });



    return this.$el.append(queueHtml);
  }

});
