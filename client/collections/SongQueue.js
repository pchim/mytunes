// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    console.log(this);
    this.on('add', function() {
      if (this.length === 1) { 
        this.playFirst(this.at(0));
      } else {
        this.at(0).on('change:ended', this.playFirst);
      }
    }, this);



  },

  playFirst: function(song) {
    //console.log('called in playfirst', song.trigger('ended'));

    song.on('ended', function() {
      console.log('ended');
      this.shift();
    });
  }

});