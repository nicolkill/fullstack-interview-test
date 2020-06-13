import React, { Component } from 'react';
import moment from 'moment';

import RepoMenu from './components/RepoMenu';
import RepoProfile from './components/RepoProfile';

import bridge from '../../service/github_bridge';

class RepoCommitDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      commit: null
    };
  }

  componentDidMount = async () => {
    const {user, repo, sha} = this.props.match.params;

    const res = await bridge.getCommitDetail(user, repo, sha);

    this.setState({
      commit: res.data,
    });
  };

  componentDidUpdate = () => {
    const elems = document.querySelectorAll('.collapsible');
    window.M.Collapsible.init(elems, {})
  };

  render() {
    const {user, repo} = this.props.match.params;

    if (!this.state.commit) {
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
          <div className="col s6 m4">
            <RepoProfile profile={this.state.commit.author} />
          </div>
          <div className="col s6 m4">
            <div className="card grey darken-4">
              <div className="card-content white-text">
                <span className="card-title">
                  Resumen
                </span>
                <p>
                  <span style={{fontSize: '11px'}}>
                    <a href={this.state.commit.html_url} target="_blank" rel="noopener noreferrer">{this.state.commit.sha}</a>
                  </span>
                  <br/>
                  {moment(this.state.commit.commit.committer.date).format('LLLL')}
                  <br/>
                  {this.state.commit.commit.message}
                  <br/>
                </p>
              </div>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card grey darken-4">
              <div className="card-content white-text">
                <span className="card-title">
                  Estadisticas
                </span>
                <p>
                  {this.state.commit.stats.additions} lineas agregadas
                  <br/>
                  {this.state.commit.stats.deletions} lineas eliminadas
                  <br/>
                  {this.state.commit.stats.total} lineas que han cambiado
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <ul className="collapsible">
              {this.state.commit.files.map((f, i) => (
                <li key={i}>
                  <div className="collapsible-header">
                    <i className="material-icons">insert_drive_file</i>
                    {f.filename}
                    <span className={"badge " + (f.status === 'added' ? 'green-text' : f.status === 'removed' ? 'red-text' : 'blue-text')}>
                      {(f.status === 'modified' || f.status === 'removed') && <span style={{color: 'red'}}>- {f.deletions}&nbsp;</span>}
                      {(f.status === 'modified' || f.status === 'added') && <span style={{color: 'green'}}>+ {f.additions}&nbsp;</span>}
                      {f.status}
                    </span>
                  </div>
                  <div className="collapsible-body">
                    <span>
                      {f.patch}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RepoCommitDetail;
