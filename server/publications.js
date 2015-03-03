Meteor.publish('rests', function() {
	return Rests.find();
});

