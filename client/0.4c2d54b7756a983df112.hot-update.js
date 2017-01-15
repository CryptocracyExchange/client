webpackHotUpdate(0,{

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(16), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _superagent = __webpack_require__(474);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _reactRouter = __webpack_require__(75);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var options = {
	  userID: '00',
	  currency: 'BTC'
	};
	
	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);
	
	  function Landing(props) {
	    _classCallCheck(this, Landing);
	
	    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));
	
	    _this.state = {
	      username: '',
	      password: '',
	      correct: true
	    };
	    _this.updateInput = _this.updateInput.bind(_this);
	    _this.submitHandler = _this.submitHandler.bind(_this);
	    _this.clickHandler = _this.clickHandler.bind(_this);
	    _this.updateUsername = _this.updateUsername.bind(_this);
	    _this.updatePassword = _this.updatePassword.bind(_this);
	    return _this;
	  }
	
	  _createClass(Landing, [{
	    key: 'updateUsername',
	    value: function updateUsername(e) {
	      this.setState({
	        username: e.target.value
	      });
	    }
	  }, {
	    key: 'updatePassword',
	    value: function updatePassword(e) {
	      this.setState({
	        password: e.target.value
	      });
	    }
	  }, {
	    key: 'submitHandler',
	    value: function submitHandler(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	      //sign in
	      this.props.deep.login({
	        role: 'user',
	        username: this.state.username,
	        password: this.state.password
	      }, function (success, data) {
	        console.log('success is: ', success, 'data is: ', data);
	        if (success) {
	          // data = {userID: 'kai'};
	          data = data;
	          _this2.props.getUserData(data);
	          _this2.props.router.push('/dashboard');
	        } else {
	          /*this.setState({
	            username: '',
	            password: ''
	          })*/
	          console.log('incorrect login');
	        }
	      });
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      e.preventDefault();
	      this.props.router.push('/signup');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var usernameLength = this.state.username.length;
	      var passwordLength = this.state.password.length;
	      return _react2.default.createElement(
	        'div',
	        { className: 'landing' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('img', { src: '/img/whiteCrypt.svg', className: 'landingBanner' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'loginForm' },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: function onSubmit(e) {
	                return _this3.submitHandler(e);
	              } },
	            _react2.default.createElement(
	              'label',
	              null,
	              _react2.default.createElement('input', { type: 'text', value: this.state.username, onChange: function onChange(e) {
	                  return _this3.updateUsername(e);
	                }, placeholder: 'username', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('input', { type: 'text', value: this.state.password, onChange: function onChange(e) {
	                  return _this3.updatePassword(e);
	                }, placeholder: 'password', name: 'name' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            !this.state.correct && usernameLength === 0 && passwordLength === 0 && _react2.default.createElement(
	              'p',
	              null,
	              'Invalid login'
	            ),
	            console.log(this.state.username),
	            console.log(this.state.password),
	            _react2.default.createElement('input', { type: 'submit', onClick: function onClick(e) {
	                return _this3.submitHandler(e);
	              }, value: 'Log In' }),
	            '\xA0\xA0',
	            _react2.default.createElement(
	              'button',
	              { onClick: function onClick(e) {
	                  return _this3.clickHandler(e);
	                } },
	              ' Sign Up '
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Landing;
	}(_react2.default.Component);
	
	exports.default = Landing;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Landing.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhbmRpbmcuanN4P2RlZTgiXSwibmFtZXMiOlsib3B0aW9ucyIsInVzZXJJRCIsImN1cnJlbmN5IiwiTGFuZGluZyIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29ycmVjdCIsInVwZGF0ZUlucHV0IiwiYmluZCIsInN1Ym1pdEhhbmRsZXIiLCJjbGlja0hhbmRsZXIiLCJ1cGRhdGVVc2VybmFtZSIsInVwZGF0ZVBhc3N3b3JkIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsImRlZXAiLCJsb2dpbiIsInJvbGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyRGF0YSIsInJvdXRlciIsInB1c2giLCJ1c2VybmFtZUxlbmd0aCIsImxlbmd0aCIsInBhc3N3b3JkTGVuZ3RoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQSxLQUFJQSxVQUFVO0FBQ1pDLFdBQVEsSUFESTtBQUVaQyxhQUFVO0FBRkUsRUFBZDs7S0FLTUMsTzs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxtSEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFVLEVBREM7QUFFWEMsaUJBQVUsRUFGQztBQUdYQyxnQkFBUztBQUhFLE1BQWI7QUFLQSxXQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRCxJQUFuQixPQUFyQjtBQUNBLFdBQUtFLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkYsSUFBbEIsT0FBcEI7QUFDQSxXQUFLRyxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JILElBQXBCLE9BQXRCO0FBQ0EsV0FBS0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSixJQUFwQixPQUF0QjtBQVhpQjtBQVlsQjs7OztvQ0FFY0ssQyxFQUFHO0FBQ2hCLFlBQUtDLFFBQUwsQ0FBYztBQUNWVixtQkFBVVMsRUFBRUUsTUFBRixDQUFTQztBQURULFFBQWQ7QUFHRDs7O29DQUVjSCxDLEVBQUc7QUFDaEIsWUFBS0MsUUFBTCxDQUFjO0FBQ1ZULG1CQUFVUSxFQUFFRSxNQUFGLENBQVNDO0FBRFQsUUFBZDtBQUdEOzs7bUNBRWFILEMsRUFBRztBQUFBOztBQUNmQSxTQUFFSSxjQUFGO0FBQ0E7QUFDQSxZQUFLZixLQUFMLENBQVdnQixJQUFYLENBQWdCQyxLQUFoQixDQUFzQjtBQUNwQkMsZUFBTSxNQURjO0FBRXBCaEIsbUJBQVUsS0FBS0QsS0FBTCxDQUFXQyxRQUZEO0FBR3BCQyxtQkFBVSxLQUFLRixLQUFMLENBQVdFO0FBSEQsUUFBdEIsRUFJRyxVQUFDZ0IsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQ3BCQyxpQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJILE9BQTVCLEVBQXFDLFdBQXJDLEVBQWtEQyxJQUFsRDtBQUNBLGFBQUlELE9BQUosRUFBYTtBQUNYO0FBQ0FDLGtCQUFPQSxJQUFQO0FBQ0Esa0JBQUtwQixLQUFMLENBQVd1QixXQUFYLENBQXVCSCxJQUF2QjtBQUNBLGtCQUFLcEIsS0FBTCxDQUFXd0IsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsWUFBdkI7QUFDRCxVQUxELE1BS087QUFDTDs7OztBQUlBSixtQkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0Q7QUFDRixRQWxCRDtBQW1CRDs7O2tDQUVZWCxDLEVBQUc7QUFDZEEsU0FBRUksY0FBRjtBQUNBLFlBQUtmLEtBQUwsQ0FBV3dCLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLFNBQXZCO0FBQ0Q7Ozs4QkFHUTtBQUFBOztBQUNQLFdBQUlDLGlCQUFpQixLQUFLekIsS0FBTCxDQUFXQyxRQUFYLENBQW9CeUIsTUFBekM7QUFDQSxXQUFJQyxpQkFBaUIsS0FBSzNCLEtBQUwsQ0FBV0UsUUFBWCxDQUFvQndCLE1BQXpDO0FBQ0EsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFDQSxrREFBSyxLQUFJLHFCQUFULEVBQStCLFdBQVUsZUFBekM7QUFEQSxVQURGO0FBSUU7QUFBQTtBQUFBLGFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGVBQU0sVUFBVSxrQkFBQ2hCLENBQUQ7QUFBQSx3QkFBTyxPQUFLSixhQUFMLENBQW1CSSxDQUFuQixDQUFQO0FBQUEsZ0JBQWhCO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usd0RBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBS1YsS0FBTCxDQUFXQyxRQUFyQyxFQUErQyxVQUFVLGtCQUFDUyxDQUFEO0FBQUEsMEJBQU8sT0FBS0YsY0FBTCxDQUFvQkUsQ0FBcEIsQ0FBUDtBQUFBLGtCQUF6RCxFQUF3RixhQUFZLFVBQXBHLEVBQStHLE1BQUssTUFBcEgsR0FERjtBQUVFLHdEQUZGO0FBRVEsd0RBRlI7QUFHRSx3REFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLVixLQUFMLENBQVdFLFFBQXJDLEVBQStDLFVBQVUsa0JBQUNRLENBQUQ7QUFBQSwwQkFBTyxPQUFLRCxjQUFMLENBQW9CQyxDQUFwQixDQUFQO0FBQUEsa0JBQXpELEVBQXdGLGFBQVksVUFBcEcsRUFBK0csTUFBSyxNQUFwSDtBQUhGLGNBREY7QUFNRSxzREFORjtBQU1RLHNEQU5SO0FBT0csY0FBQyxLQUFLVixLQUFMLENBQVdHLE9BQVosSUFBdUJzQixtQkFBbUIsQ0FBMUMsSUFBK0NFLG1CQUFtQixDQUFsRSxJQUF1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUDFFO0FBUUdQLHFCQUFRQyxHQUFSLENBQVksS0FBS3JCLEtBQUwsQ0FBV0MsUUFBdkIsQ0FSSDtBQVNHbUIscUJBQVFDLEdBQVIsQ0FBWSxLQUFLckIsS0FBTCxDQUFXRSxRQUF2QixDQVRIO0FBVUUsc0RBQU8sTUFBSyxRQUFaLEVBQXFCLFNBQVMsaUJBQUNRLENBQUQ7QUFBQSx3QkFBTyxPQUFLSixhQUFMLENBQW1CSSxDQUFuQixDQUFQO0FBQUEsZ0JBQTlCLEVBQTRELE9BQU0sUUFBbEUsR0FWRjtBQUFBO0FBV0U7QUFBQTtBQUFBLGlCQUFRLFNBQVMsaUJBQUNBLENBQUQ7QUFBQSwwQkFBTyxPQUFLSCxZQUFMLENBQWtCRyxDQUFsQixDQUFQO0FBQUEsa0JBQWpCO0FBQUE7QUFBQTtBQVhGO0FBREY7QUFKRixRQURGO0FBc0JEOzs7O0dBbEZtQixnQkFBTWtCLFM7O21CQXFGYjlCLE8iLCJmaWxlIjoiMC40YzJkNTRiNzc1NmE5ODNkZjExMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVyYWdlbnQnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5cbmxldCBvcHRpb25zID0ge1xuICB1c2VySUQ6ICcwMCcsXG4gIGN1cnJlbmN5OiAnQlRDJ1xufVxuXG5jbGFzcyBMYW5kaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNvcnJlY3Q6IHRydWVcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJbnB1dCA9IHRoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN1Ym1pdEhhbmRsZXIgPSB0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVVc2VybmFtZSA9IHRoaXMudXBkYXRlVXNlcm5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVBhc3N3b3JkID0gdGhpcy51cGRhdGVQYXNzd29yZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlVXNlcm5hbWUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pXG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgfSlcbiAgfSAgXG5cbiAgc3VibWl0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vc2lnbiBpblxuICAgIHRoaXMucHJvcHMuZGVlcC5sb2dpbih7XG4gICAgICByb2xlOiAndXNlcicsXG4gICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgfSwgKHN1Y2Nlc3MsIGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIGlzOiAnLCBzdWNjZXNzLCAnZGF0YSBpczogJywgZGF0YSk7XG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAvLyBkYXRhID0ge3VzZXJJRDogJ2thaSd9O1xuICAgICAgICBkYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyRGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1c2VybmFtZTogJycsXG4gICAgICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgICAgIH0pKi9cbiAgICAgICAgY29uc29sZS5sb2coJ2luY29ycmVjdCBsb2dpbicpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvc2lnbnVwJyk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdXNlcm5hbWVMZW5ndGggPSB0aGlzLnN0YXRlLnVzZXJuYW1lLmxlbmd0aDtcbiAgICBsZXQgcGFzc3dvcmRMZW5ndGggPSB0aGlzLnN0YXRlLnBhc3N3b3JkLmxlbmd0aDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmRpbmcnPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz0nL2ltZy93aGl0ZUNyeXB0LnN2ZycgY2xhc3NOYW1lPSdsYW5kaW5nQmFubmVyJz48L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbkZvcm0nPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdGhpcy5zdWJtaXRIYW5kbGVyKGUpfT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVVc2VybmFtZShlKX0gcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlUGFzc3dvcmQoZSl9IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICB7IXRoaXMuc3RhdGUuY29ycmVjdCAmJiB1c2VybmFtZUxlbmd0aCA9PT0gMCAmJiBwYXNzd29yZExlbmd0aCA9PT0gMCAmJiA8cD5JbnZhbGlkIGxvZ2luPC9wPn1cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lKX1cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IHRoaXMuc3VibWl0SGFuZGxlcihlKX0gdmFsdWU9XCJMb2cgSW5cIiAvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSl9PiBTaWduIFVwIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYW5kaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=