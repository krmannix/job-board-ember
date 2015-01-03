require('../helpers/school_binary_converter');

BuJobBoard.SubmitJobRoute = Ember.Route.extend({
	model: function() {
		var page_names = ["Postboard", "Saved Jobs", "Submit a Post"];

		return {page_names: page_names, schools: SchoolBinaryConverter.schools};
	}
});