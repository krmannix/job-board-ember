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
										"</div><div class=\"flex-box-model\"><div class=\"type-of-job box box1\"><ul>" + types + "</ul></div>"+
                                        "<div class=\"box box2\"></div><div class=\"save-job-button box box3\"><button class=\"btn btn-default\" type=\"button\">" +
                                        "<span class=\"glyphicon glyphicon-plus\"></span></button></div></div<</div></li>";
		if ((i+1)%3 == 0) html += "</div>";
	}
	return new Handlebars.SafeString(html);
});

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
    var escaped = Handlebars.Utils.escapeExpression(v1);
    console.log(v1);
    console.log("v1" + escaped);
    console.log("v2" + v2);
  if(escaped === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});