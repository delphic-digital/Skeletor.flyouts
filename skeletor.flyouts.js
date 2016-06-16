/**
 * @copyright   2016, The Skeletor Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 */

define(['jquery', 'skeletor.core'],function ($, Skeletor){

  function Flyouts(element, options) {
		Flyouts.__super__.call(this, element, options, Flyouts.DEFAULTS);
	}

	Flyouts.VERSION = '0.0.1';

	Flyouts.DEFAULTS = {
		cssClass:'flyouts'
	};

	Skeletor.Plugin.create(Flyouts, {
		_init: function(element) {
			console.log('init flyouts')
		},
		open: function(){
			console.log('open flyout')
		}
	});
});