webpackHotUpdate(0,{

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _superagent = __webpack_require__(593);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _reactRouter = __webpack_require__(104);
	
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
	      password: ''
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
	        this.setState(state);
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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhbmRpbmcuanN4P2RlZTgiXSwibmFtZXMiOlsib3B0aW9ucyIsInVzZXJJRCIsImN1cnJlbmN5IiwiTGFuZGluZyIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXBkYXRlSW5wdXQiLCJiaW5kIiwic3VibWl0SGFuZGxlciIsImNsaWNrSGFuZGxlciIsImtleSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJkZWVwIiwibG9naW4iLCJyb2xlIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlckRhdGEiLCJyb3V0ZXIiLCJwdXNoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBR0EsS0FBSUEsVUFBVTtBQUNaQyxXQUFRLElBREk7QUFFWkMsYUFBVTtBQUZFLEVBQWQ7O0tBS01DLE87OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVSxFQURDO0FBRVhDLGlCQUFVO0FBRkMsTUFBYjtBQUlBLFdBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxXQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJELElBQW5CLE9BQXJCO0FBQ0EsV0FBS0UsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRixJQUFsQixPQUFwQjtBQVJpQjtBQVNsQjs7OztpQ0FFV0csRyxFQUFLO0FBQ2YsV0FBSVAsUUFBUSxFQUFaO0FBQ0EsY0FBTyxVQUFTUSxDQUFULEVBQVk7QUFDakJSLGVBQU1PLEdBQU4sSUFBYUMsRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNBLGNBQUtDLFFBQUwsQ0FDRVgsS0FERjtBQUdELFFBTE0sQ0FLTEksSUFMSyxDQUtBLElBTEEsQ0FBUDtBQU1EOzs7bUNBRWFJLEMsRUFBRztBQUFBOztBQUNmQSxTQUFFSSxjQUFGO0FBQ0E7QUFDQSxZQUFLYixLQUFMLENBQVdjLElBQVgsQ0FBZ0JDLEtBQWhCLENBQXNCO0FBQ3BCQyxlQUFNLE1BRGM7QUFFcEJkLG1CQUFVLEtBQUtELEtBQUwsQ0FBV0MsUUFGRDtBQUdwQkMsbUJBQVUsS0FBS0YsS0FBTCxDQUFXRTtBQUhELFFBQXRCLEVBSUcsVUFBQ2MsT0FBRCxFQUFVQyxJQUFWLEVBQW1CO0FBQ3BCQyxpQkFBUUMsR0FBUixDQUFZLGNBQVosRUFBNEJILE9BQTVCLEVBQXFDLFdBQXJDLEVBQWtEQyxJQUFsRDtBQUNBLGFBQUlELE9BQUosRUFBYTtBQUNYO0FBQ0FDLGtCQUFPQSxJQUFQO0FBQ0Esa0JBQUtsQixLQUFMLENBQVdxQixXQUFYLENBQXVCSCxJQUF2QjtBQUNBLGtCQUFLbEIsS0FBTCxDQUFXc0IsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsWUFBdkI7QUFDRCxVQUxELE1BS087QUFDTEosbUJBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNEO0FBQ0YsUUFkRDtBQWVEOzs7a0NBRVlYLEMsRUFBRztBQUNkQSxTQUFFSSxjQUFGO0FBQ0EsWUFBS2IsS0FBTCxDQUFXc0IsTUFBWCxDQUFrQkMsSUFBbEIsQ0FBdUIsU0FBdkI7QUFDRDs7OzhCQUdRO0FBQUE7O0FBQ1AsY0FDRTtBQUFBO0FBQUEsV0FBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFDQSxrREFBSyxLQUFJLHFCQUFULEVBQStCLFdBQVUsZUFBekM7QUFEQSxVQURGO0FBSUU7QUFBQTtBQUFBLGFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLGVBQU0sVUFBVSxrQkFBQ2QsQ0FBRDtBQUFBLHdCQUFPLE9BQUtILGFBQUwsQ0FBbUJHLENBQW5CLENBQVA7QUFBQSxnQkFBaEI7QUFDRTtBQUFBO0FBQUE7QUFDRSx3REFBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLTCxXQUFMLENBQWlCLFVBQWpCLENBQTdCLEVBQTJELGFBQVksVUFBdkUsRUFBa0YsTUFBSyxNQUF2RixHQURGO0FBRUUsd0RBRkY7QUFFUSx3REFGUjtBQUdFLHdEQUFPLE1BQUssTUFBWixFQUFtQixVQUFVLEtBQUtBLFdBQUwsQ0FBaUIsVUFBakIsQ0FBN0IsRUFBMkQsYUFBWSxVQUF2RSxFQUFrRixNQUFLLE1BQXZGO0FBSEYsY0FERjtBQU1FLHNEQU5GO0FBTVEsc0RBTlI7QUFPR2UscUJBQVFDLEdBQVIsQ0FBWSxLQUFLbkIsS0FBTCxDQUFXQyxRQUF2QixDQVBIO0FBUUdpQixxQkFBUUMsR0FBUixDQUFZLEtBQUtuQixLQUFMLENBQVdFLFFBQXZCLENBUkg7QUFTRSxzREFBTyxNQUFLLFFBQVosRUFBcUIsU0FBUyxpQkFBQ00sQ0FBRDtBQUFBLHdCQUFPLE9BQUtILGFBQUwsQ0FBbUJHLENBQW5CLENBQVA7QUFBQSxnQkFBOUIsRUFBNEQsT0FBTSxRQUFsRSxHQVRGO0FBQUE7QUFVRTtBQUFBO0FBQUEsaUJBQVEsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLDBCQUFPLE9BQUtGLFlBQUwsQ0FBa0JFLENBQWxCLENBQVA7QUFBQSxrQkFBakI7QUFBQTtBQUFBO0FBVkY7QUFERjtBQUpGLFFBREY7QUFxQkQ7Ozs7R0F0RW1CLGdCQUFNZSxTOzttQkF5RWJ6QixPIiwiZmlsZSI6IjAuOWQyOThiMGM2MWYxYTNlMWMxNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuXG5sZXQgb3B0aW9ucyA9IHtcbiAgdXNlcklEOiAnMDAnLFxuICBjdXJyZW5jeTogJ0JUQydcbn1cblxuY2xhc3MgTGFuZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJbnB1dCA9IHRoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN1Ym1pdEhhbmRsZXIgPSB0aGlzLnN1Ym1pdEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVJbnB1dChrZXkpIHtcbiAgICBsZXQgc3RhdGUgPSB7fVxuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICBzdGF0ZVtrZXldID0gZS50YXJnZXQudmFsdWU7XG4gICAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgICBzdGF0ZVxuICAgICAgKVxuICAgIH0uYmluZCh0aGlzKVxuICB9IFxuXG4gIHN1Ym1pdEhhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvL3NpZ24gaW5cbiAgICB0aGlzLnByb3BzLmRlZXAubG9naW4oe1xuICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZFxuICAgIH0sIChzdWNjZXNzLCBkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnc3VjY2VzcyBpczogJywgc3VjY2VzcywgJ2RhdGEgaXM6ICcsIGRhdGEpO1xuICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgLy8gZGF0YSA9IHt1c2VySUQ6ICdrYWknfTtcbiAgICAgICAgZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMucHJvcHMuZ2V0VXNlckRhdGEoZGF0YSk7XG4gICAgICAgIHRoaXMucHJvcHMucm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmNvcnJlY3QgbG9naW4nKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL3NpZ251cCcpO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdsYW5kaW5nJz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9Jy9pbWcvd2hpdGVDcnlwdC5zdmcnIGNsYXNzTmFtZT0nbGFuZGluZ0Jhbm5lcic+PC9pbWc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbG9naW5Gb3JtJz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHRoaXMuc3VibWl0SGFuZGxlcihlKX0+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZUlucHV0KCd1c2VybmFtZScpfSBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXQoJ3Bhc3N3b3JkJyl9IHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS51c2VybmFtZSl9XG4gICAgICAgICAgICB7Y29uc29sZS5sb2codGhpcy5zdGF0ZS5wYXNzd29yZCl9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKSA9PiB0aGlzLnN1Ym1pdEhhbmRsZXIoZSl9IHZhbHVlPVwiTG9nIEluXCIgLz4mbmJzcDsmbmJzcDtcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGUpfT4gU2lnbiBVcCA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGFuZGluZy5qc3giXSwic291cmNlUm9vdCI6IiJ9