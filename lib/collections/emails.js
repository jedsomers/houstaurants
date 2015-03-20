Emails = new Mongo.Collection('emails');

Meteor.methods({
	emailInsert: function(emailAttributes) {
		
		var email = _.extend(emailAttributes, {
			submitted: new Date()
		});
		
		var emailId = Emails.insert(email);
	}
});