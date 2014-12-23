BuJobBoard.IndexController = Ember.ObjectController.extend({
	errorMessage: '',
	userEmail: '',
	userId: '',
	actions: {
		student_submit: function() {
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
			this.transitionToRoute('postboard');	
		}
	}
});