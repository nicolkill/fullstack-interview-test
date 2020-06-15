import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import RepoMenu from './components/RepoMenu';

import bridge from '../../service/github_bridge';

class RepoPullRequests extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pullRequests: []
    };
  }

  getPullRequests = async () => {
    const {user, repo} = this.props.match.params;

    const res = await bridge.getPullRequests(user, repo);

    this.setState({
      pullRequests: res.data,
    });
  };

  componentDidMount = async () => {
    this.getPullRequests();
  };

  handleRepoClose = async (prNumber, event) => {
    event.preventDefault();

    const {user, repo} = this.props.match.params;

    await bridge.closePullRequest(user, repo, prNumber);
    this.getPullRequests();
  };

  render() {
    const {user, repo} = this.props.match.params;

    return (
      <div>
        <div className="row">
          <div className="col s12">
            <RepoMenu user={user} repo={repo}/>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <Link to={`/${user}/${repo}/pull_requests/create`} className="waves-effect waves-light grey darken-4 btn-small">Crear Pull Request</Link>
          </div>
        </div>

        {this.state.pullRequests.length > 0 &&
        <div className="row">
          <div className="col s12">
            <ul className="collection">
              {this.state.pullRequests.map((pr, i) => (
                <li className="collection-item avatar pull-requests" key={i}>
                  <a href={pr.html_url} target="_blank" rel="noopener noreferrer"><b className="title">{pr.title}</b></a>
                  <span className="badge white-text grey darken-4">
                    {pr.state}
                  </span>
                  <p>
                    #{pr.number} abierto {moment(pr.created_at).fromNow()} por {pr.user.login}
                    <br/>
                    <strong>{pr.base.ref}</strong> <i className="material-icons black-text tiny">keyboard_backspace</i> <strong>{pr.head.ref}</strong>
                    {pr.state == 'open' &&
                      <div>
                        <br/>
                        <a className="waves-effect waves-light grey darken-4 btn-small" href="!#" onClick={this.handleRepoClose.bind(this, pr.number)}>Cerrar</a>
                      </div>
                    }
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default RepoPullRequests;
