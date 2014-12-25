BuJobBoard.PostboardController = Ember.ObjectController.extend({
	actions: {
		sidebarPageClick: function(term) {
			console.log("Click occured " + term);
		},
		addjobclick: function(id) {
			// Should add id to class
			console.log(id);
		}
	}
});