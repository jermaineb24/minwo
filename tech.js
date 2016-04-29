define([
	'views/techView',
	'core'
], function (TechView) {

	return {
		load: function (params) {

			mv.i.views.techView = new TechView({
				'el': mv.sections.mainContainer
			});

			mv.i.views.techView.render();
		}
	};

});
