webpackHotUpdate(0,{

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(16), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _superagent = __webpack_require__(474);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _reactRouter = __webpack_require__(75);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var options = {
	  userID: '00',
	  currency: 'BTC'
	};
	
	var Landing = function (_React$Component) {
	  _inherits(Landing, _React$Component);
	
	  function Landing(props) {
	    _classCallCheck(this, Landing);
	
	    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));
	
	    _this.state = {
	      username: '',
	      password: '',
	      correct: true
	    };
	    _this.updateInput = _this.updateInput.bind(_this);
	    _this.submitHandler = _this.submitHandler.bind(_this);
	    _this.clickHandler = _this.clickHandler.bind(_this);
	    return _this;
	  }
	
	  _createClass(Landing, [{
	    key: 'updateInput',
	    value: function updateInput(key) {
	      var state = {};
	      return function (e) {
	        state[key] = e.target.value;
	        this.setState({
	          state: state
	        });
	      }.bind(this);
	    }
	  }, {
	    key: 'submitHandler',
	    value: function submitHandler(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	      //sign in
	      this.props.deep.login({
	        role: 'user',
	        username: this.state.username,
	        password: this.state.password
	      }, function (success, data) {
	        console.log('success is: ', success, 'data is: ', data);
	        if (success) {
	          // data = {userID: 'kai'};
	          data = data;
	          _this2.props.getUserData(data);
	          _this2.props.router.push('/dashboard');
	        } else {
	          _this2.setState({
	            username: '',
	            password: ''
	          });
	          console.log('incorrect login');
	        }
	      });
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler(e) {
	      e.preventDefault();
	      this.props.router.push('/signup');
	    }
	
	    /*onChange={this.updateInput('username')}*/
	    /*onChange={this.updateInput('password')}*/
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var usernameLength = this.state.username.length;
	      var passwordLength = this.state.password.length;
	      return _react2.default.createElement(
	        'div',
	        { className: 'landing' },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('img', { src: '/img/whiteCrypt.svg', className: 'landingBanner' })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'loginForm' },
	          _react2.default.createElement(
	            'form',
	            { onSubmit: function onSubmit(e) {
	                return _this3.submitHandler(e);
	              } },
	            _react2.default.createElement(
	              'label',
	              null,
	              _react2.default.createElement('input', { type: 'text', value: this.state.username, placeholder: 'username', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('input', { type: 'text', value: this.state.password, placeholder: 'password', name: 'name' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
	            !this.state.correct && usernameLength === 0 && passwordLength === 0 && _react2.default.createElement(
	              'p',
	              null,
	              'Invalid login'
	            ),
	            console.log(this.state.username),
	            console.log(this.state.password),
	            _react2.default.createElement('input', { type: 'submit', onClick: function onClick(e) {
	                return _this3.submitHandler(e);
	              }, value: 'Log In' }),
	            '\xA0\xA0',
	            _react2.default.createElement(
	              'button',
	              { onClick: function onClick(e) {
	                  return _this3.clickHandler(e);
	                } },
	              ' Sign Up '
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return Landing;
	}(_react2.default.Component);
	
	exports.default = Landing;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Landing.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhbmRpbmcuanN4P2RlZTgiXSwibmFtZXMiOlsib3B0aW9ucyIsInVzZXJJRCIsImN1cnJlbmN5IiwiTGFuZGluZyIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29ycmVjdCIsInVwZGF0ZUlucHV0IiwiYmluZCIsInN1Ym1pdEhhbmRsZXIiLCJjbGlja0hhbmRsZXIiLCJrZXkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiZGVlcCIsImxvZ2luIiwicm9sZSIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJEYXRhIiwicm91dGVyIiwicHVzaCIsInVzZXJuYW1lTGVuZ3RoIiwibGVuZ3RoIiwicGFzc3dvcmRMZW5ndGgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBLEtBQUlBLFVBQVU7QUFDWkMsV0FBUSxJQURJO0FBRVpDLGFBQVU7QUFGRSxFQUFkOztLQUtNQyxPOzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVUsRUFEQztBQUVYQyxpQkFBVSxFQUZDO0FBR1hDLGdCQUFTO0FBSEUsTUFBYjtBQUtBLFdBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLE9BQXJCO0FBQ0EsV0FBS0UsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRixJQUFsQixPQUFwQjtBQVRpQjtBQVVsQjs7OztpQ0FFV0csRyxFQUFLO0FBQ2YsV0FBSVIsUUFBUSxFQUFaO0FBQ0EsY0FBTyxVQUFTUyxDQUFULEVBQVk7QUFDakJULGVB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QUFYRjtBQURGO0FBSkYsUUFERjtBQXNCRDs7OztHQWhGbUIsZ0JBQU1rQixTOzttQkFtRmI3QixPIiwiZmlsZSI6IjAuMWQ2YjNiMWI1YWY4YjAxZTFjM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuXG5sZXQgb3B0aW9ucyA9IHtcbiAgdXNlcklEOiAnMDAnLFxuICBjdXJyZW5jeTogJ0JUQydcbn1cblxuY2xhc3MgTGFuZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBjb3JyZWN0OiB0cnVlXG4gICAgfVxuICAgIHRoaXMudXBkYXRlSW5wdXQgPSB0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXRIYW5kbGVyID0gdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlSW5wdXQoa2V5KSB7XG4gICAgbGV0IHN0YXRlID0ge31cbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgc3RhdGVba2V5XSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXRlXG4gICAgICB9KVxuICAgIH0uYmluZCh0aGlzKVxuICB9IFxuXG4gIHN1Ym1pdEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL3NpZ24gaW5cbiAgICB0aGlzLnByb3BzLmRlZXAubG9naW4oe1xuICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIH0sIChzdWNjZXNzLCBkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyBpczogJywgc3VjY2VzcywgJ2RhdGEgaXM6ICcsIGRhdGEpO1xuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgLy8gZGF0YSA9IHt1c2VySUQ6ICdrYWknfTtcbiAgICAgICAgZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlckRhdGEoZGF0YSk7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ2luY29ycmVjdCBsb2dpbicpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvc2lnbnVwJyk7XG4gIH1cblxuLypvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dCgndXNlcm5hbWUnKX0qL1xuLypvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dCgncGFzc3dvcmQnKX0qL1xuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgdXNlcm5hbWVMZW5ndGggPSB0aGlzLnN0YXRlLnVzZXJuYW1lLmxlbmd0aDtcbiAgICBsZXQgcGFzc3dvcmRMZW5ndGggPSB0aGlzLnN0YXRlLnBhc3N3b3JkLmxlbmd0aDtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmRpbmcnPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz0nL2ltZy93aGl0ZUNyeXB0LnN2ZycgY2xhc3NOYW1lPSdsYW5kaW5nQmFubmVyJz48L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbkZvcm0nPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdGhpcy5zdWJtaXRIYW5kbGVyKGUpfT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9ICBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICB7IXRoaXMuc3RhdGUuY29ycmVjdCAmJiB1c2VybmFtZUxlbmd0aCA9PT0gMCAmJiBwYXNzd29yZExlbmd0aCA9PT0gMCAmJiA8cD5JbnZhbGlkIGxvZ2luPC9wPn1cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lKX1cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IHRoaXMuc3VibWl0SGFuZGxlcihlKX0gdmFsdWU9XCJMb2cgSW5cIiAvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSl9PiBTaWduIFVwIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYW5kaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=