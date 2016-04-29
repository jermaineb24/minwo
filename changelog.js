define([
	'views/changelogView',
	'core'
], function (ChangelogView) {

	return {
		load: function (params) {

			mv.i.views.changelogView = new ChangelogView({
				'el': mv.sections.mainContainer
			});

			mv.i.views.changelogView.render();
		}
	};

});
