import React, { Component } from 'react';

import RepoMenu from './components/RepoMenu';
import Dropdown from '../static_elements/Dropdown';

import bridge from '../../service/github_bridge';

class RepoCreatePullRequest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      branches: [],
      title: '',
      body: '',
      base: null,
      head: null,
      branchesError: '',
    };
  }

  componentDidMount = async () => {
    const {user, repo} = this.props.match.params;

    const res = await bridge.getBranches(user, repo);

    this.setState({
      branches: res.data,
      base: res.data[0].name,
      head: res.data[0].name,
    });
  };

  handleBranchSelection = (who, value) => {
    this.setState({ [who]: value });
  };

  handleFieldChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleOpenClick = async (event) => {
    event.preventDefault();
    try {
      const {user, repo} = this.props.match.params;

      await bridge.openPullRequest(user, repo, this.state);

      this.props.history.push(`/${user}/${repo}/pull_requests`);
    } catch (err) {
      if (err.response.status == 422) {
        this.setState({ branchesError: err.response.data.errors.join(', ') });
      }
    }
  };

  handleMergeClick = async (event) => {
    event.preventDefault();
    try {
      const {user, repo} = this.props.match.params;

      const res = await bridge.openPullRequest(user, repo, this.state);
      await bridge.mergePullRequest(user, repo, res.data.number, res.data.id);

      this.props.history.push(`/${user}/${repo}/pull_requests`);
    } catch (err) {
      console.log(err.response.data);
      if (err.response.status == 422) {
        this.setState({ branchesError: err.response.data.errors.join(', ') });
      } else if (err.response.status == 409) {
        this.setState({ branchesError: err.response.data.message });
      }
    }
  };

  render() {
    const {user, repo} = this.props.match.params;

    if (this.state.branches.length === 0) {
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
          <div className="col s5">
            <Dropdown
              id="base"
              text={this.state.base}
              handleElementSelection={this.handleBranchSelection.bind(this, 'base')}
              items={this.state.branches.map(b => ({ text: b.name, value: b.name }))}
            />
          </div>
          <div className="col s2 center-align">
            <i className="material-icons black-text">keyboard_backspace</i>
          </div>
          <div className="col s5">
            <Dropdown
              id="head"
              text={this.state.head}
              handleElementSelection={this.handleBranchSelection.bind(this, 'head')}
              items={this.state.branches.map(b => ({ text: b.name, value: b.name }))}
            />
          </div>
          {this.state.branchesError && <div className="col s12 center-align">
            <span style={{fontSize: '16px'}} className="red-text">{this.state.branchesError}</span>
          </div>}
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="title" type="text" className="validate" value={this.state.title} onChange={this.handleFieldChange.bind(this)}/>
            <label htmlFor="title">Titulo</label>
          </div>
          <div className="input-field col s12">
            <input id="body" type="text" className="validate" value={this.state.body} onChange={this.handleFieldChange.bind(this)}/>
            <label htmlFor="body">Mensaje</label>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <a className="waves-effect waves-light grey darken-4 btn" href="!#" onClick={this.handleOpenClick}>Abrir</a>
            <a style={{marginLeft: '12px'}} className="waves-effect waves-light grey darken-4 btn" href="!#" onClick={this.handleMergeClick}>Hacer Merge</a>
          </div>
        </div>
      </div>
    );
  }
}

export default RepoCreatePullRequest;
