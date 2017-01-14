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
	    key: 'logoutHandler',
	    value: function logoutHandler(route) {
	      console.log('hits logout handler');
	      // console.log('window.deepstream is: ', window.deepstream);
	      console.log('deep is: ', deep);
	      // window.deepstream.close()
	      // window.deepstream('localhost:6020'); // Need to change to production IP/URL when deploying
	
	      // this.props.toRoute(route);
	    }
	  }, {
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
	                  { onClick: this.logoutHandler.bind(this, '/') },
	                  'Logout'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'ul',
	              { className: 'side-nav', id: 'mobile-demo' },
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
	                  { onClick: this.logoutHandler.bind(this, '/') },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2gvTmF2LmpzeD80YjE1Il0sIm5hbWVzIjpbIk5hdiIsInByb3BzIiwicm91dGUiLCJjb25zb2xlIiwibG9nIiwiZGVlcCIsInRvUm91dGUiLCJjbGlja0hhbmRsZXIiLCJiaW5kIiwibG9nb3V0SGFuZGxlciIsImN1cnJlbmN5U2VsZWN0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7S0FFTUEsRzs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxzR0FDWEEsS0FEVztBQUVsQjs7OzttQ0FFYUMsSyxFQUFPO0FBQ25CQyxlQUFRQyxHQUFSLENBQVkscUJBQVo7QUFDQTtBQUNBRCxlQUFRQyxHQUFSLENBQVksV0FBWixFQUF5QkMsSUFBekI7QUFDQTtBQUNBOztBQUVBO0FBQ0Q7OztrQ0FFWUgsSyxFQUFPO0FBQ2xCLFlBQUtELEtBQUwsQ0FBV0ssT0FBWCxDQUFtQkosS0FBbkI7QUFDRDs7OzhCQUVRO0FBQUE7O0FBQ1AsY0FDRztBQUFBO0FBQUEsV0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsYUFBSyxXQUFVLHdCQUFmO0FBQ0M7QUFBQTtBQUFBLGVBQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxpQkFBRyxXQUFVLFlBQWI7QUFBQTtBQUFBLGNBREY7QUFFRTtBQUFBO0FBQUEsaUJBQUcsTUFBSyxHQUFSLEVBQVksa0JBQWUsYUFBM0IsRUFBeUMsV0FBVSxpQkFBbkQ7QUFBcUU7QUFBQTtBQUFBLG1CQUFHLFdBQVUsZ0JBQWI7QUFBQTtBQUFBO0FBQXJFLGNBRkY7QUFHRTtBQUFBO0FBQUEsaUJBQUksSUFBRyxZQUFQLEVBQW9CLFdBQVUsNEJBQTlCO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLHFCQUFHLFNBQVMsS0FBS0ssWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsV0FBN0IsQ0FBWjtBQUFBO0FBQUE7QUFBSixnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxxQkFBRyxTQUFTLEtBQUtDLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLEVBQThCLEdBQTlCLENBQVo7QUFBQTtBQUFBO0FBQUo7QUFGRixjQUhGO0FBT0U7QUFBQTtBQUFBLGlCQUFJLFdBQVUsVUFBZCxFQUF5QixJQUFHLGFBQTVCO0FBQ0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLHFCQUFHLFNBQVMsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkIsV0FBN0IsQ0FBWjtBQUFBO0FBQUE7QUFBSixnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxxQkFBRyxTQUFTLEtBQUtDLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCLEVBQThCLEdBQTlCLENBQVo7QUFBQTtBQUFBO0FBQUo7QUFGRixjQVBGO0FBWUU7QUFBQTtBQUFBLGlCQUFJLFdBQVUsdUJBQWQ7QUFDRTtBQUFBO0FBQUEsbUJBQUksV0FBVSxLQUFkO0FBQW9CO0FBQUE7QUFBQSxxQkFBRyxTQUFTO0FBQUEsOEJBQU0sT0FBS1AsS0FBTCxDQUFXUyxnQkFBWCxDQUE0QixDQUE1QixDQUFOO0FBQUEsc0JBQVo7QUFBQTtBQUFBO0FBQXBCLGdCQURGO0FBRUU7QUFBQTtBQUFBLG1CQUFJLFdBQVUsS0FBZDtBQUFvQjtBQUFBO0FBQUEscUJBQUcsU0FBUztBQUFBLDhCQUFNLE9BQUtULEtBQUwsQ0FBV1MsZ0JBQVgsQ0FBNEIsQ0FBNUIsQ0FBTjtBQUFBLHNCQUFaO0FBQUE7QUFBQTtBQUFwQixnQkFGRjtBQUdFO0FBQUE7QUFBQSxtQkFBSSxXQUFVLEtBQWQ7QUFBb0I7QUFBQTtBQUFBLHFCQUFHLFNBQVM7QUFBQSw4QkFBTSxPQUFLVCxLQUFMLENBQVdTLGdCQUFYLENBQTRCLENBQTVCLENBQU47QUFBQSxzQkFBWjtBQUFBO0FBQUE7QUFBcEI7QUFIRjtBQVpGO0FBREQ7QUFERixRQURIO0FBeUJEOzs7O0dBN0NlLGdCQUFNQyxTOzttQkFnRFRYLEciLCJmaWxlIjoiMC41OTRlZTQ3OWRlZjY0YmI1YWQxNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsaXplJztcblxuY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBsb2dvdXRIYW5kbGVyKHJvdXRlKSB7XG4gICAgY29uc29sZS5sb2coJ2hpdHMgbG9nb3V0IGhhbmRsZXInKTtcbiAgICAvLyBjb25zb2xlLmxvZygnd2luZG93LmRlZXBzdHJlYW0gaXM6ICcsIHdpbmRvdy5kZWVwc3RyZWFtKTtcbiAgICBjb25zb2xlLmxvZygnZGVlcCBpczogJywgZGVlcCk7XG4gICAgLy8gd2luZG93LmRlZXBzdHJlYW0uY2xvc2UoKVxuICAgIC8vIHdpbmRvdy5kZWVwc3RyZWFtKCdsb2NhbGhvc3Q6NjAyMCcpOyAvLyBOZWVkIHRvIGNoYW5nZSB0byBwcm9kdWN0aW9uIElQL1VSTCB3aGVuIGRlcGxveWluZ1xuXG4gICAgLy8gdGhpcy5wcm9wcy50b1JvdXRlKHJvdXRlKTtcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihyb3V0ZSkge1xuICAgIHRoaXMucHJvcHMudG9Sb3V0ZShyb3V0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICA8Um93IGNsYXNzTmFtZT0nei1kZXB0aC0wJz5cbiAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2LWV4dGVuZGVkIHotZGVwdGgtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXIgZ3JlZW4tdGV4dFwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnJhbmQtbG9nb1wiPkNyeXB0b2NyYWN5PC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZS1kZW1vXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbGxhcHNlXCI+PGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnNcIj5tZW51PC9pPjwvYT5cbiAgICAgICAgICAgIDx1bCBpZD1cIm5hdi1tb2JpbGVcIiBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17dGhpcy5jbGlja0hhbmRsZXIuYmluZCh0aGlzLCAnL3NldHRpbmdzJyl9PlNldHRpbmdzPC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaT48YSBvbkNsaWNrPXt0aGlzLmxvZ291dEhhbmRsZXIuYmluZCh0aGlzLCAnLycpfT5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZS1uYXZcIiBpZD1cIm1vYmlsZS1kZW1vXCI+XG4gICAgICAgICAgICAgIDxsaT48YSBvbkNsaWNrPXt0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMsICcvc2V0dGluZ3MnKX0+U2V0dGluZ3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9e3RoaXMubG9nb3V0SGFuZGxlci5iaW5kKHRoaXMsICcvJyl9PkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYnMgdGFicy10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFiXCI+PGEgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jdXJyZW5jeVNlbGVjdG9yKDApfT5CVEMvTFRDIHwgMS41PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmN1cnJlbmN5U2VsZWN0b3IoMSl9PkxUQy9ET0dFIHwgMC42PC9hPjwvbGk+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmN1cnJlbmN5U2VsZWN0b3IoMil9PkRPR0UvQlRDIHwgNy4yPC9hPjwvbGk+XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8L25hdj5cbiAgICAgICA8L1Jvdz5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXY7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZGFzaC9OYXYuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==