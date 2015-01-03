require('../helpers/school_binary_converter');

BuJobBoard.SubmitJobController = Ember.ObjectController.extend({
	submitCompanyName: '',
	submitJobTitle: '',
	submitEmail: '',
	submitDescription: '',
	submitError: '',
	actions: {
		job_submit: function(schools) {	
			// GET ALL DATA NEEDED, and RESET any danger fields
			var submit_success = Ember.$("#success-submit"),
				submit_error = Ember.$("#error-submit"),
				type_danger = Ember.$('#danger-type'),
				fields_danger = Ember.$('#danger-fields'),
				school_danger = Ember.$('#danger-school'),
				email_danger = Ember.$("#danger-email");
			type_danger.addClass("hidden"); 
			fields_danger.addClass("hidden"); 
			school_danger.addClass("hidden"); 
			email_danger.addClass("hidden"); 
			submit_success.addClass("hidden");
			submit_error.addClass("hidden");

			var full = Ember.$('#full').hasClass("active"),
				intern = Ember.$('#intern').hasClass("active"),
				prereqs_ul = Ember.$(".prereq-submit-job .list-group li"),
				checked_schools = [],
				prereqs = [];

			// Get all schools
			for (var i = 0; i < schools.length; i++) {
				if (Ember.$('#' + schools[i].id).is(':checked')) checked_schools.push(schools[i]);
			}

			SchoolBinaryConverter.convertSchoolsToBinary(checked_schools)

			// Get all prereqs
			prereqs_ul.each(function() {
				var v = Ember.$(this).find("input").val();
				if (v) {
					prereqs.push(v);
				}
			});

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
				// Now, enter the job post
				// FOR NOW, we'll create both a model and a Parse object
				var posting = BuJobBoard.JobPost.create({
					job_title: this.get("submitJobTitle"),
					company_name: this.get("submitCompanyName"),
					full_time: full,
					description_full: this.get("submitDescription"),
					prereqs: prereqs,
					contact_email: this.get("submitEmail"),
					submitted_email: Parse.User.current().get("username"),
					schools: SchoolBinaryConverter.convertSchoolsToBinary(checked_schools)
				});

				var JobPost = Parse.Object.extend("JobPost");
				var postingParse = new JobPost();
				postingParse.set("job_title", this.get("submitJobTitle"));
				postingParse.set("company_name", this.get("submitCompanyName"));
				postingParse.set("full_time", full);
				postingParse.set("description_full", this.get("submitDescription"));
				postingParse.set("prereqs", prereqs);
				postingParse.set("contact_email", this.get("submitEmail"));
				postingParse.set("submitted_email", Parse.User.current().get("username"));
				postingParse.set("schools", SchoolBinaryConverter.convertSchoolsToBinary(checked_schools));

				var self = this;
				postingParse.save(null, {
					success: function(postingP) {
						submit_success.removeClass("hidden");
					},
					error: function(postingP, error) {
						self.set("submitError", error.message);
						submit_error.removeClass("hidden");
					}
				});
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