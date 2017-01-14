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
	        this.setState(state);
	        this.setState({
	          disabled: this.state.password !== this.state.confirm
	        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJkaXNhYmxlZCIsInVwZGF0ZUZvcm1JbnB1dCIsImJpbmQiLCJzaWduVXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJyb3V0ZXIiLCJwdXNoIiwia2V5IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdWJtaXRIYW5kbGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsVTs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5SEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFVLEVBREM7QUFFWEMsaUJBQVUsRUFGQztBQUdYQyxnQkFBUyxFQUhFO0FBSVhDLGNBQU8sRUFKSTtBQUtYQyxpQkFBVTtBQUxDLE1BQWI7QUFPQSxXQUFLQyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJDLElBQXJCLE9BQXZCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWUQsSUFBWixPQUFkO0FBVmlCO0FBV2xCOzs7O21DQUNhRSxDLEVBQUc7QUFDZkEsU0FBRUMsY0FBRjtBQUNBLFlBQUtYLEtBQUwsQ0FBV1ksTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsR0FBdkI7QUFDRDs7O2tDQUVZSCxDLEVBQUc7QUFDZEEsU0FBRUMsY0FBRjtBQUNBLFlBQUtYLEtBQUwsQ0FBV1ksTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsR0FBdkI7QUFDRDs7QUFFSDs7OztxQ0FFa0JD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cUIsU0FBUyxLQUFLRSxNQUFuQyxFQUEyQyxPQUFNLFFBQWpELEVBQTBELFVBQVUsS0FBS1IsS0FBTCxDQUFXSyxRQUEvRSxHQWhCRjtBQUFBO0FBQUE7QUFERjtBQUpGLFFBREY7QUEyQkQ7Ozs7R0ExRnNCLGdCQUFNc0IsUzs7bUJBNkZoQjdCLFUiLCJmaWxlIjoiMC44YmEzODg0ZDllNDg4NzAxOTJlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIENyZWF0ZVVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgY29uZmlybTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUZvcm1JbnB1dCA9IHRoaXMudXBkYXRlRm9ybUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaWduVXAgPSB0aGlzLnNpZ25VcC5iaW5kKHRoaXMpO1xuICB9XG4gIHN1Ym1pdEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJyk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvJyk7XG4gIH1cblxuLyo8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLmNsaWNrSGFuZGxlcihlKX0+IENhbmNlbCA8L2J1dHRvbj4qL1xuXG4gIHVwZGF0ZUZvcm1JbnB1dChrZXkpIHtcbiAgICB2YXIgc3RhdGUgPSB7fTtcbiAgICBjb25zb2xlLmxvZygndGhpcyBpczogJywgdGhpcylcbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgc3RhdGVba2V5XSA9IGUudGFyZ2V0LnZhbHVlXG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICBzdGF0ZSxcbiAgICAgIClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkaXNhYmxlZDogdGhpcy5zdGF0ZS5wYXNzd29yZCAhPT0gdGhpcy5zdGF0ZS5jb25maXJtXG4gICAgICB9KVxuICAgIH0uYmluZCh0aGlzKVxuICB9XG5cbiAgc2lnblVwKGUpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gc2lnblVwIGZ1bmN0aW9uLiBldmVudCBpczogJywgZSlcbiAgICB2YXIgdXNlcm5hbWUgPSB0aGlzLnN0YXRlLnVzZXJuYW1lXG4gICAgdmFyIHBhc3N3b3JkID0gdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIHZhciBlbWFpbCA9IHRoaXMuc3RhdGUuZW1haWxcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4OTk5L3NpZ251cCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgIGVtYWlsOiBlbWFpbFxuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIG1lc3NhZ2UgaXM6JywgbWVzc2FnZSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBtZXNzYWdlIGlzOicsIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NyZWF0ZVVzZXInPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz0nL2ltZy9ncm5DcnlwdC5zdmcnIGNsYXNzTmFtZT0nY3JlYXRlVXNlckJhbm5lcic+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW5Gb3JtJz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHRoaXMuc3VibWl0SGFuZGxlcihlKX0+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgndXNlcm5hbWUnKX0gcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUucGFzc3dvcmQpfVxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5jb25maXJtKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuZW1haWwpfVxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5kaXNhYmxlZCl9XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgncGFzc3dvcmQnKX0gcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgnY29uZmlybScpfSBwbGFjZWhvbGRlcj1cImNvbmZpcm0gcGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ2VtYWlsJyl9IHBsYWNlaG9sZGVyPVwiZW1haWxcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMuc2lnblVwfSB2YWx1ZT1cIlN1Ym1pdFwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLmRpc2FibGVkfSAvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlVXNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYXV0aC9DcmVhdGVVc2VyLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=