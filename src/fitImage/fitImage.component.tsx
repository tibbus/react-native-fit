import React, { Component } from 'react';
import { Image, ViewStyle } from 'react-native';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

import { FitImageProps } from './fitImage.props';
import { getNativeProps } from '../utils';


export class FitImage extends Component<FitImageProps, any> {
  private ratio: number;
  private mounted: boolean = true;

  static defaultProps = {
    cache: true
  }

  state = {
    width: null,
    height: null
  }

  componentWillMount() {
    if (!this.props.cache) {
      this.setSizesByRatio(this.props.source);
      return;
    }

    // Get the image dimensions and set the Image size relative to its ratio
    this.setSizesByRatio(this.props.source)
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  public onLayout(event) {
    const { width, height } = event.nativeEvent.layout;

    this.state.width = width;
    this.state.height = height;

    this.renderImage();

    // onLayout event middleware
    if (this.props.onLayout) {
      this.props.onLayout(event);
    }
  }

  public renderImage() {
    // Wait for both layout event and Image.getSize to finish before render it
    if (!this.state.width || !this.ratio || !this.mounted) {
      return;
    }

    if (this.props.round) {
      this.setState({
        width: this.state.width,
        height: this.state.width
      });
    } else {
      this.setState({
        width: this.state.width,
        height: this.state.width / this.ratio
      });
    }
  }

  public getStyle() {
    return {
      width: this.state.width,
      height: this.state.height,
      borderRadius: this.props.round ? this.state.width / 2 : 0
    };
  }

  public getImageProps() {
    return getNativeProps(this.props, ['source', 'style', 'onLayout']);
  }

  private setSizesByRatio = (source) => {
    if (source.uri) {
      Image.getSize(source.uri, (width, height) => {
        this.ratio = width / height;
        this.renderImage();
      }, failure => console.log(`failed to load image, ${this.props.source}`));
    } else {
      const image = resolveAssetSource(source);
      this.ratio = image.width / image.height;
      this.renderImage();
    }

  }

  render() {
    return (
      <Image {...this.getImageProps() }
        source={this.props.source}
        style={[this.getStyle(), this.props.style]}
        onLayout={event => this.onLayout(event)}
      >
        {this.props.children}
      </Image>
    );
  };
}
