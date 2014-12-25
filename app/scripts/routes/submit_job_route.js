BuJobBoard.SubmitJobRoute = Ember.Route.extend({
	model: function() {
		var page_names = ["Postboard", "Saved Jobs", "Submit a Post"];
		
		// Putting all the school info
		var schools = ["College of Engineering", "School of Management", "College of Communication", "College of Arts & Sciences"];

		return {page_names: page_names, schools: schools};
	}
});