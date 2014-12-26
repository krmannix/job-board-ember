BuJobBoard.SubmitJobController = Ember.ObjectController.extend({
	submitCompanyName: '',
	submitJobTitle: '',
	submitEmail: '',
	submitDescription: '',
	actions: {
		job_submit: function(schools) {	
			// GET ALL DATA NEEDED
			var submit_success = Ember.$("#success-submit");
			var type_danger = Ember.$('#danger-type');
			var fields_danger = Ember.$('#danger-fields');
			var school_danger = Ember.$('#danger-school');
			var email_danger = Ember.$("#danger-email");
			type_danger.addClass("hidden"); fields_danger.addClass("hidden"); 
			school_danger.addClass("hidden"); email_danger.addClass("hidden"); submit_success.addClass("hidden");
			var full = Ember.$('#full').hasClass("active");
			var intern = Ember.$('#intern').hasClass("active");
			var checked_schools = [];
			for (var i = 0; i < schools.length; i++) {
				if (Ember.$('#' + schools[i].id).is(':checked')) checked_schools.push(schools[i]);
			}

			// VALIDATE FIELDS & BUTTONS
			if (!this.get("submitDescription") || !this.get("submitJobTitle") || !this.get("submitEmail") || !this.get("submitCompanyName")) {
				fields_danger.removeClass("hidden");
			} else if (this.get("submitEmail").indexOf("@") == -1) {
				email_danger.removeClass("hidden");
			}else if (!full && !intern) {
				type_danger.removeClass("hidden");
			} else if (checked_schools.length === 0) {
				school_danger.removeClass("hidden");
			} else {
				submit_success.removeClass("hidden");
			}
		},
		sidebarPageClick: function() {
			this.transitionToRoute('postboard');
		}
	}
});