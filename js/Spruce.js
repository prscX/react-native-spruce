
import React, { Component } from 'react'
import {
  NativeModules,
  findNodeHandle,
  requireNativeComponent,
  ViewPropTypes
} from "react-native";
import PropTypes from 'prop-types'

const { RNSpruce } = NativeModules;

import {
  DefaultSort
} from "./sort";

import { DefaultAnimations } from './animation'

class Spruce extends Component {
  static displayName = "Toggle";
  static propTypes = {
    ...ViewPropTypes,
    hidden: PropTypes.bool
  };

  static defaultProps = {
    hidden: true
  };

  componentDidMount() {
    setTimeout(() => {
      let spruceBuilder = SpruceBuilder(this.ref);

      let sortWith = this.props.sortWith;
      if (sortWith === undefined) sortWith = new DefaultSort()

      let animationWith = this.props.animateWith;
      if (animationWith === undefined) animationWith = DefaultAnimations.shrinkAnimator()

      spruceBuilder.sortWith(sortWith)
      spruceBuilder.animateWith(animationWith)

      let animator = this.props.animator

      spruceBuilder.start(animator);
    }, 100);
  }

  render() {
    return <RNSpruceView {...this.props} style={{ flex: 1 }} ref={ref => {
          this.ref = ref;
        }}>
        {this.props.children}
      </RNSpruceView>;
  }
}

let SpruceBuilder = (view) => {
    this.view = findNodeHandle(view)

    return {
        sortWith: (sortWith) => {
            this.sortWith = sortWith.toJSON()
        },

        animateWith: (animateWith) => {
            this.animateWith = animateWith
        },

        start: (animator) => {
            RNSpruce.StartAnimator(
                this.view,
                this.sortWith,
                this.animateWith,
                animator
            )
        }
    }
}

let RNSpruceView = requireNativeComponent("RNSpruceView", Spruce);

export { Spruce }