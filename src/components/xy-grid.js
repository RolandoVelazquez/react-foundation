import React from 'react';
import PropTypes from 'prop-types';
import {
  GutterTypes,
  ExtendedBreakpoints,
  HorizontalAlignments,
  VerticalAlignments
} from '../enums';

import {
  GeneralPropTypes,
  FlexboxPropTypes,
  createClassName,
  generalClassNames,
  removeProps,
  objectKeys,
  isDefined,
  objectValues,
  addBreakpoint,
  setDirection
} from '../utils';

/**
 * Grid container component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const GridContainer = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'grid-container',
    props.className,
    {
      fluid: props.fluid,
      full: props.full
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Grid.propTypes));

  return <div {...passProps} className={className} />;
};

GridContainer.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  fluid: PropTypes.bool,
  full: PropTypes.bool
};

/**
 * Grid component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Grid = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : setDirection(props.vertical || props.y),
    props.className,
    isDefined(props.gutters)
      ? setDirection(props.vertical || props.y, props.gutters)
      : null,
    isDefined(props.upOnSmall) || isDefined(props.smallUp)
      ? `small-up-${props.upOnSmall || props.smallUp}`
      : null,
    isDefined(props.upOnMedium) || isDefined(props.mediumUp)
      ? `medium-up-${props.upOnMedium || props.mediumUp}`
      : null,
    isDefined(props.upOnLarge) || isDefined(props.largeUp)
      ? `large-up-${props.upOnLarge || props.largeUp}`
      : null,
    isDefined(props.collapseOnSmall)
      ? `small-${props.collapseOnSmall}-collapse`
      : null,
    isDefined(props.collapseOnMedium)
      ? `medium-${props.collapseOnMedium}-collapse`
      : null,
    isDefined(props.collapseOnLarge)
      ? `large-${props.collapseOnLarge}-collapse`
      : null,
    isDefined(props.gridFrame)
      ? addBreakpoint('grid-frame', props.gridFrame)
      : null,
    {
      'align-right':
        props.alignRight ||
        props.horizontalAlignment === HorizontalAlignments.RIGHT,
      'align-center':
        props.alignCenter ||
        props.horizontalAlignment === HorizontalAlignments.CENTER,
      'align-justify':
        props.alignJustify ||
        props.horizontalAlignment === HorizontalAlignments.JUSTIFY,
      'align-spaced':
        props.alignSpaced ||
        props.horizontalAlignment === HorizontalAlignments.SPACED,
      'align-top':
        props.alignTop || props.verticalAlignment === VerticalAlignments.TOP,
      'align-middle':
        props.alignMiddle ||
        props.verticalAlignment === VerticalAlignments.MIDDLE,
      'align-bottom':
        props.alignBottom ||
        props.verticalAlignment === VerticalAlignments.BOTTOM,
      'align-stretch':
        props.alignStretch ||
        props.verticalAlignment === VerticalAlignments.STRETCH,
      'align-center-middle': props.alignCenterMiddle || props.centralAlignment
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Grid.propTypes));

  return <div {...passProps} className={className} />;
};

Grid.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  vertical: PropTypes.bool,
  gutters: PropTypes.oneOf(objectValues(GutterTypes)),
  upOnSmall: PropTypes.number,
  upOnMedium: PropTypes.number,
  upOnLarge: PropTypes.number,
  smallUp: PropTypes.number,
  mediumUp: PropTypes.number,
  largeUp: PropTypes.number,
  collapseOnSmall: PropTypes.oneOf(objectValues(GutterTypes)),
  collapseOnMedium: PropTypes.oneOf(objectValues(GutterTypes)),
  collapseOnLarge: PropTypes.oneOf(objectValues(GutterTypes)),
  gridFrame: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  horizontalAlignment: PropTypes.string,
  verticalAlignment: PropTypes.string,
  alignRight: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignJustify: PropTypes.bool,
  alignSpaced: PropTypes.bool,
  alignTop: PropTypes.bool,
  alignMiddle: PropTypes.bool,
  alignBottom: PropTypes.bool,
  alignStretch: PropTypes.bool,
  alignCenterMiddle: PropTypes.bool,
  centralAlignment: PropTypes.bool,
  y: PropTypes.bool
};

/**
 * Cell component.
 *
 * @param {Object} props
 * @returns {Object}
 */
export const Cell = props => {
  const className = createClassName(
    props.noDefaultClassName ? null : 'cell',
    props.className,
    props.small ? `small-${props.small}` : null,
    props.medium ? `medium-${props.medium}` : null,
    props.large ? `large-${props.large}` : null,
    isDefined(props.auto) ? addBreakpoint('auto', props.auto) : null,
    isDefined(props.shrink) ? addBreakpoint('shrink', props.shrink) : null,
    isDefined(props.offsetOnSmall)
      ? `small-offset-${props.offsetOnSmall}`
      : null,
    isDefined(props.offsetOnMedium)
      ? `medium-offset-${props.offsetOnMedium}`
      : null,
    isDefined(props.offsetOnLarge)
      ? `large-offset-${props.offsetOnLarge}`
      : null,
    {
      'align-self-top': props.alignSelfTop,
      'align-self-middle': props.alignSelfMiddle,
      'align-self-bottom': props.alignSelfBottom,
      'align-self-stretch': props.alignSelfStretch,
      auto: props.auto
    },
    generalClassNames(props)
  );

  const passProps = removeProps(props, objectKeys(Cell.propTypes));

  return <div {...passProps} className={className} />;
};

Cell.propTypes = {
  ...GeneralPropTypes,
  ...FlexboxPropTypes,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  auto: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  shrink: PropTypes.oneOf(objectValues(ExtendedBreakpoints)),
  offsetOnSmall: PropTypes.number,
  offsetOnMedium: PropTypes.number,
  offsetOnLarge: PropTypes.number,
  alignSelfTop: PropTypes.bool,
  alignSelfMiddle: PropTypes.bool,
  alignSelfBottom: PropTypes.bool,
  alignSelfStretch: PropTypes.bool
};
