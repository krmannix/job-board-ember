BuJobBoard.SubmitJobController = Ember.ObjectController.extend({
	submitCompanyName: '',
	submitJobTitle: '',
	submitEmail: '',
	submitDescription: '',
	actions: {
		job_submit: function(schools) {	
			// GET ALL DATA NEEDED
			var submit_success = Ember.$("#success-submit"),
				type_danger = Ember.$('#danger-type'),
				fields_danger = Ember.$('#danger-fields'),
				school_danger = Ember.$('#danger-school'),
				email_danger = Ember.$("#danger-email");
			type_danger.addClass("hidden"); fields_danger.addClass("hidden"); 
			school_danger.addClass("hidden"); email_danger.addClass("hidden"); submit_success.addClass("hidden");
			var full = Ember.$('#full').hasClass("active"),
				intern = Ember.$('#intern').hasClass("active"),
				checked_schools = [];
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
		},
		addPrereq: function(number) {
			console.log("num " + number);
			switch (parseInt(number)) {
				case 1:
					Ember.$(".item-2").removeClass("hidden");
					break;
				case 2:
					Ember.$(".item-3").removeClass("hidden");
					break;
				case 3:
					Ember.$(".item-4").removeClass("hidden");
					break;
				case 4:
					Ember.$(".item-5").removeClass("hidden");
					break;
			}
		},
		removePrereq: function(number) {
			console.log("num " + number);
			switch (parseInt(number)) {
				case 2:
					Ember.$(".item-2").addClass("hidden");
					Ember.$(".item-2 .input-group input").val('');
					break;
				case 3:
					Ember.$(".item-3").addClass("hidden");
					Ember.$(".item-3 .input-group input").val('');
					break;
				case 4:
					Ember.$(".item-4").addClass("hidden");
					Ember.$(".item-4 .input-group input").val('');
					break;
				case 5:
					Ember.$(".item-5").addClass("hidden");
					Ember.$(".item-5 .input-group input").val('');
					break;
			}
		}
	}
});