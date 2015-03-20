Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('rests'); }
	
});

Router.route('/', {name: 'restsList'});
Router.route('/rests/:_id', {
	name: 'restPage',
	data: function() { return Rests.findOne(this.params._id); }
});

Router.route('/submit', {name: 'modalIntro'});

Router.onBeforeAction('dataNotFound', {only: 'restPage'});