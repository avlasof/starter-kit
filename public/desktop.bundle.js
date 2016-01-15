var desktop =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp_name_"];
/******/ 	window["webpackJsonp_name_"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _slider = __webpack_require__(1);

	var _slider2 = _interopRequireDefault(_slider);

	var slider = new _slider2['default']($('.jsSlider'));
	slider.init({
	    items: 1,
	    nav: true,
	    margin: 0
	});

	$('.jsModalVideoShow').click(function () {
	    var _this = this;

	    __webpack_require__.e/* nsure */(1, function (require) {
	        var Modal = __webpack_require__(3);
	        var modalVideo = new Modal();
	        modalVideo.show($(_this));
	    });

	    return false;
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	__webpack_require__(2);

	var Slider = (function () {
	    function Slider(container) {
	        _classCallCheck(this, Slider);

	        this.container = container;
	    }

	    _createClass(Slider, [{
	        key: 'init',
	        value: function init(options) {
	            options = options || {};

	            this.container.owlCarousel(options);
	        }
	    }]);

	    return Slider;
	})();

	exports['default'] = Slider;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	/**
	 * Owl carousel
	 * @version 2.0.0-beta.3
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 * @todo Lazy Load Icon
	 * @todo prevent animationend bubling
	 * @todo itemsScaleUp
	 * @todo Test Zepto
	 * @todo stagePadding calculate wrong active classes
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates a carousel.
		 * @class The Owl Carousel.
		 * @public
		 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
		 * @param {Object} [options] - The options
		 */
		function Owl(element, options) {

			/**
			 * Current settings for the carousel.
			 * @public
			 */
			this.settings = null;

			/**
			 * Current options set by the caller including defaults.
			 * @public
			 */
			this.options = $.extend({}, Owl.Defaults, options);

			/**
			 * Plugin element.
			 * @public
			 */
			this.$element = $(element);

			/**
			 * Proxied event handlers.
			 * @protected
			 */
			this._handlers = {};

			/**
			 * References to the running plugins of this carousel.
			 * @protected
			 */
			this._plugins = {};

			/**
			 * Currently suppressed events to prevent them from beeing retriggered.
			 * @protected
			 */
			this._supress = {};

			/**
			 * Absolute current position.
			 * @protected
			 */
			this._current = null;

			/**
			 * Animation speed in milliseconds.
			 * @protected
			 */
			this._speed = null;

			/**
			 * Coordinates of all items in pixel.
			 * @todo The name of this member is missleading.
			 * @protected
			 */
			this._coordinates = [];

			/**
			 * Current breakpoint.
			 * @todo Real media queries would be nice.
			 * @protected
			 */
			this._breakpoint = null;

			/**
			 * Current width of the plugin element.
			 */
			this._width = null;

			/**
			 * All real items.
			 * @protected
			 */
			this._items = [];

			/**
			 * All cloned items.
			 * @protected
			 */
			this._clones = [];

			/**
			 * Merge values of all items.
			 * @todo Maybe this could be part of a plugin.
			 * @protected
			 */
			this._mergers = [];

			/**
			 * Widths of all items.
			 */
			this._widths = [];

			/**
			 * Invalidated parts within the update process.
			 * @protected
			 */
			this._invalidated = {};

			/**
			 * Ordered list of workers for the update process.
			 * @protected
			 */
			this._pipe = [];

			/**
			 * Current state information for the drag operation.
			 * @todo #261
			 * @protected
			 */
			this._drag = {
				time: null,
				target: null,
				pointer: null,
				stage: {
					start: null,
					current: null
				},
				direction: null
			};

			/**
			 * Current state information and their tags.
			 * @type {Object}
			 * @protected
			 */
			this._states = {
				current: {},
				tags: {
					'initializing': [ 'busy' ],
					'animating': [ 'busy' ],
					'dragging': [ 'interacting' ]
				}
			};

			$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
				this._handlers[handler] = $.proxy(this[handler], this);
			}, this));

			$.each(Owl.Plugins, $.proxy(function(key, plugin) {
				this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
					= new plugin(this);
			}, this));

			$.each(Owl.Workers, $.proxy(function(priority, worker) {
				this._pipe.push({
					'filter': worker.filter,
					'run': $.proxy(worker.run, this)
				});
			}, this));

			this.setup();
			this.initialize();
		}

		/**
		 * Default options for the carousel.
		 * @public
		 */
		Owl.Defaults = {
			items: 3,
			loop: false,
			center: false,
			rewind: false,

			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			freeDrag: false,

			margin: 0,
			stagePadding: 0,

			merge: false,
			mergeFit: true,
			autoWidth: false,

			startPosition: 0,
			rtl: false,

			smartSpeed: 250,
			fluidSpeed: false,
			dragEndSpeed: false,

			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: window,

			fallbackEasing: 'swing',

			info: false,

			nestedItemSelector: false,
			itemElement: 'div',
			stageElement: 'div',

			refreshClass: 'owl-refresh',
			loadedClass: 'owl-loaded',
			loadingClass: 'owl-loading',
			rtlClass: 'owl-rtl',
			responsiveClass: 'owl-responsive',
			dragClass: 'owl-drag',
			itemClass: 'owl-item',
			stageClass: 'owl-stage',
			stageOuterClass: 'owl-stage-outer',
			grabClass: 'owl-grab'
		};

		/**
		 * Enumeration for width.
		 * @public
		 * @readonly
		 * @enum {String}
		 */
		Owl.Width = {
			Default: 'default',
			Inner: 'inner',
			Outer: 'outer'
		};

		/**
		 * Enumeration for types.
		 * @public
		 * @readonly
		 * @enum {String}
		 */
		Owl.Type = {
			Event: 'event',
			State: 'state'
		};

		/**
		 * Contains all registered plugins.
		 * @public
		 */
		Owl.Plugins = {};

		/**
		 * List of workers involved in the update process.
		 */
		Owl.Workers = [ {
			filter: [ 'width', 'settings' ],
			run: function() {
				this._width = this.$element.width();
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				cache.current = this._items && this._items[this.relative(this._current)];
			}
		}, {
			filter: [ 'items', 'settings' ],
			run: function() {
				this.$stage.children('.cloned').remove();
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				var margin = this.settings.margin || '',
					grid = !this.settings.autoWidth,
					rtl = this.settings.rtl,
					css = {
						'width': 'auto',
						'margin-left': rtl ? margin : '',
						'margin-right': rtl ? '' : margin
					};

				!grid && this.$stage.children().css(css);

				cache.css = css;
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
					merge = null,
					iterator = this._items.length,
					grid = !this.settings.autoWidth,
					widths = [];

				cache.items = {
					merge: false,
					width: width
				};

				while (iterator--) {
					merge = this._mergers[iterator];
					merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

					cache.items.merge = merge > 1 || cache.items.merge;

					widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
				}

				this._widths = widths;
			}
		}, {
			filter: [ 'items', 'settings' ],
			run: function() {
				var clones = [],
					items = this._items,
					settings = this.settings,
					view = Math.max(settings.items * 2, 4),
					size = Math.ceil(items.length / 2) * 2,
					repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
					append = '',
					prepend = '';

				repeat /= 2;

				while (repeat--) {
					clones.push(this.normalize(clones.length / 2, true));
					append = append + items[clones[clones.length - 1]][0].outerHTML;
					clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
					prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				}

				this._clones = clones;

				$(append).addClass('cloned').appendTo(this.$stage);
				$(prepend).addClass('cloned').prependTo(this.$stage);
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function() {
				var rtl = this.settings.rtl ? 1 : -1,
					size = this._clones.length + this._items.length,
					iterator = -1,
					previous = 0,
					current = 0,
					coordinates = [];

				while (++iterator < size) {
					previous = coordinates[iterator - 1] || 0;
					current = this._widths[this.relative(iterator)] + this.settings.margin;
					coordinates.push(previous + current * rtl);
				}

				this._coordinates = coordinates;
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function() {
				var padding = this.settings.stagePadding,
					coordinates = this._coordinates,
					css = {
						'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
						'padding-left': padding || '',
						'padding-right': padding || ''
					};

				this.$stage.css(css);
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				var iterator = this._coordinates.length,
					grid = !this.settings.autoWidth,
					items = this.$stage.children();

				if (grid && cache.items.merge) {
					while (iterator--) {
						cache.css.width = this._widths[this.relative(iterator)];
						items.eq(iterator).css(cache.css);
					}
				} else if (grid) {
					cache.css.width = cache.items.width;
					items.css(cache.css);
				}
			}
		}, {
			filter: [ 'items' ],
			run: function() {
				this._coordinates.length < 1 && this.$stage.removeAttr('style');
			}
		}, {
			filter: [ 'width', 'items', 'settings' ],
			run: function(cache) {
				cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
				cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
				this.reset(cache.current);
			}
		}, {
			filter: [ 'position' ],
			run: function() {
				this.animate(this.coordinates(this._current));
			}
		}, {
			filter: [ 'width', 'position', 'items', 'settings' ],
			run: function() {
				var rtl = this.settings.rtl ? 1 : -1,
					padding = this.settings.stagePadding * 2,
					begin = this.coordinates(this.current()) + padding,
					end = begin + this.width() * rtl,
					inner, outer, matches = [], i, n;

				for (i = 0, n = this._coordinates.length; i < n; i++) {
					inner = this._coordinates[i - 1] || 0;
					outer = Math.abs(this._coordinates[i]) + padding * rtl;

					if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
						|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
						matches.push(i);
					}
				}

				this.$stage.children('.active').removeClass('active');
				this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

				if (this.settings.center) {
					this.$stage.children('.center').removeClass('center');
					this.$stage.children().eq(this.current()).addClass('center');
				}
			}
		} ];

		/**
		 * Initializes the carousel.
		 * @protected
		 */
		Owl.prototype.initialize = function() {
			this.enter('initializing');
			this.trigger('initialize');

			this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

			if (this.settings.autoWidth && !this.is('pre-loading')) {
				var imgs, nestedSelector, width;
				imgs = this.$element.find('img');
				nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
				width = this.$element.children(nestedSelector).width();

				if (imgs.length && width <= 0) {
					this.preloadAutoWidthImages(imgs);
				}
			}

			this.$element.addClass(this.options.loadingClass);

			// create stage
			this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
				.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

			// append stage
			this.$element.append(this.$stage.parent());

			// append content
			this.replace(this.$element.children().not(this.$stage.parent()));

			// check visibility
			if (this.$element.is(':visible')) {
				// update view
				this.refresh();
			} else {
				// invalidate width
				this.invalidate('width');
			}

			this.$element
				.removeClass(this.options.loadingClass)
				.addClass(this.options.loadedClass);

			// register event handlers
			this.registerEventHandlers();

			this.leave('initializing');
			this.trigger('initialized');
		};

		/**
		 * Setups the current settings.
		 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
		 * @todo Support for media queries by using `matchMedia` would be nice.
		 * @public
		 */
		Owl.prototype.setup = function() {
			var viewport = this.viewport(),
				overwrites = this.options.responsive,
				match = -1,
				settings = null;

			if (!overwrites) {
				settings = $.extend({}, this.options);
			} else {
				$.each(overwrites, function(breakpoint) {
					if (breakpoint <= viewport && breakpoint > match) {
						match = Number(breakpoint);
					}
				});

				settings = $.extend({}, this.options, overwrites[match]);
				delete settings.responsive;

				// responsive class
				if (settings.responsiveClass) {
					this.$element.attr('class',
						this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
					);
				}
			}

			if (this.settings === null || this._breakpoint !== match) {
				this.trigger('change', { property: { name: 'settings', value: settings } });
				this._breakpoint = match;
				this.settings = settings;
				this.invalidate('settings');
				this.trigger('changed', { property: { name: 'settings', value: this.settings } });
			}
		};

		/**
		 * Updates option logic if necessery.
		 * @protected
		 */
		Owl.prototype.optionsLogic = function() {
			if (this.settings.autoWidth) {
				this.settings.stagePadding = false;
				this.settings.merge = false;
			}
		};

		/**
		 * Prepares an item before add.
		 * @todo Rename event parameter `content` to `item`.
		 * @protected
		 * @returns {jQuery|HTMLElement} - The item container.
		 */
		Owl.prototype.prepare = function(item) {
			var event = this.trigger('prepare', { content: item });

			if (!event.data) {
				event.data = $('<' + this.settings.itemElement + '/>')
					.addClass(this.options.itemClass).append(item)
			}

			this.trigger('prepared', { content: event.data });

			return event.data;
		};

		/**
		 * Updates the view.
		 * @public
		 */
		Owl.prototype.update = function() {
			var i = 0,
				n = this._pipe.length,
				filter = $.proxy(function(p) { return this[p] }, this._invalidated),
				cache = {};

			while (i < n) {
				if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
					this._pipe[i].run(cache);
				}
				i++;
			}

			this._invalidated = {};

			!this.is('valid') && this.enter('valid');
		};

		/**
		 * Gets the width of the view.
		 * @public
		 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
		 * @returns {Number} - The width of the view in pixel.
		 */
		Owl.prototype.width = function(dimension) {
			dimension = dimension || Owl.Width.Default;
			switch (dimension) {
				case Owl.Width.Inner:
				case Owl.Width.Outer:
					return this._width;
				default:
					return this._width - this.settings.stagePadding * 2 + this.settings.margin;
			}
		};

		/**
		 * Refreshes the carousel primarily for adaptive purposes.
		 * @public
		 */
		Owl.prototype.refresh = function() {
			this.enter('refreshing');
			this.trigger('refresh');

			this.setup();

			this.optionsLogic();

			this.$element.addClass(this.options.refreshClass);

			this.update();

			this.$element.removeClass(this.options.refreshClass);

			this.leave('refreshing');
			this.trigger('refreshed');
		};

		/**
		 * Checks window `resize` event.
		 * @protected
		 */
		Owl.prototype.onThrottledResize = function() {
			window.clearTimeout(this.resizeTimer);
			this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
		};

		/**
		 * Checks window `resize` event.
		 * @protected
		 */
		Owl.prototype.onResize = function() {
			if (!this._items.length) {
				return false;
			}

			if (this._width === this.$element.width()) {
				return false;
			}

			if (!this.$element.is(':visible')) {
				return false;
			}

			this.enter('resizing');

			if (this.trigger('resize').isDefaultPrevented()) {
				this.leave('resizing');
				return false;
			}

			this.invalidate('width');

			this.refresh();

			this.leave('resizing');
			this.trigger('resized');
		};

		/**
		 * Registers event handlers.
		 * @todo Check `msPointerEnabled`
		 * @todo #261
		 * @protected
		 */
		Owl.prototype.registerEventHandlers = function() {
			if ($.support.transition) {
				this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
			}

			if (this.settings.responsive !== false) {
				this.on(window, 'resize', this._handlers.onThrottledResize);
			}

			if (this.settings.mouseDrag) {
				this.$element.addClass(this.options.dragClass);
				this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
				this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
			}

			if (this.settings.touchDrag){
				this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
				this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
			}
		};

		/**
		 * Handles `touchstart` and `mousedown` events.
		 * @todo Horizontal swipe threshold as option
		 * @todo #261
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.onDragStart = function(event) {
			var stage = null;

			if (event.which === 3) {
				return;
			}

			if ($.support.transform) {
				stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
				stage = {
					x: stage[stage.length === 16 ? 12 : 4],
					y: stage[stage.length === 16 ? 13 : 5]
				};
			} else {
				stage = this.$stage.position();
				stage = {
					x: this.settings.rtl ?
						stage.left + this.$stage.width() - this.width() + this.settings.margin :
						stage.left,
					y: stage.top
				};
			}

			if (this.is('animating')) {
				$.support.transform ? this.animate(stage.x) : this.$stage.stop()
				this.invalidate('position');
			}

			this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

			this.speed(0);

			this._drag.time = new Date().getTime();
			this._drag.target = $(event.target);
			this._drag.stage.start = stage;
			this._drag.stage.current = stage;
			this._drag.pointer = this.pointer(event);

			$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

			$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
				var delta = this.difference(this._drag.pointer, this.pointer(event));

				$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

				if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
					return;
				}

				event.preventDefault();

				this.enter('dragging');
				this.trigger('drag');
			}, this));
		};

		/**
		 * Handles the `touchmove` and `mousemove` events.
		 * @todo #261
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.onDragMove = function(event) {
			var minimum = null,
				maximum = null,
				pull = null,
				delta = this.difference(this._drag.pointer, this.pointer(event)),
				stage = this.difference(this._drag.stage.start, delta);

			if (!this.is('dragging')) {
				return;
			}

			event.preventDefault();

			if (this.settings.loop) {
				minimum = this.coordinates(this.minimum());
				maximum = this.coordinates(this.maximum() + 1) - minimum;
				stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
			} else {
				minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
				maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
				pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
				stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
			}

			this._drag.stage.current = stage;

			this.animate(stage.x);
		};

		/**
		 * Handles the `touchend` and `mouseup` events.
		 * @todo #261
		 * @todo Threshold for click event
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.onDragEnd = function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event)),
				stage = this._drag.stage.current,
				direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

			$(document).off('.owl.core');

			this.$element.removeClass(this.options.grabClass);

			if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
				this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
				this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
				this.invalidate('position');
				this.update();

				this._drag.direction = direction;

				if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
					this._drag.target.one('click.owl.core', function() { return false; });
				}
			}

			if (!this.is('dragging')) {
				return;
			}

			this.leave('dragging');
			this.trigger('dragged');
		};

		/**
		 * Gets absolute position of the closest item for a coordinate.
		 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
		 * @protected
		 * @param {Number} coordinate - The coordinate in pixel.
		 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
		 * @return {Number} - The absolute position of the closest item.
		 */
		Owl.prototype.closest = function(coordinate, direction) {
			var position = -1,
				pull = 30,
				width = this.width(),
				coordinates = this.coordinates();

			if (!this.settings.freeDrag) {
				// check closest item
				$.each(coordinates, $.proxy(function(index, value) {
					if (coordinate > value - pull && coordinate < value + pull) {
						position = index;
					} else if (this.op(coordinate, '<', value)
						&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
						position = direction === 'left' ? index + 1 : index;
					}
					return position === -1;
				}, this));
			}

			if (!this.settings.loop) {
				// non loop boundries
				if (this.op(coordinate, '>', coordinates[this.minimum()])) {
					position = coordinate = this.minimum();
				} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
					position = coordinate = this.maximum();
				}
			}

			return position;
		};

		/**
		 * Animates the stage.
		 * @todo #270
		 * @public
		 * @param {Number} coordinate - The coordinate in pixels.
		 */
		Owl.prototype.animate = function(coordinate) {
			var animate = this.speed() > 0;

			this.is('animating') && this.onTransitionEnd();

			if (animate) {
				this.enter('animating');
				this.trigger('translate');
			}

			if ($.support.transform3d && $.support.transition) {
				this.$stage.css({
					transform: 'translate3d(' + coordinate + 'px,0px,0px)',
					transition: (this.speed() / 1000) + 's'
				});
			} else if (animate) {
				this.$stage.animate({
					left: coordinate + 'px'
				}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
			} else {
				this.$stage.css({
					left: coordinate + 'px'
				});
			}
		};

		/**
		 * Checks whether the carousel is in a specific state or not.
		 * @param {String} state - The state to check.
		 * @returns {Boolean} - The flag which indicates if the carousel is busy.
		 */
		Owl.prototype.is = function(state) {
			return this._states.current[state] && this._states.current[state] > 0;
		};

		/**
		 * Sets the absolute position of the current item.
		 * @public
		 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
		 * @returns {Number} - The absolute position of the current item.
		 */
		Owl.prototype.current = function(position) {
			if (position === undefined) {
				return this._current;
			}

			if (this._items.length === 0) {
				return undefined;
			}

			position = this.normalize(position);

			if (this._current !== position) {
				var event = this.trigger('change', { property: { name: 'position', value: position } });

				if (event.data !== undefined) {
					position = this.normalize(event.data);
				}

				this._current = position;

				this.invalidate('position');

				this.trigger('changed', { property: { name: 'position', value: this._current } });
			}

			return this._current;
		};

		/**
		 * Invalidates the given part of the update routine.
		 * @param {String} [part] - The part to invalidate.
		 * @returns {Array.<String>} - The invalidated parts.
		 */
		Owl.prototype.invalidate = function(part) {
			if ($.type(part) === 'string') {
				this._invalidated[part] = true;
				this.is('valid') && this.leave('valid');
			}
			return $.map(this._invalidated, function(v, i) { return i });
		};

		/**
		 * Resets the absolute position of the current item.
		 * @public
		 * @param {Number} position - The absolute position of the new item.
		 */
		Owl.prototype.reset = function(position) {
			position = this.normalize(position);

			if (position === undefined) {
				return;
			}

			this._speed = 0;
			this._current = position;

			this.suppress([ 'translate', 'translated' ]);

			this.animate(this.coordinates(position));

			this.release([ 'translate', 'translated' ]);
		};

		/**
		 * Normalizes an absolute or a relative position of an item.
		 * @public
		 * @param {Number} position - The absolute or relative position to normalize.
		 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
		 * @returns {Number} - The normalized position.
		 */
		Owl.prototype.normalize = function(position, relative) {
			var n = this._items.length,
				m = relative ? 0 : this._clones.length;

			if (!$.isNumeric(position) || n < 1) {
				position = undefined;
			} else if (position < 0 || position >= n + m) {
				position = ((position - m / 2) % n + n) % n + m / 2;
			}

			return position;
		};

		/**
		 * Converts an absolute position of an item into a relative one.
		 * @public
		 * @param {Number} position - The absolute position to convert.
		 * @returns {Number} - The converted position.
		 */
		Owl.prototype.relative = function(position) {
			position -= this._clones.length / 2;
			return this.normalize(position, true);
		};

		/**
		 * Gets the maximum position for the current item.
		 * @public
		 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
		 * @returns {Number}
		 */
		Owl.prototype.maximum = function(relative) {
			var settings = this.settings,
				maximum = this._coordinates.length,
				boundary = Math.abs(this._coordinates[maximum - 1]) - this._width,
				i = -1, j;

			if (settings.loop) {
				maximum = this._clones.length / 2 + this._items.length - 1;
			} else if (settings.autoWidth || settings.merge) {
				// binary search
				while (maximum - i > 1) {
					Math.abs(this._coordinates[j = maximum + i >> 1]) < boundary
						? i = j : maximum = j;
				}
			} else if (settings.center) {
				maximum = this._items.length - 1;
			} else {
				maximum = this._items.length - settings.items;
			}

			if (relative) {
				maximum -= this._clones.length / 2;
			}

			return Math.max(maximum, 0);
		};

		/**
		 * Gets the minimum position for the current item.
		 * @public
		 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
		 * @returns {Number}
		 */
		Owl.prototype.minimum = function(relative) {
			return relative ? 0 : this._clones.length / 2;
		};

		/**
		 * Gets an item at the specified relative position.
		 * @public
		 * @param {Number} [position] - The relative position of the item.
		 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
		 */
		Owl.prototype.items = function(position) {
			if (position === undefined) {
				return this._items.slice();
			}

			position = this.normalize(position, true);
			return this._items[position];
		};

		/**
		 * Gets an item at the specified relative position.
		 * @public
		 * @param {Number} [position] - The relative position of the item.
		 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
		 */
		Owl.prototype.mergers = function(position) {
			if (position === undefined) {
				return this._mergers.slice();
			}

			position = this.normalize(position, true);
			return this._mergers[position];
		};

		/**
		 * Gets the absolute positions of clones for an item.
		 * @public
		 * @param {Number} [position] - The relative position of the item.
		 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
		 */
		Owl.prototype.clones = function(position) {
			var odd = this._clones.length / 2,
				even = odd + this._items.length,
				map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

			if (position === undefined) {
				return $.map(this._clones, function(v, i) { return map(i) });
			}

			return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
		};

		/**
		 * Sets the current animation speed.
		 * @public
		 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
		 * @returns {Number} - The current animation speed in milliseconds.
		 */
		Owl.prototype.speed = function(speed) {
			if (speed !== undefined) {
				this._speed = speed;
			}

			return this._speed;
		};

		/**
		 * Gets the coordinate of an item.
		 * @todo The name of this method is missleanding.
		 * @public
		 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
		 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
		 */
		Owl.prototype.coordinates = function(position) {
			var coordinate = null;

			if (position === undefined) {
				return $.map(this._coordinates, $.proxy(function(coordinate, index) {
					return this.coordinates(index);
				}, this));
			}

			if (this.settings.center) {
				coordinate = this._coordinates[position];
				coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
			} else {
				coordinate = this._coordinates[position - 1] || 0;
			}

			return coordinate;
		};

		/**
		 * Calculates the speed for a translation.
		 * @protected
		 * @param {Number} from - The absolute position of the start item.
		 * @param {Number} to - The absolute position of the target item.
		 * @param {Number} [factor=undefined] - The time factor in milliseconds.
		 * @returns {Number} - The time in milliseconds for the translation.
		 */
		Owl.prototype.duration = function(from, to, factor) {
			return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
		};

		/**
		 * Slides to the specified item.
		 * @public
		 * @param {Number} position - The position of the item.
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 */
		Owl.prototype.to = function(position, speed) {
			var current = this.current(),
				revert = null,
				distance = position - this.relative(current),
				direction = (distance > 0) - (distance < 0),
				items = this._items.length,
				minimum = this.minimum(),
				maximum = this.maximum();

			if (this.settings.loop) {
				if (!this.settings.rewind && Math.abs(distance) > items / 2) {
					distance += direction * -1 * items;
				}

				position = current + distance;
				revert = ((position - minimum) % items + items) % items + minimum;

				if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
					current = revert - distance;
					position = revert;
					this.reset(current);
				}
			} else if (this.settings.rewind) {
				maximum += 1;
				position = (position % maximum + maximum) % maximum;
			} else {
				position = Math.max(minimum, Math.min(maximum, position));
			}

			this.speed(this.duration(current, position, speed));
			this.current(position);

			if (this.$element.is(':visible')) {
				this.update();
			}
		};

		/**
		 * Slides to the next item.
		 * @public
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 */
		Owl.prototype.next = function(speed) {
			speed = speed || false;
			this.to(this.relative(this.current()) + 1, speed);
		};

		/**
		 * Slides to the previous item.
		 * @public
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 */
		Owl.prototype.prev = function(speed) {
			speed = speed || false;
			this.to(this.relative(this.current()) - 1, speed);
		};

		/**
		 * Handles the end of an animation.
		 * @protected
		 * @param {Event} event - The event arguments.
		 */
		Owl.prototype.onTransitionEnd = function(event) {

			// if css2 animation then event object is undefined
			if (event !== undefined) {
				event.stopPropagation();

				// Catch only owl-stage transitionEnd event
				if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
					return false;
				}
			}

			this.leave('animating');
			this.trigger('translated');
		};

		/**
		 * Gets viewport width.
		 * @protected
		 * @return {Number} - The width in pixel.
		 */
		Owl.prototype.viewport = function() {
			var width;
			if (this.options.responsiveBaseElement !== window) {
				width = $(this.options.responsiveBaseElement).width();
			} else if (window.innerWidth) {
				width = window.innerWidth;
			} else if (document.documentElement && document.documentElement.clientWidth) {
				width = document.documentElement.clientWidth;
			} else {
				throw 'Can not detect viewport width.';
			}
			return width;
		};

		/**
		 * Replaces the current content.
		 * @public
		 * @param {HTMLElement|jQuery|String} content - The new content.
		 */
		Owl.prototype.replace = function(content) {
			this.$stage.empty();
			this._items = [];

			if (content) {
				content = (content instanceof jQuery) ? content : $(content);
			}

			if (this.settings.nestedItemSelector) {
				content = content.find('.' + this.settings.nestedItemSelector);
			}

			content.filter(function() {
				return this.nodeType === 1;
			}).each($.proxy(function(index, item) {
				item = this.prepare(item);
				this.$stage.append(item);
				this._items.push(item);
				this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
			}, this));

			this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

			this.invalidate('items');
		};

		/**
		 * Adds an item.
		 * @todo Use `item` instead of `content` for the event arguments.
		 * @public
		 * @param {HTMLElement|jQuery|String} content - The item content to add.
		 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
		 */
		Owl.prototype.add = function(content, position) {
			var current = this.relative(this._current);

			position = position === undefined ? this._items.length : this.normalize(position, true);
			content = content instanceof jQuery ? content : $(content);

			this.trigger('add', { content: content, position: position });

			content = this.prepare(content);

			if (this._items.length === 0 || position === this._items.length) {
				this._items.length === 0 && this.$stage.append(content);
				this._items.length !== 0 && this._items[position - 1].after(content);
				this._items.push(content);
				this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
			} else {
				this._items[position].before(content);
				this._items.splice(position, 0, content);
				this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
			}

			this._items[current] && this.reset(this._items[current].index());

			this.invalidate('items');

			this.trigger('added', { content: content, position: position });
		};

		/**
		 * Removes an item by its position.
		 * @todo Use `item` instead of `content` for the event arguments.
		 * @public
		 * @param {Number} position - The relative position of the item to remove.
		 */
		Owl.prototype.remove = function(position) {
			position = this.normalize(position, true);

			if (position === undefined) {
				return;
			}

			this.trigger('remove', { content: this._items[position], position: position });

			this._items[position].remove();
			this._items.splice(position, 1);
			this._mergers.splice(position, 1);

			this.invalidate('items');

			this.trigger('removed', { content: null, position: position });
		};

		/**
		 * Preloads images with auto width.
		 * @todo Replace by a more generic approach
		 * @protected
		 */
		Owl.prototype.preloadAutoWidthImages = function(images) {
			images.each($.proxy(function(i, element) {
				this.enter('pre-loading');
				element = $(element);
				$(new Image()).one('load', $.proxy(function(e) {
					element.attr('src', e.target.src);
					element.css('opacity', 1);
					this.leave('pre-loading');
					!this.is('pre-loading') && !this.is('initializing') && this.refresh();
				}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
			}, this));
		};

		/**
		 * Destroys the carousel.
		 * @public
		 */
		Owl.prototype.destroy = function() {

			this.$element.off('.owl.core');
			this.$stage.off('.owl.core');
			$(document).off('.owl.core');

			if (this.settings.responsive !== false) {
				window.clearTimeout(this.resizeTimer);
				this.off(window, 'resize', this._handlers.onThrottledResize);
			}

			for (var i in this._plugins) {
				this._plugins[i].destroy();
			}

			this.$stage.children('.cloned').remove();

			this.$stage.unwrap();
			this.$stage.children().contents().unwrap();
			this.$stage.children().unwrap();

			this.$element
				.removeClass(this.options.refreshClass)
				.removeClass(this.options.loadingClass)
				.removeClass(this.options.loadedClass)
				.removeClass(this.options.rtlClass)
				.removeClass(this.options.dragClass)
				.removeClass(this.options.grabClass)
				.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
				.removeData('owl.carousel');
		};

		/**
		 * Operators to calculate right-to-left and left-to-right.
		 * @protected
		 * @param {Number} [a] - The left side operand.
		 * @param {String} [o] - The operator.
		 * @param {Number} [b] - The right side operand.
		 */
		Owl.prototype.op = function(a, o, b) {
			var rtl = this.settings.rtl;
			switch (o) {
				case '<':
					return rtl ? a > b : a < b;
				case '>':
					return rtl ? a < b : a > b;
				case '>=':
					return rtl ? a <= b : a >= b;
				case '<=':
					return rtl ? a >= b : a <= b;
				default:
					break;
			}
		};

		/**
		 * Attaches to an internal event.
		 * @protected
		 * @param {HTMLElement} element - The event source.
		 * @param {String} event - The event name.
		 * @param {Function} listener - The event handler to attach.
		 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
		 */
		Owl.prototype.on = function(element, event, listener, capture) {
			if (element.addEventListener) {
				element.addEventListener(event, listener, capture);
			} else if (element.attachEvent) {
				element.attachEvent('on' + event, listener);
			}
		};

		/**
		 * Detaches from an internal event.
		 * @protected
		 * @param {HTMLElement} element - The event source.
		 * @param {String} event - The event name.
		 * @param {Function} listener - The attached event handler to detach.
		 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
		 */
		Owl.prototype.off = function(element, event, listener, capture) {
			if (element.removeEventListener) {
				element.removeEventListener(event, listener, capture);
			} else if (element.detachEvent) {
				element.detachEvent('on' + event, listener);
			}
		};

		/**
		 * Triggers a public event.
		 * @todo Remove `status`, `relatedTarget` should be used instead.
		 * @protected
		 * @param {String} name - The event name.
		 * @param {*} [data=null] - The event data.
		 * @param {String} [namespace=carousel] - The event namespace.
		 * @param {String} [state] - The state which is associated with the event.
		 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
		 * @returns {Event} - The event arguments.
		 */
		Owl.prototype.trigger = function(name, data, namespace, state, enter) {
			var status = {
				item: { count: this._items.length, index: this.current() }
			}, handler = $.camelCase(
				$.grep([ 'on', name, namespace ], function(v) { return v })
					.join('-').toLowerCase()
			), event = $.Event(
				[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
				$.extend({ relatedTarget: this }, status, data)
			);

			if (!this._supress[name]) {
				$.each(this._plugins, function(name, plugin) {
					if (plugin.onTrigger) {
						plugin.onTrigger(event);
					}
				});

				this.register({ type: Owl.Type.Event, name: name });
				this.$element.trigger(event);

				if (this.settings && typeof this.settings[handler] === 'function') {
					this.settings[handler].call(this, event);
				}
			}

			return event;
		};

		/**
		 * Enters a state.
		 * @param name - The state name.
		 */
		Owl.prototype.enter = function(name) {
			$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
				if (this._states.current[name] === undefined) {
					this._states.current[name] = 0;
				}

				this._states.current[name]++;
			}, this));
		};

		/**
		 * Leaves a state.
		 * @param name - The state name.
		 */
		Owl.prototype.leave = function(name) {
			$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
				this._states.current[name]--;
			}, this));
		};

		/**
		 * Registers an event or state.
		 * @public
		 * @param {Object} object - The event or state to register.
		 */
		Owl.prototype.register = function(object) {
			if (object.type === Owl.Type.Event) {
				if (!$.event.special[object.name]) {
					$.event.special[object.name] = {};
				}

				if (!$.event.special[object.name].owl) {
					var _default = $.event.special[object.name]._default;
					$.event.special[object.name]._default = function(e) {
						if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
							return _default.apply(this, arguments);
						}
						return e.namespace && e.namespace.indexOf('owl') > -1;
					};
					$.event.special[object.name].owl = true;
				}
			} else if (object.type === Owl.Type.State) {
				if (!this._states.tags[object.name]) {
					this._states.tags[object.name] = object.tags;
				} else {
					this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
				}

				this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
					return $.inArray(tag, this._states.tags[object.name]) === i;
				}, this));
			}
		};

		/**
		 * Suppresses events.
		 * @protected
		 * @param {Array.<String>} events - The events to suppress.
		 */
		Owl.prototype.suppress = function(events) {
			$.each(events, $.proxy(function(index, event) {
				this._supress[event] = true;
			}, this));
		};

		/**
		 * Releases suppressed events.
		 * @protected
		 * @param {Array.<String>} events - The events to release.
		 */
		Owl.prototype.release = function(events) {
			$.each(events, $.proxy(function(index, event) {
				delete this._supress[event];
			}, this));
		};

		/**
		 * Gets unified pointer coordinates from event.
		 * @todo #261
		 * @protected
		 * @param {Event} - The `mousedown` or `touchstart` event.
		 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
		 */
		Owl.prototype.pointer = function(event) {
			var result = { x: null, y: null };

			event = event.originalEvent || event || window.event;

			event = event.touches && event.touches.length ?
				event.touches[0] : event.changedTouches && event.changedTouches.length ?
					event.changedTouches[0] : event;

			if (event.pageX) {
				result.x = event.pageX;
				result.y = event.pageY;
			} else {
				result.x = event.clientX;
				result.y = event.clientY;
			}

			return result;
		};

		/**
		 * Gets the difference of two vectors.
		 * @todo #261
		 * @protected
		 * @param {Object} - The first vector.
		 * @param {Object} - The second vector.
		 * @returns {Object} - The difference.
		 */
		Owl.prototype.difference = function(first, second) {
			return {
				x: first.x - second.x,
				y: first.y - second.y
			};
		};

		/**
		 * The jQuery Plugin for the Owl Carousel
		 * @todo Navigation plugin `next` and `prev`
		 * @public
		 */
		$.fn.owlCarousel = function(option) {
			var args = Array.prototype.slice.call(arguments, 1);

			return this.each(function() {
				var $this = $(this),
					data = $this.data('owl.carousel');

				if (!data) {
					data = new Owl(this, typeof option == 'object' && option);
					$this.data('owl.carousel', data);

					$.each([
						'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
					], function(i, event) {
						data.register({ type: Owl.Type.Event, name: event });
						data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
							if (e.namespace && e.relatedTarget !== this) {
								this.suppress([ event ]);
								data[event].apply(this, [].slice.call(arguments, 1));
								this.release([ event ]);
							}
						}, data));
					});
				}

				if (typeof option == 'string' && option.charAt(0) !== '_') {
					data[option].apply(data, args);
				}
			});
		};

		/**
		 * The constructor for the jQuery Plugin
		 * @public
		 */
		$.fn.owlCarousel.Constructor = Owl;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * AutoRefresh Plugin
	 * @version 2.0.0-beta.3
	 * @author Artus Kolanowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the auto refresh plugin.
		 * @class The Auto Refresh Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var AutoRefresh = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * Refresh interval.
			 * @protected
			 * @type {number}
			 */
			this._interval = null;

			/**
			 * Whether the element is currently visible or not.
			 * @protected
			 * @type {Boolean}
			 */
			this._visible = null;

			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.autoRefresh) {
						this.watch();
					}
				}, this)
			};

			// set default options
			this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

			// register event handlers
			this._core.$element.on(this._handlers);
		};

		/**
		 * Default options.
		 * @public
		 */
		AutoRefresh.Defaults = {
			autoRefresh: true,
			autoRefreshInterval: 500
		};

		/**
		 * Watches the element.
		 */
		AutoRefresh.prototype.watch = function() {
			if (this._interval) {
				return;
			}

			this._visible = this._core.$element.is(':visible');
			this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
		};

		/**
		 * Refreshes the element.
		 */
		AutoRefresh.prototype.refresh = function() {
			if (this._core.$element.is(':visible') === this._visible) {
				return;
			}

			this._visible = !this._visible;

			this._core.$element.toggleClass('owl-hidden', !this._visible);

			this._visible && (this._core.invalidate('width') && this._core.refresh());
		};

		/**
		 * Destroys the plugin.
		 */
		AutoRefresh.prototype.destroy = function() {
			var handler, property;

			window.clearInterval(this._interval);

			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Lazy Plugin
	 * @version 2.0.0-beta.3
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the lazy plugin.
		 * @class The Lazy Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var Lazy = function(carousel) {

			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * Already loaded items.
			 * @protected
			 * @type {Array.<jQuery>}
			 */
			this._loaded = [];

			/**
			 * Event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
					if (!e.namespace) {
						return;
					}

					if (!this._core.settings || !this._core.settings.lazyLoad) {
						return;
					}

					if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
						var settings = this._core.settings,
							n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
							i = ((settings.center && n * -1) || 0),
							position = ((e.property && e.property.value) || this._core.current()) + i,
							clones = this._core.clones().length,
							load = $.proxy(function(i, v) { this.load(v) }, this);

						while (i++ < n) {
							this.load(clones / 2 + this._core.relative(position));
							clones && $.each(this._core.clones(this._core.relative(position)), load);
							position++;
						}
					}
				}, this)
			};

			// set the default options
			this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

			// register event handler
			this._core.$element.on(this._handlers);
		}

		/**
		 * Default options.
		 * @public
		 */
		Lazy.Defaults = {
			lazyLoad: false
		}

		/**
		 * Loads all resources of an item at the specified position.
		 * @param {Number} position - The absolute position of the item.
		 * @protected
		 */
		Lazy.prototype.load = function(position) {
			var $item = this._core.$stage.children().eq(position),
				$elements = $item && $item.find('.owl-lazy');

			if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
				return;
			}

			$elements.each($.proxy(function(index, element) {
				var $element = $(element), image,
					url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

				this._core.trigger('load', { element: $element, url: url }, 'lazy');

				if ($element.is('img')) {
					$element.one('load.owl.lazy', $.proxy(function() {
						$element.css('opacity', 1);
						this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
					}, this)).attr('src', url);
				} else {
					image = new Image();
					image.onload = $.proxy(function() {
						$element.css({
							'background-image': 'url(' + url + ')',
							'opacity': '1'
						});
						this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
					}, this);
					image.src = url;
				}
			}, this));

			this._loaded.push($item.get(0));
		}

		/**
		 * Destroys the plugin.
		 * @public
		 */
		Lazy.prototype.destroy = function() {
			var handler, property;

			for (handler in this.handlers) {
				this._core.$element.off(handler, this.handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * AutoHeight Plugin
	 * @version 2.0.0-beta.3
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the auto height plugin.
		 * @class The Auto Height Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var AutoHeight = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.autoHeight) {
						this.update();
					}
				}, this),
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
						this.update();
					}
				}, this),
				'loaded.owl.lazy': $.proxy(function(e) {
					if (e.namespace && this._core.settings.autoHeight
						&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
						this.update();
					}
				}, this)
			};

			// set default options
			this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

			// register event handlers
			this._core.$element.on(this._handlers);
		};

		/**
		 * Default options.
		 * @public
		 */
		AutoHeight.Defaults = {
			autoHeight: false,
			autoHeightClass: 'owl-height'
		};

		/**
		 * Updates the view.
		 */
		AutoHeight.prototype.update = function() {
			var start = this._core._current,
				end = start + this._core.settings.items,
				visible = this._core.$stage.children().toArray().slice(start, end);
				heights = [],
				maxheight = 0;

			$.each(visible, function(index, item) {
				heights.push($(item).height());
			});

			maxheight = Math.max.apply(null, heights);

			this._core.$stage.parent()
				.height(maxheight)
				.addClass(this._core.settings.autoHeightClass);
		};

		AutoHeight.prototype.destroy = function() {
			var handler, property;

			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Video Plugin
	 * @version 2.0.0-beta.3
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the video plugin.
		 * @class The Video Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var Video = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * Cache all video URLs.
			 * @protected
			 * @type {Object}
			 */
			this._videos = {};

			/**
			 * Current playing item.
			 * @protected
			 * @type {jQuery}
			 */
			this._playing = null;

			/**
			 * All event handlers.
			 * @todo The cloned content removale is too late
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function(e) {
					if (e.namespace) {
						this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
					}
				}, this),
				'resize.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
						e.preventDefault();
					}
				}, this),
				'refreshed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.is('resizing')) {
						this._core.$stage.find('.cloned .owl-video-frame').remove();
					}
				}, this),
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && e.property.name === 'position' && this._playing) {
						this.stop();
					}
				}, this),
				'prepared.owl.carousel': $.proxy(function(e) {
					if (!e.namespace) {
						return;
					}

					var $element = $(e.content).find('.owl-video');

					if ($element.length) {
						$element.css('display', 'none');
						this.fetch($element, $(e.content));
					}
				}, this)
			};

			// set default options
			this._core.options = $.extend({}, Video.Defaults, this._core.options);

			// register event handlers
			this._core.$element.on(this._handlers);

			this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
				this.play(e);
			}, this));
		};

		/**
		 * Default options.
		 * @public
		 */
		Video.Defaults = {
			video: false,
			videoHeight: false,
			videoWidth: false
		};

		/**
		 * Gets the video ID and the type (YouTube/Vimeo only).
		 * @protected
		 * @param {jQuery} target - The target containing the video data.
		 * @param {jQuery} item - The item containing the video.
		 */
		Video.prototype.fetch = function(target, item) {
			var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

			if (url) {
				id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

				if (id[3].indexOf('youtu') > -1) {
					type = 'youtube';
				} else if (id[3].indexOf('vimeo') > -1) {
					type = 'vimeo';
				} else {
					throw new Error('Video URL not supported.');
				}
				id = id[6];
			} else {
				throw new Error('Missing video URL.');
			}

			this._videos[url] = {
				type: type,
				id: id,
				width: width,
				height: height
			};

			item.attr('data-video', url);

			this.thumbnail(target, this._videos[url]);
		};

		/**
		 * Creates video thumbnail.
		 * @protected
		 * @param {jQuery} target - The target containing the video data.
		 * @param {Object} info - The video info object.
		 * @see `fetch`
		 */
		Video.prototype.thumbnail = function(target, video) {
			var tnLink,
				icon,
				path,
				dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
				customTn = target.find('img'),
				srcType = 'src',
				lazyClass = '',
				settings = this._core.settings,
				create = function(path) {
					icon = '<div class="owl-video-play-icon"></div>';

					if (settings.lazyLoad) {
						tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
					} else {
						tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
					}
					target.after(tnLink);
					target.after(icon);
				};

			// wrap video content into owl-video-wrapper div
			target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

			if (this._core.settings.lazyLoad) {
				srcType = 'data-src';
				lazyClass = 'owl-lazy';
			}

			// custom thumbnail
			if (customTn.length) {
				create(customTn.attr(srcType));
				customTn.remove();
				return false;
			}

			if (video.type === 'youtube') {
				path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
				create(path);
			} else if (video.type === 'vimeo') {
				$.ajax({
					type: 'GET',
					url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
					jsonp: 'callback',
					dataType: 'jsonp',
					success: function(data) {
						path = data[0].thumbnail_large;
						create(path);
					}
				});
			}
		};

		/**
		 * Stops the current video.
		 * @public
		 */
		Video.prototype.stop = function() {
			this._core.trigger('stop', null, 'video');
			this._playing.find('.owl-video-frame').remove();
			this._playing.removeClass('owl-video-playing');
			this._playing = null;
			this._core.leave('playing');
			this._core.trigger('stopped', null, 'video');
		};

		/**
		 * Starts the current video.
		 * @public
		 * @param {Event} event - The event arguments.
		 */
		Video.prototype.play = function(event) {
			var target = $(event.target),
				item = target.closest('.' + this._core.settings.itemClass),
				video = this._videos[item.attr('data-video')],
				width = video.width || '100%',
				height = video.height || this._core.$stage.height(),
				html;

			if (this._playing) {
				return;
			}

			this._core.enter('playing');
			this._core.trigger('play', null, 'video');

			item = this._core.items(this._core.relative(item.index()));

			this._core.reset(item.index());

			if (video.type === 'youtube') {
				html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' +
					video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
			} else if (video.type === 'vimeo') {
				html = '<iframe src="http://player.vimeo.com/video/' + video.id +
					'?autoplay=1" width="' + width + '" height="' + height +
					'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
			}

			$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

			this._playing = item.addClass('owl-video-playing');
		};

		/**
		 * Checks whether an video is currently in full screen mode or not.
		 * @todo Bad style because looks like a readonly method but changes members.
		 * @protected
		 * @returns {Boolean}
		 */
		Video.prototype.isInFullScreen = function() {
			var element = document.fullscreenElement || document.mozFullScreenElement ||
					document.webkitFullscreenElement;

			return element && $(element).parent().hasClass('owl-video-frame');
		};

		/**
		 * Destroys the plugin.
		 */
		Video.prototype.destroy = function() {
			var handler, property;

			this._core.$element.off('click.owl.video');

			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.Video = Video;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Animate Plugin
	 * @version 2.0.0-beta.3
	 * @author Bartosz Wojciechowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the animate plugin.
		 * @class The Navigation Plugin
		 * @param {Owl} scope - The Owl Carousel
		 */
		var Animate = function(scope) {
			this.core = scope;
			this.core.options = $.extend({}, Animate.Defaults, this.core.options);
			this.swapping = true;
			this.previous = undefined;
			this.next = undefined;

			this.handlers = {
				'change.owl.carousel': $.proxy(function(e) {
					if (e.namespace && e.property.name == 'position') {
						this.previous = this.core.current();
						this.next = e.property.value;
					}
				}, this),
				'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
					if (e.namespace) {
						this.swapping = e.type == 'translated';
					}
				}, this),
				'translate.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
						this.swap();
					}
				}, this)
			};

			this.core.$element.on(this.handlers);
		};

		/**
		 * Default options.
		 * @public
		 */
		Animate.Defaults = {
			animateOut: false,
			animateIn: false
		};

		/**
		 * Toggles the animation classes whenever an translations starts.
		 * @protected
		 * @returns {Boolean|undefined}
		 */
		Animate.prototype.swap = function() {

			if (this.core.settings.items !== 1) {
				return;
			}

			if (!$.support.animation || !$.support.transition) {
				return;
			}

			this.core.speed(0);

			var left,
				clear = $.proxy(this.clear, this),
				previous = this.core.$stage.children().eq(this.previous),
				next = this.core.$stage.children().eq(this.next),
				incoming = this.core.settings.animateIn,
				outgoing = this.core.settings.animateOut;

			if (this.core.current() === this.previous) {
				return;
			}

			if (outgoing) {
				left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
				previous.one($.support.animation.end, clear)
					.css( { 'left': left + 'px' } )
					.addClass('animated owl-animated-out')
					.addClass(outgoing);
			}

			if (incoming) {
				next.one($.support.animation.end, clear)
					.addClass('animated owl-animated-in')
					.addClass(incoming);
			}
		};

		Animate.prototype.clear = function(e) {
			$(e.target).css( { 'left': '' } )
				.removeClass('animated owl-animated-out owl-animated-in')
				.removeClass(this.core.settings.animateIn)
				.removeClass(this.core.settings.animateOut);
			this.core.onTransitionEnd();
		};

		/**
		 * Destroys the plugin.
		 * @public
		 */
		Animate.prototype.destroy = function() {
			var handler, property;

			for (handler in this.handlers) {
				this.core.$element.off(handler, this.handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Autoplay Plugin
	 * @version 2.0.0-beta.3
	 * @author Bartosz Wojciechowski
	 * @author Artus Kolanowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		/**
		 * Creates the autoplay plugin.
		 * @class The Autoplay Plugin
		 * @param {Owl} scope - The Owl Carousel
		 */
		var Autoplay = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * The autoplay interval.
			 * @type {Number}
			 */
			this._interval = null;

			/**
			 * Indicates whenever the autoplay is paused.
			 * @type {Boolean}
			 */
			this._paused = false;

			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && e.property.name === 'settings') {
						if (this._core.settings.autoplay) {
							this.play();
						} else {
							this.stop();
						}
					}
				}, this),
				'initialized.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.autoplay) {
						this.play();
					}
				}, this),
				'play.owl.autoplay': $.proxy(function(e, t, s) {
					if (e.namespace) {
						this.play(t, s);
					}
				}, this),
				'stop.owl.autoplay': $.proxy(function(e) {
					if (e.namespace) {
						this.stop();
					}
				}, this),
				'mouseover.owl.autoplay': $.proxy(function() {
					if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
						this.pause();
					}
				}, this),
				'mouseleave.owl.autoplay': $.proxy(function() {
					if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
						this.play();
					}
				}, this)
			};

			// register event handlers
			this._core.$element.on(this._handlers);

			// set default options
			this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
		};

		/**
		 * Default options.
		 * @public
		 */
		Autoplay.Defaults = {
			autoplay: false,
			autoplayTimeout: 5000,
			autoplayHoverPause: false,
			autoplaySpeed: false
		};

		/**
		 * Starts the autoplay.
		 * @public
		 * @param {Number} [timeout] - The interval before the next animation starts.
		 * @param {Number} [speed] - The animation speed for the animations.
		 */
		Autoplay.prototype.play = function(timeout, speed) {
			this._paused = false;

			if (this._core.is('rotating')) {
				return;
			}

			this._core.enter('rotating');

			this._interval = window.setInterval($.proxy(function() {
				if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
					return;
				}
				this._core.next(speed || this._core.settings.autoplaySpeed);
			}, this), timeout || this._core.settings.autoplayTimeout);
		};

		/**
		 * Stops the autoplay.
		 * @public
		 */
		Autoplay.prototype.stop = function() {
			if (!this._core.is('rotating')) {
				return;
			}

			window.clearInterval(this._interval);
			this._core.leave('rotating');
		};

		/**
		 * Stops the autoplay.
		 * @public
		 */
		Autoplay.prototype.pause = function() {
			if (!this._core.is('rotating')) {
				return;
			}

			this._paused = true;
		};

		/**
		 * Destroys the plugin.
		 */
		Autoplay.prototype.destroy = function() {
			var handler, property;

			this.stop();

			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Navigation Plugin
	 * @version 2.0.0-beta.3
	 * @author Artus Kolanowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
		'use strict';

		/**
		 * Creates the navigation plugin.
		 * @class The Navigation Plugin
		 * @param {Owl} carousel - The Owl Carousel.
		 */
		var Navigation = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * Indicates whether the plugin is initialized or not.
			 * @protected
			 * @type {Boolean}
			 */
			this._initialized = false;

			/**
			 * The current paging indexes.
			 * @protected
			 * @type {Array}
			 */
			this._pages = [];

			/**
			 * All DOM elements of the user interface.
			 * @protected
			 * @type {Object}
			 */
			this._controls = {};

			/**
			 * Markup for an indicator.
			 * @protected
			 * @type {Array.<String>}
			 */
			this._templates = [];

			/**
			 * The carousel element.
			 * @type {jQuery}
			 */
			this.$element = this._core.$element;

			/**
			 * Overridden methods of the carousel.
			 * @protected
			 * @type {Object}
			 */
			this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			};

			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'prepared.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.dotsData) {
						this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
							$(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot') + '</div>');
					}
				}, this),
				'added.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.dotsData) {
						this._templates.splice(e.position, 0, this._templates.pop());
					}
				}, this),
				'remove.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.dotsData) {
						this._templates.splice(e.position, 1);
					}
				}, this),
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && e.property.name == 'position') {
						this.draw();
					}
				}, this),
				'initialized.owl.carousel': $.proxy(function(e) {
					if (e.namespace && !this._initialized) {
						this._core.trigger('initialize', null, 'navigation');
						this.initialize();
						this.update();
						this.draw();
						this._initialized = true;
						this._core.trigger('initialized', null, 'navigation');
					}
				}, this),
				'refreshed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._initialized) {
						this._core.trigger('refresh', null, 'navigation');
						this.update();
						this.draw();
						this._core.trigger('refreshed', null, 'navigation');
					}
				}, this)
			};

			// set default options
			this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

			// register event handlers
			this.$element.on(this._handlers);
		};

		/**
		 * Default options.
		 * @public
		 * @todo Rename `slideBy` to `navBy`
		 */
		Navigation.Defaults = {
			nav: false,
			navText: [ 'prev', 'next' ],
			navSpeed: false,
			navElement: 'div',
			navContainer: false,
			navContainerClass: 'owl-nav',
			navClass: [ 'owl-prev', 'owl-next' ],
			slideBy: 1,
			dotClass: 'owl-dot',
			dotsClass: 'owl-dots',
			dots: true,
			dotsEach: false,
			dotsData: false,
			dotsSpeed: false,
			dotsContainer: false
		};

		/**
		 * Initializes the layout of the plugin and extends the carousel.
		 * @protected
		 */
		Navigation.prototype.initialize = function() {
			var override,
				settings = this._core.settings;

			// create DOM structure for relative navigation
			this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
				: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

			this._controls.$previous = $('<' + settings.navElement + '>')
				.addClass(settings.navClass[0])
				.html(settings.navText[0])
				.prependTo(this._controls.$relative)
				.on('click', $.proxy(function(e) {
					this.prev(settings.navSpeed);
				}, this));
			this._controls.$next = $('<' + settings.navElement + '>')
				.addClass(settings.navClass[1])
				.html(settings.navText[1])
				.appendTo(this._controls.$relative)
				.on('click', $.proxy(function(e) {
					this.next(settings.navSpeed);
				}, this));

			// create DOM structure for absolute navigation
			if (!settings.dotsData) {
				this._templates = [ $('<div>')
					.addClass(settings.dotClass)
					.append($('<span>'))
					.prop('outerHTML') ];
			}

			this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
				: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

			this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
				var index = $(e.target).parent().is(this._controls.$absolute)
					? $(e.target).index() : $(e.target).parent().index();

				e.preventDefault();

				this.to(index, settings.dotsSpeed);
			}, this));

			// override public methods of the carousel
			for (override in this._overrides) {
				this._core[override] = $.proxy(this[override], this);
			}
		};

		/**
		 * Destroys the plugin.
		 * @protected
		 */
		Navigation.prototype.destroy = function() {
			var handler, control, property, override;

			for (handler in this._handlers) {
				this.$element.off(handler, this._handlers[handler]);
			}
			for (control in this._controls) {
				this._controls[control].remove();
			}
			for (override in this.overides) {
				this._core[override] = this._overrides[override];
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		/**
		 * Updates the internal state.
		 * @protected
		 */
		Navigation.prototype.update = function() {
			var i, j, k,
				lower = this._core.clones().length / 2,
				upper = lower + this._core.items().length,
				maximum = this._core.maximum(true),
				settings = this._core.settings,
				size = settings.center || settings.autoWidth || settings.dotsData
					? 1 : settings.dotsEach || settings.items;

			if (settings.slideBy !== 'page') {
				settings.slideBy = Math.min(settings.slideBy, settings.items);
			}

			if (settings.dots || settings.slideBy == 'page') {
				this._pages = [];

				for (i = lower, j = 0, k = 0; i < upper; i++) {
					if (j >= size || j === 0) {
						this._pages.push({
							start: Math.min(maximum, i - lower),
							end: i - lower + size - 1
						});
						if (Math.min(maximum, i - lower) === maximum) {
							break;
						}
						j = 0, ++k;
					}
					j += this._core.mergers(this._core.relative(i));
				}
			}
		};

		/**
		 * Draws the user interface.
		 * @todo The option `dotsData` wont work.
		 * @protected
		 */
		Navigation.prototype.draw = function() {
			var difference,
				settings = this._core.settings,
				disabled = this._core.items().length <= settings.items,
				index = this._core.relative(this._core.current()),
				loop = settings.loop || settings.rewind;

			this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

			if (settings.nav) {
				this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
				this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
			}

			this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

			if (settings.dots) {
				difference = this._pages.length - this._controls.$absolute.children().length;

				if (settings.dotsData && difference !== 0) {
					this._controls.$absolute.html(this._templates.join(''));
				} else if (difference > 0) {
					this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
				} else if (difference < 0) {
					this._controls.$absolute.children().slice(difference).remove();
				}

				this._controls.$absolute.find('.active').removeClass('active');
				this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
			}
		};

		/**
		 * Extends event data.
		 * @protected
		 * @param {Event} event - The event object which gets thrown.
		 */
		Navigation.prototype.onTrigger = function(event) {
			var settings = this._core.settings;

			event.page = {
				index: $.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: settings && (settings.center || settings.autoWidth || settings.dotsData
					? 1 : settings.dotsEach || settings.items)
			};
		};

		/**
		 * Gets the current page position of the carousel.
		 * @protected
		 * @returns {Number}
		 */
		Navigation.prototype.current = function() {
			var current = this._core.relative(this._core.current());
			return $.grep(this._pages, $.proxy(function(page, index) {
				return page.start <= current && page.end >= current;
			}, this)).pop();
		};

		/**
		 * Gets the current succesor/predecessor position.
		 * @protected
		 * @returns {Number}
		 */
		Navigation.prototype.getPosition = function(successor) {
			var position, length,
				settings = this._core.settings;

			if (settings.slideBy == 'page') {
				position = $.inArray(this.current(), this._pages);
				length = this._pages.length;
				successor ? ++position : --position;
				position = this._pages[((position % length) + length) % length].start;
			} else {
				position = this._core.relative(this._core.current());
				length = this._core.items().length;
				successor ? position += settings.slideBy : position -= settings.slideBy;
			}

			return position;
		};

		/**
		 * Slides to the next item or page.
		 * @public
		 * @param {Number} [speed=false] - The time in milliseconds for the transition.
		 */
		Navigation.prototype.next = function(speed) {
			$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
		};

		/**
		 * Slides to the previous item or page.
		 * @public
		 * @param {Number} [speed=false] - The time in milliseconds for the transition.
		 */
		Navigation.prototype.prev = function(speed) {
			$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
		};

		/**
		 * Slides to the specified item or page.
		 * @public
		 * @param {Number} position - The position of the item or page.
		 * @param {Number} [speed] - The time in milliseconds for the transition.
		 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
		 */
		Navigation.prototype.to = function(position, speed, standard) {
			var length;

			if (!standard) {
				length = this._pages.length;
				$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
			} else {
				$.proxy(this._overrides.to, this._core)(position, speed);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Hash Plugin
	 * @version 2.0.0-beta.3
	 * @author Artus Kolanowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {
		'use strict';

		/**
		 * Creates the hash plugin.
		 * @class The Hash Plugin
		 * @param {Owl} carousel - The Owl Carousel
		 */
		var Hash = function(carousel) {
			/**
			 * Reference to the core.
			 * @protected
			 * @type {Owl}
			 */
			this._core = carousel;

			/**
			 * Hash index for the items.
			 * @protected
			 * @type {Object}
			 */
			this._hashes = {};

			/**
			 * The carousel element.
			 * @type {jQuery}
			 */
			this.$element = this._core.$element;

			/**
			 * All event handlers.
			 * @protected
			 * @type {Object}
			 */
			this._handlers = {
				'initialized.owl.carousel': $.proxy(function(e) {
					if (e.namespace && this._core.settings.startPosition === 'URLHash') {
						$(window).trigger('hashchange.owl.navigation');
					}
				}, this),
				'prepared.owl.carousel': $.proxy(function(e) {
					if (e.namespace) {
						var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');

						if (!hash) {
							return;
						}

						this._hashes[hash] = e.content;
					}
				}, this),
				'changed.owl.carousel': $.proxy(function(e) {
					if (e.namespace && e.property.name === 'position') {
						var current = this._core.items(this._core.relative(this._core.current())),
							hash = $.map(this._hashes, function(item, hash) {
								return item === current ? hash : null;
							}).join();

						if (!hash || window.location.hash.slice(1) === hash) {
							return;
						}

						window.location.hash = hash;
					}
				}, this)
			};

			// set default options
			this._core.options = $.extend({}, Hash.Defaults, this._core.options);

			// register the event handlers
			this.$element.on(this._handlers);

			// register event listener for hash navigation
			$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
				var hash = window.location.hash.substring(1),
					items = this._core.$stage.children(),
					position = this._hashes[hash] && items.index(this._hashes[hash]);

				if (position === undefined || position === this._core.current()) {
					return;
				}

				this._core.to(this._core.relative(position), false, true);
			}, this));
		};

		/**
		 * Default options.
		 * @public
		 */
		Hash.Defaults = {
			URLhashListener: false
		};

		/**
		 * Destroys the plugin.
		 * @public
		 */
		Hash.prototype.destroy = function() {
			var handler, property;

			$(window).off('hashchange.owl.navigation');

			for (handler in this._handlers) {
				this._core.$element.off(handler, this._handlers[handler]);
			}
			for (property in Object.getOwnPropertyNames(this)) {
				typeof this[property] != 'function' && (this[property] = null);
			}
		};

		$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

	})(window.Zepto || window.jQuery, window, document);

	/**
	 * Support Plugin
	 *
	 * @version 2.0.0-beta.3
	 * @author Vivid Planet Software GmbH
	 * @author Artus Kolanowski
	 * @license The MIT License (MIT)
	 */
	;(function($, window, document, undefined) {

		var style = $('<support>').get(0).style,
			prefixes = 'Webkit Moz O ms'.split(' '),
			events = {
				transition: {
					end: {
						WebkitTransition: 'webkitTransitionEnd',
						MozTransition: 'transitionend',
						OTransition: 'oTransitionEnd',
						transition: 'transitionend'
					}
				},
				animation: {
					end: {
						WebkitAnimation: 'webkitAnimationEnd',
						MozAnimation: 'animationend',
						OAnimation: 'oAnimationEnd',
						animation: 'animationend'
					}
				}
			},
			tests = {
				csstransforms: function() {
					return !!test('transform');
				},
				csstransforms3d: function() {
					return !!test('perspective');
				},
				csstransitions: function() {
					return !!test('transition');
				},
				cssanimations: function() {
					return !!test('animation');
				}
			};

		function test(property, prefixed) {
			var result = false,
				upper = property.charAt(0).toUpperCase() + property.slice(1);

			$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
				if (style[property] !== undefined) {
					result = prefixed ? property : true;
					return false;
				}
			});

			return result;
		}

		function prefixed(property) {
			return test(property, true);
		}

		if (tests.csstransitions()) {
			/* jshint -W053 */
			$.support.transition = new String(prefixed('transition'))
			$.support.transition.end = events.transition.end[ $.support.transition ];
		}

		if (tests.cssanimations()) {
			/* jshint -W053 */
			$.support.animation = new String(prefixed('animation'))
			$.support.animation.end = events.animation.end[ $.support.animation ];
		}

		if (tests.csstransforms()) {
			/* jshint -W053 */
			$.support.transform = new String(prefixed('transform'));
			$.support.transform3d = tests.csstransforms3d();
		}

	})(window.Zepto || window.jQuery, window, document);


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWRlZjExZDdmYWFmYzRhYTlmNWMiLCJ3ZWJwYWNrOi8vLy4vY29tbW9uLmpzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zbGlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3B1YmxpYy9+L293bC5jYXJvdXNlbC9kaXN0L293bC5jYXJvdXNlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wX25hbWVfXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgY2FsbGJhY2tzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSlcbiBcdFx0XHRcdGNhbGxiYWNrcy5wdXNoLmFwcGx5KGNhbGxiYWNrcywgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKTtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oY2h1bmtJZHMsIG1vcmVNb2R1bGVzKTtcbiBcdFx0d2hpbGUoY2FsbGJhY2tzLmxlbmd0aClcbiBcdFx0XHRjYWxsYmFja3Muc2hpZnQoKS5jYWxsKG51bGwsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHQvLyBBcnJheSBtZWFucyBcImxvYWRpbmdcIiwgYXJyYXkgY29udGFpbnMgY2FsbGJhY2tzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOjBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQsIGNhbGxiYWNrKSB7XG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApXG4gXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwobnVsbCwgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gYW4gYXJyYXkgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXS5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW2NhbGxiYWNrXTtcbiBcdFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gXHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiBcdFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5idW5kbGUuanNcIjtcbiBcdFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAxZGVmMTFkN2ZhYWZjNGFhOWY1Y1xuICoqLyIsImltcG9ydCBTbGlkZXIgZnJvbSAnc2xpZGVyJztcblxubGV0IHNsaWRlciA9IG5ldyBTbGlkZXIoJCgnLmpzU2xpZGVyJykpO1xuc2xpZGVyLmluaXQoe1xuICAgIGl0ZW1zOiAxLFxuICAgIG5hdjogdHJ1ZSxcbiAgICBtYXJnaW46IDBcbn0pO1xuXG5cbiQoJy5qc01vZGFsVmlkZW9TaG93JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgcmVxdWlyZS5lbnN1cmUoW10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgIGxldCBNb2RhbCA9IHJlcXVpcmUoJ21vZGFsJyk7XG4gICAgICAgIGxldCBtb2RhbFZpZGVvID0gbmV3IE1vZGFsKCk7XG4gICAgICAgIG1vZGFsVmlkZW8uc2hvdygkKHRoaXMpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBmYWxzZTtcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vY29tbW9uLmpzXG4gKiovIiwiaW1wb3J0ICdvd2wuY2Fyb3VzZWwvZGlzdC9vd2wuY2Fyb3VzZWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBpbml0KG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdGhpcy5jb250YWluZXIub3dsQ2Fyb3VzZWwob3B0aW9ucyk7XG4gICAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ibG9ja3Mvc2xpZGVyL2luZGV4LmpzXG4gKiovIiwiLyoqXG4gKiBPd2wgY2Fyb3VzZWxcbiAqIEB2ZXJzaW9uIDIuMC4wLWJldGEuM1xuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICogQHRvZG8gTGF6eSBMb2FkIEljb25cbiAqIEB0b2RvIHByZXZlbnQgYW5pbWF0aW9uZW5kIGJ1YmxpbmdcbiAqIEB0b2RvIGl0ZW1zU2NhbGVVcFxuICogQHRvZG8gVGVzdCBaZXB0b1xuICogQHRvZG8gc3RhZ2VQYWRkaW5nIGNhbGN1bGF0ZSB3cm9uZyBhY3RpdmUgY2xhc3Nlc1xuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgY2Fyb3VzZWwuXG5cdCAqIEBjbGFzcyBUaGUgT3dsIENhcm91c2VsLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8alF1ZXJ5fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgdG8gY3JlYXRlIHRoZSBjYXJvdXNlbCBmb3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBUaGUgb3B0aW9uc1xuXHQgKi9cblx0ZnVuY3Rpb24gT3dsKGVsZW1lbnQsIG9wdGlvbnMpIHtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc2V0dGluZ3MgZm9yIHRoZSBjYXJvdXNlbC5cblx0XHQgKiBAcHVibGljXG5cdFx0ICovXG5cdFx0dGhpcy5zZXR0aW5ncyA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IG9wdGlvbnMgc2V0IGJ5IHRoZSBjYWxsZXIgaW5jbHVkaW5nIGRlZmF1bHRzLlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgT3dsLkRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHRcdC8qKlxuXHRcdCAqIFBsdWdpbiBlbGVtZW50LlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLiRlbGVtZW50ID0gJChlbGVtZW50KTtcblxuXHRcdC8qKlxuXHRcdCAqIFByb3hpZWQgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2VzIHRvIHRoZSBydW5uaW5nIHBsdWdpbnMgb2YgdGhpcyBjYXJvdXNlbC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fcGx1Z2lucyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudGx5IHN1cHByZXNzZWQgZXZlbnRzIHRvIHByZXZlbnQgdGhlbSBmcm9tIGJlZWluZyByZXRyaWdnZXJlZC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fc3VwcmVzcyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQWJzb2x1dGUgY3VycmVudCBwb3NpdGlvbi5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fY3VycmVudCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9zcGVlZCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDb29yZGluYXRlcyBvZiBhbGwgaXRlbXMgaW4gcGl4ZWwuXG5cdFx0ICogQHRvZG8gVGhlIG5hbWUgb2YgdGhpcyBtZW1iZXIgaXMgbWlzc2xlYWRpbmcuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2Nvb3JkaW5hdGVzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IGJyZWFrcG9pbnQuXG5cdFx0ICogQHRvZG8gUmVhbCBtZWRpYSBxdWVyaWVzIHdvdWxkIGJlIG5pY2UuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2JyZWFrcG9pbnQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCB3aWR0aCBvZiB0aGUgcGx1Z2luIGVsZW1lbnQuXG5cdFx0ICovXG5cdFx0dGhpcy5fd2lkdGggPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIHJlYWwgaXRlbXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2l0ZW1zID0gW107XG5cblx0XHQvKipcblx0XHQgKiBBbGwgY2xvbmVkIGl0ZW1zLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9jbG9uZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIE1lcmdlIHZhbHVlcyBvZiBhbGwgaXRlbXMuXG5cdFx0ICogQHRvZG8gTWF5YmUgdGhpcyBjb3VsZCBiZSBwYXJ0IG9mIGEgcGx1Z2luLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9tZXJnZXJzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBXaWR0aHMgb2YgYWxsIGl0ZW1zLlxuXHRcdCAqL1xuXHRcdHRoaXMuX3dpZHRocyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogSW52YWxpZGF0ZWQgcGFydHMgd2l0aGluIHRoZSB1cGRhdGUgcHJvY2Vzcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5faW52YWxpZGF0ZWQgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIE9yZGVyZWQgbGlzdCBvZiB3b3JrZXJzIGZvciB0aGUgdXBkYXRlIHByb2Nlc3MuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3BpcGUgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc3RhdGUgaW5mb3JtYXRpb24gZm9yIHRoZSBkcmFnIG9wZXJhdGlvbi5cblx0XHQgKiBAdG9kbyAjMjYxXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2RyYWcgPSB7XG5cdFx0XHR0aW1lOiBudWxsLFxuXHRcdFx0dGFyZ2V0OiBudWxsLFxuXHRcdFx0cG9pbnRlcjogbnVsbCxcblx0XHRcdHN0YWdlOiB7XG5cdFx0XHRcdHN0YXJ0OiBudWxsLFxuXHRcdFx0XHRjdXJyZW50OiBudWxsXG5cdFx0XHR9LFxuXHRcdFx0ZGlyZWN0aW9uOiBudWxsXG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgc3RhdGUgaW5mb3JtYXRpb24gYW5kIHRoZWlyIHRhZ3MuXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fc3RhdGVzID0ge1xuXHRcdFx0Y3VycmVudDoge30sXG5cdFx0XHR0YWdzOiB7XG5cdFx0XHRcdCdpbml0aWFsaXppbmcnOiBbICdidXN5JyBdLFxuXHRcdFx0XHQnYW5pbWF0aW5nJzogWyAnYnVzeScgXSxcblx0XHRcdFx0J2RyYWdnaW5nJzogWyAnaW50ZXJhY3RpbmcnIF1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0JC5lYWNoKFsgJ29uUmVzaXplJywgJ29uVGhyb3R0bGVkUmVzaXplJyBdLCAkLnByb3h5KGZ1bmN0aW9uKGksIGhhbmRsZXIpIHtcblx0XHRcdHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdID0gJC5wcm94eSh0aGlzW2hhbmRsZXJdLCB0aGlzKTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHQkLmVhY2goT3dsLlBsdWdpbnMsICQucHJveHkoZnVuY3Rpb24oa2V5LCBwbHVnaW4pIHtcblx0XHRcdHRoaXMuX3BsdWdpbnNba2V5LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsga2V5LnNsaWNlKDEpXVxuXHRcdFx0XHQ9IG5ldyBwbHVnaW4odGhpcyk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0JC5lYWNoKE93bC5Xb3JrZXJzLCAkLnByb3h5KGZ1bmN0aW9uKHByaW9yaXR5LCB3b3JrZXIpIHtcblx0XHRcdHRoaXMuX3BpcGUucHVzaCh7XG5cdFx0XHRcdCdmaWx0ZXInOiB3b3JrZXIuZmlsdGVyLFxuXHRcdFx0XHQncnVuJzogJC5wcm94eSh3b3JrZXIucnVuLCB0aGlzKVxuXHRcdFx0fSk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0dGhpcy5zZXR1cCgpO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wuRGVmYXVsdHMgPSB7XG5cdFx0aXRlbXM6IDMsXG5cdFx0bG9vcDogZmFsc2UsXG5cdFx0Y2VudGVyOiBmYWxzZSxcblx0XHRyZXdpbmQ6IGZhbHNlLFxuXG5cdFx0bW91c2VEcmFnOiB0cnVlLFxuXHRcdHRvdWNoRHJhZzogdHJ1ZSxcblx0XHRwdWxsRHJhZzogdHJ1ZSxcblx0XHRmcmVlRHJhZzogZmFsc2UsXG5cblx0XHRtYXJnaW46IDAsXG5cdFx0c3RhZ2VQYWRkaW5nOiAwLFxuXG5cdFx0bWVyZ2U6IGZhbHNlLFxuXHRcdG1lcmdlRml0OiB0cnVlLFxuXHRcdGF1dG9XaWR0aDogZmFsc2UsXG5cblx0XHRzdGFydFBvc2l0aW9uOiAwLFxuXHRcdHJ0bDogZmFsc2UsXG5cblx0XHRzbWFydFNwZWVkOiAyNTAsXG5cdFx0Zmx1aWRTcGVlZDogZmFsc2UsXG5cdFx0ZHJhZ0VuZFNwZWVkOiBmYWxzZSxcblxuXHRcdHJlc3BvbnNpdmU6IHt9LFxuXHRcdHJlc3BvbnNpdmVSZWZyZXNoUmF0ZTogMjAwLFxuXHRcdHJlc3BvbnNpdmVCYXNlRWxlbWVudDogd2luZG93LFxuXG5cdFx0ZmFsbGJhY2tFYXNpbmc6ICdzd2luZycsXG5cblx0XHRpbmZvOiBmYWxzZSxcblxuXHRcdG5lc3RlZEl0ZW1TZWxlY3RvcjogZmFsc2UsXG5cdFx0aXRlbUVsZW1lbnQ6ICdkaXYnLFxuXHRcdHN0YWdlRWxlbWVudDogJ2RpdicsXG5cblx0XHRyZWZyZXNoQ2xhc3M6ICdvd2wtcmVmcmVzaCcsXG5cdFx0bG9hZGVkQ2xhc3M6ICdvd2wtbG9hZGVkJyxcblx0XHRsb2FkaW5nQ2xhc3M6ICdvd2wtbG9hZGluZycsXG5cdFx0cnRsQ2xhc3M6ICdvd2wtcnRsJyxcblx0XHRyZXNwb25zaXZlQ2xhc3M6ICdvd2wtcmVzcG9uc2l2ZScsXG5cdFx0ZHJhZ0NsYXNzOiAnb3dsLWRyYWcnLFxuXHRcdGl0ZW1DbGFzczogJ293bC1pdGVtJyxcblx0XHRzdGFnZUNsYXNzOiAnb3dsLXN0YWdlJyxcblx0XHRzdGFnZU91dGVyQ2xhc3M6ICdvd2wtc3RhZ2Utb3V0ZXInLFxuXHRcdGdyYWJDbGFzczogJ293bC1ncmFiJ1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFbnVtZXJhdGlvbiBmb3Igd2lkdGguXG5cdCAqIEBwdWJsaWNcblx0ICogQHJlYWRvbmx5XG5cdCAqIEBlbnVtIHtTdHJpbmd9XG5cdCAqL1xuXHRPd2wuV2lkdGggPSB7XG5cdFx0RGVmYXVsdDogJ2RlZmF1bHQnLFxuXHRcdElubmVyOiAnaW5uZXInLFxuXHRcdE91dGVyOiAnb3V0ZXInXG5cdH07XG5cblx0LyoqXG5cdCAqIEVudW1lcmF0aW9uIGZvciB0eXBlcy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcmVhZG9ubHlcblx0ICogQGVudW0ge1N0cmluZ31cblx0ICovXG5cdE93bC5UeXBlID0ge1xuXHRcdEV2ZW50OiAnZXZlbnQnLFxuXHRcdFN0YXRlOiAnc3RhdGUnXG5cdH07XG5cblx0LyoqXG5cdCAqIENvbnRhaW5zIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5QbHVnaW5zID0ge307XG5cblx0LyoqXG5cdCAqIExpc3Qgb2Ygd29ya2VycyBpbnZvbHZlZCBpbiB0aGUgdXBkYXRlIHByb2Nlc3MuXG5cdCAqL1xuXHRPd2wuV29ya2VycyA9IFsge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuX3dpZHRoID0gdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0Y2FjaGUuY3VycmVudCA9IHRoaXMuX2l0ZW1zICYmIHRoaXMuX2l0ZW1zW3RoaXMucmVsYXRpdmUodGhpcy5fY3VycmVudCldO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuY2xvbmVkJykucmVtb3ZlKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHR2YXIgbWFyZ2luID0gdGhpcy5zZXR0aW5ncy5tYXJnaW4gfHwgJycsXG5cdFx0XHRcdGdyaWQgPSAhdGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgsXG5cdFx0XHRcdHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsLFxuXHRcdFx0XHRjc3MgPSB7XG5cdFx0XHRcdFx0J3dpZHRoJzogJ2F1dG8nLFxuXHRcdFx0XHRcdCdtYXJnaW4tbGVmdCc6IHJ0bCA/IG1hcmdpbiA6ICcnLFxuXHRcdFx0XHRcdCdtYXJnaW4tcmlnaHQnOiBydGwgPyAnJyA6IG1hcmdpblxuXHRcdFx0XHR9O1xuXG5cdFx0XHQhZ3JpZCAmJiB0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmNzcyhjc3MpO1xuXG5cdFx0XHRjYWNoZS5jc3MgPSBjc3M7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHR2YXIgd2lkdGggPSAodGhpcy53aWR0aCgpIC8gdGhpcy5zZXR0aW5ncy5pdGVtcykudG9GaXhlZCgzKSAtIHRoaXMuc2V0dGluZ3MubWFyZ2luLFxuXHRcdFx0XHRtZXJnZSA9IG51bGwsXG5cdFx0XHRcdGl0ZXJhdG9yID0gdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0XHRncmlkID0gIXRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoLFxuXHRcdFx0XHR3aWR0aHMgPSBbXTtcblxuXHRcdFx0Y2FjaGUuaXRlbXMgPSB7XG5cdFx0XHRcdG1lcmdlOiBmYWxzZSxcblx0XHRcdFx0d2lkdGg6IHdpZHRoXG5cdFx0XHR9O1xuXG5cdFx0XHR3aGlsZSAoaXRlcmF0b3ItLSkge1xuXHRcdFx0XHRtZXJnZSA9IHRoaXMuX21lcmdlcnNbaXRlcmF0b3JdO1xuXHRcdFx0XHRtZXJnZSA9IHRoaXMuc2V0dGluZ3MubWVyZ2VGaXQgJiYgTWF0aC5taW4obWVyZ2UsIHRoaXMuc2V0dGluZ3MuaXRlbXMpIHx8IG1lcmdlO1xuXG5cdFx0XHRcdGNhY2hlLml0ZW1zLm1lcmdlID0gbWVyZ2UgPiAxIHx8IGNhY2hlLml0ZW1zLm1lcmdlO1xuXG5cdFx0XHRcdHdpZHRoc1tpdGVyYXRvcl0gPSAhZ3JpZCA/IHRoaXMuX2l0ZW1zW2l0ZXJhdG9yXS53aWR0aCgpIDogd2lkdGggKiBtZXJnZTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fd2lkdGhzID0gd2lkdGhzO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBjbG9uZXMgPSBbXSxcblx0XHRcdFx0aXRlbXMgPSB0aGlzLl9pdGVtcyxcblx0XHRcdFx0c2V0dGluZ3MgPSB0aGlzLnNldHRpbmdzLFxuXHRcdFx0XHR2aWV3ID0gTWF0aC5tYXgoc2V0dGluZ3MuaXRlbXMgKiAyLCA0KSxcblx0XHRcdFx0c2l6ZSA9IE1hdGguY2VpbChpdGVtcy5sZW5ndGggLyAyKSAqIDIsXG5cdFx0XHRcdHJlcGVhdCA9IHNldHRpbmdzLmxvb3AgJiYgaXRlbXMubGVuZ3RoID8gc2V0dGluZ3MucmV3aW5kID8gdmlldyA6IE1hdGgubWF4KHZpZXcsIHNpemUpIDogMCxcblx0XHRcdFx0YXBwZW5kID0gJycsXG5cdFx0XHRcdHByZXBlbmQgPSAnJztcblxuXHRcdFx0cmVwZWF0IC89IDI7XG5cblx0XHRcdHdoaWxlIChyZXBlYXQtLSkge1xuXHRcdFx0XHRjbG9uZXMucHVzaCh0aGlzLm5vcm1hbGl6ZShjbG9uZXMubGVuZ3RoIC8gMiwgdHJ1ZSkpO1xuXHRcdFx0XHRhcHBlbmQgPSBhcHBlbmQgKyBpdGVtc1tjbG9uZXNbY2xvbmVzLmxlbmd0aCAtIDFdXVswXS5vdXRlckhUTUw7XG5cdFx0XHRcdGNsb25lcy5wdXNoKHRoaXMubm9ybWFsaXplKGl0ZW1zLmxlbmd0aCAtIDEgLSAoY2xvbmVzLmxlbmd0aCAtIDEpIC8gMiwgdHJ1ZSkpO1xuXHRcdFx0XHRwcmVwZW5kID0gaXRlbXNbY2xvbmVzW2Nsb25lcy5sZW5ndGggLSAxXV1bMF0ub3V0ZXJIVE1MICsgcHJlcGVuZDtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY2xvbmVzID0gY2xvbmVzO1xuXG5cdFx0XHQkKGFwcGVuZCkuYWRkQ2xhc3MoJ2Nsb25lZCcpLmFwcGVuZFRvKHRoaXMuJHN0YWdlKTtcblx0XHRcdCQocHJlcGVuZCkuYWRkQ2xhc3MoJ2Nsb25lZCcpLnByZXBlbmRUbyh0aGlzLiRzdGFnZSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsID8gMSA6IC0xLFxuXHRcdFx0XHRzaXplID0gdGhpcy5fY2xvbmVzLmxlbmd0aCArIHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdFx0aXRlcmF0b3IgPSAtMSxcblx0XHRcdFx0cHJldmlvdXMgPSAwLFxuXHRcdFx0XHRjdXJyZW50ID0gMCxcblx0XHRcdFx0Y29vcmRpbmF0ZXMgPSBbXTtcblxuXHRcdFx0d2hpbGUgKCsraXRlcmF0b3IgPCBzaXplKSB7XG5cdFx0XHRcdHByZXZpb3VzID0gY29vcmRpbmF0ZXNbaXRlcmF0b3IgLSAxXSB8fCAwO1xuXHRcdFx0XHRjdXJyZW50ID0gdGhpcy5fd2lkdGhzW3RoaXMucmVsYXRpdmUoaXRlcmF0b3IpXSArIHRoaXMuc2V0dGluZ3MubWFyZ2luO1xuXHRcdFx0XHRjb29yZGluYXRlcy5wdXNoKHByZXZpb3VzICsgY3VycmVudCAqIHJ0bCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2Nvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHBhZGRpbmcgPSB0aGlzLnNldHRpbmdzLnN0YWdlUGFkZGluZyxcblx0XHRcdFx0Y29vcmRpbmF0ZXMgPSB0aGlzLl9jb29yZGluYXRlcyxcblx0XHRcdFx0Y3NzID0ge1xuXHRcdFx0XHRcdCd3aWR0aCc6IE1hdGguY2VpbChNYXRoLmFicyhjb29yZGluYXRlc1tjb29yZGluYXRlcy5sZW5ndGggLSAxXSkpICsgcGFkZGluZyAqIDIsXG5cdFx0XHRcdFx0J3BhZGRpbmctbGVmdCc6IHBhZGRpbmcgfHwgJycsXG5cdFx0XHRcdFx0J3BhZGRpbmctcmlnaHQnOiBwYWRkaW5nIHx8ICcnXG5cdFx0XHRcdH07XG5cblx0XHRcdHRoaXMuJHN0YWdlLmNzcyhjc3MpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0dmFyIGl0ZXJhdG9yID0gdGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoLFxuXHRcdFx0XHRncmlkID0gIXRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoLFxuXHRcdFx0XHRpdGVtcyA9IHRoaXMuJHN0YWdlLmNoaWxkcmVuKCk7XG5cblx0XHRcdGlmIChncmlkICYmIGNhY2hlLml0ZW1zLm1lcmdlKSB7XG5cdFx0XHRcdHdoaWxlIChpdGVyYXRvci0tKSB7XG5cdFx0XHRcdFx0Y2FjaGUuY3NzLndpZHRoID0gdGhpcy5fd2lkdGhzW3RoaXMucmVsYXRpdmUoaXRlcmF0b3IpXTtcblx0XHRcdFx0XHRpdGVtcy5lcShpdGVyYXRvcikuY3NzKGNhY2hlLmNzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoZ3JpZCkge1xuXHRcdFx0XHRjYWNoZS5jc3Mud2lkdGggPSBjYWNoZS5pdGVtcy53aWR0aDtcblx0XHRcdFx0aXRlbXMuY3NzKGNhY2hlLmNzcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICdpdGVtcycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoIDwgMSAmJiB0aGlzLiRzdGFnZS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbihjYWNoZSkge1xuXHRcdFx0Y2FjaGUuY3VycmVudCA9IGNhY2hlLmN1cnJlbnQgPyB0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmluZGV4KGNhY2hlLmN1cnJlbnQpIDogMDtcblx0XHRcdGNhY2hlLmN1cnJlbnQgPSBNYXRoLm1heCh0aGlzLm1pbmltdW0oKSwgTWF0aC5taW4odGhpcy5tYXhpbXVtKCksIGNhY2hlLmN1cnJlbnQpKTtcblx0XHRcdHRoaXMucmVzZXQoY2FjaGUuY3VycmVudCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICdwb3NpdGlvbicgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5hbmltYXRlKHRoaXMuY29vcmRpbmF0ZXModGhpcy5fY3VycmVudCkpO1xuXHRcdH1cblx0fSwge1xuXHRcdGZpbHRlcjogWyAnd2lkdGgnLCAncG9zaXRpb24nLCAnaXRlbXMnLCAnc2V0dGluZ3MnIF0sXG5cdFx0cnVuOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBydGwgPSB0aGlzLnNldHRpbmdzLnJ0bCA/IDEgOiAtMSxcblx0XHRcdFx0cGFkZGluZyA9IHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nICogMixcblx0XHRcdFx0YmVnaW4gPSB0aGlzLmNvb3JkaW5hdGVzKHRoaXMuY3VycmVudCgpKSArIHBhZGRpbmcsXG5cdFx0XHRcdGVuZCA9IGJlZ2luICsgdGhpcy53aWR0aCgpICogcnRsLFxuXHRcdFx0XHRpbm5lciwgb3V0ZXIsIG1hdGNoZXMgPSBbXSwgaSwgbjtcblxuXHRcdFx0Zm9yIChpID0gMCwgbiA9IHRoaXMuX2Nvb3JkaW5hdGVzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuXHRcdFx0XHRpbm5lciA9IHRoaXMuX2Nvb3JkaW5hdGVzW2kgLSAxXSB8fCAwO1xuXHRcdFx0XHRvdXRlciA9IE1hdGguYWJzKHRoaXMuX2Nvb3JkaW5hdGVzW2ldKSArIHBhZGRpbmcgKiBydGw7XG5cblx0XHRcdFx0aWYgKCh0aGlzLm9wKGlubmVyLCAnPD0nLCBiZWdpbikgJiYgKHRoaXMub3AoaW5uZXIsICc+JywgZW5kKSkpXG5cdFx0XHRcdFx0fHwgKHRoaXMub3Aob3V0ZXIsICc8JywgYmVnaW4pICYmIHRoaXMub3Aob3V0ZXIsICc+JywgZW5kKSkpIHtcblx0XHRcdFx0XHRtYXRjaGVzLnB1c2goaSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignOmVxKCcgKyBtYXRjaGVzLmpvaW4oJyksIDplcSgnKSArICcpJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5jZW50ZXIpIHtcblx0XHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jZW50ZXInKS5yZW1vdmVDbGFzcygnY2VudGVyJyk7XG5cdFx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5jdXJyZW50KCkpLmFkZENsYXNzKCdjZW50ZXInKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gXTtcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZXMgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmVudGVyKCdpbml0aWFsaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2luaXRpYWxpemUnKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQudG9nZ2xlQ2xhc3ModGhpcy5zZXR0aW5ncy5ydGxDbGFzcywgdGhpcy5zZXR0aW5ncy5ydGwpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MuYXV0b1dpZHRoICYmICF0aGlzLmlzKCdwcmUtbG9hZGluZycpKSB7XG5cdFx0XHR2YXIgaW1ncywgbmVzdGVkU2VsZWN0b3IsIHdpZHRoO1xuXHRcdFx0aW1ncyA9IHRoaXMuJGVsZW1lbnQuZmluZCgnaW1nJyk7XG5cdFx0XHRuZXN0ZWRTZWxlY3RvciA9IHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yID8gJy4nICsgdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IgOiB1bmRlZmluZWQ7XG5cdFx0XHR3aWR0aCA9IHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4obmVzdGVkU2VsZWN0b3IpLndpZHRoKCk7XG5cblx0XHRcdGlmIChpbWdzLmxlbmd0aCAmJiB3aWR0aCA8PSAwKSB7XG5cdFx0XHRcdHRoaXMucHJlbG9hZEF1dG9XaWR0aEltYWdlcyhpbWdzKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpO1xuXG5cdFx0Ly8gY3JlYXRlIHN0YWdlXG5cdFx0dGhpcy4kc3RhZ2UgPSAkKCc8JyArIHRoaXMuc2V0dGluZ3Muc3RhZ2VFbGVtZW50ICsgJyBjbGFzcz1cIicgKyB0aGlzLnNldHRpbmdzLnN0YWdlQ2xhc3MgKyAnXCIvPicpXG5cdFx0XHQud3JhcCgnPGRpdiBjbGFzcz1cIicgKyB0aGlzLnNldHRpbmdzLnN0YWdlT3V0ZXJDbGFzcyArICdcIi8+Jyk7XG5cblx0XHQvLyBhcHBlbmQgc3RhZ2Vcblx0XHR0aGlzLiRlbGVtZW50LmFwcGVuZCh0aGlzLiRzdGFnZS5wYXJlbnQoKSk7XG5cblx0XHQvLyBhcHBlbmQgY29udGVudFxuXHRcdHRoaXMucmVwbGFjZSh0aGlzLiRlbGVtZW50LmNoaWxkcmVuKCkubm90KHRoaXMuJHN0YWdlLnBhcmVudCgpKSk7XG5cblx0XHQvLyBjaGVjayB2aXNpYmlsaXR5XG5cdFx0aWYgKHRoaXMuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJykpIHtcblx0XHRcdC8vIHVwZGF0ZSB2aWV3XG5cdFx0XHR0aGlzLnJlZnJlc2goKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaW52YWxpZGF0ZSB3aWR0aFxuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCd3aWR0aCcpO1xuXHRcdH1cblxuXHRcdHRoaXMuJGVsZW1lbnRcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGluZ0NsYXNzKVxuXHRcdFx0LmFkZENsYXNzKHRoaXMub3B0aW9ucy5sb2FkZWRDbGFzcyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMucmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XG5cblx0XHR0aGlzLmxlYXZlKCdpbml0aWFsaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2luaXRpYWxpemVkJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHVwcyB0aGUgY3VycmVudCBzZXR0aW5ncy5cblx0ICogQHRvZG8gUmVtb3ZlIHJlc3BvbnNpdmUgY2xhc3Nlcy4gV2h5IHNob3VsZCBhZGFwdGl2ZSBkZXNpZ25zIGJlIGJyb3VnaHQgaW50byBJRTg/XG5cdCAqIEB0b2RvIFN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgYnkgdXNpbmcgYG1hdGNoTWVkaWFgIHdvdWxkIGJlIG5pY2UuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUuc2V0dXAgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdmlld3BvcnQgPSB0aGlzLnZpZXdwb3J0KCksXG5cdFx0XHRvdmVyd3JpdGVzID0gdGhpcy5vcHRpb25zLnJlc3BvbnNpdmUsXG5cdFx0XHRtYXRjaCA9IC0xLFxuXHRcdFx0c2V0dGluZ3MgPSBudWxsO1xuXG5cdFx0aWYgKCFvdmVyd3JpdGVzKSB7XG5cdFx0XHRzZXR0aW5ncyA9ICQuZXh0ZW5kKHt9LCB0aGlzLm9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkLmVhY2gob3ZlcndyaXRlcywgZnVuY3Rpb24oYnJlYWtwb2ludCkge1xuXHRcdFx0XHRpZiAoYnJlYWtwb2ludCA8PSB2aWV3cG9ydCAmJiBicmVha3BvaW50ID4gbWF0Y2gpIHtcblx0XHRcdFx0XHRtYXRjaCA9IE51bWJlcihicmVha3BvaW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgb3ZlcndyaXRlc1ttYXRjaF0pO1xuXHRcdFx0ZGVsZXRlIHNldHRpbmdzLnJlc3BvbnNpdmU7XG5cblx0XHRcdC8vIHJlc3BvbnNpdmUgY2xhc3Ncblx0XHRcdGlmIChzZXR0aW5ncy5yZXNwb25zaXZlQ2xhc3MpIHtcblx0XHRcdFx0dGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycsXG5cdFx0XHRcdFx0dGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUNsYXNzICsgJy0pXFxcXFMrXFxcXHMnLCAnZycpLCAnJDEnICsgbWF0Y2gpXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MgPT09IG51bGwgfHwgdGhpcy5fYnJlYWtwb2ludCAhPT0gbWF0Y2gpIHtcblx0XHRcdHRoaXMudHJpZ2dlcignY2hhbmdlJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAnc2V0dGluZ3MnLCB2YWx1ZTogc2V0dGluZ3MgfSB9KTtcblx0XHRcdHRoaXMuX2JyZWFrcG9pbnQgPSBtYXRjaDtcblx0XHRcdHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgnc2V0dGluZ3MnKTtcblx0XHRcdHRoaXMudHJpZ2dlcignY2hhbmdlZCcsIHsgcHJvcGVydHk6IHsgbmFtZTogJ3NldHRpbmdzJywgdmFsdWU6IHRoaXMuc2V0dGluZ3MgfSB9KTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgb3B0aW9uIGxvZ2ljIGlmIG5lY2Vzc2VyeS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vcHRpb25zTG9naWMgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgpIHtcblx0XHRcdHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nID0gZmFsc2U7XG5cdFx0XHR0aGlzLnNldHRpbmdzLm1lcmdlID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBQcmVwYXJlcyBhbiBpdGVtIGJlZm9yZSBhZGQuXG5cdCAqIEB0b2RvIFJlbmFtZSBldmVudCBwYXJhbWV0ZXIgYGNvbnRlbnRgIHRvIGBpdGVtYC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fSAtIFRoZSBpdGVtIGNvbnRhaW5lci5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucHJlcGFyZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHR2YXIgZXZlbnQgPSB0aGlzLnRyaWdnZXIoJ3ByZXBhcmUnLCB7IGNvbnRlbnQ6IGl0ZW0gfSk7XG5cblx0XHRpZiAoIWV2ZW50LmRhdGEpIHtcblx0XHRcdGV2ZW50LmRhdGEgPSAkKCc8JyArIHRoaXMuc2V0dGluZ3MuaXRlbUVsZW1lbnQgKyAnLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLml0ZW1DbGFzcykuYXBwZW5kKGl0ZW0pXG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdwcmVwYXJlZCcsIHsgY29udGVudDogZXZlbnQuZGF0YSB9KTtcblxuXHRcdHJldHVybiBldmVudC5kYXRhO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSB2aWV3LlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdG4gPSB0aGlzLl9waXBlLmxlbmd0aCxcblx0XHRcdGZpbHRlciA9ICQucHJveHkoZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpc1twXSB9LCB0aGlzLl9pbnZhbGlkYXRlZCksXG5cdFx0XHRjYWNoZSA9IHt9O1xuXG5cdFx0d2hpbGUgKGkgPCBuKSB7XG5cdFx0XHRpZiAodGhpcy5faW52YWxpZGF0ZWQuYWxsIHx8ICQuZ3JlcCh0aGlzLl9waXBlW2ldLmZpbHRlciwgZmlsdGVyKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMuX3BpcGVbaV0ucnVuKGNhY2hlKTtcblx0XHRcdH1cblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHR0aGlzLl9pbnZhbGlkYXRlZCA9IHt9O1xuXG5cdFx0IXRoaXMuaXMoJ3ZhbGlkJykgJiYgdGhpcy5lbnRlcigndmFsaWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIHZpZXcuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtPd2wuV2lkdGh9IFtkaW1lbnNpb249T3dsLldpZHRoLkRlZmF1bHRdIC0gVGhlIGRpbWVuc2lvbiB0byByZXR1cm4uXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIHdpZHRoIG9mIHRoZSB2aWV3IGluIHBpeGVsLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uKGRpbWVuc2lvbikge1xuXHRcdGRpbWVuc2lvbiA9IGRpbWVuc2lvbiB8fCBPd2wuV2lkdGguRGVmYXVsdDtcblx0XHRzd2l0Y2ggKGRpbWVuc2lvbikge1xuXHRcdFx0Y2FzZSBPd2wuV2lkdGguSW5uZXI6XG5cdFx0XHRjYXNlIE93bC5XaWR0aC5PdXRlcjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3dpZHRoO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3dpZHRoIC0gdGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcgKiAyICsgdGhpcy5zZXR0aW5ncy5tYXJnaW47XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWZyZXNoZXMgdGhlIGNhcm91c2VsIHByaW1hcmlseSBmb3IgYWRhcHRpdmUgcHVycG9zZXMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW50ZXIoJ3JlZnJlc2hpbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3JlZnJlc2gnKTtcblxuXHRcdHRoaXMuc2V0dXAoKTtcblxuXHRcdHRoaXMub3B0aW9uc0xvZ2ljKCk7XG5cblx0XHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5yZWZyZXNoQ2xhc3MpO1xuXG5cdFx0dGhpcy51cGRhdGUoKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJlZnJlc2hDbGFzcyk7XG5cblx0XHR0aGlzLmxlYXZlKCdyZWZyZXNoaW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyZWZyZXNoZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogQ2hlY2tzIHdpbmRvdyBgcmVzaXplYCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vblRocm90dGxlZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0dGhpcy5yZXNpemVUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuX2hhbmRsZXJzLm9uUmVzaXplLCB0aGlzLnNldHRpbmdzLnJlc3BvbnNpdmVSZWZyZXNoUmF0ZSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aW5kb3cgYHJlc2l6ZWAgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl93aWR0aCA9PT0gdGhpcy4kZWxlbWVudC53aWR0aCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbnRlcigncmVzaXppbmcnKTtcblxuXHRcdGlmICh0aGlzLnRyaWdnZXIoJ3Jlc2l6ZScpLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG5cdFx0XHR0aGlzLmxlYXZlKCdyZXNpemluZycpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnd2lkdGgnKTtcblxuXHRcdHRoaXMucmVmcmVzaCgpO1xuXG5cdFx0dGhpcy5sZWF2ZSgncmVzaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3Jlc2l6ZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGV2ZW50IGhhbmRsZXJzLlxuXHQgKiBAdG9kbyBDaGVjayBgbXNQb2ludGVyRW5hYmxlZGBcblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRIYW5kbGVycyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICgkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kICsgJy5vd2wuY29yZScsICQucHJveHkodGhpcy5vblRyYW5zaXRpb25FbmQsIHRoaXMpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlICE9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5vbih3aW5kb3csICdyZXNpemUnLCB0aGlzLl9oYW5kbGVycy5vblRocm90dGxlZFJlc2l6ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubW91c2VEcmFnKSB7XG5cdFx0XHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5kcmFnQ2xhc3MpO1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ21vdXNlZG93bi5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdTdGFydCwgdGhpcykpO1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ2RyYWdzdGFydC5vd2wuY29yZSBzZWxlY3RzdGFydC5vd2wuY29yZScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2UgfSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MudG91Y2hEcmFnKXtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCd0b3VjaHN0YXJ0Lm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ1N0YXJ0LCB0aGlzKSk7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbigndG91Y2hjYW5jZWwub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnRW5kLCB0aGlzKSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGB0b3VjaHN0YXJ0YCBhbmQgYG1vdXNlZG93bmAgZXZlbnRzLlxuXHQgKiBAdG9kbyBIb3Jpem9udGFsIHN3aXBlIHRocmVzaG9sZCBhcyBvcHRpb25cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub25EcmFnU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBzdGFnZSA9IG51bGw7XG5cblx0XHRpZiAoZXZlbnQud2hpY2ggPT09IDMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoJC5zdXBwb3J0LnRyYW5zZm9ybSkge1xuXHRcdFx0c3RhZ2UgPSB0aGlzLiRzdGFnZS5jc3MoJ3RyYW5zZm9ybScpLnJlcGxhY2UoLy4qXFwofFxcKXwgL2csICcnKS5zcGxpdCgnLCcpO1xuXHRcdFx0c3RhZ2UgPSB7XG5cdFx0XHRcdHg6IHN0YWdlW3N0YWdlLmxlbmd0aCA9PT0gMTYgPyAxMiA6IDRdLFxuXHRcdFx0XHR5OiBzdGFnZVtzdGFnZS5sZW5ndGggPT09IDE2ID8gMTMgOiA1XVxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhZ2UgPSB0aGlzLiRzdGFnZS5wb3NpdGlvbigpO1xuXHRcdFx0c3RhZ2UgPSB7XG5cdFx0XHRcdHg6IHRoaXMuc2V0dGluZ3MucnRsID9cblx0XHRcdFx0XHRzdGFnZS5sZWZ0ICsgdGhpcy4kc3RhZ2Uud2lkdGgoKSAtIHRoaXMud2lkdGgoKSArIHRoaXMuc2V0dGluZ3MubWFyZ2luIDpcblx0XHRcdFx0XHRzdGFnZS5sZWZ0LFxuXHRcdFx0XHR5OiBzdGFnZS50b3Bcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXMoJ2FuaW1hdGluZycpKSB7XG5cdFx0XHQkLnN1cHBvcnQudHJhbnNmb3JtID8gdGhpcy5hbmltYXRlKHN0YWdlLngpIDogdGhpcy4kc3RhZ2Uuc3RvcCgpXG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3Bvc2l0aW9uJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuZ3JhYkNsYXNzLCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyk7XG5cblx0XHR0aGlzLnNwZWVkKDApO1xuXG5cdFx0dGhpcy5fZHJhZy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0dGhpcy5fZHJhZy50YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG5cdFx0dGhpcy5fZHJhZy5zdGFnZS5zdGFydCA9IHN0YWdlO1xuXHRcdHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCA9IHN0YWdlO1xuXHRcdHRoaXMuX2RyYWcucG9pbnRlciA9IHRoaXMucG9pbnRlcihldmVudCk7XG5cblx0XHQkKGRvY3VtZW50KS5vbignbW91c2V1cC5vd2wuY29yZSB0b3VjaGVuZC5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdFbmQsIHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uZSgnbW91c2Vtb3ZlLm93bC5jb3JlIHRvdWNobW92ZS5vd2wuY29yZScsICQucHJveHkoZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdHZhciBkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpO1xuXG5cdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlLm93bC5jb3JlIHRvdWNobW92ZS5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdNb3ZlLCB0aGlzKSk7XG5cblx0XHRcdGlmIChNYXRoLmFicyhkZWx0YS54KSA8IE1hdGguYWJzKGRlbHRhLnkpICYmIHRoaXMuaXMoJ3ZhbGlkJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLmVudGVyKCdkcmFnZ2luZycpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkcmFnJyk7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSBgdG91Y2htb3ZlYCBhbmQgYG1vdXNlbW92ZWAgZXZlbnRzLlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbkRyYWdNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgbWluaW11bSA9IG51bGwsXG5cdFx0XHRtYXhpbXVtID0gbnVsbCxcblx0XHRcdHB1bGwgPSBudWxsLFxuXHRcdFx0ZGVsdGEgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5wb2ludGVyLCB0aGlzLnBvaW50ZXIoZXZlbnQpKSxcblx0XHRcdHN0YWdlID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcuc3RhZ2Uuc3RhcnQsIGRlbHRhKTtcblxuXHRcdGlmICghdGhpcy5pcygnZHJhZ2dpbmcnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5sb29wKSB7XG5cdFx0XHRtaW5pbXVtID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSk7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSArIDEpIC0gbWluaW11bTtcblx0XHRcdHN0YWdlLnggPSAoKChzdGFnZS54IC0gbWluaW11bSkgJSBtYXhpbXVtICsgbWF4aW11bSkgJSBtYXhpbXVtKSArIG1pbmltdW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1pbmltdW0gPSB0aGlzLnNldHRpbmdzLnJ0bCA/IHRoaXMuY29vcmRpbmF0ZXModGhpcy5tYXhpbXVtKCkpIDogdGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSk7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5zZXR0aW5ncy5ydGwgPyB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKSA6IHRoaXMuY29vcmRpbmF0ZXModGhpcy5tYXhpbXVtKCkpO1xuXHRcdFx0cHVsbCA9IHRoaXMuc2V0dGluZ3MucHVsbERyYWcgPyAtMSAqIGRlbHRhLnggLyA1IDogMDtcblx0XHRcdHN0YWdlLnggPSBNYXRoLm1heChNYXRoLm1pbihzdGFnZS54LCBtaW5pbXVtICsgcHVsbCksIG1heGltdW0gKyBwdWxsKTtcblx0XHR9XG5cblx0XHR0aGlzLl9kcmFnLnN0YWdlLmN1cnJlbnQgPSBzdGFnZTtcblxuXHRcdHRoaXMuYW5pbWF0ZShzdGFnZS54KTtcblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyB0aGUgYHRvdWNoZW5kYCBhbmQgYG1vdXNldXBgIGV2ZW50cy5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAdG9kbyBUaHJlc2hvbGQgZm9yIGNsaWNrIGV2ZW50XG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbkRyYWdFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpLFxuXHRcdFx0c3RhZ2UgPSB0aGlzLl9kcmFnLnN0YWdlLmN1cnJlbnQsXG5cdFx0XHRkaXJlY3Rpb24gPSBkZWx0YS54ID4gMCBeIHRoaXMuc2V0dGluZ3MucnRsID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuXHRcdCQoZG9jdW1lbnQpLm9mZignLm93bC5jb3JlJyk7XG5cblx0XHR0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MpO1xuXG5cdFx0aWYgKGRlbHRhLnggIT09IDAgJiYgdGhpcy5pcygnZHJhZ2dpbmcnKSB8fCAhdGhpcy5pcygndmFsaWQnKSkge1xuXHRcdFx0dGhpcy5zcGVlZCh0aGlzLnNldHRpbmdzLmRyYWdFbmRTcGVlZCB8fCB0aGlzLnNldHRpbmdzLnNtYXJ0U3BlZWQpO1xuXHRcdFx0dGhpcy5jdXJyZW50KHRoaXMuY2xvc2VzdChzdGFnZS54LCBkZWx0YS54ICE9PSAwID8gZGlyZWN0aW9uIDogdGhpcy5fZHJhZy5kaXJlY3Rpb24pKTtcblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cblx0XHRcdHRoaXMuX2RyYWcuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZGVsdGEueCkgPiAzIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5fZHJhZy50aW1lID4gMzAwKSB7XG5cdFx0XHRcdHRoaXMuX2RyYWcudGFyZ2V0Lm9uZSgnY2xpY2sub3dsLmNvcmUnLCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXMoJ2RyYWdnaW5nJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxlYXZlKCdkcmFnZ2luZycpO1xuXHRcdHRoaXMudHJpZ2dlcignZHJhZ2dlZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjbG9zZXN0IGl0ZW0gZm9yIGEgY29vcmRpbmF0ZS5cblx0ICogQHRvZG8gU2V0dGluZyBgZnJlZURyYWdgIG1ha2VzIGBjbG9zZXN0YCBub3QgcmV1c2FibGUuIFNlZSAjMTY1LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb29yZGluYXRlIC0gVGhlIGNvb3JkaW5hdGUgaW4gcGl4ZWwuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24gLSBUaGUgZGlyZWN0aW9uIHRvIGNoZWNrIGZvciB0aGUgY2xvc2VzdCBpdGVtLiBFdGhlciBgbGVmdGAgb3IgYHJpZ2h0YC5cblx0ICogQHJldHVybiB7TnVtYmVyfSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY2xvc2VzdCBpdGVtLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24oY29vcmRpbmF0ZSwgZGlyZWN0aW9uKSB7XG5cdFx0dmFyIHBvc2l0aW9uID0gLTEsXG5cdFx0XHRwdWxsID0gMzAsXG5cdFx0XHR3aWR0aCA9IHRoaXMud2lkdGgoKSxcblx0XHRcdGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcygpO1xuXG5cdFx0aWYgKCF0aGlzLnNldHRpbmdzLmZyZWVEcmFnKSB7XG5cdFx0XHQvLyBjaGVjayBjbG9zZXN0IGl0ZW1cblx0XHRcdCQuZWFjaChjb29yZGluYXRlcywgJC5wcm94eShmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKGNvb3JkaW5hdGUgPiB2YWx1ZSAtIHB1bGwgJiYgY29vcmRpbmF0ZSA8IHZhbHVlICsgcHVsbCkge1xuXHRcdFx0XHRcdHBvc2l0aW9uID0gaW5kZXg7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPCcsIHZhbHVlKVxuXHRcdFx0XHRcdCYmIHRoaXMub3AoY29vcmRpbmF0ZSwgJz4nLCBjb29yZGluYXRlc1tpbmRleCArIDFdIHx8IHZhbHVlIC0gd2lkdGgpKSB7XG5cdFx0XHRcdFx0cG9zaXRpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IGluZGV4ICsgMSA6IGluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvbiA9PT0gLTE7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLnNldHRpbmdzLmxvb3ApIHtcblx0XHRcdC8vIG5vbiBsb29wIGJvdW5kcmllc1xuXHRcdFx0aWYgKHRoaXMub3AoY29vcmRpbmF0ZSwgJz4nLCBjb29yZGluYXRlc1t0aGlzLm1pbmltdW0oKV0pKSB7XG5cdFx0XHRcdHBvc2l0aW9uID0gY29vcmRpbmF0ZSA9IHRoaXMubWluaW11bSgpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wKGNvb3JkaW5hdGUsICc8JywgY29vcmRpbmF0ZXNbdGhpcy5tYXhpbXVtKCldKSkge1xuXHRcdFx0XHRwb3NpdGlvbiA9IGNvb3JkaW5hdGUgPSB0aGlzLm1heGltdW0oKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcG9zaXRpb247XG5cdH07XG5cblx0LyoqXG5cdCAqIEFuaW1hdGVzIHRoZSBzdGFnZS5cblx0ICogQHRvZG8gIzI3MFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb29yZGluYXRlIC0gVGhlIGNvb3JkaW5hdGUgaW4gcGl4ZWxzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24oY29vcmRpbmF0ZSkge1xuXHRcdHZhciBhbmltYXRlID0gdGhpcy5zcGVlZCgpID4gMDtcblxuXHRcdHRoaXMuaXMoJ2FuaW1hdGluZycpICYmIHRoaXMub25UcmFuc2l0aW9uRW5kKCk7XG5cblx0XHRpZiAoYW5pbWF0ZSkge1xuXHRcdFx0dGhpcy5lbnRlcignYW5pbWF0aW5nJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYW5zbGF0ZScpO1xuXHRcdH1cblxuXHRcdGlmICgkLnN1cHBvcnQudHJhbnNmb3JtM2QgJiYgJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcblx0XHRcdHRoaXMuJHN0YWdlLmNzcyh7XG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyBjb29yZGluYXRlICsgJ3B4LDBweCwwcHgpJyxcblx0XHRcdFx0dHJhbnNpdGlvbjogKHRoaXMuc3BlZWQoKSAvIDEwMDApICsgJ3MnXG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKGFuaW1hdGUpIHtcblx0XHRcdHRoaXMuJHN0YWdlLmFuaW1hdGUoe1xuXHRcdFx0XHRsZWZ0OiBjb29yZGluYXRlICsgJ3B4J1xuXHRcdFx0fSwgdGhpcy5zcGVlZCgpLCB0aGlzLnNldHRpbmdzLmZhbGxiYWNrRWFzaW5nLCAkLnByb3h5KHRoaXMub25UcmFuc2l0aW9uRW5kLCB0aGlzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJHN0YWdlLmNzcyh7XG5cdFx0XHRcdGxlZnQ6IGNvb3JkaW5hdGUgKyAncHgnXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoZSBjYXJvdXNlbCBpcyBpbiBhIHNwZWNpZmljIHN0YXRlIG9yIG5vdC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIC0gVGhlIHN0YXRlIHRvIGNoZWNrLlxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSBUaGUgZmxhZyB3aGljaCBpbmRpY2F0ZXMgaWYgdGhlIGNhcm91c2VsIGlzIGJ1c3kuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmlzID0gZnVuY3Rpb24oc3RhdGUpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhdGVzLmN1cnJlbnRbc3RhdGVdICYmIHRoaXMuX3N0YXRlcy5jdXJyZW50W3N0YXRlXSA+IDA7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgbmV3IGFic29sdXRlIHBvc2l0aW9uIG9yIG5vdGhpbmcgdG8gbGVhdmUgaXQgdW5jaGFuZ2VkLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uKTtcblxuXHRcdGlmICh0aGlzLl9jdXJyZW50ICE9PSBwb3NpdGlvbikge1xuXHRcdFx0dmFyIGV2ZW50ID0gdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdwb3NpdGlvbicsIHZhbHVlOiBwb3NpdGlvbiB9IH0pO1xuXG5cdFx0XHRpZiAoZXZlbnQuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUoZXZlbnQuZGF0YSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2N1cnJlbnQgPSBwb3NpdGlvbjtcblxuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCdwb3NpdGlvbicpO1xuXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NoYW5nZWQnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdwb3NpdGlvbicsIHZhbHVlOiB0aGlzLl9jdXJyZW50IH0gfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIEludmFsaWRhdGVzIHRoZSBnaXZlbiBwYXJ0IG9mIHRoZSB1cGRhdGUgcm91dGluZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtwYXJ0XSAtIFRoZSBwYXJ0IHRvIGludmFsaWRhdGUuXG5cdCAqIEByZXR1cm5zIHtBcnJheS48U3RyaW5nPn0gLSBUaGUgaW52YWxpZGF0ZWQgcGFydHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmludmFsaWRhdGUgPSBmdW5jdGlvbihwYXJ0KSB7XG5cdFx0aWYgKCQudHlwZShwYXJ0KSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMuX2ludmFsaWRhdGVkW3BhcnRdID0gdHJ1ZTtcblx0XHRcdHRoaXMuaXMoJ3ZhbGlkJykgJiYgdGhpcy5sZWF2ZSgndmFsaWQnKTtcblx0XHR9XG5cdFx0cmV0dXJuICQubWFwKHRoaXMuX2ludmFsaWRhdGVkLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiBpIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXNldHMgdGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBuZXcgaXRlbS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24pO1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9zcGVlZCA9IDA7XG5cdFx0dGhpcy5fY3VycmVudCA9IHBvc2l0aW9uO1xuXG5cdFx0dGhpcy5zdXBwcmVzcyhbICd0cmFuc2xhdGUnLCAndHJhbnNsYXRlZCcgXSk7XG5cblx0XHR0aGlzLmFuaW1hdGUodGhpcy5jb29yZGluYXRlcyhwb3NpdGlvbikpO1xuXG5cdFx0dGhpcy5yZWxlYXNlKFsgJ3RyYW5zbGF0ZScsICd0cmFuc2xhdGVkJyBdKTtcblx0fTtcblxuXHQvKipcblx0ICogTm9ybWFsaXplcyBhbiBhYnNvbHV0ZSBvciBhIHJlbGF0aXZlIHBvc2l0aW9uIG9mIGFuIGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIG9yIHJlbGF0aXZlIHBvc2l0aW9uIHRvIG5vcm1hbGl6ZS5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0aGUgZ2l2ZW4gcG9zaXRpb24gaXMgcmVsYXRpdmUgb3Igbm90LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBub3JtYWxpemVkIHBvc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbihwb3NpdGlvbiwgcmVsYXRpdmUpIHtcblx0XHR2YXIgbiA9IHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdG0gPSByZWxhdGl2ZSA/IDAgOiB0aGlzLl9jbG9uZXMubGVuZ3RoO1xuXG5cdFx0aWYgKCEkLmlzTnVtZXJpYyhwb3NpdGlvbikgfHwgbiA8IDEpIHtcblx0XHRcdHBvc2l0aW9uID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IG4gKyBtKSB7XG5cdFx0XHRwb3NpdGlvbiA9ICgocG9zaXRpb24gLSBtIC8gMikgJSBuICsgbikgJSBuICsgbSAvIDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc2l0aW9uO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhbiBhYnNvbHV0ZSBwb3NpdGlvbiBvZiBhbiBpdGVtIGludG8gYSByZWxhdGl2ZSBvbmUuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIHRvIGNvbnZlcnQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIGNvbnZlcnRlZCBwb3NpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVsYXRpdmUgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHBvc2l0aW9uIC09IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIG1heGltdW0gcG9zaXRpb24gZm9yIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0byByZXR1cm4gYW4gYWJzb2x1dGUgcG9zaXRpb24gb3IgYSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdE93bC5wcm90b3R5cGUubWF4aW11bSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG5cdFx0dmFyIHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncyxcblx0XHRcdG1heGltdW0gPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGgsXG5cdFx0XHRib3VuZGFyeSA9IE1hdGguYWJzKHRoaXMuX2Nvb3JkaW5hdGVzW21heGltdW0gLSAxXSkgLSB0aGlzLl93aWR0aCxcblx0XHRcdGkgPSAtMSwgajtcblxuXHRcdGlmIChzZXR0aW5ncy5sb29wKSB7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDIgKyB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSBpZiAoc2V0dGluZ3MuYXV0b1dpZHRoIHx8IHNldHRpbmdzLm1lcmdlKSB7XG5cdFx0XHQvLyBiaW5hcnkgc2VhcmNoXG5cdFx0XHR3aGlsZSAobWF4aW11bSAtIGkgPiAxKSB7XG5cdFx0XHRcdE1hdGguYWJzKHRoaXMuX2Nvb3JkaW5hdGVzW2ogPSBtYXhpbXVtICsgaSA+PiAxXSkgPCBib3VuZGFyeVxuXHRcdFx0XHRcdD8gaSA9IGogOiBtYXhpbXVtID0gajtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHNldHRpbmdzLmNlbnRlcikge1xuXHRcdFx0bWF4aW11bSA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1heGltdW0gPSB0aGlzLl9pdGVtcy5sZW5ndGggLSBzZXR0aW5ncy5pdGVtcztcblx0XHR9XG5cblx0XHRpZiAocmVsYXRpdmUpIHtcblx0XHRcdG1heGltdW0gLT0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgubWF4KG1heGltdW0sIDApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBtaW5pbXVtIHBvc2l0aW9uIGZvciB0aGUgY3VycmVudCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW3JlbGF0aXZlPWZhbHNlXSAtIFdoZXRoZXIgdG8gcmV0dXJuIGFuIGFic29sdXRlIHBvc2l0aW9uIG9yIGEgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm1pbmltdW0gPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuXHRcdHJldHVybiByZWxhdGl2ZSA/IDAgOiB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMjtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyBhbiBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEByZXR1cm4ge2pRdWVyeXxBcnJheS48alF1ZXJ5Pn0gLSBUaGUgaXRlbSBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gb3IgYWxsIGl0ZW1zIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuaXRlbXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5faXRlbXMuc2xpY2UoKTtcblx0XHR9XG5cblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0XHRyZXR1cm4gdGhpcy5faXRlbXNbcG9zaXRpb25dO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIGFuIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3Bvc2l0aW9uXSAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHJldHVybiB7alF1ZXJ5fEFycmF5LjxqUXVlcnk+fSAtIFRoZSBpdGVtIGF0IHRoZSBnaXZlbiBwb3NpdGlvbiBvciBhbGwgaXRlbXMgaWYgbm8gcG9zaXRpb24gd2FzIGdpdmVuLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5tZXJnZXJzID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX21lcmdlcnMuc2xpY2UoKTtcblx0XHR9XG5cblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0XHRyZXR1cm4gdGhpcy5fbWVyZ2Vyc1twb3NpdGlvbl07XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGFic29sdXRlIHBvc2l0aW9ucyBvZiBjbG9uZXMgZm9yIGFuIGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEByZXR1cm5zIHtBcnJheS48TnVtYmVyPn0gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb25zIG9mIGNsb25lcyBmb3IgdGhlIGl0ZW0gb3IgYWxsIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY2xvbmVzID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHR2YXIgb2RkID0gdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDIsXG5cdFx0XHRldmVuID0gb2RkICsgdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0bWFwID0gZnVuY3Rpb24oaW5kZXgpIHsgcmV0dXJuIGluZGV4ICUgMiA9PT0gMCA/IGV2ZW4gKyBpbmRleCAvIDIgOiBvZGQgLSAoaW5kZXggKyAxKSAvIDIgfTtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5fY2xvbmVzLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiBtYXAoaSkgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICQubWFwKHRoaXMuX2Nsb25lcywgZnVuY3Rpb24odiwgaSkgeyByZXR1cm4gdiA9PT0gcG9zaXRpb24gPyBtYXAoaSkgOiBudWxsIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBjdXJyZW50IGFuaW1hdGlvbiBzcGVlZC5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSBhbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzIG9yIG5vdGhpbmcgdG8gbGVhdmUgaXQgdW5jaGFuZ2VkLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBjdXJyZW50IGFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnNwZWVkID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHRpZiAoc3BlZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5fc3BlZWQgPSBzcGVlZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5fc3BlZWQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGNvb3JkaW5hdGUgb2YgYW4gaXRlbS5cblx0ICogQHRvZG8gVGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgaXMgbWlzc2xlYW5kaW5nLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB3aXRoaW4gYG1pbmltdW0oKWAgYW5kIGBtYXhpbXVtKClgLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfEFycmF5LjxOdW1iZXI+fSAtIFRoZSBjb29yZGluYXRlIG9mIHRoZSBpdGVtIGluIHBpeGVsIG9yIGFsbCBjb29yZGluYXRlcy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuY29vcmRpbmF0ZXMgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHZhciBjb29yZGluYXRlID0gbnVsbDtcblxuXHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJC5tYXAodGhpcy5fY29vcmRpbmF0ZXMsICQucHJveHkoZnVuY3Rpb24oY29vcmRpbmF0ZSwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29vcmRpbmF0ZXMoaW5kZXgpO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmNlbnRlcikge1xuXHRcdFx0Y29vcmRpbmF0ZSA9IHRoaXMuX2Nvb3JkaW5hdGVzW3Bvc2l0aW9uXTtcblx0XHRcdGNvb3JkaW5hdGUgKz0gKHRoaXMud2lkdGgoKSAtIGNvb3JkaW5hdGUgKyAodGhpcy5fY29vcmRpbmF0ZXNbcG9zaXRpb24gLSAxXSB8fCAwKSkgLyAyICogKHRoaXMuc2V0dGluZ3MucnRsID8gLTEgOiAxKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29vcmRpbmF0ZSA9IHRoaXMuX2Nvb3JkaW5hdGVzW3Bvc2l0aW9uIC0gMV0gfHwgMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29vcmRpbmF0ZTtcblx0fTtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlcyB0aGUgc3BlZWQgZm9yIGEgdHJhbnNsYXRpb24uXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGZyb20gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIHN0YXJ0IGl0ZW0uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSB0byAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgdGFyZ2V0IGl0ZW0uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbZmFjdG9yPXVuZGVmaW5lZF0gLSBUaGUgdGltZSBmYWN0b3IgaW4gbWlsbGlzZWNvbmRzLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zbGF0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5kdXJhdGlvbiA9IGZ1bmN0aW9uKGZyb20sIHRvLCBmYWN0b3IpIHtcblx0XHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoTWF0aC5hYnModG8gLSBmcm9tKSwgMSksIDYpICogTWF0aC5hYnMoKGZhY3RvciB8fCB0aGlzLnNldHRpbmdzLnNtYXJ0U3BlZWQpKTtcblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBzcGVjaWZpZWQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUudG8gPSBmdW5jdGlvbihwb3NpdGlvbiwgc3BlZWQpIHtcblx0XHR2YXIgY3VycmVudCA9IHRoaXMuY3VycmVudCgpLFxuXHRcdFx0cmV2ZXJ0ID0gbnVsbCxcblx0XHRcdGRpc3RhbmNlID0gcG9zaXRpb24gLSB0aGlzLnJlbGF0aXZlKGN1cnJlbnQpLFxuXHRcdFx0ZGlyZWN0aW9uID0gKGRpc3RhbmNlID4gMCkgLSAoZGlzdGFuY2UgPCAwKSxcblx0XHRcdGl0ZW1zID0gdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0bWluaW11bSA9IHRoaXMubWluaW11bSgpLFxuXHRcdFx0bWF4aW11bSA9IHRoaXMubWF4aW11bSgpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubG9vcCkge1xuXHRcdFx0aWYgKCF0aGlzLnNldHRpbmdzLnJld2luZCAmJiBNYXRoLmFicyhkaXN0YW5jZSkgPiBpdGVtcyAvIDIpIHtcblx0XHRcdFx0ZGlzdGFuY2UgKz0gZGlyZWN0aW9uICogLTEgKiBpdGVtcztcblx0XHRcdH1cblxuXHRcdFx0cG9zaXRpb24gPSBjdXJyZW50ICsgZGlzdGFuY2U7XG5cdFx0XHRyZXZlcnQgPSAoKHBvc2l0aW9uIC0gbWluaW11bSkgJSBpdGVtcyArIGl0ZW1zKSAlIGl0ZW1zICsgbWluaW11bTtcblxuXHRcdFx0aWYgKHJldmVydCAhPT0gcG9zaXRpb24gJiYgcmV2ZXJ0IC0gZGlzdGFuY2UgPD0gbWF4aW11bSAmJiByZXZlcnQgLSBkaXN0YW5jZSA+IDApIHtcblx0XHRcdFx0Y3VycmVudCA9IHJldmVydCAtIGRpc3RhbmNlO1xuXHRcdFx0XHRwb3NpdGlvbiA9IHJldmVydDtcblx0XHRcdFx0dGhpcy5yZXNldChjdXJyZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MucmV3aW5kKSB7XG5cdFx0XHRtYXhpbXVtICs9IDE7XG5cdFx0XHRwb3NpdGlvbiA9IChwb3NpdGlvbiAlIG1heGltdW0gKyBtYXhpbXVtKSAlIG1heGltdW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvc2l0aW9uID0gTWF0aC5tYXgobWluaW11bSwgTWF0aC5taW4obWF4aW11bSwgcG9zaXRpb24pKTtcblx0XHR9XG5cblx0XHR0aGlzLnNwZWVkKHRoaXMuZHVyYXRpb24oY3VycmVudCwgcG9zaXRpb24sIHNwZWVkKSk7XG5cdFx0dGhpcy5jdXJyZW50KHBvc2l0aW9uKTtcblxuXHRcdGlmICh0aGlzLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogU2xpZGVzIHRvIHRoZSBuZXh0IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHRzcGVlZCA9IHNwZWVkIHx8IGZhbHNlO1xuXHRcdHRoaXMudG8odGhpcy5yZWxhdGl2ZSh0aGlzLmN1cnJlbnQoKSkgKyAxLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgcHJldmlvdXMgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdHNwZWVkID0gc3BlZWQgfHwgZmFsc2U7XG5cdFx0dGhpcy50byh0aGlzLnJlbGF0aXZlKHRoaXMuY3VycmVudCgpKSAtIDEsIHNwZWVkKTtcblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyB0aGUgZW5kIG9mIGFuIGFuaW1hdGlvbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cblx0XHQvLyBpZiBjc3MyIGFuaW1hdGlvbiB0aGVuIGV2ZW50IG9iamVjdCBpcyB1bmRlZmluZWRcblx0XHRpZiAoZXZlbnQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdC8vIENhdGNoIG9ubHkgb3dsLXN0YWdlIHRyYW5zaXRpb25FbmQgZXZlbnRcblx0XHRcdGlmICgoZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQub3JpZ2luYWxUYXJnZXQpICE9PSB0aGlzLiRzdGFnZS5nZXQoMCkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMubGVhdmUoJ2FuaW1hdGluZycpO1xuXHRcdHRoaXMudHJpZ2dlcigndHJhbnNsYXRlZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHZpZXdwb3J0IHdpZHRoLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm4ge051bWJlcn0gLSBUaGUgd2lkdGggaW4gcGl4ZWwuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnZpZXdwb3J0ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHdpZHRoO1xuXHRcdGlmICh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUJhc2VFbGVtZW50ICE9PSB3aW5kb3cpIHtcblx0XHRcdHdpZHRoID0gJCh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUJhc2VFbGVtZW50KS53aWR0aCgpO1xuXHRcdH0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGgpIHtcblx0XHRcdHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0fSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSB7XG5cdFx0XHR3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgJ0NhbiBub3QgZGV0ZWN0IHZpZXdwb3J0IHdpZHRoLic7XG5cdFx0fVxuXHRcdHJldHVybiB3aWR0aDtcblx0fTtcblxuXHQvKipcblx0ICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgY29udGVudC5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeXxTdHJpbmd9IGNvbnRlbnQgLSBUaGUgbmV3IGNvbnRlbnQuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbihjb250ZW50KSB7XG5cdFx0dGhpcy4kc3RhZ2UuZW1wdHkoKTtcblx0XHR0aGlzLl9pdGVtcyA9IFtdO1xuXG5cdFx0aWYgKGNvbnRlbnQpIHtcblx0XHRcdGNvbnRlbnQgPSAoY29udGVudCBpbnN0YW5jZW9mIGpRdWVyeSkgPyBjb250ZW50IDogJChjb250ZW50KTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IpIHtcblx0XHRcdGNvbnRlbnQgPSBjb250ZW50LmZpbmQoJy4nICsgdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IpO1xuXHRcdH1cblxuXHRcdGNvbnRlbnQuZmlsdGVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubm9kZVR5cGUgPT09IDE7XG5cdFx0fSkuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG5cdFx0XHRpdGVtID0gdGhpcy5wcmVwYXJlKGl0ZW0pO1xuXHRcdFx0dGhpcy4kc3RhZ2UuYXBwZW5kKGl0ZW0pO1xuXHRcdFx0dGhpcy5faXRlbXMucHVzaChpdGVtKTtcblx0XHRcdHRoaXMuX21lcmdlcnMucHVzaChpdGVtLmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFuZFNlbGYoJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0dGhpcy5yZXNldCgkLmlzTnVtZXJpYyh0aGlzLnNldHRpbmdzLnN0YXJ0UG9zaXRpb24pID8gdGhpcy5zZXR0aW5ncy5zdGFydFBvc2l0aW9uIDogMCk7XG5cblx0XHR0aGlzLmludmFsaWRhdGUoJ2l0ZW1zJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEFkZHMgYW4gaXRlbS5cblx0ICogQHRvZG8gVXNlIGBpdGVtYCBpbnN0ZWFkIG9mIGBjb250ZW50YCBmb3IgdGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fGpRdWVyeXxTdHJpbmd9IGNvbnRlbnQgLSBUaGUgaXRlbSBjb250ZW50IHRvIGFkZC5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gYXQgd2hpY2ggdG8gaW5zZXJ0IHRoZSBpdGVtIG90aGVyd2lzZSB0aGUgaXRlbSB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbmQuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNvbnRlbnQsIHBvc2l0aW9uKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLnJlbGF0aXZlKHRoaXMuX2N1cnJlbnQpO1xuXG5cdFx0cG9zaXRpb24gPSBwb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gdGhpcy5faXRlbXMubGVuZ3RoIDogdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXHRcdGNvbnRlbnQgPSBjb250ZW50IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGVudCA6ICQoY29udGVudCk7XG5cblx0XHR0aGlzLnRyaWdnZXIoJ2FkZCcsIHsgY29udGVudDogY29udGVudCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXG5cdFx0Y29udGVudCA9IHRoaXMucHJlcGFyZShjb250ZW50KTtcblxuXHRcdGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPT09IHRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5faXRlbXMubGVuZ3RoID09PSAwICYmIHRoaXMuJHN0YWdlLmFwcGVuZChjb250ZW50KTtcblx0XHRcdHRoaXMuX2l0ZW1zLmxlbmd0aCAhPT0gMCAmJiB0aGlzLl9pdGVtc1twb3NpdGlvbiAtIDFdLmFmdGVyKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5faXRlbXMucHVzaChjb250ZW50KTtcblx0XHRcdHRoaXMuX21lcmdlcnMucHVzaChjb250ZW50LmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFuZFNlbGYoJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXS5iZWZvcmUoY29udGVudCk7XG5cdFx0XHR0aGlzLl9pdGVtcy5zcGxpY2UocG9zaXRpb24sIDAsIGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5fbWVyZ2Vycy5zcGxpY2UocG9zaXRpb24sIDAsIGNvbnRlbnQuZmluZCgnW2RhdGEtbWVyZ2VdJykuYW5kU2VsZignW2RhdGEtbWVyZ2VdJykuYXR0cignZGF0YS1tZXJnZScpICogMSB8fCAxKTtcblx0XHR9XG5cblx0XHR0aGlzLl9pdGVtc1tjdXJyZW50XSAmJiB0aGlzLnJlc2V0KHRoaXMuX2l0ZW1zW2N1cnJlbnRdLmluZGV4KCkpO1xuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdhZGRlZCcsIHsgY29udGVudDogY29udGVudCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIGFuIGl0ZW0gYnkgaXRzIHBvc2l0aW9uLlxuXHQgKiBAdG9kbyBVc2UgYGl0ZW1gIGluc3RlYWQgb2YgYGNvbnRlbnRgIGZvciB0aGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbSB0byByZW1vdmUuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcigncmVtb3ZlJywgeyBjb250ZW50OiB0aGlzLl9pdGVtc1twb3NpdGlvbl0sIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblxuXHRcdHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXS5yZW1vdmUoKTtcblx0XHR0aGlzLl9pdGVtcy5zcGxpY2UocG9zaXRpb24sIDEpO1xuXHRcdHRoaXMuX21lcmdlcnMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnaXRlbXMnKTtcblxuXHRcdHRoaXMudHJpZ2dlcigncmVtb3ZlZCcsIHsgY29udGVudDogbnVsbCwgcG9zaXRpb246IHBvc2l0aW9uIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBQcmVsb2FkcyBpbWFnZXMgd2l0aCBhdXRvIHdpZHRoLlxuXHQgKiBAdG9kbyBSZXBsYWNlIGJ5IGEgbW9yZSBnZW5lcmljIGFwcHJvYWNoXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUucHJlbG9hZEF1dG9XaWR0aEltYWdlcyA9IGZ1bmN0aW9uKGltYWdlcykge1xuXHRcdGltYWdlcy5lYWNoKCQucHJveHkoZnVuY3Rpb24oaSwgZWxlbWVudCkge1xuXHRcdFx0dGhpcy5lbnRlcigncHJlLWxvYWRpbmcnKTtcblx0XHRcdGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXHRcdFx0JChuZXcgSW1hZ2UoKSkub25lKCdsb2FkJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGVsZW1lbnQuYXR0cignc3JjJywgZS50YXJnZXQuc3JjKTtcblx0XHRcdFx0ZWxlbWVudC5jc3MoJ29wYWNpdHknLCAxKTtcblx0XHRcdFx0dGhpcy5sZWF2ZSgncHJlLWxvYWRpbmcnKTtcblx0XHRcdFx0IXRoaXMuaXMoJ3ByZS1sb2FkaW5nJykgJiYgIXRoaXMuaXMoJ2luaXRpYWxpemluZycpICYmIHRoaXMucmVmcmVzaCgpO1xuXHRcdFx0fSwgdGhpcykpLmF0dHIoJ3NyYycsIGVsZW1lbnQuYXR0cignc3JjJykgfHwgZWxlbWVudC5hdHRyKCdkYXRhLXNyYycpIHx8IGVsZW1lbnQuYXR0cignZGF0YS1zcmMtcmV0aW5hJykpO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMuJGVsZW1lbnQub2ZmKCcub3dsLmNvcmUnKTtcblx0XHR0aGlzLiRzdGFnZS5vZmYoJy5vd2wuY29yZScpO1xuXHRcdCQoZG9jdW1lbnQpLm9mZignLm93bC5jb3JlJyk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlICE9PSBmYWxzZSkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcblx0XHRcdHRoaXMub2ZmKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZXJzLm9uVGhyb3R0bGVkUmVzaXplKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpIGluIHRoaXMuX3BsdWdpbnMpIHtcblx0XHRcdHRoaXMuX3BsdWdpbnNbaV0uZGVzdHJveSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCcuY2xvbmVkJykucmVtb3ZlKCk7XG5cblx0XHR0aGlzLiRzdGFnZS51bndyYXAoKTtcblx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbigpLmNvbnRlbnRzKCkudW53cmFwKCk7XG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS51bndyYXAoKTtcblxuXHRcdHRoaXMuJGVsZW1lbnRcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucmVmcmVzaENsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRlZENsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ydGxDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZHJhZ0NsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MpXG5cdFx0XHQuYXR0cignY2xhc3MnLCB0aGlzLiRlbGVtZW50LmF0dHIoJ2NsYXNzJykucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMub3B0aW9ucy5yZXNwb25zaXZlQ2xhc3MgKyAnLVxcXFxTK1xcXFxzJywgJ2cnKSwgJycpKVxuXHRcdFx0LnJlbW92ZURhdGEoJ293bC5jYXJvdXNlbCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBPcGVyYXRvcnMgdG8gY2FsY3VsYXRlIHJpZ2h0LXRvLWxlZnQgYW5kIGxlZnQtdG8tcmlnaHQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFthXSAtIFRoZSBsZWZ0IHNpZGUgb3BlcmFuZC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtvXSAtIFRoZSBvcGVyYXRvci5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtiXSAtIFRoZSByaWdodCBzaWRlIG9wZXJhbmQuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9wID0gZnVuY3Rpb24oYSwgbywgYikge1xuXHRcdHZhciBydGwgPSB0aGlzLnNldHRpbmdzLnJ0bDtcblx0XHRzd2l0Y2ggKG8pIHtcblx0XHRcdGNhc2UgJzwnOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA+IGIgOiBhIDwgYjtcblx0XHRcdGNhc2UgJz4nOlxuXHRcdFx0XHRyZXR1cm4gcnRsID8gYSA8IGIgOiBhID4gYjtcblx0XHRcdGNhc2UgJz49Jzpcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPD0gYiA6IGEgPj0gYjtcblx0XHRcdGNhc2UgJzw9Jzpcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPj0gYiA6IGEgPD0gYjtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQXR0YWNoZXMgdG8gYW4gaW50ZXJuYWwgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCAtIFRoZSBldmVudCBzb3VyY2UuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBldmVudCBuYW1lLlxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciAtIFRoZSBldmVudCBoYW5kbGVyIHRvIGF0dGFjaC5cblx0ICogQHBhcmFtIHtCb29sZWFufSBjYXB0dXJlIC0gV2V0aGVyIHRoZSBldmVudCBzaG91bGQgYmUgaGFuZGxlZCBhdCB0aGUgY2FwdHVyaW5nIHBoYXNlIG9yIG5vdC5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcblx0XHRpZiAoZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKTtcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQuYXR0YWNoRXZlbnQpIHtcblx0XHRcdGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXRhY2hlcyBmcm9tIGFuIGludGVybmFsIGV2ZW50LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgc291cmNlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgYXR0YWNoZWQgZXZlbnQgaGFuZGxlciB0byBkZXRhY2guXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gY2FwdHVyZSAtIFdldGhlciB0aGUgYXR0YWNoZWQgZXZlbnQgaGFuZGxlciB3YXMgcmVnaXN0ZXJlZCBhcyBhIGNhcHR1cmluZyBsaXN0ZW5lciBvciBub3QuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuXHRcdGlmIChlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcblx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuXHRcdH0gZWxzZSBpZiAoZWxlbWVudC5kZXRhY2hFdmVudCkge1xuXHRcdFx0ZWxlbWVudC5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzIGEgcHVibGljIGV2ZW50LlxuXHQgKiBAdG9kbyBSZW1vdmUgYHN0YXR1c2AsIGByZWxhdGVkVGFyZ2V0YCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0gVGhlIGV2ZW50IG5hbWUuXG5cdCAqIEBwYXJhbSB7Kn0gW2RhdGE9bnVsbF0gLSBUaGUgZXZlbnQgZGF0YS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtuYW1lc3BhY2U9Y2Fyb3VzZWxdIC0gVGhlIGV2ZW50IG5hbWVzcGFjZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtzdGF0ZV0gLSBUaGUgc3RhdGUgd2hpY2ggaXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudC5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbZW50ZXI9ZmFsc2VdIC0gSW5kaWNhdGVzIGlmIHRoZSBjYWxsIGVudGVycyB0aGUgc3BlY2lmaWVkIHN0YXRlIG9yIG5vdC5cblx0ICogQHJldHVybnMge0V2ZW50fSAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihuYW1lLCBkYXRhLCBuYW1lc3BhY2UsIHN0YXRlLCBlbnRlcikge1xuXHRcdHZhciBzdGF0dXMgPSB7XG5cdFx0XHRpdGVtOiB7IGNvdW50OiB0aGlzLl9pdGVtcy5sZW5ndGgsIGluZGV4OiB0aGlzLmN1cnJlbnQoKSB9XG5cdFx0fSwgaGFuZGxlciA9ICQuY2FtZWxDYXNlKFxuXHRcdFx0JC5ncmVwKFsgJ29uJywgbmFtZSwgbmFtZXNwYWNlIF0sIGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHYgfSlcblx0XHRcdFx0LmpvaW4oJy0nKS50b0xvd2VyQ2FzZSgpXG5cdFx0KSwgZXZlbnQgPSAkLkV2ZW50KFxuXHRcdFx0WyBuYW1lLCAnb3dsJywgbmFtZXNwYWNlIHx8ICdjYXJvdXNlbCcgXS5qb2luKCcuJykudG9Mb3dlckNhc2UoKSxcblx0XHRcdCQuZXh0ZW5kKHsgcmVsYXRlZFRhcmdldDogdGhpcyB9LCBzdGF0dXMsIGRhdGEpXG5cdFx0KTtcblxuXHRcdGlmICghdGhpcy5fc3VwcmVzc1tuYW1lXSkge1xuXHRcdFx0JC5lYWNoKHRoaXMuX3BsdWdpbnMsIGZ1bmN0aW9uKG5hbWUsIHBsdWdpbikge1xuXHRcdFx0XHRpZiAocGx1Z2luLm9uVHJpZ2dlcikge1xuXHRcdFx0XHRcdHBsdWdpbi5vblRyaWdnZXIoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5yZWdpc3Rlcih7IHR5cGU6IE93bC5UeXBlLkV2ZW50LCBuYW1lOiBuYW1lIH0pO1xuXHRcdFx0dGhpcy4kZWxlbWVudC50cmlnZ2VyKGV2ZW50KTtcblxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MgJiYgdHlwZW9mIHRoaXMuc2V0dGluZ3NbaGFuZGxlcl0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5zZXR0aW5nc1toYW5kbGVyXS5jYWxsKHRoaXMsIGV2ZW50KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIEVudGVycyBhIHN0YXRlLlxuXHQgKiBAcGFyYW0gbmFtZSAtIFRoZSBzdGF0ZSBuYW1lLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5lbnRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0XHQkLmVhY2goWyBuYW1lIF0uY29uY2F0KHRoaXMuX3N0YXRlcy50YWdzW25hbWVdIHx8IFtdKSwgJC5wcm94eShmdW5jdGlvbihpLCBuYW1lKSB7XG5cdFx0XHRpZiAodGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXSA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdKys7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBMZWF2ZXMgYSBzdGF0ZS5cblx0ICogQHBhcmFtIG5hbWUgLSBUaGUgc3RhdGUgbmFtZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUubGVhdmUgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0JC5lYWNoKFsgbmFtZSBdLmNvbmNhdCh0aGlzLl9zdGF0ZXMudGFnc1tuYW1lXSB8fCBbXSksICQucHJveHkoZnVuY3Rpb24oaSwgbmFtZSkge1xuXHRcdFx0dGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0tLTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhbiBldmVudCBvciBzdGF0ZS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IC0gVGhlIGV2ZW50IG9yIHN0YXRlIHRvIHJlZ2lzdGVyLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uKG9iamVjdCkge1xuXHRcdGlmIChvYmplY3QudHlwZSA9PT0gT3dsLlR5cGUuRXZlbnQpIHtcblx0XHRcdGlmICghJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXSkge1xuXHRcdFx0XHQkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmICghJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5vd2wpIHtcblx0XHRcdFx0dmFyIF9kZWZhdWx0ID0gJC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5fZGVmYXVsdDtcblx0XHRcdFx0JC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXS5fZGVmYXVsdCA9IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRpZiAoX2RlZmF1bHQgJiYgX2RlZmF1bHQuYXBwbHkgJiYgKCFlLm5hbWVzcGFjZSB8fCBlLm5hbWVzcGFjZS5pbmRleE9mKCdvd2wnKSA9PT0gLTEpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX2RlZmF1bHQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIGUubmFtZXNwYWNlICYmIGUubmFtZXNwYWNlLmluZGV4T2YoJ293bCcpID4gLTE7XG5cdFx0XHRcdH07XG5cdFx0XHRcdCQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0ub3dsID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKG9iamVjdC50eXBlID09PSBPd2wuVHlwZS5TdGF0ZSkge1xuXHRcdFx0aWYgKCF0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0pIHtcblx0XHRcdFx0dGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdID0gb2JqZWN0LnRhZ3M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0gPSB0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0uY29uY2F0KG9iamVjdC50YWdzKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdID0gJC5ncmVwKHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSwgJC5wcm94eShmdW5jdGlvbih0YWcsIGkpIHtcblx0XHRcdFx0cmV0dXJuICQuaW5BcnJheSh0YWcsIHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSkgPT09IGk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdXBwcmVzc2VzIGV2ZW50cy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBldmVudHMgLSBUaGUgZXZlbnRzIHRvIHN1cHByZXNzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5zdXBwcmVzcyA9IGZ1bmN0aW9uKGV2ZW50cykge1xuXHRcdCQuZWFjaChldmVudHMsICQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGV2ZW50KSB7XG5cdFx0XHR0aGlzLl9zdXByZXNzW2V2ZW50XSA9IHRydWU7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWxlYXNlcyBzdXBwcmVzc2VkIGV2ZW50cy5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0FycmF5LjxTdHJpbmc+fSBldmVudHMgLSBUaGUgZXZlbnRzIHRvIHJlbGVhc2UuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlbGVhc2UgPSBmdW5jdGlvbihldmVudHMpIHtcblx0XHQkLmVhY2goZXZlbnRzLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBldmVudCkge1xuXHRcdFx0ZGVsZXRlIHRoaXMuX3N1cHJlc3NbZXZlbnRdO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB1bmlmaWVkIHBvaW50ZXIgY29vcmRpbmF0ZXMgZnJvbSBldmVudC5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IC0gVGhlIGBtb3VzZWRvd25gIG9yIGB0b3VjaHN0YXJ0YCBldmVudC5cblx0ICogQHJldHVybnMge09iamVjdH0gLSBDb250YWlucyBgeGAgYW5kIGB5YCBjb29yZGluYXRlcyBvZiBjdXJyZW50IHBvaW50ZXIgcG9zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnBvaW50ZXIgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciByZXN1bHQgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcblxuXHRcdGV2ZW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCB8fCBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cblx0XHRldmVudCA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggP1xuXHRcdFx0ZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA/XG5cdFx0XHRcdGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZXZlbnQ7XG5cblx0XHRpZiAoZXZlbnQucGFnZVgpIHtcblx0XHRcdHJlc3VsdC54ID0gZXZlbnQucGFnZVg7XG5cdFx0XHRyZXN1bHQueSA9IGV2ZW50LnBhZ2VZO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQueCA9IGV2ZW50LmNsaWVudFg7XG5cdFx0XHRyZXN1bHQueSA9IGV2ZW50LmNsaWVudFk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgZGlmZmVyZW5jZSBvZiB0d28gdmVjdG9ycy5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAtIFRoZSBmaXJzdCB2ZWN0b3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSAtIFRoZSBzZWNvbmQgdmVjdG9yLlxuXHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSBkaWZmZXJlbmNlLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5kaWZmZXJlbmNlID0gZnVuY3Rpb24oZmlyc3QsIHNlY29uZCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR4OiBmaXJzdC54IC0gc2Vjb25kLngsXG5cdFx0XHR5OiBmaXJzdC55IC0gc2Vjb25kLnlcblx0XHR9O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUaGUgalF1ZXJ5IFBsdWdpbiBmb3IgdGhlIE93bCBDYXJvdXNlbFxuXHQgKiBAdG9kbyBOYXZpZ2F0aW9uIHBsdWdpbiBgbmV4dGAgYW5kIGBwcmV2YFxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHQkLmZuLm93bENhcm91c2VsID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHRcdGRhdGEgPSAkdGhpcy5kYXRhKCdvd2wuY2Fyb3VzZWwnKTtcblxuXHRcdFx0aWYgKCFkYXRhKSB7XG5cdFx0XHRcdGRhdGEgPSBuZXcgT3dsKHRoaXMsIHR5cGVvZiBvcHRpb24gPT0gJ29iamVjdCcgJiYgb3B0aW9uKTtcblx0XHRcdFx0JHRoaXMuZGF0YSgnb3dsLmNhcm91c2VsJywgZGF0YSk7XG5cblx0XHRcdFx0JC5lYWNoKFtcblx0XHRcdFx0XHQnbmV4dCcsICdwcmV2JywgJ3RvJywgJ2Rlc3Ryb3knLCAncmVmcmVzaCcsICdyZXBsYWNlJywgJ2FkZCcsICdyZW1vdmUnXG5cdFx0XHRcdF0sIGZ1bmN0aW9uKGksIGV2ZW50KSB7XG5cdFx0XHRcdFx0ZGF0YS5yZWdpc3Rlcih7IHR5cGU6IE93bC5UeXBlLkV2ZW50LCBuYW1lOiBldmVudCB9KTtcblx0XHRcdFx0XHRkYXRhLiRlbGVtZW50Lm9uKGV2ZW50ICsgJy5vd2wuY2Fyb3VzZWwuY29yZScsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucmVsYXRlZFRhcmdldCAhPT0gdGhpcykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN1cHByZXNzKFsgZXZlbnQgXSk7XG5cdFx0XHRcdFx0XHRcdGRhdGFbZXZlbnRdLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG5cdFx0XHRcdFx0XHRcdHRoaXMucmVsZWFzZShbIGV2ZW50IF0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIGRhdGEpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnICYmIG9wdGlvbi5jaGFyQXQoMCkgIT09ICdfJykge1xuXHRcdFx0XHRkYXRhW29wdGlvbl0uYXBwbHkoZGF0YSwgYXJncyk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgdGhlIGpRdWVyeSBQbHVnaW5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3RvciA9IE93bDtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9SZWZyZXNoIFBsdWdpblxuICogQHZlcnNpb24gMi4wLjAtYmV0YS4zXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBhdXRvIHJlZnJlc2ggcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEF1dG8gUmVmcmVzaCBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEF1dG9SZWZyZXNoID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogUmVmcmVzaCBpbnRlcnZhbC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBXaGV0aGVyIHRoZSBlbGVtZW50IGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5fdmlzaWJsZSA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9SZWZyZXNoKSB7XG5cdFx0XHRcdFx0dGhpcy53YXRjaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEF1dG9SZWZyZXNoLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvUmVmcmVzaC5EZWZhdWx0cyA9IHtcblx0XHRhdXRvUmVmcmVzaDogdHJ1ZSxcblx0XHRhdXRvUmVmcmVzaEludGVydmFsOiA1MDBcblx0fTtcblxuXHQvKipcblx0ICogV2F0Y2hlcyB0aGUgZWxlbWVudC5cblx0ICovXG5cdEF1dG9SZWZyZXNoLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLl9pbnRlcnZhbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3Zpc2libGUgPSB0aGlzLl9jb3JlLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpO1xuXHRcdHRoaXMuX2ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCQucHJveHkodGhpcy5yZWZyZXNoLCB0aGlzKSwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvUmVmcmVzaEludGVydmFsKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVmcmVzaGVzIHRoZSBlbGVtZW50LlxuXHQgKi9cblx0QXV0b1JlZnJlc2gucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5fY29yZS4kZWxlbWVudC5pcygnOnZpc2libGUnKSA9PT0gdGhpcy5fdmlzaWJsZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3Zpc2libGUgPSAhdGhpcy5fdmlzaWJsZTtcblxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ293bC1oaWRkZW4nLCAhdGhpcy5fdmlzaWJsZSk7XG5cblx0XHR0aGlzLl92aXNpYmxlICYmICh0aGlzLl9jb3JlLmludmFsaWRhdGUoJ3dpZHRoJykgJiYgdGhpcy5fY29yZS5yZWZyZXNoKCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0QXV0b1JlZnJlc2gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BdXRvUmVmcmVzaCA9IEF1dG9SZWZyZXNoO1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogTGF6eSBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMC4wLWJldGEuM1xuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBsYXp5IHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBMYXp5IFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgTGF6eSA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxyZWFkeSBsb2FkZWQgaXRlbXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtBcnJheS48alF1ZXJ5Pn1cblx0XHQgKi9cblx0XHR0aGlzLl9sb2FkZWQgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCBjaGFuZ2Uub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmICghZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXRoaXMuX2NvcmUuc2V0dGluZ3MgfHwgIXRoaXMuX2NvcmUuc2V0dGluZ3MubGF6eUxvYWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoKGUucHJvcGVydHkgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHx8IGUudHlwZSA9PSAnaW5pdGlhbGl6ZWQnKSB7XG5cdFx0XHRcdFx0dmFyIHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcblx0XHRcdFx0XHRcdG4gPSAoc2V0dGluZ3MuY2VudGVyICYmIE1hdGguY2VpbChzZXR0aW5ncy5pdGVtcyAvIDIpIHx8IHNldHRpbmdzLml0ZW1zKSxcblx0XHRcdFx0XHRcdGkgPSAoKHNldHRpbmdzLmNlbnRlciAmJiBuICogLTEpIHx8IDApLFxuXHRcdFx0XHRcdFx0cG9zaXRpb24gPSAoKGUucHJvcGVydHkgJiYgZS5wcm9wZXJ0eS52YWx1ZSkgfHwgdGhpcy5fY29yZS5jdXJyZW50KCkpICsgaSxcblx0XHRcdFx0XHRcdGNsb25lcyA9IHRoaXMuX2NvcmUuY2xvbmVzKCkubGVuZ3RoLFxuXHRcdFx0XHRcdFx0bG9hZCA9ICQucHJveHkoZnVuY3Rpb24oaSwgdikgeyB0aGlzLmxvYWQodikgfSwgdGhpcyk7XG5cblx0XHRcdFx0XHR3aGlsZSAoaSsrIDwgbikge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkKGNsb25lcyAvIDIgKyB0aGlzLl9jb3JlLnJlbGF0aXZlKHBvc2l0aW9uKSk7XG5cdFx0XHRcdFx0XHRjbG9uZXMgJiYgJC5lYWNoKHRoaXMuX2NvcmUuY2xvbmVzKHRoaXMuX2NvcmUucmVsYXRpdmUocG9zaXRpb24pKSwgbG9hZCk7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbisrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IHRoZSBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTGF6eS5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdExhenkuRGVmYXVsdHMgPSB7XG5cdFx0bGF6eUxvYWQ6IGZhbHNlXG5cdH1cblxuXHQvKipcblx0ICogTG9hZHMgYWxsIHJlc291cmNlcyBvZiBhbiBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgcG9zaXRpb24uXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvbiAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgaXRlbS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0TGF6eS5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0dmFyICRpdGVtID0gdGhpcy5fY29yZS4kc3RhZ2UuY2hpbGRyZW4oKS5lcShwb3NpdGlvbiksXG5cdFx0XHQkZWxlbWVudHMgPSAkaXRlbSAmJiAkaXRlbS5maW5kKCcub3dsLWxhenknKTtcblxuXHRcdGlmICghJGVsZW1lbnRzIHx8ICQuaW5BcnJheSgkaXRlbS5nZXQoMCksIHRoaXMuX2xvYWRlZCkgPiAtMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdCRlbGVtZW50cy5lYWNoKCQucHJveHkoZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcblx0XHRcdHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCksIGltYWdlLFxuXHRcdFx0XHR1cmwgPSAod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxICYmICRlbGVtZW50LmF0dHIoJ2RhdGEtc3JjLXJldGluYScpKSB8fCAkZWxlbWVudC5hdHRyKCdkYXRhLXNyYycpO1xuXG5cdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuXG5cdFx0XHRpZiAoJGVsZW1lbnQuaXMoJ2ltZycpKSB7XG5cdFx0XHRcdCRlbGVtZW50Lm9uZSgnbG9hZC5vd2wubGF6eScsICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKCdvcGFjaXR5JywgMSk7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdsb2FkZWQnLCB7IGVsZW1lbnQ6ICRlbGVtZW50LCB1cmw6IHVybCB9LCAnbGF6eScpO1xuXHRcdFx0XHR9LCB0aGlzKSkuYXR0cignc3JjJywgdXJsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGltYWdlID0gbmV3IEltYWdlKCk7XG5cdFx0XHRcdGltYWdlLm9ubG9hZCA9ICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JGVsZW1lbnQuY3NzKHtcblx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgdXJsICsgJyknLFxuXHRcdFx0XHRcdFx0J29wYWNpdHknOiAnMSdcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWRlZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XG5cdFx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0XHRpbWFnZS5zcmMgPSB1cmw7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0dGhpcy5fbG9hZGVkLnB1c2goJGl0ZW0uZ2V0KDApKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRMYXp5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuaGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuaGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkxhenkgPSBMYXp5O1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQXV0b0hlaWdodCBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMC4wLWJldGEuM1xuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBhdXRvIGhlaWdodCBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgQXV0byBIZWlnaHQgUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBBdXRvSGVpZ2h0ID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCByZWZyZXNoZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHQpIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0ICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKXtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdsb2FkZWQub3dsLmxhenknOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodFxuXHRcdFx0XHRcdCYmIGUuZWxlbWVudC5jbG9zZXN0KCcuJyArIHRoaXMuX2NvcmUuc2V0dGluZ3MuaXRlbUNsYXNzKS5pbmRleCgpID09PSB0aGlzLl9jb3JlLmN1cnJlbnQoKSkge1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b0hlaWdodC5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b0hlaWdodC5EZWZhdWx0cyA9IHtcblx0XHRhdXRvSGVpZ2h0OiBmYWxzZSxcblx0XHRhdXRvSGVpZ2h0Q2xhc3M6ICdvd2wtaGVpZ2h0J1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSB2aWV3LlxuXHQgKi9cblx0QXV0b0hlaWdodC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHN0YXJ0ID0gdGhpcy5fY29yZS5fY3VycmVudCxcblx0XHRcdGVuZCA9IHN0YXJ0ICsgdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtcyxcblx0XHRcdHZpc2libGUgPSB0aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLnRvQXJyYXkoKS5zbGljZShzdGFydCwgZW5kKTtcblx0XHRcdGhlaWdodHMgPSBbXSxcblx0XHRcdG1heGhlaWdodCA9IDA7XG5cblx0XHQkLmVhY2godmlzaWJsZSwgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcblx0XHRcdGhlaWdodHMucHVzaCgkKGl0ZW0pLmhlaWdodCgpKTtcblx0XHR9KTtcblxuXHRcdG1heGhlaWdodCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpO1xuXG5cdFx0dGhpcy5fY29yZS4kc3RhZ2UucGFyZW50KClcblx0XHRcdC5oZWlnaHQobWF4aGVpZ2h0KVxuXHRcdFx0LmFkZENsYXNzKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodENsYXNzKTtcblx0fTtcblxuXHRBdXRvSGVpZ2h0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuQXV0b0hlaWdodCA9IEF1dG9IZWlnaHQ7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBWaWRlbyBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMC4wLWJldGEuM1xuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSB2aWRlbyBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgVmlkZW8gUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBWaWRlbyA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIENhY2hlIGFsbCB2aWRlbyBVUkxzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3ZpZGVvcyA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBwbGF5aW5nIGl0ZW0uXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy5fcGxheWluZyA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHRvZG8gVGhlIGNsb25lZCBjb250ZW50IHJlbW92YWxlIGlzIHRvbyBsYXRlXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUucmVnaXN0ZXIoeyB0eXBlOiAnc3RhdGUnLCBuYW1lOiAncGxheWluZycsIHRhZ3M6IFsgJ2ludGVyYWN0aW5nJyBdIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdyZXNpemUub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvICYmIHRoaXMuaXNJbkZ1bGxTY3JlZW4oKSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncmVmcmVzaGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5pcygncmVzaXppbmcnKSkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUuJHN0YWdlLmZpbmQoJy5jbG9uZWQgLm93bC12aWRlby1mcmFtZScpLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAncG9zaXRpb24nICYmIHRoaXMuX3BsYXlpbmcpIHtcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmICghZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgJGVsZW1lbnQgPSAkKGUuY29udGVudCkuZmluZCgnLm93bC12aWRlbycpO1xuXG5cdFx0XHRcdGlmICgkZWxlbWVudC5sZW5ndGgpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXHRcdFx0XHRcdHRoaXMuZmV0Y2goJGVsZW1lbnQsICQoZS5jb250ZW50KSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgVmlkZW8uRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbignY2xpY2sub3dsLnZpZGVvJywgJy5vd2wtdmlkZW8tcGxheS1pY29uJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHR0aGlzLnBsYXkoZSk7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdFZpZGVvLkRlZmF1bHRzID0ge1xuXHRcdHZpZGVvOiBmYWxzZSxcblx0XHR2aWRlb0hlaWdodDogZmFsc2UsXG5cdFx0dmlkZW9XaWR0aDogZmFsc2Vcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgdmlkZW8gSUQgYW5kIHRoZSB0eXBlIChZb3VUdWJlL1ZpbWVvIG9ubHkpLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSB0YXJnZXQgLSBUaGUgdGFyZ2V0IGNvbnRhaW5pbmcgdGhlIHZpZGVvIGRhdGEuXG5cdCAqIEBwYXJhbSB7alF1ZXJ5fSBpdGVtIC0gVGhlIGl0ZW0gY29udGFpbmluZyB0aGUgdmlkZW8uXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbih0YXJnZXQsIGl0ZW0pIHtcblx0XHR2YXIgdHlwZSA9IHRhcmdldC5hdHRyKCdkYXRhLXZpbWVvLWlkJykgPyAndmltZW8nIDogJ3lvdXR1YmUnLFxuXHRcdFx0aWQgPSB0YXJnZXQuYXR0cignZGF0YS12aW1lby1pZCcpIHx8IHRhcmdldC5hdHRyKCdkYXRhLXlvdXR1YmUtaWQnKSxcblx0XHRcdHdpZHRoID0gdGFyZ2V0LmF0dHIoJ2RhdGEtd2lkdGgnKSB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvV2lkdGgsXG5cdFx0XHRoZWlnaHQgPSB0YXJnZXQuYXR0cignZGF0YS1oZWlnaHQnKSB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLnZpZGVvSGVpZ2h0LFxuXHRcdFx0dXJsID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcblxuXHRcdGlmICh1cmwpIHtcblx0XHRcdGlkID0gdXJsLm1hdGNoKC8oaHR0cDp8aHR0cHM6fClcXC9cXC8ocGxheWVyLnx3d3cuKT8odmltZW9cXC5jb218eW91dHUoYmVcXC5jb218XFwuYmV8YmVcXC5nb29nbGVhcGlzXFwuY29tKSlcXC8odmlkZW9cXC98ZW1iZWRcXC98d2F0Y2hcXD92PXx2XFwvKT8oW0EtWmEtejAtOS5fJS1dKikoXFwmXFxTKyk/Lyk7XG5cblx0XHRcdGlmIChpZFszXS5pbmRleE9mKCd5b3V0dScpID4gLTEpIHtcblx0XHRcdFx0dHlwZSA9ICd5b3V0dWJlJztcblx0XHRcdH0gZWxzZSBpZiAoaWRbM10uaW5kZXhPZigndmltZW8nKSA+IC0xKSB7XG5cdFx0XHRcdHR5cGUgPSAndmltZW8nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWaWRlbyBVUkwgbm90IHN1cHBvcnRlZC4nKTtcblx0XHRcdH1cblx0XHRcdGlkID0gaWRbNl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWlzc2luZyB2aWRlbyBVUkwuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlkZW9zW3VybF0gPSB7XG5cdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0aWQ6IGlkLFxuXHRcdFx0d2lkdGg6IHdpZHRoLFxuXHRcdFx0aGVpZ2h0OiBoZWlnaHRcblx0XHR9O1xuXG5cdFx0aXRlbS5hdHRyKCdkYXRhLXZpZGVvJywgdXJsKTtcblxuXHRcdHRoaXMudGh1bWJuYWlsKHRhcmdldCwgdGhpcy5fdmlkZW9zW3VybF0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHZpZGVvIHRodW1ibmFpbC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gdGFyZ2V0IC0gVGhlIHRhcmdldCBjb250YWluaW5nIHRoZSB2aWRlbyBkYXRhLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIFRoZSB2aWRlbyBpbmZvIG9iamVjdC5cblx0ICogQHNlZSBgZmV0Y2hgXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUudGh1bWJuYWlsID0gZnVuY3Rpb24odGFyZ2V0LCB2aWRlbykge1xuXHRcdHZhciB0bkxpbmssXG5cdFx0XHRpY29uLFxuXHRcdFx0cGF0aCxcblx0XHRcdGRpbWVuc2lvbnMgPSB2aWRlby53aWR0aCAmJiB2aWRlby5oZWlnaHQgPyAnc3R5bGU9XCJ3aWR0aDonICsgdmlkZW8ud2lkdGggKyAncHg7aGVpZ2h0OicgKyB2aWRlby5oZWlnaHQgKyAncHg7XCInIDogJycsXG5cdFx0XHRjdXN0b21UbiA9IHRhcmdldC5maW5kKCdpbWcnKSxcblx0XHRcdHNyY1R5cGUgPSAnc3JjJyxcblx0XHRcdGxhenlDbGFzcyA9ICcnLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzLFxuXHRcdFx0Y3JlYXRlID0gZnVuY3Rpb24ocGF0aCkge1xuXHRcdFx0XHRpY29uID0gJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tcGxheS1pY29uXCI+PC9kaXY+JztcblxuXHRcdFx0XHRpZiAoc2V0dGluZ3MubGF6eUxvYWQpIHtcblx0XHRcdFx0XHR0bkxpbmsgPSAnPGRpdiBjbGFzcz1cIm93bC12aWRlby10biAnICsgbGF6eUNsYXNzICsgJ1wiICcgKyBzcmNUeXBlICsgJz1cIicgKyBwYXRoICsgJ1wiPjwvZGl2Pic7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dG5MaW5rID0gJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tdG5cIiBzdHlsZT1cIm9wYWNpdHk6MTtiYWNrZ3JvdW5kLWltYWdlOnVybCgnICsgcGF0aCArICcpXCI+PC9kaXY+Jztcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXJnZXQuYWZ0ZXIodG5MaW5rKTtcblx0XHRcdFx0dGFyZ2V0LmFmdGVyKGljb24pO1xuXHRcdFx0fTtcblxuXHRcdC8vIHdyYXAgdmlkZW8gY29udGVudCBpbnRvIG93bC12aWRlby13cmFwcGVyIGRpdlxuXHRcdHRhcmdldC53cmFwKCc8ZGl2IGNsYXNzPVwib3dsLXZpZGVvLXdyYXBwZXJcIicgKyBkaW1lbnNpb25zICsgJz48L2Rpdj4nKTtcblxuXHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmxhenlMb2FkKSB7XG5cdFx0XHRzcmNUeXBlID0gJ2RhdGEtc3JjJztcblx0XHRcdGxhenlDbGFzcyA9ICdvd2wtbGF6eSc7XG5cdFx0fVxuXG5cdFx0Ly8gY3VzdG9tIHRodW1ibmFpbFxuXHRcdGlmIChjdXN0b21Ubi5sZW5ndGgpIHtcblx0XHRcdGNyZWF0ZShjdXN0b21Ubi5hdHRyKHNyY1R5cGUpKTtcblx0XHRcdGN1c3RvbVRuLnJlbW92ZSgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh2aWRlby50eXBlID09PSAneW91dHViZScpIHtcblx0XHRcdHBhdGggPSBcImh0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvXCIgKyB2aWRlby5pZCArIFwiL2hxZGVmYXVsdC5qcGdcIjtcblx0XHRcdGNyZWF0ZShwYXRoKTtcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2aW1lbycpIHtcblx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0XHR1cmw6ICdodHRwOi8vdmltZW8uY29tL2FwaS92Mi92aWRlby8nICsgdmlkZW8uaWQgKyAnLmpzb24nLFxuXHRcdFx0XHRqc29ucDogJ2NhbGxiYWNrJyxcblx0XHRcdFx0ZGF0YVR5cGU6ICdqc29ucCcsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRcdFx0XHRwYXRoID0gZGF0YVswXS50aHVtYm5haWxfbGFyZ2U7XG5cdFx0XHRcdFx0Y3JlYXRlKHBhdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFN0b3BzIHRoZSBjdXJyZW50IHZpZGVvLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX2NvcmUudHJpZ2dlcignc3RvcCcsIG51bGwsICd2aWRlbycpO1xuXHRcdHRoaXMuX3BsYXlpbmcuZmluZCgnLm93bC12aWRlby1mcmFtZScpLnJlbW92ZSgpO1xuXHRcdHRoaXMuX3BsYXlpbmcucmVtb3ZlQ2xhc3MoJ293bC12aWRlby1wbGF5aW5nJyk7XG5cdFx0dGhpcy5fcGxheWluZyA9IG51bGw7XG5cdFx0dGhpcy5fY29yZS5sZWF2ZSgncGxheWluZycpO1xuXHRcdHRoaXMuX2NvcmUudHJpZ2dlcignc3RvcHBlZCcsIG51bGwsICd2aWRlbycpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdGFydHMgdGhlIGN1cnJlbnQgdmlkZW8uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0VmlkZW8ucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCksXG5cdFx0XHRpdGVtID0gdGFyZ2V0LmNsb3Nlc3QoJy4nICsgdGhpcy5fY29yZS5zZXR0aW5ncy5pdGVtQ2xhc3MpLFxuXHRcdFx0dmlkZW8gPSB0aGlzLl92aWRlb3NbaXRlbS5hdHRyKCdkYXRhLXZpZGVvJyldLFxuXHRcdFx0d2lkdGggPSB2aWRlby53aWR0aCB8fCAnMTAwJScsXG5cdFx0XHRoZWlnaHQgPSB2aWRlby5oZWlnaHQgfHwgdGhpcy5fY29yZS4kc3RhZ2UuaGVpZ2h0KCksXG5cdFx0XHRodG1sO1xuXG5cdFx0aWYgKHRoaXMuX3BsYXlpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9jb3JlLmVudGVyKCdwbGF5aW5nJyk7XG5cdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdwbGF5JywgbnVsbCwgJ3ZpZGVvJyk7XG5cblx0XHRpdGVtID0gdGhpcy5fY29yZS5pdGVtcyh0aGlzLl9jb3JlLnJlbGF0aXZlKGl0ZW0uaW5kZXgoKSkpO1xuXG5cdFx0dGhpcy5fY29yZS5yZXNldChpdGVtLmluZGV4KCkpO1xuXG5cdFx0aWYgKHZpZGVvLnR5cGUgPT09ICd5b3V0dWJlJykge1xuXHRcdFx0aHRtbCA9ICc8aWZyYW1lIHdpZHRoPVwiJyArIHdpZHRoICsgJ1wiIGhlaWdodD1cIicgKyBoZWlnaHQgKyAnXCIgc3JjPVwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICtcblx0XHRcdFx0dmlkZW8uaWQgKyAnP2F1dG9wbGF5PTEmdj0nICsgdmlkZW8uaWQgKyAnXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndmltZW8nKSB7XG5cdFx0XHRodG1sID0gJzxpZnJhbWUgc3JjPVwiaHR0cDovL3BsYXllci52aW1lby5jb20vdmlkZW8vJyArIHZpZGVvLmlkICtcblx0XHRcdFx0Jz9hdXRvcGxheT0xXCIgd2lkdGg9XCInICsgd2lkdGggKyAnXCIgaGVpZ2h0PVwiJyArIGhlaWdodCArXG5cdFx0XHRcdCdcIiBmcmFtZWJvcmRlcj1cIjBcIiB3ZWJraXRhbGxvd2Z1bGxzY3JlZW4gbW96YWxsb3dmdWxsc2NyZWVuIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xuXHRcdH1cblxuXHRcdCQoJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tZnJhbWVcIj4nICsgaHRtbCArICc8L2Rpdj4nKS5pbnNlcnRBZnRlcihpdGVtLmZpbmQoJy5vd2wtdmlkZW8nKSk7XG5cblx0XHR0aGlzLl9wbGF5aW5nID0gaXRlbS5hZGRDbGFzcygnb3dsLXZpZGVvLXBsYXlpbmcnKTtcblx0fTtcblxuXHQvKipcblx0ICogQ2hlY2tzIHdoZXRoZXIgYW4gdmlkZW8gaXMgY3VycmVudGx5IGluIGZ1bGwgc2NyZWVuIG1vZGUgb3Igbm90LlxuXHQgKiBAdG9kbyBCYWQgc3R5bGUgYmVjYXVzZSBsb29rcyBsaWtlIGEgcmVhZG9ubHkgbWV0aG9kIGJ1dCBjaGFuZ2VzIG1lbWJlcnMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUuaXNJbkZ1bGxTY3JlZW4gPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8XG5cdFx0XHRcdGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50O1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQgJiYgJChlbGVtZW50KS5wYXJlbnQoKS5oYXNDbGFzcygnb3dsLXZpZGVvLWZyYW1lJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKCdjbGljay5vd2wudmlkZW8nKTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLlZpZGVvID0gVmlkZW87XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBBbmltYXRlIFBsdWdpblxuICogQHZlcnNpb24gMi4wLjAtYmV0YS4zXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGFuaW1hdGUgcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIE5hdmlnYXRpb24gUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBzY29wZSAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBBbmltYXRlID0gZnVuY3Rpb24oc2NvcGUpIHtcblx0XHR0aGlzLmNvcmUgPSBzY29wZTtcblx0XHR0aGlzLmNvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBbmltYXRlLkRlZmF1bHRzLCB0aGlzLmNvcmUub3B0aW9ucyk7XG5cdFx0dGhpcy5zd2FwcGluZyA9IHRydWU7XG5cdFx0dGhpcy5wcmV2aW91cyA9IHVuZGVmaW5lZDtcblx0XHR0aGlzLm5leHQgPSB1bmRlZmluZWQ7XG5cblx0XHR0aGlzLmhhbmRsZXJzID0ge1xuXHRcdFx0J2NoYW5nZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PSAncG9zaXRpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy5wcmV2aW91cyA9IHRoaXMuY29yZS5jdXJyZW50KCk7XG5cdFx0XHRcdFx0dGhpcy5uZXh0ID0gZS5wcm9wZXJ0eS52YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnZHJhZy5vd2wuY2Fyb3VzZWwgZHJhZ2dlZC5vd2wuY2Fyb3VzZWwgdHJhbnNsYXRlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dGhpcy5zd2FwcGluZyA9IGUudHlwZSA9PSAndHJhbnNsYXRlZCc7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3RyYW5zbGF0ZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuc3dhcHBpbmcgJiYgKHRoaXMuY29yZS5vcHRpb25zLmFuaW1hdGVPdXQgfHwgdGhpcy5jb3JlLm9wdGlvbnMuYW5pbWF0ZUluKSkge1xuXHRcdFx0XHRcdHRoaXMuc3dhcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHR0aGlzLmNvcmUuJGVsZW1lbnQub24odGhpcy5oYW5kbGVycyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QW5pbWF0ZS5EZWZhdWx0cyA9IHtcblx0XHRhbmltYXRlT3V0OiBmYWxzZSxcblx0XHRhbmltYXRlSW46IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIFRvZ2dsZXMgdGhlIGFuaW1hdGlvbiBjbGFzc2VzIHdoZW5ldmVyIGFuIHRyYW5zbGF0aW9ucyBzdGFydHMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW58dW5kZWZpbmVkfVxuXHQgKi9cblx0QW5pbWF0ZS5wcm90b3R5cGUuc3dhcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYgKHRoaXMuY29yZS5zZXR0aW5ncy5pdGVtcyAhPT0gMSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghJC5zdXBwb3J0LmFuaW1hdGlvbiB8fCAhJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmNvcmUuc3BlZWQoMCk7XG5cblx0XHR2YXIgbGVmdCxcblx0XHRcdGNsZWFyID0gJC5wcm94eSh0aGlzLmNsZWFyLCB0aGlzKSxcblx0XHRcdHByZXZpb3VzID0gdGhpcy5jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHRoaXMucHJldmlvdXMpLFxuXHRcdFx0bmV4dCA9IHRoaXMuY29yZS4kc3RhZ2UuY2hpbGRyZW4oKS5lcSh0aGlzLm5leHQpLFxuXHRcdFx0aW5jb21pbmcgPSB0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZUluLFxuXHRcdFx0b3V0Z29pbmcgPSB0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZU91dDtcblxuXHRcdGlmICh0aGlzLmNvcmUuY3VycmVudCgpID09PSB0aGlzLnByZXZpb3VzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKG91dGdvaW5nKSB7XG5cdFx0XHRsZWZ0ID0gdGhpcy5jb3JlLmNvb3JkaW5hdGVzKHRoaXMucHJldmlvdXMpIC0gdGhpcy5jb3JlLmNvb3JkaW5hdGVzKHRoaXMubmV4dCk7XG5cdFx0XHRwcmV2aW91cy5vbmUoJC5zdXBwb3J0LmFuaW1hdGlvbi5lbmQsIGNsZWFyKVxuXHRcdFx0XHQuY3NzKCB7ICdsZWZ0JzogbGVmdCArICdweCcgfSApXG5cdFx0XHRcdC5hZGRDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLW91dCcpXG5cdFx0XHRcdC5hZGRDbGFzcyhvdXRnb2luZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGluY29taW5nKSB7XG5cdFx0XHRuZXh0Lm9uZSgkLnN1cHBvcnQuYW5pbWF0aW9uLmVuZCwgY2xlYXIpXG5cdFx0XHRcdC5hZGRDbGFzcygnYW5pbWF0ZWQgb3dsLWFuaW1hdGVkLWluJylcblx0XHRcdFx0LmFkZENsYXNzKGluY29taW5nKTtcblx0XHR9XG5cdH07XG5cblx0QW5pbWF0ZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbihlKSB7XG5cdFx0JChlLnRhcmdldCkuY3NzKCB7ICdsZWZ0JzogJycgfSApXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIG93bC1hbmltYXRlZC1vdXQgb3dsLWFuaW1hdGVkLWluJylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZUluKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMuY29yZS5zZXR0aW5ncy5hbmltYXRlT3V0KTtcblx0XHR0aGlzLmNvcmUub25UcmFuc2l0aW9uRW5kKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEFuaW1hdGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5oYW5kbGVycykge1xuXHRcdFx0dGhpcy5jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLmhhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5BbmltYXRlID0gQW5pbWF0ZTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEF1dG9wbGF5IFBsdWdpblxuICogQHZlcnNpb24gMi4wLjAtYmV0YS4zXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgYXV0b3BsYXkgcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEF1dG9wbGF5IFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gc2NvcGUgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgQXV0b3BsYXkgPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBUaGUgYXV0b3BsYXkgaW50ZXJ2YWwuXG5cdFx0ICogQHR5cGUge051bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBJbmRpY2F0ZXMgd2hlbmV2ZXIgdGhlIGF1dG9wbGF5IGlzIHBhdXNlZC5cblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAnc2V0dGluZ3MnKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXkpIHtcblx0XHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheSkge1xuXHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdwbGF5Lm93bC5hdXRvcGxheSc6ICQucHJveHkoZnVuY3Rpb24oZSwgdCwgcykge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkodCwgcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3N0b3Aub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdtb3VzZW92ZXIub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlICYmIHRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J21vdXNlbGVhdmUub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlICYmIHRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b3BsYXkuRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkuRGVmYXVsdHMgPSB7XG5cdFx0YXV0b3BsYXk6IGZhbHNlLFxuXHRcdGF1dG9wbGF5VGltZW91dDogNTAwMCxcblx0XHRhdXRvcGxheUhvdmVyUGF1c2U6IGZhbHNlLFxuXHRcdGF1dG9wbGF5U3BlZWQ6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyB0aGUgYXV0b3BsYXkuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFt0aW1lb3V0XSAtIFRoZSBpbnRlcnZhbCBiZWZvcmUgdGhlIG5leHQgYW5pbWF0aW9uIHN0YXJ0cy5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgYW5pbWF0aW9uIHNwZWVkIGZvciB0aGUgYW5pbWF0aW9ucy5cblx0ICovXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24odGltZW91dCwgc3BlZWQpIHtcblx0XHR0aGlzLl9wYXVzZWQgPSBmYWxzZTtcblxuXHRcdGlmICh0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fY29yZS5lbnRlcigncm90YXRpbmcnKTtcblxuXHRcdHRoaXMuX2ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAodGhpcy5fcGF1c2VkIHx8IHRoaXMuX2NvcmUuaXMoJ2J1c3knKSB8fCB0aGlzLl9jb3JlLmlzKCdpbnRlcmFjdGluZycpIHx8IGRvY3VtZW50LmhpZGRlbikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jb3JlLm5leHQoc3BlZWQgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheVNwZWVkKTtcblx0XHR9LCB0aGlzKSwgdGltZW91dCB8fCB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5VGltZW91dCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFN0b3BzIHRoZSBhdXRvcGxheS5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbCk7XG5cdFx0dGhpcy5fY29yZS5sZWF2ZSgncm90YXRpbmcnKTtcblx0fTtcblxuXHQvKipcblx0ICogU3RvcHMgdGhlIGF1dG9wbGF5LlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9wYXVzZWQgPSB0cnVlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHR0aGlzLnN0b3AoKTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLmF1dG9wbGF5ID0gQXV0b3BsYXk7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIFBsdWdpblxuICogQHZlcnNpb24gMi4wLjAtYmV0YS4zXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIG5hdmlnYXRpb24gcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIE5hdmlnYXRpb24gUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWwuXG5cdCAqL1xuXHR2YXIgTmF2aWdhdGlvbiA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBwbHVnaW4gaXMgaW5pdGlhbGl6ZWQgb3Igbm90LlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGN1cnJlbnQgcGFnaW5nIGluZGV4ZXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtBcnJheX1cblx0XHQgKi9cblx0XHR0aGlzLl9wYWdlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIERPTSBlbGVtZW50cyBvZiB0aGUgdXNlciBpbnRlcmZhY2UuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29udHJvbHMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIE1hcmt1cCBmb3IgYW4gaW5kaWNhdG9yLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7QXJyYXkuPFN0cmluZz59XG5cdFx0ICovXG5cdFx0dGhpcy5fdGVtcGxhdGVzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBUaGUgY2Fyb3VzZWwgZWxlbWVudC5cblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuJGVsZW1lbnQgPSB0aGlzLl9jb3JlLiRlbGVtZW50O1xuXG5cdFx0LyoqXG5cdFx0ICogT3ZlcnJpZGRlbiBtZXRob2RzIG9mIHRoZSBjYXJvdXNlbC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9vdmVycmlkZXMgPSB7XG5cdFx0XHRuZXh0OiB0aGlzLl9jb3JlLm5leHQsXG5cdFx0XHRwcmV2OiB0aGlzLl9jb3JlLnByZXYsXG5cdFx0XHR0bzogdGhpcy5fY29yZS50b1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmRvdHNEYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGVtcGxhdGVzLnB1c2goJzxkaXYgY2xhc3M9XCInICsgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RDbGFzcyArICdcIj4nICtcblx0XHRcdFx0XHRcdCQoZS5jb250ZW50KS5maW5kKCdbZGF0YS1kb3RdJykuYW5kU2VsZignW2RhdGEtZG90XScpLmF0dHIoJ2RhdGEtZG90JykgKyAnPC9kaXY+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2FkZGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwgMCwgdGhpcy5fdGVtcGxhdGVzLnBvcCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncmVtb3ZlLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT0gJ3Bvc2l0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmICF0aGlzLl9pbml0aWFsaXplZCkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignaW5pdGlhbGl6ZScsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0XHR0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdpbml0aWFsaXplZCcsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3JlZnJlc2hlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2luaXRpYWxpemVkKSB7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdyZWZyZXNoJywgbnVsbCwgJ25hdmlnYXRpb24nKTtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcigncmVmcmVzaGVkJywgbnVsbCwgJ25hdmlnYXRpb24nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBOYXZpZ2F0aW9uLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqIEB0b2RvIFJlbmFtZSBgc2xpZGVCeWAgdG8gYG5hdkJ5YFxuXHQgKi9cblx0TmF2aWdhdGlvbi5EZWZhdWx0cyA9IHtcblx0XHRuYXY6IGZhbHNlLFxuXHRcdG5hdlRleHQ6IFsgJ3ByZXYnLCAnbmV4dCcgXSxcblx0XHRuYXZTcGVlZDogZmFsc2UsXG5cdFx0bmF2RWxlbWVudDogJ2RpdicsXG5cdFx0bmF2Q29udGFpbmVyOiBmYWxzZSxcblx0XHRuYXZDb250YWluZXJDbGFzczogJ293bC1uYXYnLFxuXHRcdG5hdkNsYXNzOiBbICdvd2wtcHJldicsICdvd2wtbmV4dCcgXSxcblx0XHRzbGlkZUJ5OiAxLFxuXHRcdGRvdENsYXNzOiAnb3dsLWRvdCcsXG5cdFx0ZG90c0NsYXNzOiAnb3dsLWRvdHMnLFxuXHRcdGRvdHM6IHRydWUsXG5cdFx0ZG90c0VhY2g6IGZhbHNlLFxuXHRcdGRvdHNEYXRhOiBmYWxzZSxcblx0XHRkb3RzU3BlZWQ6IGZhbHNlLFxuXHRcdGRvdHNDb250YWluZXI6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSBsYXlvdXQgb2YgdGhlIHBsdWdpbiBhbmQgZXh0ZW5kcyB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgb3ZlcnJpZGUsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3M7XG5cblx0XHQvLyBjcmVhdGUgRE9NIHN0cnVjdHVyZSBmb3IgcmVsYXRpdmUgbmF2aWdhdGlvblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRyZWxhdGl2ZSA9IChzZXR0aW5ncy5uYXZDb250YWluZXIgPyAkKHNldHRpbmdzLm5hdkNvbnRhaW5lcilcblx0XHRcdDogJCgnPGRpdj4nKS5hZGRDbGFzcyhzZXR0aW5ncy5uYXZDb250YWluZXJDbGFzcykuYXBwZW5kVG8odGhpcy4kZWxlbWVudCkpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXG5cdFx0dGhpcy5fY29udHJvbHMuJHByZXZpb3VzID0gJCgnPCcgKyBzZXR0aW5ncy5uYXZFbGVtZW50ICsgJz4nKVxuXHRcdFx0LmFkZENsYXNzKHNldHRpbmdzLm5hdkNsYXNzWzBdKVxuXHRcdFx0Lmh0bWwoc2V0dGluZ3MubmF2VGV4dFswXSlcblx0XHRcdC5wcmVwZW5kVG8odGhpcy5fY29udHJvbHMuJHJlbGF0aXZlKVxuXHRcdFx0Lm9uKCdjbGljaycsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR0aGlzLnByZXYoc2V0dGluZ3MubmF2U3BlZWQpO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdHRoaXMuX2NvbnRyb2xzLiRuZXh0ID0gJCgnPCcgKyBzZXR0aW5ncy5uYXZFbGVtZW50ICsgJz4nKVxuXHRcdFx0LmFkZENsYXNzKHNldHRpbmdzLm5hdkNsYXNzWzFdKVxuXHRcdFx0Lmh0bWwoc2V0dGluZ3MubmF2VGV4dFsxXSlcblx0XHRcdC5hcHBlbmRUbyh0aGlzLl9jb250cm9scy4kcmVsYXRpdmUpXG5cdFx0XHQub24oJ2NsaWNrJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHRoaXMubmV4dChzZXR0aW5ncy5uYXZTcGVlZCk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cblx0XHQvLyBjcmVhdGUgRE9NIHN0cnVjdHVyZSBmb3IgYWJzb2x1dGUgbmF2aWdhdGlvblxuXHRcdGlmICghc2V0dGluZ3MuZG90c0RhdGEpIHtcblx0XHRcdHRoaXMuX3RlbXBsYXRlcyA9IFsgJCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3Moc2V0dGluZ3MuZG90Q2xhc3MpXG5cdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykpXG5cdFx0XHRcdC5wcm9wKCdvdXRlckhUTUwnKSBdO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZSA9IChzZXR0aW5ncy5kb3RzQ29udGFpbmVyID8gJChzZXR0aW5ncy5kb3RzQ29udGFpbmVyKVxuXHRcdFx0OiAkKCc8ZGl2PicpLmFkZENsYXNzKHNldHRpbmdzLmRvdHNDbGFzcykuYXBwZW5kVG8odGhpcy4kZWxlbWVudCkpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXG5cdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLm9uKCdjbGljaycsICdkaXYnLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBpbmRleCA9ICQoZS50YXJnZXQpLnBhcmVudCgpLmlzKHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZSlcblx0XHRcdFx0PyAkKGUudGFyZ2V0KS5pbmRleCgpIDogJChlLnRhcmdldCkucGFyZW50KCkuaW5kZXgoKTtcblxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLnRvKGluZGV4LCBzZXR0aW5ncy5kb3RzU3BlZWQpO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdC8vIG92ZXJyaWRlIHB1YmxpYyBtZXRob2RzIG9mIHRoZSBjYXJvdXNlbFxuXHRcdGZvciAob3ZlcnJpZGUgaW4gdGhpcy5fb3ZlcnJpZGVzKSB7XG5cdFx0XHR0aGlzLl9jb3JlW292ZXJyaWRlXSA9ICQucHJveHkodGhpc1tvdmVycmlkZV0sIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBjb250cm9sLCBwcm9wZXJ0eSwgb3ZlcnJpZGU7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChjb250cm9sIGluIHRoaXMuX2NvbnRyb2xzKSB7XG5cdFx0XHR0aGlzLl9jb250cm9sc1tjb250cm9sXS5yZW1vdmUoKTtcblx0XHR9XG5cdFx0Zm9yIChvdmVycmlkZSBpbiB0aGlzLm92ZXJpZGVzKSB7XG5cdFx0XHR0aGlzLl9jb3JlW292ZXJyaWRlXSA9IHRoaXMuX292ZXJyaWRlc1tvdmVycmlkZV07XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgaW50ZXJuYWwgc3RhdGUuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpLCBqLCBrLFxuXHRcdFx0bG93ZXIgPSB0aGlzLl9jb3JlLmNsb25lcygpLmxlbmd0aCAvIDIsXG5cdFx0XHR1cHBlciA9IGxvd2VyICsgdGhpcy5fY29yZS5pdGVtcygpLmxlbmd0aCxcblx0XHRcdG1heGltdW0gPSB0aGlzLl9jb3JlLm1heGltdW0odHJ1ZSksXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRzaXplID0gc2V0dGluZ3MuY2VudGVyIHx8IHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5kb3RzRGF0YVxuXHRcdFx0XHQ/IDEgOiBzZXR0aW5ncy5kb3RzRWFjaCB8fCBzZXR0aW5ncy5pdGVtcztcblxuXHRcdGlmIChzZXR0aW5ncy5zbGlkZUJ5ICE9PSAncGFnZScpIHtcblx0XHRcdHNldHRpbmdzLnNsaWRlQnkgPSBNYXRoLm1pbihzZXR0aW5ncy5zbGlkZUJ5LCBzZXR0aW5ncy5pdGVtcyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNldHRpbmdzLmRvdHMgfHwgc2V0dGluZ3Muc2xpZGVCeSA9PSAncGFnZScpIHtcblx0XHRcdHRoaXMuX3BhZ2VzID0gW107XG5cblx0XHRcdGZvciAoaSA9IGxvd2VyLCBqID0gMCwgayA9IDA7IGkgPCB1cHBlcjsgaSsrKSB7XG5cdFx0XHRcdGlmIChqID49IHNpemUgfHwgaiA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMuX3BhZ2VzLnB1c2goe1xuXHRcdFx0XHRcdFx0c3RhcnQ6IE1hdGgubWluKG1heGltdW0sIGkgLSBsb3dlciksXG5cdFx0XHRcdFx0XHRlbmQ6IGkgLSBsb3dlciArIHNpemUgLSAxXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aWYgKE1hdGgubWluKG1heGltdW0sIGkgLSBsb3dlcikgPT09IG1heGltdW0pIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRqID0gMCwgKytrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGogKz0gdGhpcy5fY29yZS5tZXJnZXJzKHRoaXMuX2NvcmUucmVsYXRpdmUoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRHJhd3MgdGhlIHVzZXIgaW50ZXJmYWNlLlxuXHQgKiBAdG9kbyBUaGUgb3B0aW9uIGBkb3RzRGF0YWAgd29udCB3b3JrLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRpZmZlcmVuY2UsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRkaXNhYmxlZCA9IHRoaXMuX2NvcmUuaXRlbXMoKS5sZW5ndGggPD0gc2V0dGluZ3MuaXRlbXMsXG5cdFx0XHRpbmRleCA9IHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpLFxuXHRcdFx0bG9vcCA9IHNldHRpbmdzLmxvb3AgfHwgc2V0dGluZ3MucmV3aW5kO1xuXG5cdFx0dGhpcy5fY29udHJvbHMuJHJlbGF0aXZlLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFzZXR0aW5ncy5uYXYgfHwgZGlzYWJsZWQpO1xuXG5cdFx0aWYgKHNldHRpbmdzLm5hdikge1xuXHRcdFx0dGhpcy5fY29udHJvbHMuJHByZXZpb3VzLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFsb29wICYmIGluZGV4IDw9IHRoaXMuX2NvcmUubWluaW11bSh0cnVlKSk7XG5cdFx0XHR0aGlzLl9jb250cm9scy4kbmV4dC50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhbG9vcCAmJiBpbmRleCA+PSB0aGlzLl9jb3JlLm1heGltdW0odHJ1ZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhc2V0dGluZ3MuZG90cyB8fCBkaXNhYmxlZCk7XG5cblx0XHRpZiAoc2V0dGluZ3MuZG90cykge1xuXHRcdFx0ZGlmZmVyZW5jZSA9IHRoaXMuX3BhZ2VzLmxlbmd0aCAtIHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLmxlbmd0aDtcblxuXHRcdFx0aWYgKHNldHRpbmdzLmRvdHNEYXRhICYmIGRpZmZlcmVuY2UgIT09IDApIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmh0bWwodGhpcy5fdGVtcGxhdGVzLmpvaW4oJycpKTtcblx0XHRcdH0gZWxzZSBpZiAoZGlmZmVyZW5jZSA+IDApIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmFwcGVuZChuZXcgQXJyYXkoZGlmZmVyZW5jZSArIDEpLmpvaW4odGhpcy5fdGVtcGxhdGVzWzBdKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XG5cdFx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLnNsaWNlKGRpZmZlcmVuY2UpLnJlbW92ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLmVxKCQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBFeHRlbmRzIGV2ZW50IGRhdGEuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgb2JqZWN0IHdoaWNoIGdldHMgdGhyb3duLlxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgc2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0ZXZlbnQucGFnZSA9IHtcblx0XHRcdGluZGV4OiAkLmluQXJyYXkodGhpcy5jdXJyZW50KCksIHRoaXMuX3BhZ2VzKSxcblx0XHRcdGNvdW50OiB0aGlzLl9wYWdlcy5sZW5ndGgsXG5cdFx0XHRzaXplOiBzZXR0aW5ncyAmJiAoc2V0dGluZ3MuY2VudGVyIHx8IHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5kb3RzRGF0YVxuXHRcdFx0XHQ/IDEgOiBzZXR0aW5ncy5kb3RzRWFjaCB8fCBzZXR0aW5ncy5pdGVtcylcblx0XHR9O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBjdXJyZW50IHBhZ2UgcG9zaXRpb24gb2YgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKTtcblx0XHRyZXR1cm4gJC5ncmVwKHRoaXMuX3BhZ2VzLCAkLnByb3h5KGZ1bmN0aW9uKHBhZ2UsIGluZGV4KSB7XG5cdFx0XHRyZXR1cm4gcGFnZS5zdGFydCA8PSBjdXJyZW50ICYmIHBhZ2UuZW5kID49IGN1cnJlbnQ7XG5cdFx0fSwgdGhpcykpLnBvcCgpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBjdXJyZW50IHN1Y2Nlc29yL3ByZWRlY2Vzc29yIHBvc2l0aW9uLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHN1Y2Nlc3Nvcikge1xuXHRcdHZhciBwb3NpdGlvbiwgbGVuZ3RoLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0aWYgKHNldHRpbmdzLnNsaWRlQnkgPT0gJ3BhZ2UnKSB7XG5cdFx0XHRwb3NpdGlvbiA9ICQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpO1xuXHRcdFx0bGVuZ3RoID0gdGhpcy5fcGFnZXMubGVuZ3RoO1xuXHRcdFx0c3VjY2Vzc29yID8gKytwb3NpdGlvbiA6IC0tcG9zaXRpb247XG5cdFx0XHRwb3NpdGlvbiA9IHRoaXMuX3BhZ2VzWygocG9zaXRpb24gJSBsZW5ndGgpICsgbGVuZ3RoKSAlIGxlbmd0aF0uc3RhcnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvc2l0aW9uID0gdGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSk7XG5cdFx0XHRsZW5ndGggPSB0aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoO1xuXHRcdFx0c3VjY2Vzc29yID8gcG9zaXRpb24gKz0gc2V0dGluZ3Muc2xpZGVCeSA6IHBvc2l0aW9uIC09IHNldHRpbmdzLnNsaWRlQnk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc2l0aW9uO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIG5leHQgaXRlbSBvciBwYWdlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKHRydWUpLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgcHJldmlvdXMgaXRlbSBvciBwYWdlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKGZhbHNlKSwgc3BlZWQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIHNwZWNpZmllZCBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbc3RhbmRhcmQ9ZmFsc2VdIC0gV2hldGhlciB0byB1c2UgdGhlIHN0YW5kYXJkIGJlaGF2aW91ciBvciBub3QuXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBzcGVlZCwgc3RhbmRhcmQpIHtcblx0XHR2YXIgbGVuZ3RoO1xuXG5cdFx0aWYgKCFzdGFuZGFyZCkge1xuXHRcdFx0bGVuZ3RoID0gdGhpcy5fcGFnZXMubGVuZ3RoO1xuXHRcdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHRoaXMuX3BhZ2VzWygocG9zaXRpb24gJSBsZW5ndGgpICsgbGVuZ3RoKSAlIGxlbmd0aF0uc3RhcnQsIHNwZWVkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JC5wcm94eSh0aGlzLl9vdmVycmlkZXMudG8sIHRoaXMuX2NvcmUpKHBvc2l0aW9uLCBzcGVlZCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5OYXZpZ2F0aW9uID0gTmF2aWdhdGlvbjtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIEhhc2ggUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjAuMC1iZXRhLjNcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgaGFzaCBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgSGFzaCBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIEhhc2ggPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBIYXNoIGluZGV4IGZvciB0aGUgaXRlbXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFzaGVzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBUaGUgY2Fyb3VzZWwgZWxlbWVudC5cblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuJGVsZW1lbnQgPSB0aGlzLl9jb3JlLiRlbGVtZW50O1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIGV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5zdGFydFBvc2l0aW9uID09PSAnVVJMSGFzaCcpIHtcblx0XHRcdFx0XHQkKHdpbmRvdykudHJpZ2dlcignaGFzaGNoYW5nZS5vd2wubmF2aWdhdGlvbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdwcmVwYXJlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dmFyIGhhc2ggPSAkKGUuY29udGVudCkuZmluZCgnW2RhdGEtaGFzaF0nKS5hbmRTZWxmKCdbZGF0YS1oYXNoXScpLmF0dHIoJ2RhdGEtaGFzaCcpO1xuXG5cdFx0XHRcdFx0aWYgKCFoYXNoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5faGFzaGVzW2hhc2hdID0gZS5jb250ZW50O1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdjaGFuZ2VkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgZS5wcm9wZXJ0eS5uYW1lID09PSAncG9zaXRpb24nKSB7XG5cdFx0XHRcdFx0dmFyIGN1cnJlbnQgPSB0aGlzLl9jb3JlLml0ZW1zKHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpKSxcblx0XHRcdFx0XHRcdGhhc2ggPSAkLm1hcCh0aGlzLl9oYXNoZXMsIGZ1bmN0aW9uKGl0ZW0sIGhhc2gpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGl0ZW0gPT09IGN1cnJlbnQgPyBoYXNoIDogbnVsbDtcblx0XHRcdFx0XHRcdH0pLmpvaW4oKTtcblxuXHRcdFx0XHRcdGlmICghaGFzaCB8fCB3aW5kb3cubG9jYXRpb24uaGFzaC5zbGljZSgxKSA9PT0gaGFzaCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBIYXNoLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgdGhlIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBsaXN0ZW5lciBmb3IgaGFzaCBuYXZpZ2F0aW9uXG5cdFx0JCh3aW5kb3cpLm9uKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSxcblx0XHRcdFx0aXRlbXMgPSB0aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLFxuXHRcdFx0XHRwb3NpdGlvbiA9IHRoaXMuX2hhc2hlc1toYXNoXSAmJiBpdGVtcy5pbmRleCh0aGlzLl9oYXNoZXNbaGFzaF0pO1xuXG5cdFx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCB8fCBwb3NpdGlvbiA9PT0gdGhpcy5fY29yZS5jdXJyZW50KCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jb3JlLnRvKHRoaXMuX2NvcmUucmVsYXRpdmUocG9zaXRpb24pLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEhhc2guRGVmYXVsdHMgPSB7XG5cdFx0VVJMaGFzaExpc3RlbmVyOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRIYXNoLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0JCh3aW5kb3cpLm9mZignaGFzaGNoYW5nZS5vd2wubmF2aWdhdGlvbicpO1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuSGFzaCA9IEhhc2g7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBTdXBwb3J0IFBsdWdpblxuICpcbiAqIEB2ZXJzaW9uIDIuMC4wLWJldGEuM1xuICogQGF1dGhvciBWaXZpZCBQbGFuZXQgU29mdHdhcmUgR21iSFxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHR2YXIgc3R5bGUgPSAkKCc8c3VwcG9ydD4nKS5nZXQoMCkuc3R5bGUsXG5cdFx0cHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJy5zcGxpdCgnICcpLFxuXHRcdGV2ZW50cyA9IHtcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0ZW5kOiB7XG5cdFx0XHRcdFx0V2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuXHRcdFx0XHRcdE1velRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcblx0XHRcdFx0XHRPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0XHRlbmQ6IHtcblx0XHRcdFx0XHRXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdE1vekFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG5cdFx0XHRcdFx0T0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dGVzdHMgPSB7XG5cdFx0XHRjc3N0cmFuc2Zvcm1zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgndHJhbnNmb3JtJyk7XG5cdFx0XHR9LFxuXHRcdFx0Y3NzdHJhbnNmb3JtczNkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgncGVyc3BlY3RpdmUnKTtcblx0XHRcdH0sXG5cdFx0XHRjc3N0cmFuc2l0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIXRlc3QoJ3RyYW5zaXRpb24nKTtcblx0XHRcdH0sXG5cdFx0XHRjc3NhbmltYXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgnYW5pbWF0aW9uJyk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRmdW5jdGlvbiB0ZXN0KHByb3BlcnR5LCBwcmVmaXhlZCkge1xuXHRcdHZhciByZXN1bHQgPSBmYWxzZSxcblx0XHRcdHVwcGVyID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuXHRcdCQuZWFjaCgocHJvcGVydHkgKyAnICcgKyBwcmVmaXhlcy5qb2luKHVwcGVyICsgJyAnKSArIHVwcGVyKS5zcGxpdCgnICcpLCBmdW5jdGlvbihpLCBwcm9wZXJ0eSkge1xuXHRcdFx0aWYgKHN0eWxlW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHByZWZpeGVkID8gcHJvcGVydHkgOiB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlZml4ZWQocHJvcGVydHkpIHtcblx0XHRyZXR1cm4gdGVzdChwcm9wZXJ0eSwgdHJ1ZSk7XG5cdH1cblxuXHRpZiAodGVzdHMuY3NzdHJhbnNpdGlvbnMoKSkge1xuXHRcdC8qIGpzaGludCAtVzA1MyAqL1xuXHRcdCQuc3VwcG9ydC50cmFuc2l0aW9uID0gbmV3IFN0cmluZyhwcmVmaXhlZCgndHJhbnNpdGlvbicpKVxuXHRcdCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCA9IGV2ZW50cy50cmFuc2l0aW9uLmVuZFsgJC5zdXBwb3J0LnRyYW5zaXRpb24gXTtcblx0fVxuXG5cdGlmICh0ZXN0cy5jc3NhbmltYXRpb25zKCkpIHtcblx0XHQvKiBqc2hpbnQgLVcwNTMgKi9cblx0XHQkLnN1cHBvcnQuYW5pbWF0aW9uID0gbmV3IFN0cmluZyhwcmVmaXhlZCgnYW5pbWF0aW9uJykpXG5cdFx0JC5zdXBwb3J0LmFuaW1hdGlvbi5lbmQgPSBldmVudHMuYW5pbWF0aW9uLmVuZFsgJC5zdXBwb3J0LmFuaW1hdGlvbiBdO1xuXHR9XG5cblx0aWYgKHRlc3RzLmNzc3RyYW5zZm9ybXMoKSkge1xuXHRcdC8qIGpzaGludCAtVzA1MyAqL1xuXHRcdCQuc3VwcG9ydC50cmFuc2Zvcm0gPSBuZXcgU3RyaW5nKHByZWZpeGVkKCd0cmFuc2Zvcm0nKSk7XG5cdFx0JC5zdXBwb3J0LnRyYW5zZm9ybTNkID0gdGVzdHMuY3NzdHJhbnNmb3JtczNkKCk7XG5cdH1cblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuLi9wdWJsaWMvfi9vd2wuY2Fyb3VzZWwvZGlzdC9vd2wuY2Fyb3VzZWwuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3pGQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVEE7OztBQUFBOzs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9