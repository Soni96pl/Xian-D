import React, { Component, PropTypes } from 'react';
import { InputGroup } from '@blueprintjs/core';
import FuzzySelect from 'blueprint-fuzzy-select';
import stationShape from '../../shapes/station';

export default class StationInput extends Component {
  static propTypes = {
    stations: PropTypes.objectOf(stationShape).isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    iconName: PropTypes.string,
    onSelect: PropTypes.func,
    style: PropTypes.string
  }

  state = {
    stations: null
  }

  chooseStation(station) {
    const { onSelect } = this.props;
    if (onSelect) onSelect(station);
    this.setState({ station });
  }

  addStation(name) {
    const { type, onSelect } = this.props;

    const station = {
      name,
      type
    };

    if (onSelect) onSelect(station);
    this.setState({ station });
    return station;
  }

  render() {
    const { type, style } = this.props;
    let { stations, placeholder, iconName } = this.props;

    stations = Object.values(stations).filter((station) => station.type === type);
    placeholder = placeholder || 'Station';
    iconName = iconName || 'path';

    return (
      <FuzzySelect
        haystack={stations}
        field="name"
        sort
        selectOnBlur="Tab"
        selectOnEnter
        onSelect={(carrier) => this.chooseStation(carrier)}
        onAdd={(name) => this.addStation(name)}
        style={style}
      >
        <InputGroup
          leftIconName={iconName}
          placeholder={placeholder}
        />
      </FuzzySelect>
    );
  }
}
