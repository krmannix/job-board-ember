BuJobBoard.IndexController = Ember.ObjectController.extend({
	errorMessage: '',
	actions: {
		student_submit: function() {
			console.log("YOLO");
			this.set("errorMessage", "THIS IS AN ERROR MESSAGE");
		}
	}
});