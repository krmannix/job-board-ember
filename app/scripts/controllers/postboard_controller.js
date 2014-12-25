BuJobBoard.PostboardController = Ember.ObjectController.extend({
	actions: {
		sidebarPageClick: function(term) {
			if (term.toLowerCase() === "saved jobs") {
				this.transitionToRoute('submit-job');
			}
		},
		addJobClick: function(id) {
			// Should add id to class
			var job_post = Ember.$("#" + id);
			if (job_post.hasClass("clicked")) 
				job_post.removeClass("clicked");
			else 
				job_post.addClass("clicked");
		}
	}
});