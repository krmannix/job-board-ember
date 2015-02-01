BuJobBoard.IndexController = Ember.ObjectController.extend({
	needs: ['application'],
	errorMessageLogin: '',
	errorMessageStudent: '',
	errorMessageEmployer: '',
	loginEmail: '',
	loginPassword: '',
	firstNameStudent: '',
	lastNameStudent: '',
	emailStudent: '',
	idStudent: '',
	passwordStudent: '',
	confirmStudent: '',
	firstNameEmployer: '',
	lastNameEmployer: '',
	emailEmployer: '',
	companyEmployer: '',
	websiteEmployer: '',
	passwordEmployer: '',
	confirmEmployer: '',
	actions: {
		signupModalStudent: function() {
			Ember.$('#signup-choice').off('hidden.bs.modal');
			Ember.$('#signup-choice').on('hidden.bs.modal', function (e) {
				Ember.$('#signup-student').modal('show');
			});
			Ember.$('#signup-choice').modal('hide');
		},
		signupModalEmployer: function() {
			Ember.$('#signup-choice').off('hidden.bs.modal');
			Ember.$('#signup-choice').on('hidden.bs.modal', function (e) {
				Ember.$('#signup-employer').modal('show');
			});
			Ember.$('#signup-choice').modal('hide');
		},
		signupSubmitEmployer: function() {
			var self = this;
			if (validateFields()) {
				var user = new Parse.User();
				user.set('username', this.get('emailEmployer'));
				user.set('password', this.get('passwordEmployer'));
				user.set('firstName', this.get('firstNameEmployer'));
				user.set('lastName', this.get('lastNameEmployer'));
				user.set('company', this.get('companyEmployer'));
				user.set('companyWebsite', this.get('companyWebsite'));
				user.signUp(null, {
					success: function(user_) {
						Ember.$('#signup-employer').modal('hide');
						this.set('controllers.application.currentUser', user_);
						Ember.$('#log-out-button').removeClass('hidden');
						self.transitionToRoute('postboard');
					}, error: function(user_, error) {
						// If it does, show error message
						console.log(error.code);
						self.set("errorMessageEmployer", error.message);
					}
				});
			}

			// Check all fields
			function validateFields() {
				if (!this.get('emailEmployer')) this.set('errorMessageEmployer', 'Please enter your email');
				else if (!this.get('firstNameEmployer')) this.set('errorMessageEmployer', 'Please enter your first name');
				else if (!this.get('lastNameEmployer')) this.set('errorMessageEmployer', 'Please enter your last name');
				else if (!this.get('companyEmployer')) this.set('errorMessageEmployer', 'Please enter your company');
				else if (!this.get('websiteEmployer')) this.set('errorMessageEmployer', 'Please enter your company\'s website');
				else if (!this.get('passwordEmployer')) this.set('errorMessageEmployer', 'Please enter a password');
				else if (!this.get('confirmEmployer')) this.set('errorMessageEmployer', 'Please confirm your password');
				else if (this.get('passwordEmployer') !== this.get('confirmEmployer')) this.set('errorMessageEmployer', 'Passwords do not match');
				else if (!isUrl(this.get('websiteEmployer'))) this.set('errorMessageEmployer', 'URL is not valid');
				else {
					this.set('errorMessageEmployer', '');
					return true;
				}
			};

			function isUrl(s) {
			   var regexp = /(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
			   return regexp.test(s);
			};
		},
		signupSubmitStudent: function() {

			var self = this;
			if (validateFields()) {
				var user = new Parse.User();
				user.set('username', this.get('emailStudent'));
				user.set('password', this.get('passwordStudent'));
				user.set('firstName', this.get('firstNameStudent'));
				user.set('lastName', this.get('lastNameStudent'));
				user.set('buid', this.get('idStudent'));
				user.signUp(null, {
					success: function(user_) {
						Ember.$('#signup-student').modal('hide');
						this.set('controllers.application.currentUser', user_);
						Ember.$('#log-out-button').removeClass('hidden');
						self.transitionToRoute('postboard');
					}, error: function(user_, error) {
						// If it does, show error message
						console.log(error.code);
						self.set("errorMessageStudent", error.message);
					}
				});
			}

			// Check all fields
			function validateFields() {
				if (!this.get('emailStudent')) this.set('errorMessageStudent', 'Please enter your email');
				else if (!this.get('firstNameStudent')) this.set('errorMessageStudent', 'Please enter your first name');
				else if (!this.get('lastNameStudent')) this.set('errorMessageStudent', 'Please enter your last name');
				else if (!this.get('idStudent')) this.set('errorMessageStudent', 'Please enter your BU ID');
				else if (!this.get('passwordStudent')) this.set('errorMessageStudent', 'Please enter a password');
				else if (!this.get('confirmStudent')) this.set('errorMessageStudent', 'Please confirm your password');
				else if (this.get('passwordStudent') !== this.get('confirmStudent')) this.set('errorMessageStudent', 'Passwords do not match');
				else if (!isBUID(this.get('idStudent'))) this.set('errorMessageStudent', 'Not a valid BU ID');
				else {
					this.set('errorMessageStudent', '');
					return true;
				}
			};

			function isBUID(s) {
			   var regexp = /[U]\d{8}/
			   return regexp.test(s);
			};
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
					this.set('controllers.application.currentUser', user);
					Ember.$('#log-out-button').removeClass('hidden');
					self.transitionToRoute('postboard');
				}, error: function(user, error) {
					// If it does, show error message
					switch(error.code) {
						case 101:
							self.set("errorMessage", "Email/password combination does not exist yet. Please sign up.");
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