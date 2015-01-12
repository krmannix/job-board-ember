require('../helpers/school_binary_converter');

BuJobBoard.SubmitJobRoute = Ember.Route.extend({
	needs: ['application'],
	model: function() {
		if (this.get('controllers.application.currentUser') === null) {
			this.transitionToRoute('index');
		} else {
			var page_names = ["Postboard", "Saved Jobs", "Submit a Post"];

			return {page_names: page_names, schools: SchoolBinaryConverter.schools};
		}
	}
});