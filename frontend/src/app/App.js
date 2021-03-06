import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './main/MainPage';
import RepoPage from './repo/RepoPage';
import RepoCommits from './repo/RepoCommits';
import RepoCommitDetail from './repo/RepoCommitDetail';
import RepoPullRequests from './repo/RepoPullRequests';
import RepoCreatePullRequest from './repo/RepoCreatePullRequest';
import MainBody from './static_elements/MainBody';

import './App.css';

function App() {
  return (
    <MainBody>
      <BrowserRouter>
        <Switch>
          <Route path="/:user/:repo/pull_requests/create" component={RepoCreatePullRequest} />
          <Route path="/:user/:repo/pull_requests" component={RepoPullRequests} />
          <Route path="/:user/:repo/commits/:sha" component={RepoCommitDetail} />
          <Route path="/:user/:repo/commits" component={RepoCommits} />
          <Route path="/:user/:repo" component={RepoPage} />
          <Route path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </MainBody>
  );
}

export default App;
