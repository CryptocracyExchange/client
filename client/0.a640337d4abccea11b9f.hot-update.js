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
	      console.log('window.deepstream is: ', window.deepstream);
	      window.deepstream.close();
	      window.deepstream('localhost:6020'); // Need to change to production IP/URL when deploying
	      this.props.toRoute(route);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2gvTmF2LmpzeD80YjE1Il0sIm5hbWVzIjpbIk5hdiIsInByb3BzIiwicm91dGUiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZGVlcHN0cmVhbSIsImNsb3NlIiwidG9Sb3V0ZSIsImNsaWNrSGFuZGxlciIsImJpbmQiLCJsb2dvdXRIYW5kbGVyIiwiY3VycmVuY3lTZWxlY3RvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztLQUVNQSxHOzs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHNHQUNYQSxLQURXO0FBRWxCOzs7O21DQUVhQyxLLEVBQU87QUFDbkJDLGVBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxlQUFRQyxHQUFSLENBQVksd0JBQVosRUFBc0NDLE9BQU9DLFVBQTdDO0FBQ0FELGNBQU9DLFVBQVAsQ0FBa0JDLEtBQWxCO0FBQ0FGLGNBQU9DLFVBQVAsQ0FBa0IsZ0JBQWxCLEVBSm1CLENBSWtCO0FBQ3JDLFlBQUtMLEtBQUwsQ0FBV08sT0FBWCxDQUFtQk4sS0FBbkI7QUFDRDs7O2tDQUVZQSxLLEVBQU87QUFDbEIsWUFBS0QsS0FBTCxDQUFXTyxPQUFYLENBQW1CTixLQUFuQjtBQUNEOzs7OEJBRVE7QUFBQTs7QUFDUCxjQUNHO0FBQUE7QUFBQSxXQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxhQUFLLFdBQVUsd0JBQWY7QUFDQztBQUFBO0FBQUEsZUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLGlCQUFHLFdBQVUsWUFBYjtBQUFBO0FBQUEsY0FERjtBQUVFO0FBQUE7QUFBQSxpQkFBRyxNQUFLLEdBQVIsRUFBWSxrQkFBZSxhQUEzQixFQUF5QyxXQUFVLGlCQUFuRDtBQUFxRTtBQUFBO0FBQUEsbUJBQUcsV0FBVSxnQkFBYjtBQUFBO0FBQUE7QUFBckUsY0FGRjtBQUdFO0FBQUE7QUFBQSxpQkFBSSxJQUFHLFlBQVAsRUFBb0IsV0FBVSw0QkFBOUI7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEscUJBQUcsU0FBUyxLQUFLTyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QixXQUE3QixDQUFaO0FBQUE7QUFBQTtBQUFKLGdCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLHFCQUFHLFNBQVMsS0FBS0MsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEIsR0FBOUIsQ0FBWjtBQUFBO0FBQUE7QUFBSjtBQUZGLGNBSEY7QUFPRTtBQUFBO0FBQUEsaUJBQUksV0FBVSxVQUFkLEVBQXlCLElBQUcsYUFBNUI7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEscUJBQUcsU0FBUyxLQUFLRCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixFQUE2QixXQUE3QixDQUFaO0FBQUE7QUFBQTtBQUFKLGdCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLHFCQUFHLFNBQVMsS0FBS0MsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEIsR0FBOUIsQ0FBWjtBQUFBO0FBQUE7QUFBSjtBQUZGLGNBUEY7QUFZRTtBQUFBO0FBQUEsaUJBQUksV0FBVSx1QkFBZDtBQUNFO0FBQUE7QUFBQSxtQkFBSSxXQUFVLEtBQWQ7QUFBb0I7QUFBQTtBQUFBLHFCQUFHLFNBQVM7QUFBQSw4QkFBTSxPQUFLVCxLQUFMLENBQVdXLGdCQUFYLENBQTRCLENBQTVCLENBQU47QUFBQSxzQkFBWjtBQUFBO0FBQUE7QUFBcEIsZ0JBREY7QUFFRTtBQUFBO0FBQUEsbUJBQUksV0FBVSxLQUFkO0FBQW9CO0FBQUE7QUFBQSxxQkFBRyxTQUFTO0FBQUEsOEJBQU0sT0FBS1gsS0FBTCxDQUFXVyxnQkFBWCxDQUE0QixDQUE1QixDQUFOO0FBQUEsc0JBQVo7QUFBQTtBQUFBO0FBQXBCLGdCQUZGO0FBR0U7QUFBQTtBQUFBLG1CQUFJLFdBQVUsS0FBZDtBQUFvQjtBQUFBO0FBQUEscUJBQUcsU0FBUztBQUFBLDhCQUFNLE9BQUtYLEtBQUwsQ0FBV1csZ0JBQVgsQ0FBNEIsQ0FBNUIsQ0FBTjtBQUFBLHNCQUFaO0FBQUE7QUFBQTtBQUFwQjtBQUhGO0FBWkY7QUFERDtBQURGLFFBREg7QUF5QkQ7Ozs7R0EzQ2UsZ0JBQU1DLFM7O21CQThDVGIsRyIsImZpbGUiOiIwLmE2NDAzMzdkNGFiY2NlYTExYjlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAncmVhY3QtbWF0ZXJpYWxpemUnO1xuXG5jbGFzcyBOYXYgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIGxvZ291dEhhbmRsZXIocm91dGUpIHtcbiAgICBjb25zb2xlLmxvZygnaGl0cyBsb2dvdXQgaGFuZGxlcicpO1xuICAgIGNvbnNvbGUubG9nKCd3aW5kb3cuZGVlcHN0cmVhbSBpczogJywgd2luZG93LmRlZXBzdHJlYW0pO1xuICAgIHdpbmRvdy5kZWVwc3RyZWFtLmNsb3NlKClcbiAgICB3aW5kb3cuZGVlcHN0cmVhbSgnbG9jYWxob3N0OjYwMjAnKTsgLy8gTmVlZCB0byBjaGFuZ2UgdG8gcHJvZHVjdGlvbiBJUC9VUkwgd2hlbiBkZXBsb3lpbmdcbiAgICB0aGlzLnByb3BzLnRvUm91dGUocm91dGUpO1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyKHJvdXRlKSB7XG4gICAgdGhpcy5wcm9wcy50b1JvdXRlKHJvdXRlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgIDxSb3cgY2xhc3NOYW1lPSd6LWRlcHRoLTAnPlxuICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXYtZXh0ZW5kZWQgei1kZXB0aC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBncmVlbi10ZXh0XCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+Q3J5cHRvY3JhY3k8L2E+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlLWRlbW9cIiBjbGFzc05hbWU9XCJidXR0b24tY29sbGFwc2VcIj48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPm1lbnU8L2k+PC9hPlxuICAgICAgICAgICAgPHVsIGlkPVwibmF2LW1vYmlsZVwiIGNsYXNzTmFtZT1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgICAgIDxsaT48YSBvbkNsaWNrPXt0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMsICcvc2V0dGluZ3MnKX0+U2V0dGluZ3M8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9e3RoaXMubG9nb3V0SGFuZGxlci5iaW5kKHRoaXMsICcvJyl9PkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlLWRlbW9cIj5cbiAgICAgICAgICAgICAgPGxpPjxhIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcywgJy9zZXR0aW5ncycpfT5TZXR0aW5nczwvYT48L2xpPlxuICAgICAgICAgICAgICA8bGk+PGEgb25DbGljaz17dGhpcy5sb2dvdXRIYW5kbGVyLmJpbmQodGhpcywgJy8nKX0+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFicyB0YWJzLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJcIj48YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmN1cnJlbmN5U2VsZWN0b3IoMCl9PkJUQy9MVEMgfCAxLjU8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY3VycmVuY3lTZWxlY3RvcigxKX0+TFRDL0RPR0UgfCAwLjY8L2E+PC9saT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYlwiPjxhIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY3VycmVuY3lTZWxlY3RvcigyKX0+RE9HRS9CVEMgfCA3LjI8L2E+PC9saT5cblxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvbmF2PlxuICAgICAgIDwvUm93PlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9kYXNoL05hdi5qc3giXSwic291cmNlUm9vdCI6IiJ9