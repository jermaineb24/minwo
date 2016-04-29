define([
	'models/techtalk',
	'core'
], function (Techtalk) {

	return Backbone.Collection.extend({

		initialize: function () {},

		model: Techtalk

	});

});
