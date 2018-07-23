'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

require('./style.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = function (_Component) {
  _inherits(Wrapper, _Component);

  function Wrapper(props) {
    _classCallCheck(this, Wrapper);

    var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

    _this.myCharts = '';
    _this.state = {
      options: _this.props.options,
      loading: _this.props.loading ? _this.props.loading : false,
      onChartsReady: _this.props.onChartsReady ? _this.props.onChartsReady : null,

      theme: _this.props.theme ? _this.props.theme : '',
      opts: _this.props.opts ? _this.props.opts : '',

      notMerge: _this.props.notMerge ? _this.props.notMerge : false,
      lazyUpdate: _this.props.lazyUpdate ? _this.props.lazyUpdate : false,
      silent: _this.props.silent ? _this.props.silent : false
    };
    return _this;
  }

  _createClass(Wrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _state = this.state,
          notMerge = _state.notMerge,
          lazyUpdate = _state.lazyUpdate,
          silent = _state.silent,
          theme = _state.theme,
          opts = _state.opts;

      this.myCharts = _echarts2.default.init(document.getElementById("mainCharts"), theme, opts);
      this.myCharts.setOption(this.props.options, notMerge, lazyUpdate, silent);
      if (this.state.onChartsReady) {
        this.state.onChartsReady(this.myCharts);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var _state2 = this.state,
          notMerge = _state2.notMerge,
          lazyUpdate = _state2.lazyUpdate,
          silent = _state2.silent;

      if (this.props.options !== this.state.options) {
        this.myCharts.setOption(this.props.options, notMerge, lazyUpdate, silent);
        this.setState({ options: this.props.options });
      }
      if (this.props.loading !== this.state.loading) {
        this.props.loading ? this.myCharts.showLoading() : this.myCharts.hideLoading();
        this.setState({ loading: this.props.loading });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: 'mainCharts', style: this.props.style || {} });
    }
  }]);

  return Wrapper;
}(_react.Component);

exports.default = Wrapper;
//# sourceMappingURL=echartsWrapper.js.map