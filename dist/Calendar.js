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

var Calendar = function Calendar(_ref) {
  var _ref$minDate = _ref.minDate,
      minDate = _ref$minDate === void 0 ? "" : _ref$minDate,
      startDate = _ref.startDate,
      _ref$startDateLabel = _ref.startDateLabel,
      startDateLabel = _ref$startDateLabel === void 0 ? "" : _ref$startDateLabel,
      endDate = _ref.endDate,
      _ref$endDateLabel = _ref.endDateLabel,
      endDateLabel = _ref$endDateLabel === void 0 ? "" : _ref$endDateLabel,
      onChangeStartDate = _ref.onChangeStartDate,
      onChangeEndDate = _ref.onChangeEndDate,
      dateFormat = _ref.dateFormat,
      _ref$showTimeSelect = _ref.showTimeSelect,
      showTimeSelect = _ref$showTimeSelect === void 0 ? false : _ref$showTimeSelect,
      _ref$timeFormat = _ref.timeFormat,
      timeFormat = _ref$timeFormat === void 0 ? false : _ref$timeFormat,
      _ref$timeIntervals = _ref.timeIntervals,
      timeIntervals = _ref$timeIntervals === void 0 ? false : _ref$timeIntervals;
  return /*#__PURE__*/_react.default.createElement(Container, null, startDateLabel && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, startDateLabel)), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: startDate,
    onChange: function onChange(date) {
      return onChangeStartDate(date);
    },
    minDate: minDate,
    startDate: startDate,
    dateFormat: dateFormat,
    withPortal: true,
    locale: _ko.default,
    showTimeSelect: showTimeSelect,
    timeFormat: timeFormat,
    timeIntervals: timeIntervals
  }), endDate && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, endDateLabel || "-")), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    selected: endDate,
    onChange: function onChange(date) {
      return onChangeEndDate(date);
    },
    minDate: startDate,
    endDate: endDate,
    dateFormat: dateFormat,
    withPortal: true,
    locale: _ko.default
  })));
};

var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

var _default = /*#__PURE__*/_react.default.memo(Calendar);

exports.default = _default;