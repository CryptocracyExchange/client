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
	      email: '',
	      disabled: true
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
	        state['disabled'] = this.state.password !== this.state.confirm;
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
	            _react2.default.createElement('input', { type: 'submit', onClick: this.signUp, value: 'Submit' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJkaXNhYmxlZCIsInVwZGF0ZUZvcm1JbnB1dCIsImJpbmQiLCJzaWduVXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJyb3V0ZXIiLCJwdXNoIiwia2V5IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdWJtaXRIYW5kbGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsVTs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5SEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFVLEVBREM7QUFFWEMsaUJBQVUsRUFGQztBQUdYQyxnQkFBUyxFQUhFO0FBSVhDLGNBQU8sRUFKSTtBQUtYQyxpQkFBVTtBQUxDLE1BQWI7QUFPQSxXQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWixPQUFkO0FBVmlCO0FBV2xCOzs7O21DQUNhRSxDLEVBQUc7QUFDZkEsU0FBRUMsY0FBRjtBQUNBLFlBQUtYLEtBQUwsQ0FBV1ksTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsR0FBdkI7QUFDRDs7O2tDQUVZSCxDLEVBQUc7QUFDZEEsU0FBRUMsY0FBRjtBQUNBLFlBQUtYLEtBQUwsQ0FBV1ksTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsR0FBdkI7QUFDRDs7QUFFSDs7OztxQ0FFa0JD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QTBCRDs7OztHQXZGc0IsZ0JBQU1tQixTOzttQkEwRmhCN0IsVSIsImZpbGUiOiIwLjI2ZWYyZWMxNTVkYmU3YWYwOTM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuY2xhc3MgQ3JlYXRlVXNlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBjb25maXJtOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIGRpc2FibGVkOiB0cnVlXG4gICAgfVxuICAgIHRoaXMudXBkYXRlRm9ybUlucHV0ID0gdGhpcy51cGRhdGVGb3JtSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNpZ25VcCA9IHRoaXMuc2lnblVwLmJpbmQodGhpcyk7XG4gIH1cbiAgc3VibWl0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4vKjxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpfT4gQ2FuY2VsIDwvYnV0dG9uPiovXG5cbiAgdXBkYXRlRm9ybUlucHV0KGtleSkge1xuICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzOiAnLCB0aGlzKVxuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBzdGF0ZVtrZXldID0gZS50YXJnZXQudmFsdWVcbiAgICAgIHN0YXRlWydkaXNhYmxlZCddID0gdGhpcy5zdGF0ZS5wYXNzd29yZCAhPT0gdGhpcy5zdGF0ZS5jb25maXJtXG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICBzdGF0ZSxcbiAgICAgIClcbiAgICB9LmJpbmQodGhpcylcbiAgfVxuXG4gIHNpZ25VcChlKSB7XG4gICAgY29uc29sZS5sb2coJ2luIHNpZ25VcCBmdW5jdGlvbi4gZXZlbnQgaXM6ICcsIGUpXG4gICAgdmFyIHVzZXJuYW1lID0gdGhpcy5zdGF0ZS51c2VybmFtZVxuICAgIHZhciBwYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICB2YXIgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODk5OS9zaWdudXAnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyBtZXNzYWdlIGlzOicsIG1lc3NhZ2UpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZSBpczonLCBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjcmVhdGVVc2VyJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9Jy9pbWcvZ3JuQ3J5cHQuc3ZnJyBjbGFzc05hbWU9J2NyZWF0ZVVzZXJCYW5uZXInPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luRm9ybSc+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZSl9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ3VzZXJuYW1lJyl9IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29uZmlybSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVtYWlsKX1cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlRm9ybUlucHV0KCdwYXNzd29yZCcpfSBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlRm9ybUlucHV0KCdjb25maXJtJyl9IHBsYWNlaG9sZGVyPVwiY29uZmlybSBwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgnZW1haWwnKX0gcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5zaWduVXB9IHZhbHVlPVwiU3VibWl0XCIgLz4mbmJzcDsmbmJzcDtcbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVVzZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9