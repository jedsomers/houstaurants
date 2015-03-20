Meteor.publish('rests', function() {
	return Rests.find();
});

Meteor.publish('emails', function() {
	return Emails.find();
});
