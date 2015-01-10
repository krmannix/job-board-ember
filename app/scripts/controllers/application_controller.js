BuJobBoard.ApplicationController = Ember.ObjectController.extend({
	currentUser: null,
	actions: {
		log_out: function() {
			console.log("Log out button clicked");
		}
	}
});