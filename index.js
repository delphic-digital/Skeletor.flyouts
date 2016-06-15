/**
 * @copyright   2010-2015, The Skeletor Project
 * @license     http://opensource.org/licenses/BSD-3-Clause
 */


require.config({
	paths: {
		'jquery': '//code.jquery.com/jquery-3.0.0.min',
		'skeletor.core': '../Skeletor.core/skeletor.core',
	}
})

define(['jquery', 'skeletor.core'],function ($, Skeletor){

	// first we set up our constructor function
	var Flyouts = function(element, options){
		this.$element = element;
		this.options = $.extend({}, Flyouts.defaults, options);
		Skeletor.instantiatePlugin(this, 'Flyouts');
		this._init();
	};

	// now we define the prototype
	Flyouts.prototype = {
		name: 'BrowserUpdate',
		version: '1.0.0',
		constructor: Flyouts,
		_init: function(){
			console.log('init Flyouts')
		},
		open: function(){
			console.log('open flyout')
		}
	}

	Flyouts.defaults = {}

	Skeletor.registerPlugin(Flyouts, 'Flyouts');

	test();

});

function test(){
	var $flyout = new Skeletor.Flyouts($('.test-component'), {
		slideSpeed: 500,
		multiExpand: true
	});

	//console.log(Skeletor)
}