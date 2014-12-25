BuJobBoard.PostboardController = Ember.ObjectController.extend({
	actions: {
		sidebarPageClick: function(term) {
			console.log("Click occured " + term);
		},
		addJobClick: function(id) {
			// Should add id to class
			var job_post = Ember.$("#" + id);
			if (job_post.hasClass("clicked")) job_post.removeClass("clicked");
			else job_post.addClass("clicked");
		}
	}
});