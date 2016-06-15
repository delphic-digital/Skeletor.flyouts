/**
 * @copyright   2016, The Skeletor Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 */

define(['jquery', 'skeletor.core'],function ($, Skeletor){

	// first we set up our constructor function
	var Flyouts = function(element, options){
		this.$element = element || $(document);
		this.options = $.extend({}, this.defaults, options);
		this._init();

		Skeletor.instantiatePlugin(this, 'Flyouts');
	};

	// now we define the prototype
	Flyouts.prototype = {
		name: 'BrowserUpdate',
		version: '1.0.0',
		defaults: {},
		constructor: Flyouts,
		_init: function(){
			console.log('init Flyouts')
		},
		open: function(){
			console.log('open flyout')
		}
	}

	Skeletor.registerPlugin(Flyouts, 'Flyouts');
});