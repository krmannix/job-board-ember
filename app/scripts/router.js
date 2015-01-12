BuJobBoard.Router.map(function () {
  // Add your routes here
  this.route('index', {
  	path: '/'
  });
  this.route('postboard', {
  	path: 'postboard'
  });
  this.route('submit-job', {
  	path: 'submit-job'
  });
  this.route('catchAll', { 
  	path: '*:'
  });
});

BuJobBoard.CatchAllRoute = Ember.Route.extend({
	redirect: function() {
		this.transitionTo('index');
	}
});
