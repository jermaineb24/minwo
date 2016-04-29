define([
	'models/technology',
	'collections/technologies',
	'text!html/tplHome.html',
	'core'
], function (Technology, Technologies, template) {

	return Backbone.View.extend({

		el: '',

		template: _.template(template),

		initialize: function () {
			var that = this;
			this.collection = new Technologies();
			this.collection.fetch({
				success: function () {
					that.render();
				},
				error: function (model, error) {
					console.log('Couldn\'t get JSON data for tech stack');
					console.log(error);
				}
			});
		},

		render: function () {
			this.$el.html(_.template(template, {
				technologies: this.collection.toJSON()
			}));
		},

		events: {}

	});

});
