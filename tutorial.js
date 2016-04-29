define([
	'views/tutorialIntroView',
	'core'
], function (TutorialIntroView) {

	return {
		load: function (params) {

			mv.i.views.tutorialIntroView = new TutorialIntroView({
				'el': mv.sections.mainContainer
			});

			mv.i.views.tutorialIntroView.render();
		}
	};

});
