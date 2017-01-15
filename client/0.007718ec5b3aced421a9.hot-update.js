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
	
	  _createClass(CreateUser, [{
	    key: 'submitHandler',
	    value: function submitHandler(e) {
	      e.preventDefault();
	      this.props.router.push('/');
	    }
	    /*
	      clickHandler(e) {
	        e.preventDefault();
	        this.props.router.push('/');
	      }*/
	
	    /*<button onClick={(e) => this.clickHandler(e)}> Cancel </button>*/
	
	  }, {
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
	          that.submitHandler(e);
	        },
	        error: function error(message) {
	          console.log('error message is:', message);
	          that.submitHandler(e);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJ1cGRhdGVGb3JtSW5wdXQiLCJiaW5kIiwic2lnblVwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwicm91dGVyIiwicHVzaCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwidGhhdCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdWJtaXRIYW5kbGVyIiwiZXJyb3IiLCJwYXNzd29yZERvZXNOb3RNYXRjaE9yRW1wdHkiLCJsZW5ndGgiLCJwYXNzd29yZERvZXNOb3RNYXRjaCIsImRpc2FibGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsVTs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5SEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFVLEVBREM7QUFFWEMsaUJBQVUsRUFGQztBQUdYQyxnQkFBUyxFQUhFO0FBSVhDLGNBQU87QUFKSSxNQUFiO0FBTUEsV0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlELElBQVosT0FBZDtBQVRpQjtBQVVsQjs7OzttQ0FFYUUsQyxFQUFHO0FBQ2ZBLFNBQUVDLGNBQUY7QUFDQSxZQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLEdBQXZCO0FBQ0Q7QUFDSDs7Ozs7O0FBTUE7Ozs7cUNBRWtCQyxHLEVBQUs7QUFDbkIsV0FBSVosUUFBUSxFQUFa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LHdEQUFPLE1BQUssTUFBWixFQUFtQixVQUFVLEtBQUt4QixlQUFMLENBQXFCLE9BQXJCLENBQTdCLEVBQTRELGFBQVksT0FBeEUsRUFBZ0YsTUFBSyxNQUFyRjtBQWJGLGNBREY7QUFnQkUsc0RBaEJGO0FBZ0JRLHNEQWhCUjtBQWlCRSxzREFBTyxNQUFLLFFBQVosRUFBcUIsT0FBTSxRQUEzQixFQUFvQyxVQUFVc0IsMkJBQTlDLEdBakJGO0FBQUE7QUFBQTtBQURGO0FBSkYsUUFERjtBQTRCRDs7OztHQTdGc0IsZ0JBQU1JLFM7O21CQWdHaEJqQyxVIiwiZmlsZSI6IjAuMDA3NzE4ZWM1YjNhY2VkNDIxYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBDcmVhdGVVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNvbmZpcm06ICcnLFxuICAgICAgZW1haWw6ICcnXG4gICAgfVxuICAgIHRoaXMudXBkYXRlRm9ybUlucHV0ID0gdGhpcy51cGRhdGVGb3JtSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNpZ25VcCA9IHRoaXMuc2lnblVwLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdWJtaXRIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnLycpO1xuICB9XG4vKlxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJyk7XG4gIH0qL1xuXG4vKjxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpfT4gQ2FuY2VsIDwvYnV0dG9uPiovXG5cbiAgdXBkYXRlRm9ybUlucHV0KGtleSkge1xuICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzOiAnLCB0aGlzKVxuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBzdGF0ZVtrZXldID0gZS50YXJnZXQudmFsdWVcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHN0YXRlLFxuICAgICAgKVxuICAgIH0uYmluZCh0aGlzKVxuICB9XG5cbiAgc2lnblVwKGUpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gc2lnblVwIGZ1bmN0aW9uLiBldmVudCBpczogJywgZSlcbiAgICB2YXIgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLnVzZXJuYW1lXG4gICAgdmFyIHBhc3N3b3JkID0gdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIHZhciBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWxcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4OTk5L3NpZ251cCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIG1lc3NhZ2UgaXM6JywgbWVzc2FnZSk7XG4gICAgICAgIHRoYXQuc3VibWl0SGFuZGxlcihlKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2UgaXM6JywgbWVzc2FnZSk7XG4gICAgICAgIHRoYXQuc3VibWl0SGFuZGxlcihlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHBhc3N3b3JkRG9lc05vdE1hdGNoT3JFbXB0eSA9IHRoaXMuc3RhdGUucGFzc3dvcmQubGVuZ3RoID09PSAwIHx8IHRoaXMuc3RhdGUucGFzc3dvcmQgIT09IHRoaXMuc3RhdGUuY29uZmlybVxuICAgIGxldCBwYXNzd29yZERvZXNOb3RNYXRjaCA9IHRoaXMuc3RhdGUucGFzc3dvcmQgIT09IHRoaXMuc3RhdGUuY29uZmlybVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY3JlYXRlVXNlcic+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPScvaW1nL2dybkNyeXB0LnN2ZycgY2xhc3NOYW1lPSdjcmVhdGVVc2VyQmFubmVyJz48L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbkZvcm0nPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnNpZ25VcH0+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgndXNlcm5hbWUnKX0gcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUucGFzc3dvcmQpfVxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5jb25maXJtKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZW1haWwpfVxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5kaXNhYmxlZCl9XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgncGFzc3dvcmQnKX0gcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgnY29uZmlybScpfSBwbGFjZWhvbGRlcj1cImNvbmZpcm0gcGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICB7cGFzc3dvcmREb2VzTm90TWF0Y2ggJiYgPHA+UGFzc3dvcmRzIGRvIG5vdCBtYXRjaDwvcD59XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgnZW1haWwnKX0gcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBkaXNhYmxlZD17cGFzc3dvcmREb2VzTm90TWF0Y2hPckVtcHR5fSAvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9DcmVhdGVVc2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=