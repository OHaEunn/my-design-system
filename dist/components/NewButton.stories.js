"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = void 0;
var _react = _interopRequireDefault(require("react"));
var _NewButton = _interopRequireDefault(require("./NewButton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/components/Button.stories.js
var _default = exports.default = {
  title: 'NewButton',
  component: _NewButton.default
};
const Primary = () => /*#__PURE__*/_react.default.createElement(_NewButton.default, {
  label: "Click Me",
  onClick: () => alert('Clicked!')
});
exports.Primary = Primary;