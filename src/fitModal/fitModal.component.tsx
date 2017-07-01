import React, { Component } from 'react';
import { Modal, Text, TouchableOpacity, View, ViewStyle, Image } from 'react-native';

import { FitModalProps } from './fitModal.props';
import { styles } from './fitModal.styles';
import { getNativeProps } from '../utils';

export class FitModal extends Component<FitModalProps, any> {
  static defaultProps = {
    animationType: 'slide'
  }

  state = {
    modalVisible: false
  }

  public pressOpen = () => {
    this.setState({ modalVisible: true });
  }

  public pressClose = () => {
    this.setState({ modalVisible: false });
  }

  public getModalProps() {
    return getNativeProps(this.props, ['content', 'style']);
  }

  public getRequestCloseProp = () => {
    if (Platform.OS === 'android') {
      return { onRequestClose: this.pressClose }
    }

    return {};
  }

  render() {
    return (
      <View>
        <Modal {...this.getModalProps() } {...this.getRequestCloseProp() } visible={this.state.modalVisible}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={this.pressClose}>
              <Image source={require('../../assets/close-button.png')} style={styles.closeIcon} />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
              {this.props.content}
            </View>
          </View>
        </Modal>

        <TouchableOpacity activeOpacity={0.9} onPress={this.pressOpen}>
          <View style={this.props.style}>
            {this.props.children}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
