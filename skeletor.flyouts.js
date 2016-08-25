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
		uuidPrefix: "accessible-megamenu", // unique ID's are required to indicate aria-owns, aria-controls and aria-labelledby
		menuClass: "accessible-megamenu", // default css class used to define the megamenu styling
		topNavItemClass: "accessible-megamenu-top-nav-item", // default css class for a top-level navigation item in the megamenu
		panelClass: "accessible-megamenu-panel", // default css class for a megamenu panel
		panelGroupClass: "accessible-megamenu-panel-group", // default css class for a group of items within a megamenu panel
		hoverClass: "hover", // default css class for the hover state
		focusClass: "focus", // default css class for the focus state
		openClass: "open" // default css class for the open state
	};

	Skeletor.Plugin.create(Flyouts, {
		_init: function(element) {
			console.log('init flyouts')
		},
		_test: function(element) {
			console.log('init test')
		},
		open: function(){
			console.log('open flyout')
		}
	});
});