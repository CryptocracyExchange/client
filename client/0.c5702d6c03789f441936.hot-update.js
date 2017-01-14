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
	        console.log('this.state.password !== this.state.confirm: ', this.state.password !== this.state.confirm);
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
	            _react2.default.createElement('input', { type: 'submit', onClick: this.signUp, value: 'Submit', disabled: this.state.disabled }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJkaXNhYmxlZCIsInVwZGF0ZUZvcm1JbnB1dCIsImJpbmQiLCJzaWduVXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJyb3V0ZXIiLCJwdXNoIiwia2V5IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdWJtaXRIYW5kbGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsVTs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5SEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFVLEVBREM7QUFFWEMsaUJBQVUsRUFGQztBQUdYQyxnQkFBUyxFQUhFO0FBSVhDLGNBQU8sRUFKSTtBQUtYQyxpQkFBVTtBQUxDLE1BQWI7QUFPQSxXQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWixPQUFkO0FBVmlCO0FBV2xCOzs7O21DQUNhRSxDLEVBQUc7QUFDZkEsU0FBRUMsY0FBRjtBQUNBLFlBQUtYLEtBQUwsQ0FBV1ksTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsR0FBdkI7QUFDRDs7O2tDQUVZSCxDLEVBQUc7QUFDZEEsU0FBRUMsY0FBRjtBQUNBLFlBQUtYLEtBQUwsQ0FBV1ksTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsR0FBdkI7QUFDRDs7QUFFSDs7OztxQ0FFa0JD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LE1BQUssTUFBckY7QUFaRixjQURGO0FBZUUsc0RBZkY7QUFlUSxzREFmUjtBQWdCRSxzREFBTyxNQUFLLFFBQVosRUFBcUIsU0FBUyxLQUFLRSxNQUFuQyxFQUEyQyxPQUFNLFFBQWpELEVBQTBELFVBQVUsS0FBS1IsS0FBTCxDQUFXSyxRQUEvRSxHQWhCRjtBQUFBO0FBQUE7QUFERjtBQUpGLFFBREY7QUEyQkQ7Ozs7R0F6RnNCLGdCQUFNc0IsUzs7bUJBNEZoQjdCLFUiLCJmaWxlIjoiMC5jNTcwMmQ2YzAzNzg5ZjQ0MTkzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIENyZWF0ZVVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgY29uZmlybTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUZvcm1JbnB1dCA9IHRoaXMudXBkYXRlRm9ybUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaWduVXAgPSB0aGlzLnNpZ25VcC5iaW5kKHRoaXMpO1xuICB9XG4gIHN1Ym1pdEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJyk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJyk7XG4gIH1cblxuLyo8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNsaWNrSGFuZGxlcihlKX0+IENhbmNlbCA8L2J1dHRvbj4qL1xuXG4gIHVwZGF0ZUZvcm1JbnB1dChrZXkpIHtcbiAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpczogJywgdGhpcylcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgc3RhdGVba2V5XSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICBjb25zb2xlLmxvZygndGhpcy5zdGF0ZS5wYXNzd29yZCAhPT0gdGhpcy5zdGF0ZS5jb25maXJtOiAnLCB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSB0aGlzLnN0YXRlLmNvbmZpcm0pXG4gICAgICBzdGF0ZVsnZGlzYWJsZWQnXSA9IHRoaXMuc3RhdGUucGFzc3dvcmQgIT09IHRoaXMuc3RhdGUuY29uZmlybVxuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgc3RhdGUsXG4gICAgICApXG4gICAgfS5iaW5kKHRoaXMpXG4gIH1cblxuICBzaWduVXAoZSkge1xuICAgIGNvbnNvbGUubG9nKCdpbiBzaWduVXAgZnVuY3Rpb24uIGV2ZW50IGlzOiAnLCBlKVxuICAgIHZhciB1c2VybmFtZSA9IHRoaXMuc3RhdGUudXNlcm5hbWVcbiAgICB2YXIgcGFzc3dvcmQgPSB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgdmFyIGVtYWlsID0gdGhpcy5zdGF0ZS5lbWFpbFxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0Ojg5OTkvc2lnbnVwJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MgbWVzc2FnZSBpczonLCBtZXNzYWdlKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2UgaXM6JywgbWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY3JlYXRlVXNlcic+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPScvaW1nL2dybkNyeXB0LnN2ZycgY2xhc3NOYW1lPSdjcmVhdGVVc2VyQmFubmVyJz48L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbkZvcm0nPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdGhpcy5zdWJtaXRIYW5kbGVyKGUpfT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlRm9ybUlucHV0KCd1c2VybmFtZScpfSBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcm5hbWUpfVxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5wYXNzd29yZCl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvbmZpcm0pfVxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5lbWFpbCl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRpc2FibGVkKX1cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlRm9ybUlucHV0KCdwYXNzd29yZCcpfSBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlRm9ybUlucHV0KCdjb25maXJtJyl9IHBsYWNlaG9sZGVyPVwiY29uZmlybSBwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgnZW1haWwnKX0gcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5zaWduVXB9IHZhbHVlPVwiU3VibWl0XCIgZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9IC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hdXRoL0NyZWF0ZVVzZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==