Ember.Handlebars.helper('job-posting-postboard', function(value, options) {
	// console.log(value);
	var html = "";
	for (var i = 0; i < value.length; i++) {
		var job = value[i];
		var types = "";
		for (var j = 0; j < job.type_of_job.length; j++) {
			types += "<li>" + job.type_of_job[j] + "</li>";
		}
		if (i%3 == 0) html += "<div class=\"row\">";
		html += "<li class=\"col-md-4\"><div class=\"job-post-container\"><div class=\"job-title " + job.full_time + "\">" 
										+ job.job_title + "</div><div class=\"company-title\">" +job.company_name +
										"</div><div class=\"description-short\">" +job.description_full +
										"</div><div class=\"type-of-job\"><ul>" + types + "</ul></div></div></li>";
		if ((i+1)%3 == 0) html += "</div>";
	}
	return new Handlebars.SafeString(html);
});