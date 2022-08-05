"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

require("react-datepicker/dist/react-datepicker.css");

var _ko = _interopRequireDefault(require("date-fns/locale/ko"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Calendar = function Calendar(_ref) {
  var _ref$minDate = _ref.minDate,
      minDate = _ref$minDate === void 0 ? "" : _ref$minDate,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      onChangeStartDate = _ref.onChangeStartDate,
      onChangeEndDate = _ref.onChangeEndDate,
      _ref$showTimeSelect = _ref.showTimeSelect,
      showTimeSelect = _ref$showTimeSelect === void 0 ? false : _ref$showTimeSelect,
      _ref$timeFormat = _ref.timeFormat,
      timeFormat = _ref$timeFormat === void 0 ? false : _ref$timeFormat,
      _ref$timeIntervals = _ref.timeIntervals,
      timeIntervals = _ref$timeIntervals === void 0 ? false : _ref$timeIntervals;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: startDate,
    onChange: function onChange(date) {
      return onChangeStartDate(date);
    },
    minDate: minDate,
    startDate: startDate,
    dateFormat: "yyyy-MM-dd",
    withPortal: true,
    locale: _ko.default,
    showTimeSelect: showTimeSelect,
    timeFormat: timeFormat,
    timeIntervals: timeIntervals
  }), endDate && /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: endDate,
    onChange: function onChange(date) {
      return onChangeEndDate(date);
    },
    minDate: startDate,
    endDate: endDate,
    dateFormat: "yyyy-MM-dd",
    withPortal: true,
    locale: _ko.default
  }));
};

var _default = /*#__PURE__*/_react.default.memo(Calendar);

exports.default = _default;