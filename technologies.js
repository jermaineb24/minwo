define([
	'models/technology',
	'core'
], function (Technology) {

	return Backbone.Collection.extend({

		initialize: function () {},

		model: Technology,
		url: '/resources/technologies.json'

	});

});
