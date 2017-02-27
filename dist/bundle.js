/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Timer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Button = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* Root Component -- manages active state, minutes, and seconds
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Calls Button component with display and onClick props
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  Expects Button component to call onClick callback in order to
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  update relevant state */


var Timer = exports.Timer = function (_React$Component) {
    _inherits(Timer, _React$Component);

    function Timer(props) {
        var initialStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this.initialStart = initialStart;
        _this.timer = timer;
        _this.initialStart = initialStart;
        _this.timer = timer;
        _this.onPauseClick = _this.onPauseClick.bind(_this);
        _this.onIncrementClick = _this.onIncrementClick.bind(_this);
        _this.onDecrementClick = _this.onDecrementClick.bind(_this);
        _this.startTimer = _this.startTimer.bind(_this);
        _this.activeTimer = _this.activeTimer.bind(_this);
        _this.state = { active: false, minutes: 10, seconds: 60 };
        return _this;
    }

    _createClass(Timer, [{
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            clearInterval(this.timer);
        }
    }, {
        key: "startTimer",
        value: function startTimer() {
            var _this2 = this;

            this.timer = setInterval(function () {
                return _this2.decrementTime();
            }, 1000);
            this.initialStart = false;
            this.setState(function () {
                return {
                    active: true
                };
            });
        }
    }, {
        key: "activeTimer",
        value: function activeTimer() {
            this.setState(function () {
                return {
                    active: true
                };
            });
        }
    }, {
        key: "onPauseClick",
        value: function onPauseClick() {
            this.setState(function (prevState) {
                return {
                    active: !prevState.active
                };
            });
        }
    }, {
        key: "onIncrementClick",
        value: function onIncrementClick() {
            if (!this.state.active) {
                this.setState(function (prevState, props) {
                    return {
                        minutes: prevState.minutes += 1
                    };
                });
            }
        }
    }, {
        key: "onDecrementClick",
        value: function onDecrementClick() {
            if (this.state.minutes >= 1 && !this.state.active) {
                this.setState(function (prevState, props) {
                    return {
                        minutes: prevState.minutes -= 1
                    };
                });
            }
        }
    }, {
        key: "resetSeconds",
        value: function resetSeconds() {
            this.setState(function () {
                return {
                    seconds: 60
                };
            });
        }
    }, {
        key: "decrementTime",
        value: function decrementTime() {
            if (this.state.seconds === 0) {
                this.resetSeconds();
                this.onDecrementClick();
            }
            if (this.state.active) {
                this.setState(function (prevState, props) {
                    return {
                        seconds: prevState.seconds -= 1
                    };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "D(f) Jc(c) W(100%) H(1000px) Bgc(#f8f8f8)" },
                React.createElement(
                    "div",
                    { className: "Fld(c) Mt(20px) Mb(20px) P(20px)" },
                    this.initialStart && React.createElement(
                        "div",
                        { className: "buttonGroup" },
                        React.createElement(_Button.Button, { display: "Start", onClick: this.startTimer })
                    ),
                    this.state.active && !this.initialStart && React.createElement(
                        "div",
                        { className: "buttonGroup" },
                        React.createElement(_Button.Button, { display: "Pause", onClick: this.onPauseClick })
                    ),
                    !this.state.active && !this.initialStart && React.createElement(
                        "div",
                        { className: "buttonGroup" },
                        React.createElement(_Button.Button, { display: "Start", onClick: this.activeTimer })
                    ),
                    React.createElement(
                        "div",
                        { className: "buttonGroup" },
                        React.createElement(_Button.Button, { display: "+", onClick: this.onIncrementClick })
                    ),
                    React.createElement(
                        "div",
                        { className: "buttonGroup" },
                        React.createElement(_Button.Button, { display: "-", onClick: this.onDecrementClick })
                    ),
                    React.createElement(
                        "div",
                        { className: "timer Px(40px)" },
                        React.createElement(
                            "div",
                            { className: "minutes" },
                            this.state.minutes < 10 ? '0' + this.state.minutes : this.state.minutes,
                            ":"
                        ),
                        React.createElement(
                            "div",
                            { className: "seconds" },
                            this.state.seconds < 10 ? '0' + this.state.seconds : this.state.seconds
                        )
                    )
                )
            );
        }
    }]);

    return Timer;
}(React.Component);

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }

    _createClass(Button, [{
        key: "onClick",
        value: function onClick(e) {
            this.props.onClick(e);
        }
    }, {
        key: "render",
        value: function render() {
            return (
                //add styling later
                React.createElement(
                    "button",
                    { className: "button Mb(0)", onClick: this.onClick },
                    this.props.display
                )
            );
        }
    }]);

    return Button;
}(React.Component);

;
//export const Button = (props: IButtonProps) => <h3> {props.display} </h3>;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _reactDom = __webpack_require__(2);

var ReactDOM = _interopRequireWildcard(_reactDom);

var _Timer = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

ReactDOM.render(React.createElement(_Timer.Timer, null), document.getElementById("example"));

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map