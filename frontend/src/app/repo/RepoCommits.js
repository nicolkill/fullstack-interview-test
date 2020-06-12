import React, { Component } from 'react';
import moment from 'moment';

import RepoMenu from './RepoMenu';
import RepoBranches from './RepoBranches';

import bridge from '../../service/github_bridge';

class RepoCommits extends Component {

  constructor(props) {
    super(props);

    this.state = {
      branches: [],
      commits: [],
    };
  }

  getCommits = async (branch) => {
    const {user, repo} = this.props.match.params;

    const res = await bridge.getCommits(user, repo, branch);

    this.setState({
      commits: res.data,
    });
  };

  branchesLoaded = (branches) => {
    this.setState({
      branches,
    });
  };

  componentDidMount = () => {
    this.getCommits();
  };

  handleBranchSelection = (value) => {
    this.getCommits(value);
  };

  groupBy = key => array =>
    array.reduce(
      (objectsByKeyValue, obj) => ({
        ...objectsByKeyValue,
        [obj[key]]: (objectsByKeyValue[obj[key]] || []).concat(obj)
      }),
      {}
    );

  handleCommitSelection = (sha, event) => {
    event.preventDefault();

    const {user, repo} = this.props.match.params;

    this.props.history.push(`/${user}/${repo}/commits/${sha}`);
  };

  renderCommitsByDate = (commits) => {
    const {user, repo} = this.props.match.params;

    const commitsRendered = commits.map((c, i) => {
      const branch = this.state.branches.find(b => b.commit.sha === c.sha);

      return (
        <li key={i} className="collection-item avatar">
          {branch && <span className="badge white-text grey darken-4">
            <a href={`https://github.com/${user}/${repo}/tree/${branch.name}`} target="_blank" rel="noopener noreferrer">{branch.name}</a>
          </span>}
          <img src={c.author.avatar_url} alt={`${c.author.login}_img`} className="circle"/>
          <span className="title">
            <a href="!#" onClick={this.handleCommitSelection.bind(this, c.sha)}>{c.sha}</a>
          </span>
          <p>
            {c.commit.message}
            <br/>
            {c.author.login}
          </p>

          <a href={c.html_url} target="_blank" rel="noopener noreferrer"><i className="material-icons black-text">person</i></a>
        </li>
      );
    });

    return (
      <ul className="collection">
        {commitsRendered}
      </ul>
    );
  };

  render() {
    const {user, repo} = this.props.match.params;

    if (this.state.commits.length === 0) {
      return (
        <div className="row">
          <div className="col s12">
            <RepoMenu user={user} repo={repo}/>
          </div>
        </div>
      );
    }

    const commitsGroupedByDate = this.groupBy('date')(this.state.commits.map(c => ({ date: moment(c.commit.committer.date).format('YYYY-MM-DD'), ...c })));

    return (
      <div>
        <div className="row">
          <div className="col s12">
            <RepoMenu user={user} repo={repo}/>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m4">
            <RepoBranches user={user} repo={repo} handleElementSelection={this.handleBranchSelection} branchesLoaded={this.branchesLoaded}/>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            {this.state.branches.length > 0 && this.state.commits.length > 0 && Object.keys(commitsGroupedByDate).map((key, i) => (
              <div key={i}>
                <i className="tiny material-icons">arrow_drop_down</i> {key}
                {this.renderCommitsByDate(commitsGroupedByDate[key])}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RepoCommits;
