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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJ1cGRhdGVGb3JtSW5wdXQiLCJiaW5kIiwic2lnblVwIiwia2V5IiwiY29uc29sZSIsImxvZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIiwicGFzc3dvcmREb2VzTm90TWF0Y2hPckVtcHR5IiwibGVuZ3RoIiwicGFzc3dvcmREb2VzTm90TWF0Y2giLCJzdWJtaXRIYW5kbGVyIiwiZGlzYWJsZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVNQSxVOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHlIQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVUsRUFEQztBQUVYQyxpQkFBVSxFQUZDO0FBR1hDLGdCQUFTLEVBSEU7QUFJWEMsY0FBTztBQUpJLE1BQWI7QUFNQSxXQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWixPQUFkO0FBVGlCO0FBVWxCO0FBQ0Q7Ozs7Ozs7Ozs7QUFXRjs7OztxQ0FFa0JFLEcsRUFBSztBQUNuQixXQUFJUixRQUFRLEVBQVo7QUFDQVMsZUFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUIsSUFBekI7QUFDQSxjQUFPLFVBQVNDLENBQVQsRUFBWTtBQUNqQlgsZUFBTVEsR0FBTixJQUFhRyxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0EsY0FBS0MsUUFB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TSxRQUEzQixFQUFvQyxVQUFVaUIsMkJBQTlDLEdBakJGO0FBQUE7QUFBQTtBQURGO0FBSkYsUUFERjtBQTRCRDs7OztHQTFGc0IsZ0JBQU1LLFM7O21CQTZGaEI3QixVIiwiZmlsZSI6IjAuOTMxZjIwYzM0YjI2ZDliMDEzMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5jbGFzcyBDcmVhdGVVc2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNvbmZpcm06ICcnLFxuICAgICAgZW1haWw6ICcnXG4gICAgfVxuICAgIHRoaXMudXBkYXRlRm9ybUlucHV0ID0gdGhpcy51cGRhdGVGb3JtSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNpZ25VcCA9IHRoaXMuc2lnblVwLmJpbmQodGhpcyk7XG4gIH1cbiAgLypcbiAgc3VibWl0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy8nKTtcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy8nKTtcbiAgfSovXG5cbi8qPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSl9PiBDYW5jZWwgPC9idXR0b24+Ki9cblxuICB1cGRhdGVGb3JtSW5wdXQoa2V5KSB7XG4gICAgdmFyIHN0YXRlID0ge307XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXM6ICcsIHRoaXMpXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHN0YXRlW2tleV0gPSBlLnRhcmdldC52YWx1ZVxuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgc3RhdGUsXG4gICAgICApXG4gICAgfS5iaW5kKHRoaXMpXG4gIH1cblxuICBzaWduVXAoZSkge1xuICAgIGNvbnNvbGUubG9nKCdpbiBzaWduVXAgZnVuY3Rpb24uIGV2ZW50IGlzOiAnLCBlKVxuICAgIHZhciB1c2VybmFtZSA9IHRoaXMuc3RhdGUudXNlcm5hbWVcbiAgICB2YXIgcGFzc3dvcmQgPSB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgdmFyIGVtYWlsID0gdGhpcy5zdGF0ZS5lbWFpbFxuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0Ojg5OTkvc2lnbnVwJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MgbWVzc2FnZSBpczonLCBtZXNzYWdlKTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIG1lc3NhZ2UgaXM6JywgbWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwYXNzd29yZERvZXNOb3RNYXRjaE9yRW1wdHkgPSB0aGlzLnN0YXRlLnBhc3N3b3JkLmxlbmd0aCA9PT0gMCB8fCB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSB0aGlzLnN0YXRlLmNvbmZpcm1cbiAgICBsZXQgcGFzc3dvcmREb2VzTm90TWF0Y2ggPSB0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSB0aGlzLnN0YXRlLmNvbmZpcm1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NyZWF0ZVVzZXInPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz0nL2ltZy9ncm5DcnlwdC5zdmcnIGNsYXNzTmFtZT0nY3JlYXRlVXNlckJhbm5lcic+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW5Gb3JtJz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHRoaXMuc3VibWl0SGFuZGxlcihlKX0+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgndXNlcm5hbWUnKX0gcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUucGFzc3dvcmQpfVxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5jb25maXJtKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZW1haWwpfVxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5kaXNhYmxlZCl9XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgncGFzc3dvcmQnKX0gcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgnY29uZmlybScpfSBwbGFjZWhvbGRlcj1cImNvbmZpcm0gcGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICB7cGFzc3dvcmREb2VzTm90TWF0Y2ggJiYgPHA+UGFzc3dvcmRzIGRvIG5vdCBtYXRjaDwvcD59XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgnZW1haWwnKX0gcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiBkaXNhYmxlZD17cGFzc3dvcmREb2VzTm90TWF0Y2hPckVtcHR5fSAvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9DcmVhdGVVc2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=