define([
	'models/spotlight',
	'core'
], function (Spotlight) {

	return Backbone.Collection.extend({

		initialize: function () {
			this.generateSpotlights();
		},

		model: Spotlight,
		url: '/resources/spotlights.json',
		/*
		 * Generate spotlight sample
		 */
		generateSpotlights: function () {}

	});

});
