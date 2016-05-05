// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  // initialize: function() {
  //   console.log('song',  this);
  //   this.on('enqueue', function(){
  //     console.log('i was added')
  //   }), this;
  // },


  // render: function() {
  //   return this.$el;
  // }

  events: {
    'click': function() {
      //this.model.ended();
      this.model.dequeue();
    }
  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),


  initialize: function(song) {
    console.log('init', song);
    //this.render();
  },

  // tagName: 'tr',

  // template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // events: {
  //   'click': function() {
  //     this.model.play();
  //     this.model.enqueue();
  //   }
  // },

  render: function() {
    console.log('entry', this);
    return this.$el.html(this.template(this.model.attributes));
  }
  
});
