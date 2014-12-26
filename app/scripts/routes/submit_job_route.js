BuJobBoard.SubmitJobRoute = Ember.Route.extend({
	model: function() {
		var page_names = ["Postboard", "Saved Jobs", "Submit a Post"];
		
		// Putting all the school info
		var schools = [{name: "College of Engineering", id: "eng"}, 
					   {name: "School of Management", id: "smg"},
					   {name: "College of Communication", id: "com"},
					   {name: "College of Arts & Sciences", id: "cas"}];

		Ember.$("#jquery-click-type-group button").click(function() {
			console.log("Click");
			Ember.$(this).addClass('clicked-type').siblings().removeClass('clicked-type');
		});

		return {page_names: page_names, schools: schools};
	}
});