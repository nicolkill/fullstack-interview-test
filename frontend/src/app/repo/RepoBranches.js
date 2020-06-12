import React, { Component } from 'react';
import PropTypes from "prop-types";

import Dropdown from '../static_elements/Dropdown';

import bridge from '../../service/github_bridge';

class RepoBranches extends Component {

  constructor(props) {
    super(props);

    this.state = {
      branches: []
    };
  }

  componentDidMount = async () => {
    const {user, repo} = this.props;

    const res = await bridge.getBranches(user, repo);

    this.setState({
      branches: res.data,
    });

    if (this.props.branchesLoaded) {
      this.props.branchesLoaded(res.data);
    }
  };

  handleBranchSelection = (value) => {
    this.props.handleElementSelection(value);
  };

  render() {
    if (this.state.branches.length === 0) {
      return null;
    }

    return (
      <Dropdown
        text="Ramas"
        handleElementSelection={this.handleBranchSelection}
        items={this.state.branches.map(b => ({ text: b.name, value: b.name }))}
      />
    );
  }
}

RepoBranches.propTypes = {
  user: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  handleElementSelection: PropTypes.func.isRequired,
  branchesLoaded: PropTypes.func,
};

export default RepoBranches;
