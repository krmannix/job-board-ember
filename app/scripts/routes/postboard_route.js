BuJobBoard.PostboardRoute = Ember.Route.extend({
	model: function() {
		var page_names = ["Postboard", "Saved Jobs", "Submit a Post"];
		var job_postings = [];
		for (var i = 0; i < 10; i++) {
			var k = chance.word();
			job_postings.push(BuJobBoard.JobPost.create({
				job_title: k,
				company_name: chance.word(),
				type_of_job: [chance.string({length: 3}), chance.string({length: 3})],
				full_time: chance.bool() ? 'i' : 'f',
				description_full: chance.paragraph({sentences: 1}),
				contact_email: chance.email({domain: "bu.edu"}), 
				id: chance.bb_pin()
			}));
		}
		return {job_postings: job_postings, page_names: page_names};
	}
});