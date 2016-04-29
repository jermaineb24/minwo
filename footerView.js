define(['core', 'text!html/tplFooter.html'], function (core, template) {

	var FooterView = Backbone.View.extend({

		el: '',

		template: _.template(template),

		initialize: function () {},

		render: function () {
			this.$el.html(this.template());
		},

		events: {}

	});

	return FooterView;
});
