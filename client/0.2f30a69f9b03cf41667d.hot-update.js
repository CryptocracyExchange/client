webpackHotUpdate(0,{

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(16), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _jquery = __webpack_require__(318);
	
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
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      e.preventDefault();
	      this.props.router.push('/');
	    }
	
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
	        },
	        error: function error(message) {
	          console.log('error message is:', message);
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
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
	            { onSubmit: function onSubmit(e) {
	                return _this2.submitHandler(e);
	              } },
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
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateFormInput('email'), placeholder: 'email', name: 'name' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('input', { type: 'submit', onClick: this.signUp, value: 'Submit', disabled: this.state.password.length !== 0 && this.state.password !== this.state.confirm }),
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJ1cGRhdGVGb3JtSW5wdXQiLCJiaW5kIiwic2lnblVwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwicm91dGVyIiwicHVzaCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwic3VibWl0SGFuZGxlciIsImRpc2FibGVkIiwibGVuZ3RoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsVTs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5SEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFVLEVBREM7QUFFWEMsaUJBQVUsRUFGQztBQUdYQyxnQkFBUyxFQUhFO0FBSVhDLGNBQU87QUFKSSxNQUFiO0FBTUEsV0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlELElBQVosT0FBZDtBQVRpQjtBQVVsQjs7OzttQ0FDYUUsQyxFQUFHO0FBQ2ZBLFNBQUVDLGNBQUY7QUFDQSxZQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLEdBQXZCO0FBQ0Q7OztrQ0FFWUgsQyxFQUFHO0FBQ2RBLFNBQUVDLGNBQUY7QUFDQSxZQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLEdBQXZCO0FBQ0Q7O0FBRUg7Ozs7cUNBRWtCQyxHLEVBQUs7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SUFBb0MsS0FBSzNCLEtBQUwsQ0FBV0UsUUFBWCxLQUF3QixLQUFLRixLQUFMLENBQVdHLE9BQTNJLEdBaEJGO0FBQUE7QUFBQTtBQURGO0FBSkYsUUFERjtBQTJCRDs7OztHQXRGc0IsZ0JBQU15QixTOzttQkF5RmhCOUIsVSIsImZpbGUiOiIwLjJmMzBhNjlmOWIwM2NmNDE2NjdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgQ3JlYXRlVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBjb25maXJtOiAnJyxcbiAgICAgIGVtYWlsOiAnJ1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUZvcm1JbnB1dCA9IHRoaXMudXBkYXRlRm9ybUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaWduVXAgPSB0aGlzLnNpZ25VcC5iaW5kKHRoaXMpO1xuICB9XG4gIHN1Ym1pdEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJyk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJyk7XG4gIH1cblxuLyo8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNsaWNrSGFuZGxlcihlKX0+IENhbmNlbCA8L2J1dHRvbj4qL1xuXG4gIHVwZGF0ZUZvcm1JbnB1dChrZXkpIHtcbiAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpczogJywgdGhpcylcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgc3RhdGVba2V5XSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICBzdGF0ZSxcbiAgICAgIClcbiAgICB9LmJpbmQodGhpcylcbiAgfVxuXG4gIHNpZ25VcChlKSB7XG4gICAgY29uc29sZS5sb2coJ2luIHNpZ25VcCBmdW5jdGlvbi4gZXZlbnQgaXM6ICcsIGUpXG4gICAgdmFyIHVzZXJuYW1lID0gdGhpcy5zdGF0ZS51c2VybmFtZVxuICAgIHZhciBwYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICB2YXIgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODk5OS9zaWdudXAnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyBtZXNzYWdlIGlzOicsIG1lc3NhZ2UpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZSBpczonLCBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjcmVhdGVVc2VyJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9Jy9pbWcvZ3JuQ3J5cHQuc3ZnJyBjbGFzc05hbWU9J2NyZWF0ZVVzZXJCYW5uZXInPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luRm9ybSc+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZSl9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ3VzZXJuYW1lJyl9IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29uZmlybSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVtYWlsKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZGlzYWJsZWQpfVxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ3Bhc3N3b3JkJyl9IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ2NvbmZpcm0nKX0gcGxhY2Vob2xkZXI9XCJjb25maXJtIHBhc3N3b3JkXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlRm9ybUlucHV0KCdlbWFpbCcpfSBwbGFjZWhvbGRlcj1cImVtYWlsXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLnNpZ25VcH0gdmFsdWU9XCJTdWJtaXRcIiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5wYXNzd29yZC5sZW5ndGggIT09IDAgJiYgdGhpcy5zdGF0ZS5wYXNzd29yZCAhPT0gdGhpcy5zdGF0ZS5jb25maXJtfSAvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9DcmVhdGVVc2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=