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
			{ key: 'zagatFood', label: 'Zagat Food' },
			{ key: 'zagatDecor', label: 'Zagat Decor' },
			{ key: 'zagatService', label: 'Zagat Service' }
			];
	}
	

});


		