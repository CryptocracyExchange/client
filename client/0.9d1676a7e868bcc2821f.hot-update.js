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
	          _this2.setState({
	            username: '',
	            password: '',
	            correct: false
	          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhbmRpbmcuanN4P2RlZTgiXSwibmFtZXMiOlsib3B0aW9ucyIsInVzZXJJRCIsImN1cnJlbmN5IiwiTGFuZGluZyIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29ycmVjdCIsInN1Ym1pdEhhbmRsZXIiLCJiaW5kIiwiY2xpY2tIYW5kbGVyIiwidXBkYXRlVXNlcm5hbWUiLCJ1cGRhdGVQYXNzd29yZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkZWVwIiwibG9naW4iLCJyb2xlIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckRhdGEiLCJyb3V0ZXIiLCJwdXNoIiwidXNlcm5hbWVMZW5ndGgiLCJsZW5ndGgiLCJwYXNzd29yZExlbmd0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBR0EsS0FBSUEsVUFBVTtBQUNaQyxXQUFRLElBREk7QUFFWkMsYUFBVTtBQUZFLEVBQWQ7O0tBS01DLE87OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVSxFQURDO0FBRVhDLGlCQUFVLEVBRkM7QUFHWEMsZ0JBQVM7QUFIRSxNQUFiO0FBS0EsV0FBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQixPQUFyQjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFDQSxXQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JGLElBQXBCLE9BQXRCO0FBQ0EsV0FBS0csY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSCxJQUFwQixPQUF0QjtBQVZpQjtBQVdsQjs7OztvQ0FF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cUIsU0FBUyxpQkFBQ08sQ0FBRDtBQUFBLHdCQUFPLE9BQUtMLGFBQUwsQ0FBbUJLLENBQW5CLENBQVA7QUFBQSxnQkFBOUIsRUFBNEQsT0FBTSxRQUFsRSxHQVZGO0FBQUE7QUFXRTtBQUFBO0FBQUEsaUJBQVEsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLDBCQUFPLE9BQUtILFlBQUwsQ0FBa0JHLENBQWxCLENBQVA7QUFBQSxrQkFBakI7QUFBQTtBQUFBO0FBWEY7QUFERjtBQUpGLFFBREY7QUFzQkQ7Ozs7R0FsRm1CLGdCQUFNa0IsUzs7bUJBcUZiN0IsTyIsImZpbGUiOiIwLjlkMTY3NmE3ZTg2OGJjYzI4MjFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cblxubGV0IG9wdGlvbnMgPSB7XG4gIHVzZXJJRDogJzAwJyxcbiAgY3VycmVuY3k6ICdCVEMnXG59XG5cbmNsYXNzIExhbmRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgY29ycmVjdDogdHJ1ZVxuICAgIH1cbiAgICB0aGlzLnN1Ym1pdEhhbmRsZXIgPSB0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVVc2VybmFtZSA9IHRoaXMudXBkYXRlVXNlcm5hbWUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVBhc3N3b3JkID0gdGhpcy51cGRhdGVQYXNzd29yZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlVXNlcm5hbWUoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1c2VybmFtZTogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pXG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgfSlcbiAgfSAgXG5cbiAgc3VibWl0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vc2lnbiBpblxuICAgIHRoaXMucHJvcHMuZGVlcC5sb2dpbih7XG4gICAgICByb2xlOiAndXNlcicsXG4gICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgfSwgKHN1Y2Nlc3MsIGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIGlzOiAnLCBzdWNjZXNzLCAnZGF0YSBpczogJywgZGF0YSk7XG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAvLyBkYXRhID0ge3VzZXJJRDogJ2thaSd9O1xuICAgICAgICBkYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyRGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICBjb3JyZWN0OiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZygnaW5jb3JyZWN0IGxvZ2luJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9zaWdudXAnKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB1c2VybmFtZUxlbmd0aCA9IHRoaXMuc3RhdGUudXNlcm5hbWUubGVuZ3RoO1xuICAgIGxldCBwYXNzd29yZExlbmd0aCA9IHRoaXMuc3RhdGUucGFzc3dvcmQubGVuZ3RoO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZGluZyc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPScvaW1nL3doaXRlQ3J5cHQuc3ZnJyBjbGFzc05hbWU9J2xhbmRpbmdCYW5uZXInPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luRm9ybSc+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZSl9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZVVzZXJuYW1lKGUpfSBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy51cGRhdGVQYXNzd29yZChlKX0gcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIHshdGhpcy5zdGF0ZS5jb3JyZWN0ICYmIHVzZXJuYW1lTGVuZ3RoID09PSAwICYmIHBhc3N3b3JkTGVuZ3RoID09PSAwICYmIDxwPkludmFsaWQgbG9naW48L3A+fVxuICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcm5hbWUpfVxuICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUucGFzc3dvcmQpfVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5zdWJtaXRIYW5kbGVyKGUpfSB2YWx1ZT1cIkxvZyBJblwiIC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNsaWNrSGFuZGxlcihlKX0+IFNpZ24gVXAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xhbmRpbmcuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==