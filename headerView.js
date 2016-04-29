define(['core', 'text!html/tplHeader.html'], function (core, template) {

	var HeaderView = Backbone.View.extend({

		el: '',

		template: _.template(template),

		initialize: function () {},

		render: function () {
			this.$el.html(this.template());
			this.toggleTabColor();
		},

		events: {
			'click .expand-resp': 'toggleRespHeader',
			'click .close-resp': 'toggleRespHeader'
		},

		/*Changes the tab for the active page*/
		toggleTabColor: function () {
			var pathArray = window.location.pathname.split('/');
			var curPage = '/' + pathArray[pathArray.length - 1];
			this.$('.nav-link').each(function () {
				$(this).removeClass('navbar-tab-on');
			});

			/*set related pages to color the correct tab*/
			if (curPage === '/tutorialMain') {
				curPage = '/tutorial';
			} else if (curPage === '/') {
				curPage = '/home';
			}

			this.$('[href="' + curPage + '"]').parent().addClass('navbar-tab-on');
		},

		toggleRespHeader: function (event) {
			$(event.target).parent().toggleClass('activeHamburger');
			$(event.target).parent().parent().toggleClass('active');
		}
	});

	return HeaderView;
});
