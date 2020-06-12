import React, { Component } from 'react';

import MainBody from '../static_elements/MainBody';

class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: 'nicolkill/fullstack-interview-test',
    };
  }

  handleFieldChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSearch = (event) => {
    event.preventDefault();

    this.props.history.push(`/${this.state.searchText}`);
  };

  render() {
    return (
      <MainBody>
        <h3 className="header center">Busca tu repo en Github</h3>
        <div className="row">
          <div className="col s12">
            <div className="input-field col s6 offset-s3">
              <input
                id="searchText"
                type="text"
                className="validate field"
                placeholder="nicolkill/fullstack-interview-test"
                value={this.state.searchText}
                onChange={this.handleFieldChange}
              />
            </div>
            <div className="col s6 offset-s3">
              <a
                href="!#"
                onClick={this.handleSearch}
                className="btn-large waves-effect waves-light col s12 grey darken-4">
                Buscar
              </a>
            </div>
          </div>
        </div>
      </MainBody>
    );
  }
}

export default MainPage;
