Ember.Handlebars.helper('job-posting-postboard', function(value, options) {
	var job = value;
	var html = "<li class=\"col-md-4\">" + job.job_title + "</li>";
	console.log(job.job_title);
	return new Handlebars.SafeString(html);
});