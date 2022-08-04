"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDayPicker = require("react-day-picker");

require("react-day-picker/dist/style.css");

var _ko = _interopRequireDefault(require("date-fns/locale/ko"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// interface ICalendarProps {}
var Calendar = function Calendar(_ref) {
  var selected = _ref.selected,
      mode = _ref.mode,
      onSelect = _ref.onSelect,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  return /*#__PURE__*/_react.default.createElement(_reactDayPicker.DayPicker, {
    selected: selected,
    mode: mode,
    locale: _ko.default,
    onSelect: onSelect,
    disabled: disabled
  });
};

var _default = /*#__PURE__*/_react.default.memo(Calendar);

exports.default = _default;