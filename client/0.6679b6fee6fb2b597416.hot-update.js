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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhbmRpbmcuanN4P2RlZTgiXSwibmFtZXMiOlsib3B0aW9ucyIsInVzZXJJRCIsImN1cnJlbmN5IiwiTGFuZGluZyIsInByb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXBkYXRlSW5wdXQiLCJiaW5kIiwia2V5IiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJwcmV2ZW50RGVmYXVsdCIsImRlZXAiLCJsb2dpbiIsInJvbGUiLCJzdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VyRGF0YSIsInJvdXRlciIsInB1c2giLCJzdWJtaXRIYW5kbGVyIiwiY2xpY2tIYW5kbGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0FBR0EsS0FBSUEsVUFBVTtBQUNaQyxXQUFRLElBREk7QUFFWkMsYUFBVTtBQUZFLEVBQWQ7O0tBS01DLE87OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsbUhBQ1hBLEtBRFc7O0FBRWpCLFdBQUtDLEtBQUwsR0FBYTtBQUNYQyxpQkFBVSxFQURDO0FBRVhDLGlCQUFVO0FBRkMsTUFBYjtBQUlBLFdBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFOaUI7QUFPbEI7Ozs7aUNBRVdDLEcsRUFBSztBQUNmLFdBQUlMLFFBQVEsRUFBWjtBQUNBLGNBQU8sVUFBU00sQ0FBVCxFQUFZO0FBQ2pCTixlQUFNSyxHQUFOLElBQWFDLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDQSxjQUFLQyxRQUFMLENBQ0VULEtBREY7QUFHRCxRQUxNLENBS0xJLElBTEssQ0FLQSxJQUxBLENBQVA7QUFNRDs7O21DQUVhRSxDLEVBQUc7QUFBQTs7QUFDZkEsU0FBRUksY0FBRjtBQUNBO0FBQ0EsWUFBS1gsS0FBTCxDQUFXWSxJQUFYLENBQWdCQyxLQUFoQixDQUFzQjtBQUNwQkMsZUFBTSxNQURjO0FBRXBCWixtQkFBVSxLQUFLRCxLQUFMLENBQVdDLFFBRkQ7QUFHcEJDLG1CQUFVLEtBQUtGLEtBQUwsQ0FBV0U7QUFIRCxRQUF0QixFQUlHLFVBQUNZLE9BQUQsRUFBVUMsSUFBVixFQUFtQjtBQUNwQkMsaUJBQVFDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCSCxPQUE1QixFQUFxQyxXQUFyQyxFQUFrREMsSUFBbEQ7QUFDQSxhQUFJRCxPQUFKLEVBQWE7QUFDWDtBQUNBQyxrQkFBT0EsSUFBUDtBQUNBLGtCQUFLaEIsS0FBTCxDQUFXbUIsV0FBWCxDQUF1QkgsSUFBdkI7QUFDQSxrQkFBS2hCLEtBQUwsQ0FBV29CLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLFlBQXZCO0FBQ0QsVUFMRCxNQUtPO0FBQ0xKLG1CQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDRDtBQUNGLFFBZEQ7QUFlRDs7O2tDQUVZWCxDLEVBQUc7QUFDZEEsU0FBRUksY0FBRjtBQUNBLFlBQUtYLEtBQUwsQ0FBV29CLE1BQVgsQ0FBa0JDLElBQWxCLENBQXVCLFNBQXZCO0FBQ0Q7Ozs4QkFHUTtBQUFBOztBQUNQLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0Esa0RBQUssS0FBSSxxQkFBVCxFQUErQixXQUFVLGVBQXpDO0FBREEsVUFERjtBQUlFO0FBQUE7QUFBQSxhQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxlQUFNLFVBQVUsa0JBQUNkLENBQUQ7QUFBQSx3QkFBTyxPQUFLZSxhQUFMLENBQW1CZixDQUFuQixDQUFQO0FBQUEsZ0JBQWhCO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usd0RBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsS0FBS0gsV0FBTCxDQUFpQixVQUFqQixDQUE3QixFQUEyRCxhQUFZLFVBQXZFLEVBQWtGLE1BQUssTUFBdkYsR0FERjtBQUVFLHdEQUZGO0FBRVEsd0RBRlI7QUFHRSx3REFBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLQSxXQUFMLENBQWlCLFVBQWpCLENBQTdCLEVBQTJELGFBQVksVUFBdkUsRUFBa0YsTUFBSyxNQUF2RjtBQUhGLGNBREY7QUFNRSxzREFORjtBQU1RLHNEQU5SO0FBT0dhLHFCQUFRQyxHQUFSLENBQVksS0FBS2pCLEtBQUwsQ0FBV0MsUUFBdkIsQ0FQSDtBQVFHZSxxQkFBUUMsR0FBUixDQUFZLEtBQUtqQixLQUFMLENBQVdFLFFBQXZCLENBUkg7QUFTRSxzREFBTyxNQUFLLFFBQVosRUFBcUIsU0FBUyxpQkFBQ0ksQ0FBRDtBQUFBLHdCQUFPLE9BQUtlLGFBQUwsQ0FBbUJmLENBQW5CLENBQVA7QUFBQSxnQkFBOUIsRUFBNEQsT0FBTSxRQUFsRSxHQVRGO0FBQUE7QUFVRTtBQUFBO0FBQUEsaUJBQVEsU0FBUyxpQkFBQ0EsQ0FBRDtBQUFBLDBCQUFPLE9BQUtnQixZQUFMLENBQWtCaEIsQ0FBbEIsQ0FBUDtBQUFBLGtCQUFqQjtBQUFBO0FBQUE7QUFWRjtBQURGO0FBSkYsUUFERjtBQXFCRDs7OztHQXBFbUIsZ0JBQU1pQixTOzttQkF1RWJ6QixPIiwiZmlsZSI6IjAuNjY3OWI2ZmVlNmZiMmI1OTc0MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuXG5sZXQgb3B0aW9ucyA9IHtcbiAgdXNlcklEOiAnMDAnLFxuICBjdXJyZW5jeTogJ0JUQydcbn1cblxuY2xhc3MgTGFuZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJbnB1dCA9IHRoaXMudXBkYXRlSW5wdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZUlucHV0KGtleSkge1xuICAgIGxldCBzdGF0ZSA9IHt9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgIHN0YXRlW2tleV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoXG4gICAgICAgIHN0YXRlXG4gICAgICApXG4gICAgfS5iaW5kKHRoaXMpXG4gIH0gXG5cbiAgc3VibWl0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vc2lnbiBpblxuICAgIHRoaXMucHJvcHMuZGVlcC5sb2dpbih7XG4gICAgICByb2xlOiAndXNlcicsXG4gICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgfSwgKHN1Y2Nlc3MsIGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzIGlzOiAnLCBzdWNjZXNzLCAnZGF0YSBpczogJywgZGF0YSk7XG4gICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAvLyBkYXRhID0ge3VzZXJJRDogJ2thaSd9O1xuICAgICAgICBkYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRVc2VyRGF0YShkYXRhKTtcbiAgICAgICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luY29ycmVjdCBsb2dpbicpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLnJvdXRlci5wdXNoKCcvc2lnbnVwJyk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2xhbmRpbmcnPlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz0nL2ltZy93aGl0ZUNyeXB0LnN2ZycgY2xhc3NOYW1lPSdsYW5kaW5nQmFubmVyJz48L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsb2dpbkZvcm0nPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gdGhpcy5zdWJtaXRIYW5kbGVyKGUpfT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMudXBkYXRlSW5wdXQoJ3VzZXJuYW1lJyl9IHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy51cGRhdGVJbnB1dCgncGFzc3dvcmQnKX0gcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnVzZXJuYW1lKX1cbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBhc3N3b3JkKX1cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpID0+IHRoaXMuc3VibWl0SGFuZGxlcihlKX0gdmFsdWU9XCJMb2cgSW5cIiAvPiZuYnNwOyZuYnNwO1xuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gdGhpcy5jbGlja0hhbmRsZXIoZSl9PiBTaWduIFVwIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYW5kaW5nLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=