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
	        state[disbaled] = this.state.password !== this.state.confirm;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJkaXNhYmxlZCIsInVwZGF0ZUZvcm1JbnB1dCIsImJpbmQiLCJzaWduVXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJyb3V0ZXIiLCJwdXNoIiwia2V5IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiZGlzYmFsZWQiLCJzZXRTdGF0ZSIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJlcnJvciIsInN1Ym1pdEhhbmRsZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxVOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlIQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVUsRUFEQztBQUVYQyxpQkFBVSxFQUZDO0FBR1hDLGdCQUFTLEVBSEU7QUFJWEMsY0FBTyxFQUpJO0FBS1hDLGlCQUFVO0FBTEMsTUFBYjtBQU9BLFdBQUtDLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQkMsSUFBckIsT0FBdkI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZRCxJQUFaLE9BQWQ7QUFWaUI7QUFXbEI7Ozs7bUNBQ2FFLEMsRUFBRztBQUNmQSxTQUFFQyxjQUFGO0FBQ0EsWUFBS1gsS0FBTCxDQUFXWSxNQUFYLENBQWtCQyxJQUFsQixDQUF1QixHQUF2QjtBQUNEOzs7a0NBRVlILEMsRUFBRztBQUNkQSxTQUFFQyxjQUFGO0FBQ0EsWUFBS1gsS0FBTCxDQUFXWSxNQUFYLENBQWtCQyxJQUFsQixDQUF1QixHQUF2QjtBQUNEOztBQUVI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O0FBREY7QUFKRixRQURGO0FBMEJEOzs7O0dBdkZzQixnQkFBTW9CLFM7O21CQTBGaEI5QixVIiwiZmlsZSI6IjAuODA0ZjA4ZjdkMmNhYTNmNTJmNDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBDcmVhdGVVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNvbmZpcm06ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICB9XG4gICAgdGhpcy51cGRhdGVGb3JtSW5wdXQgPSB0aGlzLnVwZGF0ZUZvcm1JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2lnblVwID0gdGhpcy5zaWduVXAuYmluZCh0aGlzKTtcbiAgfVxuICBzdWJtaXRIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnLycpO1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnLycpO1xuICB9XG5cbi8qPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSl9PiBDYW5jZWwgPC9idXR0b24+Ki9cblxuICB1cGRhdGVGb3JtSW5wdXQoa2V5KSB7XG4gICAgdmFyIHN0YXRlID0ge307XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXM6ICcsIHRoaXMpXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHN0YXRlW2tleV0gPSBlLnRhcmdldC52YWx1ZVxuICAgICAgc3RhdGVbZGlzYmFsZWRdID0gdGhpcy5zdGF0ZS5wYXNzd29yZCAhPT0gdGhpcy5zdGF0ZS5jb25maXJtXG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICBzdGF0ZSxcbiAgICAgIClcbiAgICB9LmJpbmQodGhpcylcbiAgfVxuXG4gIHNpZ25VcChlKSB7XG4gICAgY29uc29sZS5sb2coJ2luIHNpZ25VcCBmdW5jdGlvbi4gZXZlbnQgaXM6ICcsIGUpXG4gICAgdmFyIHVzZXJuYW1lID0gdGhpcy5zdGF0ZS51c2VybmFtZVxuICAgIHZhciBwYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICB2YXIgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODk5OS9zaWdudXAnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyBtZXNzYWdlIGlzOicsIG1lc3NhZ2UpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAobWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgbWVzc2FnZSBpczonLCBtZXNzYWdlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjcmVhdGVVc2VyJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9Jy9pbWcvZ3JuQ3J5cHQuc3ZnJyBjbGFzc05hbWU9J2NyZWF0ZVVzZXJCYW5uZXInPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luRm9ybSc+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZSl9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ3VzZXJuYW1lJyl9IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29uZmlybSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVtYWlsKX1cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlRm9ybUlucHV0KCdwYXNzd29yZCcpfSBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlRm9ybUlucHV0KCdjb25maXJtJyl9IHBsYWNlaG9sZGVyPVwiY29uZmlybSBwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgnZW1haWwnKX0gcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5zaWduVXB9IHZhbHVlPVwiU3VibWl0XCIgLz4mbmJzcDsmbmJzcDtcbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVVzZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9