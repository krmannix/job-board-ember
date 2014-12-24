Ember.Handlebars.helper('job-posting-postboard', function(value, options) {
	var job = value;
	var types = "";
	for (var i = 0; i < job.type_of_job.length; i++) {
		types += "<li>" + job.type_of_job[i] + "</li>";
	}
	var html = "<li class=\"col-md-4\">" +
								"<div class=\"job-post-container\">" +
									"<div class=\"job-title\">" +
										job.job_title +
									"</div>" +
									"<div class=\"company-title\">" +
										job.company_name +
									"</div>" +
									"<div class=\"description-short\">" +
										job.description_full +
									"</div>" +
									"<div class=\"type-of-job\">" +
										"<ul>" + 
										types +
										"</ul>" +
									"</div>" +
								"</div>" +
							"</li>";
	return new Handlebars.SafeString(html);
});