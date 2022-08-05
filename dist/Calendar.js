"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

require("react-datepicker/dist/react-datepicker.css");

var _ko = _interopRequireDefault(require("date-fns/locale/ko"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Calendar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var selected = props.selected,
      _props$minDate = props.minDate,
      minDate = _props$minDate === void 0 ? "" : _props$minDate,
      _props$startDate = props.startDate,
      startDate = _props$startDate === void 0 ? "" : _props$startDate,
      setStartDate = props.setStartDate,
      _props$endDate = props.endDate,
      endDate = _props$endDate === void 0 ? "" : _props$endDate,
      setEndDate = props.setEndDate,
      dateFormat = props.dateFormat,
      _props$withPortal = props.withPortal,
      withPortal = _props$withPortal === void 0 ? false : _props$withPortal,
      _props$showTimeSelect = props.showTimeSelect,
      showTimeSelect = _props$showTimeSelect === void 0 ? false : _props$showTimeSelect,
      _props$timeFormat = props.timeFormat,
      timeFormat = _props$timeFormat === void 0 ? false : _props$timeFormat,
      _props$timeIntervals = props.timeIntervals,
      timeIntervals = _props$timeIntervals === void 0 ? false : _props$timeIntervals,
      _props$customInput = props.customInput,
      customInput = _props$customInput === void 0 ? false : _props$customInput,
      className = props.className;

  var _onChange = _react.default.useCallback(function (date) {
    if (!ref.current.props.endDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  }, [ref, setEndDate, setStartDate]);

  _react.default.useEffect(function () {
    _onChange(startDate);
  }, [_onChange, ref, startDate]);

  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    className: className,
    customInput: customInput,
    selected: selected,
    startDate: startDate,
    endDate: endDate,
    ref: ref,
    onChange: function onChange(date) {
      return _onChange(date);
    },
    minDate: minDate,
    dateFormat: dateFormat,
    withPortal: withPortal,
    locale: _ko.default,
    showTimeSelect: showTimeSelect,
    timeFormat: timeFormat,
    timeIntervals: timeIntervals
  }));
});

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .react-datepicker-wrapper {\n    width: auto;\n  }\n"])));

var _default = /*#__PURE__*/_react.default.memo(Calendar);

exports.default = _default;