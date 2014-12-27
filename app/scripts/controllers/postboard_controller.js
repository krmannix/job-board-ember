BuJobBoard.PostboardController = Ember.ObjectController.extend({
	actions: {
		sidebarPageClick: function(term) {
			if (term.toLowerCase() === "submit a post") {
				this.transitionToRoute('submit-job');
			} else if (term.toLowerCase() === "saved jobs") {
				//this.transitionToRoute('submit-job');
			}
		},
		addJobClick: function(id) {
			// Should add id to class
			var job_post = Ember.$("#" + id);
			if (job_post.hasClass("clicked")) 
				job_post.removeClass("clicked");
			else 
				job_post.addClass("clicked");
			console.log("ADD JOB:");
		},
		showJobModal: function(id) {
			var $modal = Ember.$(".job-post-container-big");
			var $overlay = Ember.$("#overlay");
		    $overlay.removeClass("hidden");
		    $modal.removeClass("hidden");
		    var top = Math.max(Ember.$(window).height() - $modal.outerHeight(), 0) / 2;
		    var left = Ember.$(".job-grid").offset().left + (Ember.$(".job-grid").width() - $modal.width())/2;
		    $modal.css({
		        top: 5 + Ember.$(window).scrollTop(),
		        left: left
		    });
		},
		closeJobModal: function() {
			console.log("Clicked closeJobModal");
			Ember.$(".job-post-container-big").addClass("hidden");
			Ember.$("#overlay").addClass("hidden");
		}
	}
});