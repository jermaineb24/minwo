define([
	'models/command',
	'core'
], function (Command) {

	return Backbone.Collection.extend({

		initialize: function () {},

		model: Command

	});

});
