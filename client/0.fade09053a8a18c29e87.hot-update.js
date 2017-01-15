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
	            password: '',
	            correct: false
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
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateInput('username'), placeholder: 'username', name: 'name' }),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('br', null),
	              _react2.default.createElement('input', { type: 'text', onChange: this.updateInput('password'), placeholder: 'password', name: 'name' })
	            ),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement('br', null),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhbmRpbmcuanN4P2RlZTgiXSwibmFtZXMiOlsib3B0aW9ucyIsInVzZXJJRCIsImN1cnJlbmN5IiwiTGFuZGluZyIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29ycmVjdCIsInVwZGF0ZUlucHV0IiwiYmluZCIsInN1Ym1pdEhhbmRsZXIiLCJjbGlja0hhbmRsZXIiLCJrZXkiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwiZGVlcCIsImxvZ2luIiwicm9sZSIsInN1Y2Nlc3MiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJEYXRhIiwicm91dGVyIiwicHVzaCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBR0EsS0FBSUEsVUFBVTtBQUNaQyxXQUFRLElBREk7QUFFWkMsYUFBVTtBQUZFLEVBQWQ7O0tBS01DLE87OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVSxFQURDO0FBRVhDLGlCQUFVLEVBRkM7QUFHWEMsZ0JBQVM7QUFIRSxNQUFiO0FBS0EsV0FBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLFdBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsT0FBckI7QUFDQSxXQUFLRSxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JGLElBQWxCLE9BQXBCO0FBVGlCO0FBVWxCOzs7O2lDQUVXRyxHLEVBQUs7QUFDZixXQUFJUixRQUFRLEVBQVo7QUFDQSxjQUFPLFVBQVNTLENBQVQsRUFBWTtBQUNqQlQsZUFBTVEsR0FBTixJQUFhQyxFQUFFQyxNQUFGLENBQVNDLEtBQXRCO0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQ1paO0FBRFksVUFBZDtBQUdELFFBTE0sQ0FLTEssSUFMSyxDQUtBLElBTEEsQ0FBUDtBQU1EOzs7bUNBRWFJLEMsRUFBRztBQUFBOztBQUNmQSxTQUFFSSxjQUFGO0FBQ0E7QUFDQSxZQUFLZCxLQUFMLENBQVdlLElBQVgsQ0FBZ0JDLEtBQWhCLENBQXNCO0FBQ3BCQyxlQUFNLE1BRGM7QUFFcEJmLG1CQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFGRDtBQUdwQkMsbUJBQVUsS0FBS0YsS0FBTCxDQUFXRTtBQUhELFFBQXRCLEVBSUcsVUFBQ2UsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQ3BCQyxpQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJILE9BQTVCLEVBQXFDLFdBQXJDLEVBQWtEQyxJQUFsRDtBQUNBLGFBQUlELE9BQUosRUFBYTtBQUNYO0FBQ0FDLGtCQUFPQSxJQUFQO0FBQ0Esa0JBQUtuQixLQUFMLENBQVdzQixXQUFYLENBQXVCSCxJQUF2QjtBQUNBLGtCQUFLbkIsS0FBTCxDQUFXdUIsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsWUFBdkI7QUFDRCxVQUxELE1BS087QUFDTCxrQkFBS1gsUUFBTCxDQUFjO0FBQ1pYLHVCQUFVLEVBREU7QUFFWkMsdUJBQVUsRUFGRTtBQUdaQyxzQkFBUztBQUhHLFlBQWQ7QUFLQWdCLG1CQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDRDtBQUNGLFFBbkJEO0FBb0JEOzs7a0NBRVlYLEMsRUFBRztBQUNkQSxTQUFFSSxjQUFGO0FBQ0EsWUFBS2QsS0FBTCxDQUFXdUIsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsU0FBdkI7QUFDRDs7OzhCQUdRO0FBQUE7O0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFDQSxrREFBSyxLQUFJLHFCQUFULEVBQStCLFdBQVUsZUFBekM7QUFEQSxVQURGO0FBSUU7QUFBQTtBQUFBLGFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGVBQU0sVUFBVSxrQkFBQ2QsQ0FBRDtBQUFBLHdCQUFPLE9BQUtILGFBQUwsQ0FBbUJHLENBQW5CLENBQVA7QUFBQSxnQkFBaEI7QUFDRTtBQUFBO0FBQUE7QUFDRSx3REFBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLTCxXQUFMLENBQWlCLFVBQWpCLENBQTdCLEVBQTJELGFBQVksVUFBdkUsRUFBa0YsTUFBSyxNQUF2RixHQURGO0FBRUUsd0RBRkY7QUFFUSx3REFGUjtBQUdFLHdEQUFPLE1BQUssTUFBWixFQUFtQixVQUFVLEtBQUtBLFdBQUwsQ0FBaUIsVUFBakIsQ0FBN0IsRUFBMkQsYUFBWSxVQUF2RSxFQUFrRixNQUFLLE1BQXZGO0FBSEYsY0FERjtBQU1FLHNEQU5GO0FBTVEsc0RBTlI7QUFPR2UscUJBQVFDLEdBQVIsQ0FBWSxLQUFLcEIsS0FBTCxDQUFXQyxRQUF2QixDQVBIO0FBUUdrQixxQkFBUUMsR0FBUixDQUFZLEtBQUtwQixLQUFMLENBQVdFLFFBQXZCLENBUkg7QUFTRSxzREFBTyxNQUFLLFFBQVosRUFBcUIsU0FBUyxpQkFBQ08sQ0FBRDtBQUFBLHdCQUFPLE9BQUtILGFBQUwsQ0FBbUJHLENBQW5CLENBQVA7QUFBQSxnQkFBOUIsRUFBNEQsT0FBTSxRQUFsRSxHQVRGO0FBQUE7QUFVRTtBQUFBO0FBQUEsaUJBQVEsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLDBCQUFPLE9BQUtGLFlBQUwsQ0FBa0JFLENBQWxCLENBQVA7QUFBQSxrQkFBakI7QUFBQTtBQUFBO0FBVkY7QUFERjtBQUpGLFFBREY7QUFxQkQ7Ozs7R0E1RW1CLGdCQUFNZSxTOzttQkErRWIxQixPIiwiZmlsZSI6IjAuZmFkZTA5MDUzYThhMThjMjllODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuXG5sZXQgb3B0aW9ucyA9IHtcbiAgdXNlcklEOiAnMDAnLFxuICBjdXJyZW5jeTogJ0JUQydcbn1cblxuY2xhc3MgTGFuZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBjb3JyZWN0OiB0cnVlXG4gICAgfVxuICAgIHRoaXMudXBkYXRlSW5wdXQgPSB0aGlzLnVwZGF0ZUlucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXRIYW5kbGVyID0gdGhpcy5zdWJtaXRIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrSGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlSW5wdXQoa2V5KSB7XG4gICAgbGV0IHN0YXRlID0ge31cbiAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgc3RhdGVba2V5XSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXRlXG4gICAgICB9KVxuICAgIH0uYmluZCh0aGlzKVxuICB9IFxuXG4gIHN1Ym1pdEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL3NpZ24gaW5cbiAgICB0aGlzLnByb3BzLmRlZXAubG9naW4oe1xuICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIH0sIChzdWNjZXNzLCBkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyBpczogJywgc3VjY2VzcywgJ2RhdGEgaXM6ICcsIGRhdGEpO1xuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgLy8gZGF0YSA9IHt1c2VySUQ6ICdrYWknfTtcbiAgICAgICAgZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlckRhdGEoZGF0YSk7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgY29ycmVjdDogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ2luY29ycmVjdCBsb2dpbicpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvc2lnbnVwJyk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmRpbmcnPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz0nL2ltZy93aGl0ZUNyeXB0LnN2ZycgY2xhc3NOYW1lPSdsYW5kaW5nQmFubmVyJz48L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbkZvcm0nPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdGhpcy5zdWJtaXRIYW5kbGVyKGUpfT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXQoJ3VzZXJuYW1lJyl9IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dCgncGFzc3dvcmQnKX0gcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lKX1cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IHRoaXMuc3VibWl0SGFuZGxlcihlKX0gdmFsdWU9XCJMb2cgSW5cIiAvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSl9PiBTaWduIFVwIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYW5kaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=