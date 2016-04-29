define(['text!html/tplTutorialMain.html',
		'views/tutorialMainTopView',
		'views/tutorialStepView',
		'views/tutorialMainBottomView',
		'core'
	],
	function (template, TutorialMainTopView, TutorialStepView, TutorialMainBottomView) {

		return {
			load: function (params) {
				var tpl = _.template(template, {}); //xss remediation

				$(mv.sections.mainContainer).html(tpl);

				var view1 = 'tutorialMainTopView';

				mv.i.views[view1] = new TutorialMainTopView({
					'el': '#tutorialMainTop'
				});

				mv.i.views[view1].render();

				var view2 = 'tutorialStepView';

				mv.i.views[view2] = new TutorialStepView({
					'el': '#tutorialMainStep'
				});

				mv.i.views[view2].render();

				var view3 = 'tutorialMainBottomView';

				mv.i.views[view3] = new TutorialMainBottomView({
					'el': '#tutorialMainBottom'
				});

				mv.i.views[view3].render();
			}
		};
	});
