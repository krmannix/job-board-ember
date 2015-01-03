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
			// Should toggle whether a job is favorited or not.
			// TODO: Is there a better way than having this 2-way data storage?
			// For example, if I add a job on here, it will be saved on Parse, but not on the local machine's user
			// For now, I'm patching this by removing and adding the favorites locally, hoping that now errors occur on
			// Parse's end. There needs to be a better way to do this without making a new user request every time something changes
			var job_post = Ember.$("#" + id);
			if (job_post.hasClass("clicked")) {
				job_post.removeClass("clicked");
				// This is the part I'm talking about *********************
				var newFavs = Parse.User.current().get("favorite_posts");//
				newFavs.splice(newFavs.indexOf(id), 1);					 //
				Parse.User.current().set("favorite_posts", newFavs);	 //
				// End of the part I'm talking about **********************
				Parse.Cloud.run("removeSavedJob", {jobId: id}, {
					success: function() {
						console.log("Removal was a success");
					},
					error: function() {
						console.log("Removal was a failure");
					}
				});
			} else {
				job_post.addClass("clicked");
				// This is the part I'm talking about *********************
				var newFavs = Parse.User.current().get("favorite_posts");//
				newFavs.push(id);										 //
				Parse.User.current().set("favorite_posts", newFavs);	 //
				// End of the part I'm talking about **********************
				Parse.Cloud.run("addSavedJob", {jobId: id}, {
					success: function() {
						console.log("Addition was a success");
					},
					error: function() {
						console.log("Addition was a failure");
					}
				});
			} 
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