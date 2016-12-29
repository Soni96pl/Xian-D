import React, { Component, PropTypes } from 'react';
import { InputGroup } from '@blueprintjs/core';
import FuzzySelect from 'blueprint-fuzzy-select';
import carrierShape from '../../shapes/carrier';

export default class CarrierInput extends Component {
  static propTypes = {
    carriers: PropTypes.objectOf(carrierShape).isRequired,
    type: PropTypes.string,
    onSelect: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.string)
  }

  state = {
    carrier: null
  }

  chooseCarrier(carrier) {
    const { onSelect } = this.props;
    if (onSelect) onSelect(carrier);
    this.setState({ carrier });
  }

  addCarrier(name) {
    const { type, onSelect } = this.props;

    const carrier = {
      name,
      type
    };

    if (onSelect) onSelect(carrier);
    this.setState({ carrier });
    return carrier;
  }

  render() {
    const { type, style } = this.props;
    let { carriers } = this.props;

    carriers = Object.values(carriers).filter((carrier) => carrier.type === type);

    return (
      <FuzzySelect
        haystack={carriers}
        field="name"
        sort
        selectOnBlur="Tab"
        selectOnEnter
        onSelect={(carrier) => this.chooseCarrier(carrier)}
        onAdd={(name) => this.addCarrier(name)}
        style={style}
      >
        <InputGroup
          leftIconName="office"
          placeholder="Carrier"
        />
      </FuzzySelect>
    );
  }
}
