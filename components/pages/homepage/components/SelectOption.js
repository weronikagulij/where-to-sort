import React, { Component } from 'react';
import { View, Picker } from 'react-native';

import { BoxShadow } from 'react-native-shadow';
import { colorLight } from '../../../../shared-styles/Colors.style';
import { shadowButton, shadowWideSize } from '../../../../shared-styles/Shadow.style';
import { selectContainer, selectContent } from '../Homepage.style';
import { resized } from '../../../../shared-styles/Common.style';

const items = [
  {
    label: 'Wszystkie',
    value: 'all',
  }, {
    label: 'Nakrętki',
    value: 'cups',
  }, {
    label: 'Elektronika',
    value: 'electronics',
  }, {
    label: 'Baterie',
    value: 'baterries',
  },
];

class SelectOption extends Component {
  constructor() {
    super();
    this.state = {
      choosenValue: items[0].value,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(newValue) {
    this.setState({ choosenValue: newValue });
  }

  render() {
    const { choosenValue } = this.state;
    const pickerItems = items.map((e) => (
      <Picker.Item
        key={e.value}
        label={e.label}
        value={e.value}
      />
    ));

    return (
      <BoxShadow setting={{ ...shadowButton, ...shadowWideSize, ...selectContainer }}>
        <View style={selectContent}>
          <Picker
            style={[resized, colorLight]}
            onValueChange={(itemValue) => this.handleValueChange(itemValue)}
            selectedValue={choosenValue}
          >
            {pickerItems}
          </Picker>
        </View>
      </BoxShadow>
    );
  }
}

export default SelectOption;
