define([
	'core'
], function () {

	return Backbone.Model.extend({

		defaults: {
			name: '',
			imgUrl: '',
			content: '',
			link: ''
		},

		initialize: function () {}

	});

});
