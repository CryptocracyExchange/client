webpackHotUpdate(0,{

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(16), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(108);
	
	var _reactMaterialize = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Nav = function (_React$Component) {
	  _inherits(Nav, _React$Component);
	
	  function Nav(props) {
	    _classCallCheck(this, Nav);
	
	    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
	  }
	
	  _createClass(Nav, [{
	    key: 'clickHandler',
	    value: function clickHandler(route) {
	      this.props.toRoute(route);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement(
	        _reactMaterialize.Row,
	        { className: 'z-depth-0' },
	        _react2.default.createElement(
	          'nav',
	          { className: 'nav-extended z-depth-2' },
	          _react2.default.createElement(
	            'div',
	            { className: 'nav-wrapper green-text' },
	            _react2.default.createElement(
	              'a',
	              { className: 'brand-logo' },
	              'Cryptocracy'
	            ),
	            _react2.default.createElement(
	              'a',
	              { href: '#', 'data-activates': 'mobile-demo', className: 'button-collapse' },
	              _react2.default.createElement(
	                'i',
	                { className: 'material-icons' },
	                'menu'
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              { id: 'nav-mobile', className: 'right hide-on-med-and-down' },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { onClick: this.clickHandler.bind(this, '/settings') },
	                  'Settings'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'a',
	                  { onClick: this.clickHandler.bind(this, '/') },
	                  'Logout'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: 'tabs tabs-transparent' },
	              _react2.default.createElement(
	                'li',
	                { className: 'tab' },
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      return _this2.props.currencySelector(0);
	                    } },
	                  'BTC/LTC | 1.5'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { className: 'tab' },
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      return _this2.props.currencySelector(1);
	                    } },
	                  'LTC/DOGE | 0.6'
	                )
	              ),
	              _react2.default.createElement(
	                'li',
	                { className: 'tab' },
	                _react2.default.createElement(
	                  'a',
	                  { onClick: function onClick() {
	                      return _this2.props.currencySelector(2);
	                    } },
	                  'DOGE/BTC | 7.2'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Nav;
	}(_react2.default.Component);
	
	exports.default = Nav;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Nav.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2gvTmF2LmpzeD80YjE1Il0sIm5hbWVzIjpbIk5hdiIsInByb3BzIiwicm91dGUiLCJ0b1JvdXRlIiwiY2xpY2tIYW5kbGVyIiwiYmluZCIsImN1cnJlbmN5U2VsZWN0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsRzs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzR0FDWEEsS0FEVztBQUVsQjs7OztrQ0FFWUMsSyxFQUFPO0FBQ2xCLFlBQUtELEtBQUwsQ0FBV0UsT0FBWCxDQUFtQkQsS0FBbkI7QUFDRDs7OzhCQUVRO0FBQUE7O0FBQ1AsY0FDRztBQUFBO0FBQUEsV0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLHdCQUFmO0FBQ0M7QUFBQTtBQUFBLGVBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxpQkFBRyxXQUFVLFlBQWI7QUFBQTtBQUFBLGNBREY7QUFFRTtBQUFBO0FBQUEsaUJBQUcsTUFBSyxHQUFSLEVBQVksa0JBQWUsYUFBM0IsRUFBeUMsV0FBVSxpQkFBbkQ7QUFBcUU7QUFBQTtBQUFBLG1CQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUFBO0FBQXJFLGNBRkY7QUFHRTtBQUFBO0FBQUEsaUJBQUksSUFBRyxZQUFQLEVBQW9CLFdBQVUsNEJBQTlCO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLHFCQUFHLFNBQVMsS0FBS0UsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsV0FBN0IsQ0FBWjtBQUFBO0FBQUE7QUFBSixnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxxQkFBRyxTQUFTLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLEVBQTZCLEdBQTdCLENBQVo7QUFBQTtBQUFBO0FBQUo7QUFGRixjQUhGO0FBUUU7QUFBQTtBQUFBLGlCQUFJLFdBQVUsdUJBQWQ7QUFDRTtBQUFBO0FBQUEsbUJBQUksV0FBVSxLQUFkO0FBQW9CO0FBQUE7QUFBQSxxQkFBRyxTQUFTO0FBQUEsOEJBQU0sT0FBS0osS0FBTCxDQUFXSyxnQkFBWCxDQUE0QixDQUE1QixDQUFOO0FBQUEsc0JBQVo7QUFBQTtBQUFBO0FBQXBCLGdCQURGO0FBRUU7QUFBQTtBQUFBLG1CQUFJLFdBQVUsS0FBZDtBQUFvQjtBQUFBO0FBQUEscUJBQUcsU0FBUztBQUFBLDhCQUFNLE9BQUtMLEtBQUwsQ0FBV0ssZ0JBQVgsQ0FBNEIsQ0FBNUIsQ0FBTjtBQUFBLHNCQUFaO0FBQUE7QUFBQTtBQUFwQixnQkFGRjtBQUdFO0FBQUE7QUFBQSxtQkFBSSxXQUFVLEtBQWQ7QUFBb0I7QUFBQTtBQUFBLHFCQUFHLFNBQVM7QUFBQSw4QkFBTSxPQUFLTCxLQUFMLENBQVdLLGdCQUFYLENBQTRCLENBQTVCLENBQU47QUFBQSxzQkFBWjtBQUFBO0FBQUE7QUFBcEI7QUFIRjtBQVJGO0FBREQ7QUFERixRQURIO0FBcUJEOzs7O0dBL0JlLGdCQUFNQyxTOzttQkFrQ1RQLEciLCJmaWxlIjoiMC4zOGI5OWM4ZGU3Mjg3MjE0ZDc4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsaXplJztcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIocm91dGUpIHtcbiAgICB0aGlzLnByb3BzLnRvUm91dGUocm91dGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgPFJvdyBjbGFzc05hbWU9J3otZGVwdGgtMCc+XG4gICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdi1leHRlbmRlZCB6LWRlcHRoLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIGdyZWVuLXRleHRcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5DcnlwdG9jcmFjeTwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1hY3RpdmF0ZXM9XCJtb2JpbGUtZGVtb1wiIGNsYXNzTmFtZT1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+bWVudTwvaT48L2E+XG4gICAgICAgICAgICA8dWwgaWQ9XCJuYXYtbW9iaWxlXCIgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcywgJy9zZXR0aW5ncycpfT5TZXR0aW5nczwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzLCAnLycpfT5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0YWJzIHRhYnMtdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY3VycmVuY3lTZWxlY3RvcigwKX0+QlRDL0xUQyB8IDEuNTwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jdXJyZW5jeVNlbGVjdG9yKDEpfT5MVEMvRE9HRSB8IDAuNjwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jdXJyZW5jeVNlbGVjdG9yKDIpfT5ET0dFL0JUQyB8IDcuMjwvYT48L2xpPlxuXG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9uYXY+XG4gICAgICAgPC9Sb3c+XG4gICAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2O1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Rhc2gvTmF2LmpzeCJdLCJzb3VyY2VSb290IjoiIn0=