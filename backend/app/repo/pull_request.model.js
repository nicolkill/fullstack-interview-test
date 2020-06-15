const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  login: String,
  avatar_url: String,
  html_url: String,
}, { _id: false });

const RepoSchema = new mongoose.Schema({
  id: Number,
  full_name: String,
  owner: UserSchema,
  html_url: String,
  description: String,
  stargazers_count: Number,
  watchers_count: Number,
}, { _id: false });

const PullRequestTargetSchema = new mongoose.Schema({
  ref: String,
  user: UserSchema,
  repo: RepoSchema,
}, { _id: false });

const prSchema = new mongoose.Schema({
  id: Number,
  html_url: String,
  number: Number,
  state: String,
  title: String,
  user: UserSchema,
  body: String,
  closed_at: Date,
  merged_at: Date,
  assignee: {
    type: UserSchema,
    default: null,
  },
  head: PullRequestTargetSchema,
  base: PullRequestTargetSchema,
}, {
  collection: 'pull_requests',
  timestamps: true,
});

module.exports = mongoose.model('PullRequest', prSchema);
