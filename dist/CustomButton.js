"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomButton = function CustomButton(_ref) {
  var children = _ref.children,
      bgColor = _ref.bgColor,
      fontColor = _ref.fontColor,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick,
    style: {
      backgroundColor: "".concat(bgColor),
      color: "".concat(fontColor)
    }
  }, children);
};

var _default = CustomButton;
exports.default = _default;