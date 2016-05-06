// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  songs: [], 

  initialize: function() {
    var res;
    var context = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        _.each(data, function(song) {
          context.add(song);
        });
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

});