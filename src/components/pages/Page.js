import { Component } from 'react';

import PropTypes from 'prop-types';

class Page extends Component {
  constructor(props) {
    super();
    const { navigation } = props;
    this.navigation = navigation;
  }
}

Page.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Page;
