define([
	'models/design',
	'core'
], function (Design) {

	return Backbone.Collection.extend({

		initialize: function () {
			this.generateDesigns();
		},

		model: Design,
		url: '/resources/designs.json',

		generateDesigns: function () {
			console.log('initializing');

		}

	});
});
