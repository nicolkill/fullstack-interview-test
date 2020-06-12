import React, { Component } from 'react';

import RepoMenu from './RepoMenu';
import RepoAuthors from './RepoAuthors';

import bridge from '../../service/github_bridge';

class RepoPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repo: null,
    };
  }

  componentDidMount = async () => {
    const {user, repo} = this.props.match.params;

    const res = await bridge.getRepo(user, repo);

    this.setState({
      repo: res.data,
    });
  };

  render() {
    const {user, repo} = this.props.match.params;

    if (!this.state.repo) {
      return (
        <div className="row">
          <div className="col s12">
            <RepoMenu user={user} repo={repo}/>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col s12">
            <RepoMenu user={user} repo={repo}/>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card grey darken-4">
              <div className="card-content white-text">
                <span className="card-title">
                  {this.state.repo.full_name}
                </span>
                <p>
                  {this.state.repo.parent && <span style={{fontSize: '11px'}}>Forked from: <a href={this.state.repo.parent.html_url} target="_blank" rel="noopener noreferrer">{this.state.repo.parent.full_name}</a></span>}
                  <br/>
                  {this.state.repo.description}
                  <br/>
                  {this.state.repo.stargazers_count} <i className="material-icons">star</i>
                  <br/>
                  {this.state.repo.watchers_count} <i className="material-icons">remove_red_eye</i>
                </p>
              </div>
              <div className="card-action">
                <a href={this.state.repo.html_url} target="_blank" rel="noopener noreferrer">Ver en Github</a>
              </div>
            </div>

            <RepoAuthors user={user} repo={repo}/>
          </div>

          <div className="col s12 m6">
            <div className="card grey darken-4">
              <div className="card-image">
                <img src={this.state.repo.owner.avatar_url} alt={`${this.state.repo.owner.login}_img`}/>
              </div>
              <div className="card-content white-text">
                <p>
                  {this.state.repo.owner.login}
                </p>
              </div>
              <div className="card-action">
                <a href={this.state.repo.owner.html_url} target="_blank" rel="noopener noreferrer">Ver perfil</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default RepoPage;
