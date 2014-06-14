export default Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  },
  renderTemplate: function() {
    this.render({ outlet: 'graph'});
  },
  events: {
    launchdetails: function(){
      this.render('stuff', { outlet: 'bottom'} );
      this.render('stuff', { outlet: 'top' } );
    }
  }
});
