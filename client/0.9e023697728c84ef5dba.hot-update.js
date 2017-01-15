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
	    _this.submitHandler = _this.submitHandler.bind(_this);
	    _this.clickHandler = _this.clickHandler.bind(_this);
	    _this.updateUsername = _this.updateUsername.bind(_this);
	    _this.updatePassword = _this.updatePassword.bind(_this);
	    return _this;
	  }
	
	  _createClass(Landing, [{
	    key: 'updateUsername',
	    value: function updateUsername(e) {
	      this.setState({
	        username: e.target.value
	      });
	    }
	  }, {
	    key: 'updatePassword',
	    value: function updatePassword(e) {
	      this.setState({
	        password: e.target.value
	      });
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
	          /*this.setState({
	            username: '',
	            password: ''
	          })*/
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
	              _react2.default.createElement('input', { type: 'text', value: this.state.username, onChange: function onChange(e) {
	                  return _this3.updateUsername(e);
	                }, placeholder: 'username', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('input', { type: 'text', value: this.state.password, onChange: function onChange(e) {
	                  return _this3.updatePassword(e);
	                }, placeholder: 'password', name: 'name' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhbmRpbmcuanN4P2RlZTgiXSwibmFtZXMiOlsib3B0aW9ucyIsInVzZXJJRCIsImN1cnJlbmN5IiwiTGFuZGluZyIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29ycmVjdCIsInN1Ym1pdEhhbmRsZXIiLCJiaW5kIiwiY2xpY2tIYW5kbGVyIiwidXBkYXRlVXNlcm5hbWUiLCJ1cGRhdGVQYXNzd29yZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJkZWVwIiwibG9naW4iLCJyb2xlIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckRhdGEiLCJyb3V0ZXIiLCJwdXNoIiwidXNlcm5hbWVMZW5ndGgiLCJsZW5ndGgiLCJwYXNzd29yZExlbmd0aCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBR0EsS0FBSUEsVUFBVTtBQUNaQyxXQUFRLElBREk7QUFFWkMsYUFBVTtBQUZFLEVBQWQ7O0tBS01DLE87OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVSxFQURDO0FBRVhDLGlCQUFVLEVBRkM7QUFHWEMsZ0JBQVM7QUFIRSxNQUFiO0FBS0EsV0FBS0MsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CQyxJQUFuQixPQUFyQjtBQUNBLFdBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsT0FBcEI7QUFDQSxXQUFLRSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JGLElBQXBCLE9BQXRCO0FBQ0EsV0FBS0csY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSCxJQUFwQixPQUF0QjtBQVZpQjtBQVdsQjs7OztvQ0FF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LEVBQTRELE9BQU0sUUFBbEUsR0FWRjtBQUFBO0FBV0U7QUFBQTtBQUFBLGlCQUFRLFNBQVMsaUJBQUNBLENBQUQ7QUFBQSwwQkFBTyxPQUFLSCxZQUFMLENBQWtCRyxDQUFsQixDQUFQO0FBQUEsa0JBQWpCO0FBQUE7QUFBQTtBQVhGO0FBREY7QUFKRixRQURGO0FBc0JEOzs7O0dBakZtQixnQkFBTWtCLFM7O21CQW9GYjdCLE8iLCJmaWxlIjoiMC45ZTAyMzY5NzcyOGM4NGVmNWRiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVyYWdlbnQnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5cbmxldCBvcHRpb25zID0ge1xuICB1c2VySUQ6ICcwMCcsXG4gIGN1cnJlbmN5OiAnQlRDJ1xufVxuXG5jbGFzcyBMYW5kaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGNvcnJlY3Q6IHRydWVcbiAgICB9XG4gICAgdGhpcy5zdWJtaXRIYW5kbGVyID0gdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlVXNlcm5hbWUgPSB0aGlzLnVwZGF0ZVVzZXJuYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVQYXNzd29yZCA9IHRoaXMudXBkYXRlUGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJuYW1lKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdXNlcm5hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9KVxuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmQoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwYXNzd29yZDogZS50YXJnZXQudmFsdWVcbiAgICAgIH0pXG4gIH0gIFxuXG4gIHN1Ym1pdEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL3NpZ24gaW5cbiAgICB0aGlzLnByb3BzLmRlZXAubG9naW4oe1xuICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIH0sIChzdWNjZXNzLCBkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyBpczogJywgc3VjY2VzcywgJ2RhdGEgaXM6ICcsIGRhdGEpO1xuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgLy8gZGF0YSA9IHt1c2VySUQ6ICdrYWknfTtcbiAgICAgICAgZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlckRhdGEoZGF0YSk7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9KSovXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmNvcnJlY3QgbG9naW4nKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL3NpZ251cCcpO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHVzZXJuYW1lTGVuZ3RoID0gdGhpcy5zdGF0ZS51c2VybmFtZS5sZW5ndGg7XG4gICAgbGV0IHBhc3N3b3JkTGVuZ3RoID0gdGhpcy5zdGF0ZS5wYXNzd29yZC5sZW5ndGg7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9Jy9pbWcvd2hpdGVDcnlwdC5zdmcnIGNsYXNzTmFtZT0nbGFuZGluZ0Jhbm5lcic+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW5Gb3JtJz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHRoaXMuc3VibWl0SGFuZGxlcihlKX0+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBvbkNoYW5nZT17KGUpID0+IHRoaXMudXBkYXRlVXNlcm5hbWUoZSl9IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnVwZGF0ZVBhc3N3b3JkKGUpfSBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgeyF0aGlzLnN0YXRlLmNvcnJlY3QgJiYgdXNlcm5hbWVMZW5ndGggPT09IDAgJiYgcGFzc3dvcmRMZW5ndGggPT09IDAgJiYgPHA+SW52YWxpZCBsb2dpbjwvcD59XG4gICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZSl9XG4gICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5wYXNzd29yZCl9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZSl9IHZhbHVlPVwiTG9nIEluXCIgLz4mbmJzcDsmbmJzcDtcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpfT4gU2lnbiBVcCA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGFuZGluZy5qc3giXSwic291cmNlUm9vdCI6IiJ9