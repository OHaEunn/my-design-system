"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NewButton = _ref => {
  let {
    label,
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick
  }, label);
};
var _default = exports.default = NewButton;