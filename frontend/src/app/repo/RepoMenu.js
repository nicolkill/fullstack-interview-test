import React from 'react';
import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";

function CustomLink({ label, to }) {
  let match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <Link to={to} className={`collection-item ${(match ? "grey darken-4 white-text" : "black-text")}`}>{label}</Link>
  );
}

function RepoMenu({ user, repo }) {
  return (
    <ul className="tabs">
      <li className="tab col s3"><CustomLink to={`/${user}/${repo}`} label="General" /></li>
      <li className="tab col s3"><CustomLink to={`/${user}/${repo}/commits`} label="Commits" /></li>
      <li className="tab col s3"><CustomLink to={`/${user}/${repo}/pull_requests`} label="Pull Requests" /></li>
    </ul>
  );
}

RepoMenu.propTypes = {
  user: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};

export default RepoMenu;
