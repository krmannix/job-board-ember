BuJobBoard.PostboardRoute = Ember.Route.extend({
	model: function() {
		var job_postings = [];
		for (var i = 0; i < 10; i++) {
			var k = chance.word();
			console.log(k + "..");
			job_postings.push(BuJobBoard.JobPosting.create({
				job_title: k,
				company_name: chance.word(),
				type_of_job: chance.bool() ? 'i' : 'f',
				full_time: chance.bool(),
				description_full: chance.paragraph({sentences: 1}),
				contact_email: chance.email({domain: "bu.edu"}), 
				id: chance.bb_pin()
			}));
		}
		return {job_postings: job_postings};
	}
});