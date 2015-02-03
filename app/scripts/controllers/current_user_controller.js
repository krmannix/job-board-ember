BuJobBoard.CurrentUserController = Ember.ObjectController.extend({
	userLoggedIn: false,
	user: null,
	login: function(user) {
		this.set('user', user);
	},
	logout: function() {
		this.set('user', null);
	}
});