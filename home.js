define([
	'views/homeView',
	'core'
], function (HomeView) {

	return {
		load: function (params) {

			mv.i.views.homeView = new HomeView({
				'el': mv.sections.mainContainer
			});

			mv.i.views.homeView.render();
		}
	};

});
