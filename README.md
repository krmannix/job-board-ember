A Job Board application, using Ember. Currently a side-project.

<h2>To-Do</h2>

* Add sign-up modal
* Add universal Ember user to control log-in/log-out
* Add log-out button
	* Should transition to index and log user in/out
* Catch-all router to redirect back to homepage for ill-advised urls
* Refreshing User each time index page is reached
* Adding pin #'s on sign-up for job posters
	* Should be a check-box for "Employers" that expands into another input text field with pin # & instructions
* Only displaying Postboard & Saved Jobs for non-job posters
* Displaying Postboard, Saved Jobs (I guess? Could take Saved Jobs out, in case an Alum that's posted jobs wants to use it), Submitted Jobs, and Submit a Job
* Validate user's on signup
	* No same BU ID or Email
* Created Saved Jobs page
* Use backend to grab jobs, not generate them with fixtures
* Implement search feature - should this be at the top of the postboard page only?
	* Should take you directly to postboard-results
	* No paging, just scrolling (which is essentially paging, just no numbers at the bottom)
* Change color scheme to something a little nicer
* Add spinners for when a request is loading