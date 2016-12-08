import React, { Component, PropTypes } from 'react';
import { Dialog as BlueprintDialog } from '@blueprintjs/core';

export default class Dialog extends Component {
  static propTypes = {
    opener: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired,
    isOpen: PropTypes.bool,
    onInteraction: PropTypes.func
  }

  state = {
    isOpen: false
  }

  toggleDialog() {
    const { onInteraction } = this.props;
    if (onInteraction) {
      onInteraction();
    } else {
      this.setState({ isOpen: !this.state.isOpen });
    }
  }

  render() {
    let { opener, isOpen } = this.props;
    opener = React.cloneElement(opener, { onClick: () => this.toggleDialog() });
    isOpen = isOpen !== undefined ? isOpen : this.state.isOpen;

    const { children } = this.props;

    return (
      <span>
        {opener}
        <BlueprintDialog
          isOpen={isOpen}
          onClose={() => this.toggleDialog()}
        >
          {children}
        </BlueprintDialog>
      </span>
    );
  }
}
