define([
	'core'
], function () {

	return Backbone.Model.extend({

		defaults: {
			title: '',
			what: '',
			how: '',
			why: ''

		},

		initialize: function () {}

	});

});
