Template.modalIntro.events({
	'submit email': function(e) {
		e.preventDefault();
		
		var useremail = e.username.value;
		var restemail = e.restname.value;
		
		Emails.insert({
			useremail: useremail,
			resetemail: restemail
		});
	}
});


Template.modalIntro.helpers({

	rests: function() {
		return Rests.find();
	}
	
});