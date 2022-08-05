"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCsv = require("react-csv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DownloadToCSV = function DownloadToCSV(_ref) {
  var className = _ref.className,
      buttonName = _ref.buttonName,
      filename = _ref.filename,
      data = _ref.data,
      headers = _ref.headers;
  return /*#__PURE__*/_react.default.createElement(_reactCsv.CSVLink, {
    className: className,
    data: data,
    filename: filename,
    headers: headers,
    target: "_blank"
  }, buttonName);
};

var _default = DownloadToCSV;
exports.default = _default;