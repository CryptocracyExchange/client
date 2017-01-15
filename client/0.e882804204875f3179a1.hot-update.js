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
	              _react2.default.createElement('input', { type: 'text', value: this.state.username, onChange: this.updateInput('username'), placeholder: 'username', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('input', { type: 'text', value: this.state.password, onChange: this.updateInput('password'), placeholder: 'password', name: 'name' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhbmRpbmcuanN4P2RlZTgiXSwibmFtZXMiOlsib3B0aW9ucyIsInVzZXJJRCIsImN1cnJlbmN5IiwiTGFuZGluZyIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29ycmVjdCIsInVwZGF0ZUlucHV0IiwiYmluZCIsInN1Ym1pdEhhbmRsZXIiLCJjbGlja0hhbmRsZXIiLCJrZXkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiZGVlcCIsImxvZ2luIiwicm9sZSIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJEYXRhIiwicm91dGVyIiwicHVzaCIsInVzZXJuYW1lTGVuZ3RoIiwibGVuZ3RoIiwicGFzc3dvcmRMZW5ndGgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBLEtBQUlBLFVBQVU7QUFDWkMsV0FBUSxJQURJO0FBRVpDLGFBQVU7QUFGRSxFQUFkOztLQUtNQyxPOzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1IQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMsaUJBQVUsRUFEQztBQUVYQyxpQkFBVSxFQUZDO0FBR1hDLGdCQUFTO0FBSEUsTUFBYjtBQUtBLFdBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLE9BQXJCO0FBQ0EsV0FBS0UsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRixJQUFsQixPQUFwQjtBQVRpQjtBQVVsQjs7OztpQ0FFV0csRyxFQUFLO0FBQ2YsV0FBSVIsUUFBUSxFQUFaO0FBQ0EsY0FBTyxVQUFTUyxDQUFULEVBQVk7QUFDakJULGVB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LENBQUQ7QUFBQSwwQkFBTyxPQUFLRixZQUFMLENBQWtCRSxDQUFsQixDQUFQO0FBQUEsa0JBQWpCO0FBQUE7QUFBQTtBQVhGO0FBREY7QUFKRixRQURGO0FBc0JEOzs7O0dBOUVtQixnQkFBTWtCLFM7O21CQWlGYjdCLE8iLCJmaWxlIjoiMC5lODgyODA0MjA0ODc1ZjMxNzlhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVyYWdlbnQnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5cbmxldCBvcHRpb25zID0ge1xuICB1c2VySUQ6ICcwMCcsXG4gIGN1cnJlbmN5OiAnQlRDJ1xufVxuXG5jbGFzcyBMYW5kaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNvcnJlY3Q6IHRydWVcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJbnB1dCA9IHRoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN1Ym1pdEhhbmRsZXIgPSB0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVJbnB1dChrZXkpIHtcbiAgICBsZXQgc3RhdGUgPSB7fVxuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBzdGF0ZVtrZXldID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdGVcbiAgICAgIH0pXG4gICAgfS5iaW5kKHRoaXMpXG4gIH0gXG5cbiAgc3VibWl0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vc2lnbiBpblxuICAgIHRoaXMucHJvcHMuZGVlcC5sb2dpbih7XG4gICAgICByb2xlOiAndXNlcicsXG4gICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgfSwgKHN1Y2Nlc3MsIGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIGlzOiAnLCBzdWNjZXNzLCAnZGF0YSBpczogJywgZGF0YSk7XG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAvLyBkYXRhID0ge3VzZXJJRDogJ2thaSd9O1xuICAgICAgICBkYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyRGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZygnaW5jb3JyZWN0IGxvZ2luJylcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9zaWdudXAnKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB1c2VybmFtZUxlbmd0aCA9IHRoaXMuc3RhdGUudXNlcm5hbWUubGVuZ3RoO1xuICAgIGxldCBwYXNzd29yZExlbmd0aCA9IHRoaXMuc3RhdGUucGFzc3dvcmQubGVuZ3RoO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGFuZGluZyc+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxpbWcgc3JjPScvaW1nL3doaXRlQ3J5cHQuc3ZnJyBjbGFzc05hbWU9J2xhbmRpbmdCYW5uZXInPjwvaW1nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xvZ2luRm9ybSc+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZSl9PlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gb25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXQoJ3VzZXJuYW1lJyl9IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXQoJ3Bhc3N3b3JkJyl9IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICB7IXRoaXMuc3RhdGUuY29ycmVjdCAmJiB1c2VybmFtZUxlbmd0aCA9PT0gMCAmJiBwYXNzd29yZExlbmd0aCA9PT0gMCAmJiA8cD5JbnZhbGlkIGxvZ2luPC9wPn1cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lKX1cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IHRoaXMuc3VibWl0SGFuZGxlcihlKX0gdmFsdWU9XCJMb2cgSW5cIiAvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSl9PiBTaWduIFVwIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYW5kaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=