BuJobBoard.SubmitJobController = Ember.ObjectController.extend({
	submitCompanyName: '',
	submitJobTitle: '',
	submitEmail: '',
	submitDescription: '',
	actions: {
		job_submit: function(schools) {	
			console.log(this.get("submitCompanyName"));
			var type_danger = Ember.$('#danger-type');
			var fields_danger = Ember.$('#danger-fields');
			var school_danger = Ember.$('#danger-school');
			type_danger.addClass("hidden"); fields_danger.addClass("hidden"); school_danger.addClass("hidden");

			var full = Ember.$('#full').hasClass("active");
			var intern = Ember.$('#intern').hasClass("active");
			var checked_schools = [];
			for (var i = 0; i < schools.length; i++) {
				if (Ember.$('#' + schools[i].id).is(':checked')) checked_schools.push(schools[i]);
			}

			if (!this.get("submitDescription") || !this.get("submitJobTitle") || !this.get("submitEmail") || !this.get("submitCompanyName")) {
				console.log("WRONG " + this.get("submitDescription"));
				fields_danger.removeClass("hidden");
			} else if (!full && !intern) {
				type_danger.removeClass("hidden");
			} else if (checked_schools.length === 0) {
				school_danger.removeClass("hidden");
			} else {

			}
		}
	}
});