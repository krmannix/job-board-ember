BuJobBoard.SubmitJobController = Ember.ObjectController.extend({
	submitCompanyName: '',
	submitJobTitle: '',
	submitEmail: '',
	submitDescription: '',
	actions: {
		job_submit: function() {
			console.log("SUBMITTED");
		}
	}
});