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
	            _react2.default.createElement('input', { type: 'submit', onClick: this.signUp, value: 'Submit', disabled: this.state.password !== this.state.confirm }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJ1cGRhdGVGb3JtSW5wdXQiLCJiaW5kIiwic2lnblVwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwicm91dGVyIiwicHVzaCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwic3VibWl0SGFuZGxlciIsImRpc2FibGVkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsVTs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5SEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFVLEVBREM7QUFFWEMsaUJBQVUsRUFGQztBQUdYQyxnQkFBUyxFQUhFO0FBSVhDLGNBQU87QUFKSSxNQUFiO0FBTUEsV0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlELElBQVosT0FBZDtBQVRpQjtBQVVsQjs7OzttQ0FDYUUsQyxFQUFHO0FBQ2ZBLFNBQUVDLGNBQUY7QUFDQSxZQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLEdBQXZCO0FBQ0Q7OztrQ0FFWUgsQyxFQUFHO0FBQ2RBLFNBQUVDLGNBQUY7QUFDQSxZQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLEdBQXZCO0FBQ0Q7O0FBRUg7Ozs7cUNBRWtCQyxHLEVBQUs7QUFDbkIsV0FB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QUFBQTtBQUFBO0FBREY7QUFKRixRQURGO0FBMkJEOzs7O0dBdEZzQixnQkFBTXdCLFM7O21CQXlGaEI3QixVIiwiZmlsZSI6IjAuNmJiMDEyMWIzM2ExNjFkZWRiYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBDcmVhdGVVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNvbmZpcm06ICcnLFxuICAgICAgZW1haWw6ICcnXG4gICAgfVxuICAgIHRoaXMudXBkYXRlRm9ybUlucHV0ID0gdGhpcy51cGRhdGVGb3JtSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNpZ25VcCA9IHRoaXMuc2lnblVwLmJpbmQodGhpcyk7XG4gIH1cbiAgc3VibWl0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4vKjxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpfT4gQ2FuY2VsIDwvYnV0dG9uPiovXG5cbiAgdXBkYXRlRm9ybUlucHV0KGtleSkge1xuICAgIHZhciBzdGF0ZSA9IHt9O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzOiAnLCB0aGlzKVxuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBzdGF0ZVtrZXldID0gZS50YXJnZXQudmFsdWVcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHN0YXRlLFxuICAgICAgKVxuICAgIH0uYmluZCh0aGlzKVxuICB9XG5cbiAgc2lnblVwKGUpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gc2lnblVwIGZ1bmN0aW9uLiBldmVudCBpczogJywgZSlcbiAgICB2YXIgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLnVzZXJuYW1lXG4gICAgdmFyIHBhc3N3b3JkID0gdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIHZhciBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWxcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4OTk5L3NpZ251cCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIG1lc3NhZ2UgaXM6JywgbWVzc2FnZSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlIGlzOicsIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NyZWF0ZVVzZXInPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz0nL2ltZy9ncm5DcnlwdC5zdmcnIGNsYXNzTmFtZT0nY3JlYXRlVXNlckJhbm5lcic+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW5Gb3JtJz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHRoaXMuc3VibWl0SGFuZGxlcihlKX0+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgndXNlcm5hbWUnKX0gcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUucGFzc3dvcmQpfVxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5jb25maXJtKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZW1haWwpfVxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5kaXNhYmxlZCl9XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgncGFzc3dvcmQnKX0gcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgnY29uZmlybScpfSBwbGFjZWhvbGRlcj1cImNvbmZpcm0gcGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ2VtYWlsJyl9IHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc2lnblVwfSB2YWx1ZT1cIlN1Ym1pdFwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSB0aGlzLnN0YXRlLmNvbmZpcm19IC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVVc2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hdXRoL0NyZWF0ZVVzZXIuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==