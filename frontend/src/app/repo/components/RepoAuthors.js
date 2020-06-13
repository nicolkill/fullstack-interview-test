import React, { Component } from 'react';
import PropTypes from "prop-types";

import bridge from '../../../service/github_bridge';

class RepoAuthors extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authors: [],
    };
  }

  componentDidMount = async () => {
    const {user, repo} = this.props;

    const resAuthors = await bridge.getAuthors(user, repo);

    this.setState({
      authors: resAuthors.data,
    });
  };

  render() {
    if (this.state.authors.length === 0) {
      return null;
    }

    return (
      <ul className="collection">
        {this.state.authors.map((a, i) => (
          <li className="collection-item avatar" key={i}>
            <img src={a.avatar_url} alt={`${a.login}_img`} className="circle"/>
            <span className="title">{a.login}</span>
            <a href={a.html_url} target="_blank" rel="noopener noreferrer" className="secondary-content"><i className="material-icons black-text">person</i></a>
          </li>
        ))}
      </ul>
    );
  }
}

RepoAuthors.propTypes = {
  user: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default RepoAuthors;
