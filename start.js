define([
	'views/startView',
	'core'
], function (StartView) {

	return {
		load: function (params) {

			mv.i.views.startView = new StartView({
				'el': mv.sections.mainContainer
			});

			mv.i.views.startView.render();
		}
	};

});
