Template.restsList.helpers({

	rests: function() {
		return Rests.find();
	},
	
	fields: function() {
		return [
			{ key: 'name', label: 'Name', cellClass: 'col-md-4' },
			{ key: 'verif', label: 'Verified?' },
			{ key: 'houstC', label: 'Houston Chronicle Rankings' },
			{ key: 'taRank', label: 'TripAdvisor Rankings' },
			{ key: 'yelp', label: 'Yelp Rating' },
			{ key: 'yelpNum', label: 'Number of Yelp Reviews' },
			{ key: 'fbRating', label: 'Facebook Rating' },
			{ key: 'fbLikes', label: 'Facebook Likes' },
			{ key: 'urb', label: 'UrbanSpoon Rating (%)' },
			{ key: 'zagatPrice', label: 'Zagat Price ($)' },
			{ key: 'zagatFood', label: 'Zagat Food (/30)' },
			{ key: 'zagatDecor', label: 'Zagat Decor (/30)' },
			{ key: 'zagatService', label: 'Zagat Service (/30)' }
			];
	}
	

});

Meteor.startup (
	function() {
	bootbox.dialog({
	        message: " ", // bootbox doesn't accept an empty value
		 title: "The absolute best resource on Houston Restaurants. Period.",
	        buttons: {
	            success: {
	                label: "Thanks!",
	                className: "btn-success",
	                callback: function () {
						
						Meteor.call('emailInsert', $(email).val(), function(error, result) {
							if (error)
								return alert(error.reason);
							
						});
					}
	                    // do something

	                }
	            }
	    });

	// Inject your template inside the dialog box
	Blaze.render(Template.modalIntro, $('.bootbox-body')[0]);
	});


		