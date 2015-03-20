Template.modalIntro.events({
	'submit email': function(e) {
		e.preventDefault();
		
		var email = {
			useremail: $(e.target).find('[name=useremail]').val(),
			restemail: $(e.target).find('[name=restemail]').val()
		};
		
		Meteor.call('emailInsert', email, function(error, result) {
			if (error)
				return alert(error.reason);
		});
	}
});


Template.modalIntro.helpers({

	rests: function() {
		return Rests.find();
	}
	
});


