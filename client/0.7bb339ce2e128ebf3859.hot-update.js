webpackHotUpdate(0,{

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(16), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(210);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CreateUser = function (_React$Component) {
	  _inherits(CreateUser, _React$Component);
	
	  function CreateUser(props) {
	    _classCallCheck(this, CreateUser);
	
	    var _this = _possibleConstructorReturn(this, (CreateUser.__proto__ || Object.getPrototypeOf(CreateUser)).call(this, props));
	
	    _this.state = {
	      username: '',
	      password: '',
	      confirm: '',
	      email: ''
	    };
	    _this.updateFormInput = _this.updateFormInput.bind(_this);
	    _this.signUp = _this.signUp.bind(_this);
	    return _this;
	  }
	  /*
	  submitHandler(e) {
	    e.preventDefault();
	    this.props.router.push('/');
	  }
	   clickHandler(e) {
	    e.preventDefault();
	    this.props.router.push('/');
	  }*/
	
	  /*<button onClick={(e) => this.clickHandler(e)}> Cancel </button>*/
	
	  _createClass(CreateUser, [{
	    key: 'updateFormInput',
	    value: function updateFormInput(key) {
	      var state = {};
	      console.log('this is: ', this);
	      return function (e) {
	        state[key] = e.target.value;
	        this.setState(state);
	      }.bind(this);
	    }
	  }, {
	    key: 'signUp',
	    value: function signUp(e) {
	      console.log('in signUp function. event is: ', e);
	      var username = this.state.username;
	      var password = this.state.password;
	      var email = this.state.email;
	      var that = this;
	      _jquery2.default.ajax({
	        url: 'http://localhost:8999/signup',
	        method: 'POST',
	        data: {
	          username: username,
	          password: password,
	          email: email
	        },
	        success: function success(message) {
	          console.log('success message is:', message);
	          e.preventDefault();
	          that.props.router.push('/');
	        },
	        error: function error(message) {
	          console.log('error message is:', message);
	          e.preventDefault();
	          that.props.router.push('/');
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var passwordDoesNotMatchOrEmpty = this.state.password.length === 0 || this.state.password !== this.state.confirm;
	      var passwordDoesNotMatch = this.state.password !== this.state.confirm;
	      return _react2.default.createElement(
	        'div',
	        { className: 'createUser' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('img', { src: '/img/grnCrypt.svg', className: 'createUserBanner' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'loginForm' },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: this.signUp },
	            _react2.default.createElement(
	              'label',
	              null,
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateFormInput('username'), placeholder: 'username', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              console.log(this.state.username),
	              console.log(this.state.password),
	              console.log(this.state.confirm),
	              console.log(this.state.email),
	              console.log(this.state.disabled),
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateFormInput('password'), placeholder: 'password', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateFormInput('confirm'), placeholder: 'confirm password', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              passwordDoesNotMatch && _react2.default.createElement(
	                'p',
	                null,
	                'Passwords do not match'
	              ),
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateFormInput('email'), placeholder: 'email', name: 'name' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('input', { type: 'submit', value: 'Submit', disabled: passwordDoesNotMatchOrEmpty }),
	            '\xA0\xA0'
	          )
	        )
	      );
	    }
	  }]);
	
	  return CreateUser;
	}(_react2.default.Component);
	
	exports.default = CreateUser;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "CreateUser.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJ1cGRhdGVGb3JtSW5wdXQiLCJiaW5kIiwic2lnblVwIiwia2V5IiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwidGhhdCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRlciIsInB1c2giLCJlcnJvciIsInBhc3N3b3JkRG9lc05vdE1hdGNoT3JFbXB0eSIsImxlbmd0aCIsInBhc3N3b3JkRG9lc05vdE1hdGNoIiwiZGlzYWJsZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxVOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlIQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVUsRUFEQztBQUVYQyxpQkFBVSxFQUZDO0FBR1hDLGdCQUFTLEVBSEU7QUFJWEMsY0FBTztBQUpJLE1BQWI7QUFNQSxXQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWixPQUFkO0FBVGlCO0FBVWxCO0FBQ0Q7Ozs7Ozs7Ozs7QUFXRjs7OztxQ0FFa0JFLEcsRUFBSztBQUNuQixXQUFJUixRQUFRLEVBQVo7QUFDQVMsZUFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUIsSUFBekI7QUFDQSxjQUFPLFVBQVNDLENBQVQsRUFBWTtBQUNqQlgsZUFBTVEsR0FBTixJQUFhRyxFQUFFQyxNQUFGLENB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VUFBVSxLQUFLdkIsZUFBTCxDQUFxQixPQUFyQixDQUE3QixFQUE0RCxhQUFZLE9BQXhFLEVBQWdGLE1BQUssTUFBckY7QUFiRixjQURGO0FBZ0JFLHNEQWhCRjtBQWdCUSxzREFoQlI7QUFpQkUsc0RBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0IsRUFBb0MsVUFBVXFCLDJCQUE5QyxHQWpCRjtBQUFBO0FBQUE7QUFERjtBQUpGLFFBREY7QUE0QkQ7Ozs7R0EvRnNCLGdCQUFNSSxTOzttQkFrR2hCaEMsVSIsImZpbGUiOiIwLjdiYjMzOWNlMmUxMjhlYmYzODU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgQ3JlYXRlVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBjb25maXJtOiAnJyxcbiAgICAgIGVtYWlsOiAnJ1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUZvcm1JbnB1dCA9IHRoaXMudXBkYXRlRm9ybUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaWduVXAgPSB0aGlzLnNpZ25VcC5iaW5kKHRoaXMpO1xuICB9XG4gIC8qXG4gIHN1Ym1pdEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJyk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJyk7XG4gIH0qL1xuXG4vKjxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpfT4gQ2FuY2VsIDwvYnV0dG9uPiovXG5cbiAgdXBkYXRlRm9ybUlucHV0KGtleSkge1xuICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzOiAnLCB0aGlzKVxuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBzdGF0ZVtrZXldID0gZS50YXJnZXQudmFsdWVcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHN0YXRlLFxuICAgICAgKVxuICAgIH0uYmluZCh0aGlzKVxuICB9XG5cbiAgc2lnblVwKGUpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gc2lnblVwIGZ1bmN0aW9uLiBldmVudCBpczogJywgZSlcbiAgICB2YXIgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLnVzZXJuYW1lXG4gICAgdmFyIHBhc3N3b3JkID0gdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIHZhciBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWxcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4OTk5L3NpZ251cCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIG1lc3NhZ2UgaXM6JywgbWVzc2FnZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhhdC5wcm9wcy5yb3V0ZXIucHVzaCgnLycpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZSBpczonLCBtZXNzYWdlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGF0LnByb3BzLnJvdXRlci5wdXNoKCcvJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwYXNzd29yZERvZXNOb3RNYXRjaE9yRW1wdHkgPSB0aGlzLnN0YXRlLnBhc3N3b3JkLmxlbmd0aCA9PT0gMCB8fCB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSB0aGlzLnN0YXRlLmNvbmZpcm1cbiAgICBsZXQgcGFzc3dvcmREb2VzTm90TWF0Y2ggPSB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSB0aGlzLnN0YXRlLmNvbmZpcm1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NyZWF0ZVVzZXInPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz0nL2ltZy9ncm5DcnlwdC5zdmcnIGNsYXNzTmFtZT0nY3JlYXRlVXNlckJhbm5lcic+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW5Gb3JtJz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zaWduVXB9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ3VzZXJuYW1lJyl9IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29uZmlybSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVtYWlsKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGlzYWJsZWQpfVxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ3Bhc3N3b3JkJyl9IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ2NvbmZpcm0nKX0gcGxhY2Vob2xkZXI9XCJjb25maXJtIHBhc3N3b3JkXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAge3Bhc3N3b3JkRG9lc05vdE1hdGNoICYmIDxwPlBhc3N3b3JkcyBkbyBub3QgbWF0Y2g8L3A+fVxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ2VtYWlsJyl9IHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgZGlzYWJsZWQ9e3Bhc3N3b3JkRG9lc05vdE1hdGNoT3JFbXB0eX0gLz4mbmJzcDsmbmJzcDtcbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVVzZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9