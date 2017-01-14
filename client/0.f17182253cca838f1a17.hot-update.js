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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3g/YTAwOSJdLCJuYW1lcyI6WyJDcmVhdGVVc2VyIiwicHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjb25maXJtIiwiZW1haWwiLCJ1cGRhdGVGb3JtSW5wdXQiLCJiaW5kIiwic2lnblVwIiwiZSIsInByZXZlbnREZWZhdWx0Iiwicm91dGVyIiwicHVzaCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiYWpheCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJzdWJtaXRIYW5kbGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFTUEsVTs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx5SEFDWEEsS0FEVzs7QUFFakIsV0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGlCQUFVLEVBREM7QUFFWEMsaUJBQVUsRUFGQztBQUdYQyxnQkFBUyxFQUhFO0FBSVhDLGNBQU87QUFKSSxNQUFiO0FBTUEsV0FBS0MsZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCQyxJQUFyQixPQUF2QjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlELElBQVosT0FBZDtBQVRpQjtBQVVsQjs7OzttQ0FDYUUsQyxFQUFHO0FBQ2ZBLFNBQUVDLGNBQUY7QUFDQSxZQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLEdBQXZCO0FBQ0Q7OztrQ0FFWUgsQyxFQUFHO0FBQ2RBLFNBQUVDLGNBQUY7QUFDQSxZQUFLVixLQUFMLENBQVdXLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLEdBQXZCO0FBQ0Q7O0FBRUg7Ozs7cUNBRWtCQyxHLEVBQUs7QUFDbkIsV0FBSVosUUFBUSxFQUFaO0FBQ0FhLGVBQVFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLElBQXpCO0FBQ0EsY0FBTyxVQUFTTixDQUFULEVBQVk7QUFDakJSLGVBQU1ZLEdBQU4sSUFBYUosRUFBRU8sTUFBRixDQUFTQyxLQUF0QjtBQUNBLGNBQUtDLFFBQUwsQ0FDRWpCLEtBREY7QUFHRCxRQUxNLENBS0xNLElBTEssQ0FLQSxJQUxBLENBQVA7QUFNRDs7OzRCQUVNRSxDLEVBQUc7QUFDUkssZUFBUUMsR0FBUixDQUFZLGdDQUFaLEVBQThDTixDQUE5QztBQUNBLFdBQUlQLFdBQVcsS0FBS0QsS0FBTCxDQUFXQyxRQUExQjtBQUNBLFdBQUlDLFdBQVcsS0FBS0YsS0FBTCxDQUFXRSxRQUExQjtBQUNBLFdBQUlFLFFBQVEsS0FBS0osS0FBTCxDQUFXSSxLQUF2QjtBQUNBLHdCQUFFYyxJQUFGLENBQU87QUFDTEMsY0FBSyw4QkFEQTtBQUVMQyxpQkFBUSxNQUZIO0FBR0xDLGVBQU07QUFDSnBCLHFCQUFVQSxRQUROO0FBRUpDLHFCQUFVQSxRQUZOO0FBR0pFLGtCQUFPQTtBQUhIO0FBSEQsUUFBUDtBQVNEOzs7OEJBR1E7QUFBQTs7QUFDUCxjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNBLGtEQUFLLEtBQUksbUJBQVQsRUFBNkIsV0FBVSxrQkFBdkM7QUFEQSxVQURGO0FBSUU7QUFBQTtBQUFBLGFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGVBQU0sVUFBVSxrQkFBQ0ksQ0FBRDtBQUFBLHdCQUFPLE9BQUtjLGFBQUwsQ0FBbUJkLENBQW5CLENBQVA7QUFBQSxnQkFBaEI7QUFDRTtBQUFBO0FBQUE7QUFDRSx3REFBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLSCxlQUFMLENBQXFCLFVBQXJCLENBQTdCLEVBQStELGFBQVksVUFBM0UsRUFBc0YsTUFBSyxNQUEzRixHQURGO0FBRUUsd0RBRkY7QUFFUSx3REFGUjtBQUdHUSx1QkFBUUMsR0FBUixDQUFZLEtBQUtkLEtBQUwsQ0FBV0MsUUFBdkIsQ0FISDtBQUlHWSx1QkFBUUMsR0FBUixDQUFZLEtBQUtkLEtBQUwsQ0FBV0UsUUFBdkIsQ0FKSDtBQUtHVyx1QkFBUUMsR0FBUixDQUFZLEtBQUtkLEtBQUwsQ0FBV0csT0FBdkIsQ0FMSDtBQU1HVSx1QkFBUUMsR0FBUixDQUFZLEtBQUtkLEtBQUwsQ0FBV0ksS0FBdkIsQ0FOSDtBQU9FLHdEQUFPLE1BQUssTUFBWixFQUFtQixVQUFVLEtBQUtDLGVBQUwsQ0FBcUIsVUFBckIsQ0FBN0IsRUFBK0QsYUFBWSxVQUEzRSxFQUFzRixNQUFLLE1BQTNGLEdBUEY7QUFRRSx3REFSRjtBQVFRLHdEQVJSO0FBU0Usd0RBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsS0FBS0EsZUFBTCxDQUFxQixTQUFyQixDQUE3QixFQUE4RCxhQUFZLGtCQUExRSxFQUE2RixNQUFLLE1BQWxHLEdBVEY7QUFVRSx3REFWRjtBQVVRLHdEQVZSO0FBV0Usd0RBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsS0FBS0EsZUFBTCxDQUFxQixPQUFyQixDQUE3QixFQUE0RCxhQUFZLE9BQXhFLEVBQWdGLE1BQUssTUFBckY7QUFYRixjQURGO0FBY0Usc0RBZEY7QUFjUSxzREFkUjtBQWVFLHNEQUFPLE1BQUssUUFBWixFQUFxQixTQUFTLEtBQUtFLE1BQW5DLEVBQTJDLE9BQU0sUUFBakQsR0FmRjtBQUFBO0FBQUE7QUFERjtBQUpGLFFBREY7QUEwQkQ7Ozs7R0EvRXNCLGdCQUFNZ0IsUzs7bUJBa0ZoQnpCLFUiLCJmaWxlIjoiMC5mMTcxODIyNTNjY2E4MzhmMWExNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5cbmNsYXNzIENyZWF0ZVVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgY29uZmlybTogJycsXG4gICAgICBlbWFpbDogJydcbiAgICB9XG4gICAgdGhpcy51cGRhdGVGb3JtSW5wdXQgPSB0aGlzLnVwZGF0ZUZvcm1JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2lnblVwID0gdGhpcy5zaWduVXAuYmluZCh0aGlzKTtcbiAgfVxuICBzdWJtaXRIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnLycpO1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnLycpO1xuICB9XG5cbi8qPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSl9PiBDYW5jZWwgPC9idXR0b24+Ki9cblxuICB1cGRhdGVGb3JtSW5wdXQoa2V5KSB7XG4gICAgdmFyIHN0YXRlID0ge307XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXM6ICcsIHRoaXMpXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHN0YXRlW2tleV0gPSBlLnRhcmdldC52YWx1ZVxuICAgICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgICAgc3RhdGVcbiAgICAgIClcbiAgICB9LmJpbmQodGhpcylcbiAgfVxuXG4gIHNpZ25VcChlKSB7XG4gICAgY29uc29sZS5sb2coJ2luIHNpZ25VcCBmdW5jdGlvbi4gZXZlbnQgaXM6ICcsIGUpXG4gICAgdmFyIHVzZXJuYW1lID0gdGhpcy5zdGF0ZS51c2VybmFtZVxuICAgIHZhciBwYXNzd29yZCA9IHRoaXMuc3RhdGUucGFzc3dvcmRcbiAgICB2YXIgZW1haWwgPSB0aGlzLnN0YXRlLmVtYWlsXG4gICAgJC5hamF4KHtcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODk5OS9zaWdudXAnLFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICBlbWFpbDogZW1haWxcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjcmVhdGVVc2VyJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9Jy9pbWcvZ3JuQ3J5cHQuc3ZnJyBjbGFzc05hbWU9J2NyZWF0ZVVzZXJCYW5uZXInPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luRm9ybSc+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZSl9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVGb3JtSW5wdXQoJ3VzZXJuYW1lJyl9IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgICAge2NvbnNvbGUubG9nKHRoaXMuc3RhdGUuY29uZmlybSl9XG4gICAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVtYWlsKX1cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlRm9ybUlucHV0KCdwYXNzd29yZCcpfSBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlRm9ybUlucHV0KCdjb25maXJtJyl9IHBsYWNlaG9sZGVyPVwiY29uZmlybSBwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUZvcm1JbnB1dCgnZW1haWwnKX0gcGxhY2Vob2xkZXI9XCJlbWFpbFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5zaWduVXB9IHZhbHVlPVwiU3VibWl0XCIgLz4mbmJzcDsmbmJzcDtcbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZVVzZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2F1dGgvQ3JlYXRlVXNlci5qc3giXSwic291cmNlUm9vdCI6IiJ9