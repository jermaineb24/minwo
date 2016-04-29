define([
	'views/advancedView',
	'core'
], function (AdvancedView) {

	return {
		load: function (params) {
			mv.i.views.advancedView = new AdvancedView({
				'el': mv.sections.mainContainer
			});

			mv.i.views.advancedView.render();
		}
	};
});
