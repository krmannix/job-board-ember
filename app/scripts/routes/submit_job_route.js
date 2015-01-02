require('../helpers/school_binary_converter');

BuJobBoard.SubmitJobRoute = Ember.Route.extend({
	model: function() {
		var page_names = ["Postboard", "Saved Jobs", "Submit a Post"];

		Ember.$("#jquery-click-type-group button").click(function() {
			console.log("Click");
			Ember.$(this).addClass('clicked-type').siblings().removeClass('clicked-type');
		});

		return {page_names: page_names, schools: SchoolBinaryConverter.schools};
	}
});