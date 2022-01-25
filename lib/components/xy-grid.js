'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = exports.Grid = exports.GridContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enums = require('../enums');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Grid container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var GridContainer = exports.GridContainer = function GridContainer(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'grid-container', props.className, {
    fluid: props.fluid,
    full: props.full
  }, (0, _utils.generalClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Grid.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

GridContainer.propTypes = _extends({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  fluid: _propTypes2.default.bool,
  full: _propTypes2.default.bool
});

/**
 * Grid component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var Grid = exports.Grid = function Grid(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : (0, _utils.setDirection)(props.vertical || props.y), props.className, (0, _utils.isDefined)(props.gutters) ? (0, _utils.setDirection)(props.vertical || props.y, props.gutters) : null, (0, _utils.isDefined)(props.upOnSmall) || (0, _utils.isDefined)(props.smallUp) ? 'small-up-' + (props.upOnSmall || props.smallUp) : null, (0, _utils.isDefined)(props.upOnMedium) || (0, _utils.isDefined)(props.mediumUp) ? 'medium-up-' + (props.upOnMedium || props.mediumUp) : null, (0, _utils.isDefined)(props.upOnLarge) || (0, _utils.isDefined)(props.largeUp) ? 'large-up-' + (props.upOnLarge || props.largeUp) : null, (0, _utils.isDefined)(props.collapseOnSmall) ? 'small-' + props.collapseOnSmall + '-collapse' : null, (0, _utils.isDefined)(props.collapseOnMedium) ? 'medium-' + props.collapseOnMedium + '-collapse' : null, (0, _utils.isDefined)(props.collapseOnLarge) ? 'large-' + props.collapseOnLarge + '-collapse' : null, (0, _utils.isDefined)(props.gridFrame) ? (0, _utils.addBreakpoint)('grid-frame', props.gridFrame) : null, {
    'align-right': props.alignRight || props.horizontalAlignment === _enums.HorizontalAlignments.RIGHT,
    'align-center': props.alignCenter || props.horizontalAlignment === _enums.HorizontalAlignments.CENTER,
    'align-justify': props.alignJustify || props.horizontalAlignment === _enums.HorizontalAlignments.JUSTIFY,
    'align-spaced': props.alignSpaced || props.horizontalAlignment === _enums.HorizontalAlignments.SPACED,
    'align-top': props.alignTop || props.verticalAlignment === _enums.VerticalAlignments.TOP,
    'align-middle': props.alignMiddle || props.verticalAlignment === _enums.VerticalAlignments.MIDDLE,
    'align-bottom': props.alignBottom || props.verticalAlignment === _enums.VerticalAlignments.BOTTOM,
    'align-stretch': props.alignStretch || props.verticalAlignment === _enums.VerticalAlignments.STRETCH,
    'align-center-middle': props.alignCenterMiddle || props.centralAlignment
  }, (0, _utils.generalClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Grid.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

Grid.propTypes = _extends({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  vertical: _propTypes2.default.bool,
  gutters: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  upOnSmall: _propTypes2.default.number,
  upOnMedium: _propTypes2.default.number,
  upOnLarge: _propTypes2.default.number,
  smallUp: _propTypes2.default.number,
  mediumUp: _propTypes2.default.number,
  largeUp: _propTypes2.default.number,
  collapseOnSmall: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  collapseOnMedium: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  collapseOnLarge: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.GutterTypes)),
  gridFrame: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.ExtendedBreakpoints)),
  horizontalAlignment: _propTypes2.default.string,
  verticalAlignment: _propTypes2.default.string,
  alignRight: _propTypes2.default.bool,
  alignCenter: _propTypes2.default.bool,
  alignJustify: _propTypes2.default.bool,
  alignSpaced: _propTypes2.default.bool,
  alignTop: _propTypes2.default.bool,
  alignMiddle: _propTypes2.default.bool,
  alignBottom: _propTypes2.default.bool,
  alignStretch: _propTypes2.default.bool,
  alignCenterMiddle: _propTypes2.default.bool,
  centralAlignment: _propTypes2.default.bool,
  y: _propTypes2.default.bool
});

/**
 * Cell component.
 *
 * @param {Object} props
 * @returns {Object}
 */
var Cell = exports.Cell = function Cell(props) {
  var className = (0, _utils.createClassName)(props.noDefaultClassName ? null : 'cell', props.className, props.small ? 'small-' + props.small : null, props.medium ? 'medium-' + props.medium : null, props.large ? 'large-' + props.large : null, (0, _utils.isDefined)(props.auto) ? (0, _utils.addBreakpoint)('auto', props.auto) : null, (0, _utils.isDefined)(props.shrink) ? (0, _utils.addBreakpoint)('shrink', props.shrink) : null, (0, _utils.isDefined)(props.offsetOnSmall) ? 'small-offset-' + props.offsetOnSmall : null, (0, _utils.isDefined)(props.offsetOnMedium) ? 'medium-offset-' + props.offsetOnMedium : null, (0, _utils.isDefined)(props.offsetOnLarge) ? 'large-offset-' + props.offsetOnLarge : null, {
    'align-self-top': props.alignSelfTop,
    'align-self-middle': props.alignSelfMiddle,
    'align-self-bottom': props.alignSelfBottom,
    'align-self-stretch': props.alignSelfStretch,
    auto: props.auto
  }, (0, _utils.generalClassNames)(props));

  var passProps = (0, _utils.removeProps)(props, (0, _utils.objectKeys)(Cell.propTypes));

  return _react2.default.createElement('div', _extends({}, passProps, { className: className }));
};

Cell.propTypes = _extends({}, _utils.GeneralPropTypes, _utils.FlexboxPropTypes, {
  small: _propTypes2.default.number,
  medium: _propTypes2.default.number,
  large: _propTypes2.default.number,
  auto: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.ExtendedBreakpoints)),
  shrink: _propTypes2.default.oneOf((0, _utils.objectValues)(_enums.ExtendedBreakpoints)),
  offsetOnSmall: _propTypes2.default.number,
  offsetOnMedium: _propTypes2.default.number,
  offsetOnLarge: _propTypes2.default.number,
  alignSelfTop: _propTypes2.default.bool,
  alignSelfMiddle: _propTypes2.default.bool,
  alignSelfBottom: _propTypes2.default.bool,
  alignSelfStretch: _propTypes2.default.bool
});