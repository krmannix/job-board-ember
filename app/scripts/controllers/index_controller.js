BuJobBoard.IndexController = Ember.ObjectController.extend({
	needs: ['application'],
	errorMessage: '',
	errorMessageStudent: '',
	errorMessageEmployer: '',
	userEmail: '',
	userId: '',
	actions: {
		signupModalStudent: function() {
			Ember.$('#signup-choice').off('hidden.bs.modal');
			Ember.$('#signup-choice').on('hidden.bs.modal', function (e) {
				Ember.$('#signup-student').modal('show');
			});
			Ember.$('#signup-choice').modal('hide');
			// if (this.get('userEmail') === '' && this.get('userId') === '') {
			// 	this.set("errorMessage", "Please enter your information");
			// } else if (this.get('userEmail') === '') {
			// 	this.set("errorMessage", "Please enter your BU email");
			// } else if (this.get('userId') === '') {
			// 	this.set("errorMessage", "Please enter your BU ID #");
			// } else if (this.get('userEmail').indexOf("@bu.edu") === -1) {
			// 	this.set("errorMessage", "Please enter your BU email");				
			// } else {
			// 	this.set("errorMessage", "");
			// 	this.transitionToRoute('postboard');
			// }
			// Check if user exists
				// If not, 
					// sign user up
			// var self = this;
			// var user = new Parse.User();
			// user.set('username', this.get('userEmail'));
			// user.set('password', this.get('userId'));
			// user.signUp(null, {
			// 	success: function(user) {
			// 		// enter page
			// 		// Unhide log-out button
			// 		// this.set('controllers.application.currentUser', user);
			// 		Ember.$('#log-out-button').removeClass('hidden');
			// 		self.transitionToRoute('postboard');
			// 	}, error: function(user, error) {
			// 		// If it does, show error message
			// 		console.log(error.code);
			// 		self.set("errorMessage", error.message);
			// 	}
			// });
		},
		signupModalEmployer: function() {
			Ember.$('#signup-choice').off('hidden.bs.modal');
			Ember.$('#signup-choice').on('hidden.bs.modal', function (e) {
				Ember.$('#signup-employer').modal('show');
			});
			Ember.$('#signup-choice').modal('hide');
		},
		signupSubmitEmployer: function() {
			// Check all fields
		},
		signupSubmitStudent: function() {
			// Check all fields
		},
		login: function() {
			// if (this.get('userEmail') === '' && this.get('userId') === '') {
			// 	this.set("errorMessage", "Please enter your information");
			// } else if (this.get('userEmail') === '') {
			// 	this.set("errorMessage", "Please enter your BU email");
			// } else if (this.get('userId') === '') {
			// 	this.set("errorMessage", "Please enter your BU ID #");
			// } else if (this.get('userEmail').indexOf("@bu.edu") === -1) {
			// 	this.set("errorMessage", "Please enter your BU email");				
			// } else {
			// 	this.set("errorMessage", "");
			// 	this.transitionToRoute('postboard');
			// }
			// Check if user is stored in database
			var self = this;
			Parse.User.logIn(this.get('userEmail'), this.get('userId'), {
				success: function(user) {
					// enter page
					// this.set('controllers.application.currentUser', user);
					Ember.$('#log-out-button').removeClass('hidden');
					self.transitionToRoute('postboard');
				}, error: function(user, error) {
					// If it does, show error message
					switch(error.code) {
						case 101:
							self.set("errorMessage", "Email/BU ID combination does not exist yet. Please sign up.");
							break;
						default:
							self.set("errorMessage", error.message);
							break;
					}
				}
			});
		}
	}
});