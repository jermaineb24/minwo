define([
	'views/spotlightView',
	'core'
], function (SpotlightView) {

	return {
		load: function (params) {

			mv.i.views.spotlightView = new SpotlightView({
				'el': mv.sections.mainContainer
			});

			mv.i.views.spotlightView.render();
		}
	};

});
