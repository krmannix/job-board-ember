BuJobBoard.JobPosting = Ember.Object.extend({
	job_title: null,
	company_name: null,
	full_time: null,
	description_full: null,
	prereqs: null,
	contact_email: null,
	schools: null, // Storing schools in a binary-type model
	objectId: null
});