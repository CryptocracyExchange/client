webpackHotUpdate(0,{

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(19), RootInstanceProvider = __webpack_require__(20), ReactMount = __webpack_require__(16), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Nav = __webpack_require__(257);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	var _ExchangeRates = __webpack_require__(536);
	
	var _ExchangeRates2 = _interopRequireDefault(_ExchangeRates);
	
	var _Transaction = __webpack_require__(539);
	
	var _Transaction2 = _interopRequireDefault(_Transaction);
	
	var _Graph = __webpack_require__(537);
	
	var _Graph2 = _interopRequireDefault(_Graph);
	
	var _History = __webpack_require__(538);
	
	var _History2 = _interopRequireDefault(_History);
	
	var _lodash = __webpack_require__(137);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _reactMaterialize = __webpack_require__(80);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Dashboard = function (_React$Component) {
	  _inherits(Dashboard, _React$Component);
	
	  function Dashboard(props) {
	    _classCallCheck(this, Dashboard);
	
	    var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
	
	    _this.state = {
	      userBalances: {},
	      selectedCurrencies: ['BTC', 'LTC']
	    };
	    _this.ds = props.deep;
	    _this.userData = props.userData;
	    _this.userID = props.userData.userID;
	
	    _this.balances = _this.ds.record.getRecord('balances/' + _this.userID);
	    return _this;
	  }
	
	  _createClass(Dashboard, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      // get user balances
	      this.balances.whenReady(function (record) {
	        console.log('setBalance', record.get());
	        var change = _lodash2.default.extend({}, _this2.state);
	        change.userBalances = record.get();
	        _this2.setState(change);
	      });
	
	      this.balances.subscribe(function (data) {
	        console.log('newBal', data);
	        // const change = _.extend({}, this.state);
	        // change.userBalances = data;
	        // this.setState(change);
	      });
	
	      this._setUserData.bind(this);
	
	      var queryString = JSON.stringify({
	        table: 'open',
	        query: [['userID', 'eq', 'harry']]
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.balances.discard();
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate() {
	      // needs to subscribe to changes to balances
	
	    }
	  }, {
	    key: '_setCurrency',
	    value: function _setCurrency(selector) {
	      console.log('curr', selector);
	      var pairs = [['BTC', 'LTC'], ['LTC', 'DOGE'], ['DOGE', 'BTC']];
	      var change = _lodash2.default.extend({}, this.state);
	      change.selectedCurrencies = pairs[selector];
	      this.setState(change);
	    }
	  }, {
	    key: '_init',
	    value: function _init() {
	      //  getRecord for balances, transactions by userID, market price
	      // balances
	
	    }
	  }, {
	    key: '_setUserData',
	    value: function _setUserData() {
	      var change = _lodash2.default.extend({}, this.state);
	      change.userData = this.userData;
	      this.setState(change);
	    }
	  }, {
	    key: 'changeRoute',
	    value: function changeRoute(route) {
	      this.props.router.push(route);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Nav2.default, { deep: this.props.deep, currencySelector: this._setCurrency.bind(this), toRoute: this.changeRoute.bind(this) }),
	        _react2.default.createElement(_ExchangeRates2.default, { deep: this.props.deep, currencies: this.state.selectedCurrencies }),
	        _react2.default.createElement(
	          _reactMaterialize.Row,
	          null,
	          _react2.default.createElement(_Transaction2.default, {
	            userData: this.props.userData,
	            balances: this.state.userBalances,
	            currencies: this.state.selectedCurrencies,
	            deep: this.props.deep
	          }),
	          _react2.default.createElement(_History2.default, { userID: this.props.userData.userID, deep: this.props.deep }),
	          _react2.default.createElement(_Graph2.default, { deep: this.props.deep })
	        )
	      );
	    }
	  }]);
	
	  return Dashboard;
	}(_react2.default.Component);
	
	exports.default = Dashboard;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(21); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Dashboard.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Rhc2gvRGFzaGJvYXJkLmpzeD9hZjVjIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInByb3BzIiwic3RhdGUiLCJ1c2VyQmFsYW5jZXMiLCJzZWxlY3RlZEN1cnJlbmNpZXMiLCJkcyIsImRlZXAiLCJ1c2VyRGF0YSIsInVzZXJJRCIsImJhbGFuY2VzIiwicmVjb3JkIiwiZ2V0UmVjb3JkIiwid2hlblJlYWR5IiwiY29uc29sZSIsImxvZyIsImdldCIsImNoYW5nZSIsImV4dGVuZCIsInNldFN0YXRlIiwic3Vic2NyaWJlIiwiZGF0YSIsIl9zZXRVc2VyRGF0YSIsImJpbmQiLCJxdWVyeVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0YWJsZSIsInF1ZXJ5IiwiZGlzY2FyZCIsInNlbGVjdG9yIiwicGFpcnMiLCJyb3V0ZSIsInJvdXRlciIsInB1c2giLCJfc2V0Q3VycmVuY3kiLCJjaGFuZ2VSb3V0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztLQUVNQSxTOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVIQUNYQSxLQURXOztBQUVqQixXQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWMsRUFESDtBQUVYQywyQkFBb0IsQ0FBQyxLQUFELEVBQVEsS0FBUjtBQUZULE1BQWI7QUFJQSxXQUFLQyxFQUFMLEdBQVVKLE1BQU1LLElBQWhCO0FBQ0EsV0FBS0MsUUFBTCxHQUFnQk4sTUFBTU0sUUFBdEI7QUFDQSxXQUFLQyxNQUFMLEdBQWNQLE1BQU1NLFFBQU4sQ0FBZUMsTUFBN0I7O0FBRUEsV0FBS0MsUUFBTCxHQUFnQixNQUFLSixFQUFMLENBQVFLLE1BQVIsQ0FBZUMsU0FBZixlQUFxQyxNQUFLSCxNQUExQyxDQUFoQjtBQVZpQjtBQVds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dC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdiBmcm9tICcuL05hdi5qc3gnO1xuaW1wb3J0IEV4Y2hhbmdlUmF0ZXMgZnJvbSAnLi9FeGNoYW5nZVJhdGVzLmpzeCc7XG5pbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSAnLi9UcmFuc2FjdGlvbi5qc3gnO1xuaW1wb3J0IEdyYXBoIGZyb20gJy4vR3JhcGguanN4JztcbmltcG9ydCBIaXN0b3J5IGZyb20gJy4vSGlzdG9yeS5qc3gnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJ3JlYWN0LW1hdGVyaWFsaXplJztcblxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXJCYWxhbmNlczoge30sXG4gICAgICBzZWxlY3RlZEN1cnJlbmNpZXM6IFsnQlRDJywgJ0xUQyddXG4gICAgfVxuICAgIHRoaXMuZHMgPSBwcm9wcy5kZWVwO1xuICAgIHRoaXMudXNlckRhdGEgPSBwcm9wcy51c2VyRGF0YTtcbiAgICB0aGlzLnVzZXJJRCA9IHByb3BzLnVzZXJEYXRhLnVzZXJJRDtcblxuICAgIHRoaXMuYmFsYW5jZXMgPSB0aGlzLmRzLnJlY29yZC5nZXRSZWNvcmQoYGJhbGFuY2VzLyR7dGhpcy51c2VySUR9YCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBnZXQgdXNlciBiYWxhbmNlc1xuICAgIHRoaXMuYmFsYW5jZXMud2hlblJlYWR5KChyZWNvcmQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdzZXRCYWxhbmNlJywgcmVjb3JkLmdldCgpKTtcbiAgICAgIGxldCBjaGFuZ2UgPSBfLmV4dGVuZCh7fSwgdGhpcy5zdGF0ZSk7XG4gICAgICBjaGFuZ2UudXNlckJhbGFuY2VzID0gcmVjb3JkLmdldCgpO1xuICAgICAgdGhpcy5zZXRTdGF0ZShjaGFuZ2UpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5iYWxhbmNlcy5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCduZXdCYWwnLCBkYXRhKTtcbiAgICAgIC8vIGNvbnN0IGNoYW5nZSA9IF8uZXh0ZW5kKHt9LCB0aGlzLnN0YXRlKTtcbiAgICAgIC8vIGNoYW5nZS51c2VyQmFsYW5jZXMgPSBkYXRhO1xuICAgICAgLy8gdGhpcy5zZXRTdGF0ZShjaGFuZ2UpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fc2V0VXNlckRhdGEuYmluZCh0aGlzKTtcblxuICAgIGxldCBxdWVyeVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHRhYmxlOiAnb3BlbicsXG4gICAgICBxdWVyeTogW1xuICAgICAgICBbICd1c2VySUQnLCAnZXEnLCAnaGFycnknIF1cbiAgICAgIF1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuYmFsYW5jZXMuZGlzY2FyZCgpO1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIC8vIG5lZWRzIHRvIHN1YnNjcmliZSB0byBjaGFuZ2VzIHRvIGJhbGFuY2VzXG5cbiAgfVxuXG4gIF9zZXRDdXJyZW5jeShzZWxlY3Rvcikge1xuICAgIGNvbnNvbGUubG9nKCdjdXJyJywgc2VsZWN0b3IpO1xuICAgIGNvbnN0IHBhaXJzID0gW1snQlRDJywgJ0xUQyddLFxuICAgICAgICAgICAgICAgICAgIFsnTFRDJywgJ0RPR0UnXSxcbiAgICAgICAgICAgICAgICAgICBbJ0RPR0UnLCAnQlRDJ11dXG4gICAgY29uc3QgY2hhbmdlID0gXy5leHRlbmQoe30sIHRoaXMuc3RhdGUpO1xuICAgIGNoYW5nZS5zZWxlY3RlZEN1cnJlbmNpZXMgPSBwYWlyc1tzZWxlY3Rvcl07XG4gICAgdGhpcy5zZXRTdGF0ZShjaGFuZ2UpO1xuICB9XG5cbiAgX2luaXQoKSB7XG4gICAgLy8gIGdldFJlY29yZCBmb3IgYmFsYW5jZXMsIHRyYW5zYWN0aW9ucyBieSB1c2VySUQsIG1hcmtldCBwcmljZVxuICAgIC8vIGJhbGFuY2VzXG5cbiAgfVxuXG4gIF9zZXRVc2VyRGF0YSgpIHtcbiAgICBjb25zdCBjaGFuZ2UgPSBfLmV4dGVuZCh7fSwgdGhpcy5zdGF0ZSk7XG4gICAgY2hhbmdlLnVzZXJEYXRhID0gdGhpcy51c2VyRGF0YTtcbiAgICB0aGlzLnNldFN0YXRlKGNoYW5nZSk7XG4gIH1cblxuXG4gIGNoYW5nZVJvdXRlKHJvdXRlKSB7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaChyb3V0ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXYgZGVlcD17dGhpcy5wcm9wcy5kZWVwfSBjdXJyZW5jeVNlbGVjdG9yPXt0aGlzLl9zZXRDdXJyZW5jeS5iaW5kKHRoaXMpfSB0b1JvdXRlPXt0aGlzLmNoYW5nZVJvdXRlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxFeGNoYW5nZVJhdGVzIGRlZXA9e3RoaXMucHJvcHMuZGVlcH0gY3VycmVuY2llcz17dGhpcy5zdGF0ZS5zZWxlY3RlZEN1cnJlbmNpZXN9IC8+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPFRyYW5zYWN0aW9uXG4gICAgICAgICAgICB1c2VyRGF0YT17dGhpcy5wcm9wcy51c2VyRGF0YX1cbiAgICAgICAgICAgIGJhbGFuY2VzPXt0aGlzLnN0YXRlLnVzZXJCYWxhbmNlc31cbiAgICAgICAgICAgIGN1cnJlbmNpZXM9e3RoaXMuc3RhdGUuc2VsZWN0ZWRDdXJyZW5jaWVzfVxuICAgICAgICAgICAgZGVlcD17dGhpcy5wcm9wcy5kZWVwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEhpc3RvcnkgdXNlcklEPXt0aGlzLnByb3BzLnVzZXJEYXRhLnVzZXJJRH0gZGVlcD17dGhpcy5wcm9wcy5kZWVwfSAvPlxuICAgICAgICAgIDxHcmFwaCBkZWVwPXt0aGlzLnByb3BzLmRlZXB9IC8+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZGFzaC9EYXNoYm9hcmQuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==