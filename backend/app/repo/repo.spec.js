const nock = require('nock');
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

process.env.NODE_ENV = 'test';

let { app } = require('../../config/express');
app = app.listen(4000);

chai.use(chaiHttp);
const URL = 'http://localhost:4000';

const responses = {
  repo: {
    full_name: 'nicolkill/fullstack-interview-test',
    owner: {
      login: 'nicolkill',
      avatar_url: 'https://avatars0.githubusercontent.com/u/19172553?v=4',
      html_url: 'https://github.com/nicolkill',
    },
    html_url: 'https://github.com/nicolkill/fullstack-interview-test',
    description: 'Interview test for fullstack Software Engineers',
    stargazers_count: 0,
    watchers_count: 0,
    parent: {
      full_name: 'FlatDigital/fullstack-interview-test',
      owner: {
        login: 'FlatDigital',
        avatar_url: 'https://avatars2.githubusercontent.com/u/59657771?v=4',
        html_url: 'https://github.com/FlatDigital'
      },
      html_url: 'https://github.com/FlatDigital/fullstack-interview-test',
      description: 'Interview test for fullstack Software Engineers',
      stargazers_count: 0,
      watchers_count: 0,
      parent: null,
    }
  },
  commits: [
    {
      sha: '17d9a4af35996ebc0af40dddb4643e11c6faa3fd',
      node_id: 'MDY6Q29tbWl0MjcxMTE3MjgxOjE3ZDlhNGFmMzU5OTZlYmMwYWY0MGRkZGI0NjQzZTExYzZmYWEzZmQ=',
      commit: {
        author: {
          name: 'Alfonso Lizárraga',
          email: 'alfonso.lzrg@gmail.com',
          date: '2020-06-09T02:45:27Z'
        },
        committer: {
          name: 'GitHub',
          email: 'noreply@github.com',
          date: '2020-06-09T02:45:27Z'
        },
        message: 'Merge pull request #1 from FlatDigital/alfonsolzrg-add-instructions\n\nAdded test instructions',
        tree: {
          sha: '198d098ae6250be56d1c358860b7342a8365f918',
          url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/git/trees/198d098ae6250be56d1c358860b7342a8365f918'
        },
        url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/git/commits/17d9a4af35996ebc0af40dddb4643e11c6faa3fd',
        comment_count: 0,
        verification: {
          verified: true,
          reason: 'valid',
          signature: '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJe3vfHCRBK7hj4Ov3rIwAAdHIIAItWp8hGgaXAJDAHqueSybFm\n8oL9AWnhxxlPYwkazrlQBHbEbfnGjkpeuxmlFSP5WNnUKUcAY8cTV9ZLIUiXSAJV\njY1P/kS0TVQOt/gdXjhb7GMBzmjSfl+BLFQ1dc4OUuhA1RxHyhfP/p14r0sJDyWf\n+4PTlwaGFkDEJ7iTrpxBxOlxg/bv6gO1bum83ZW7GoOV8msfxvtNv4x9myKucMFl\nQ5MUT7TZO+yRy7zK+lsIUx2pFKJabCEN1sUGI3w7wBRO15Lso2xF64BW/jFUcnUW\nA6Xy/N/R3OHZRr3uR5SINa4m4i059yOULjkmstKfHx0SFGa7ncRAndTznJ6y+4Q=\n=0jnI\n-----END PGP SIGNATURE-----\n',
          payload: 'tree 198d098ae6250be56d1c358860b7342a8365f918\nparent 94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1\nparent 390b552cf2644e2de2ba6c6fd19d0a80debc6ca2\nauthor Alfonso Lizárraga <alfonso.lzrg@gmail.com> 1591670727 -0500\ncommitter GitHub <noreply@github.com> 1591670727 -0500\n\nMerge pull request #1 from FlatDigital/alfonsolzrg-add-instructions\n\nAdded test instructions'
        }
      },
      author: {
        login: 'alfonsolzrg',
        avatar_url: 'https://avatars1.githubusercontent.com/u/3419377?v=4',
        html_url: 'https://github.com/alfonsolzrg'
      },
      parents: [
        {
          sha: '94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1',
          url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/commits/94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1',
          html_url: 'https://github.com/nicolkill/fullstack-interview-test/commit/94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1'
        },
        {
          sha: '390b552cf2644e2de2ba6c6fd19d0a80debc6ca2',
          url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/commits/390b552cf2644e2de2ba6c6fd19d0a80debc6ca2',
          html_url: 'https://github.com/nicolkill/fullstack-interview-test/commit/390b552cf2644e2de2ba6c6fd19d0a80debc6ca2'
        }
      ]
    },
    {
      sha: '390b552cf2644e2de2ba6c6fd19d0a80debc6ca2',
      node_id: 'MDY6Q29tbWl0MjcxMTE3MjgxOjM5MGI1NTJjZjI2NDRlMmRlMmJhNmM2ZmQxOWQwYTgwZGViYzZjYTI=',
      commit: {
        author: {
          name: 'Alfonso Lizárraga',
          email: 'alfonso.lzrg@gmail.com',
          date: '2020-06-09T02:45:16Z'
        },
        committer: {
          name: 'GitHub',
          email: 'noreply@github.com',
          date: '2020-06-09T02:45:16Z'
        },
        message: 'Added test instructions',
        tree: {
          sha: '198d098ae6250be56d1c358860b7342a8365f918',
          url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/git/trees/198d098ae6250be56d1c358860b7342a8365f918'
        },
        url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/git/commits/390b552cf2644e2de2ba6c6fd19d0a80debc6ca2',
        comment_count: 0,
        verification: {
          verified: true,
          reason: 'valid',
          signature: '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJe3ve8CRBK7hj4Ov3rIwAAdHIIAKIHBstNwa/E0O38hd2wFPYs\nlzMmBsh+Tqjb0dSFTeFaeKIpd//SbgwLw+hmFs08OTY7loaRIvG5s+RPtCRD6Od+\nkiQQVozDQnAra4My5DdlR44mx+uxKLyQHs+WA7P6+l7Huaq52nyk94MqqeLrZ4KV\nBmkRd2lsjsmuAdx9r9+c4MZ6fllcWzN1Os7bviqbsMQ92WC+jAFmFM6K2GNQaH9Z\nCajXVZFbjhsqMvVeOLH/cofZYwPUJ0XWTI7NXA0DjHAF/3oSDyrcshAnUFwHO0YQ\nXuuAOqgWDuWkdPX/2wdJAOe5qLVMZzrDILNZZJ0dYkG0y83C/xX9SRD10OADAgw=\n=iUQo\n-----END PGP SIGNATURE-----\n',
          payload: 'tree 198d098ae6250be56d1c358860b7342a8365f918\nparent 94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1\nauthor Alfonso Lizárraga <alfonso.lzrg@gmail.com> 1591670716 -0500\ncommitter GitHub <noreply@github.com> 1591670716 -0500\n\nAdded test instructions'
        }
      },
      author: {
        login: 'alfonsolzrg',
        avatar_url: 'https://avatars1.githubusercontent.com/u/3419377?v=4',
        html_url: 'https://github.com/alfonsolzrg'
      },
      parents: [
        {
          sha: '94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1',
          url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/commits/94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1',
          html_url: 'https://github.com/nicolkill/fullstack-interview-test/commit/94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1'
        }
      ]
    },
    {
      sha: '94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1',
      node_id: 'MDY6Q29tbWl0MjcxMTE3MjgxOjk0MTgxNDY1ZWNjMDJmYmM5ZjNkMGFkMjVkOWY2YzU5ZTE2NmEzZTE=',
      commit: {
        author: {
          name: 'Alfonso Lizárraga',
          email: 'alfonso.lzrg@gmail.com',
          date: '2020-06-09T01:56:28Z'
        },
        committer: {
          name: 'GitHub',
          email: 'noreply@github.com',
          date: '2020-06-09T01:56:28Z'
        },
        message: 'Initial commit',
        tree: {
          sha: '8b0493fd5b553bd2d132dd88d9cd8bf41ebc8c21',
          url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/git/trees/8b0493fd5b553bd2d132dd88d9cd8bf41ebc8c21'
        },
        url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/git/commits/94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1',
        comment_count: 0,
        verification: {
          verified: true,
          reason: 'valid',
          signature: '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJe3uxMCRBK7hj4Ov3rIwAAdHIIAHZDXPZR/mBk4yPh0z3nZpJq\nwbd8Zf/LFe6gESfuWme4hvbUroCbAecoDb4IArEPW4MXTbRQV/JW6TE0waT+fzS5\nDFGa6po1N0wcU9DOZBpmP1N3Ip1nwWCtjN0TI35ymbVAJ9hsndqyX+HjgRLbQAID\nFiPd08qnelBp+LWyD6pjCNTQ+NE0r2NK+SWwyOO8qWArNEdIa1RXrKFOR55V+Kvg\nMVghOdQYhAgkCOclF52RR8KpHgBiDexMN10l466vrXw3h6h5N0Kblyj2XC71bkQ+\nqptcsSF6CB5VvhzYPqjeI7dIeReWfCskxwW43ByftMklJSIVpJeZVLX+F9tW5Ik=\n=KVF9\n-----END PGP SIGNATURE-----\n',
          payload: 'tree 8b0493fd5b553bd2d132dd88d9cd8bf41ebc8c21\nauthor Alfonso Lizárraga <alfonso.lzrg@gmail.com> 1591667788 -0500\ncommitter GitHub <noreply@github.com> 1591667788 -0500\n\nInitial commit'
        }
      },
      author: {
        login: 'alfonsolzrg',
        avatar_url: 'https://avatars1.githubusercontent.com/u/3419377?v=4',
        html_url: 'https://github.com/alfonsolzrg'
      },
      parents: []
    }
  ],
  commitDetail: {
    commit: {
      author: {
        name: 'Alfonso Lizárraga',
        email: 'alfonso.lzrg@gmail.com',
        date: '2020-06-09T02:45:16Z'
      },
      committer: {
        name: 'GitHub',
        email: 'noreply@github.com',
        date: '2020-06-09T02:45:16Z'
      },
      message: 'Added test instructions',
      tree: {
        sha: '198d098ae6250be56d1c358860b7342a8365f918',
        url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/git/trees/198d098ae6250be56d1c358860b7342a8365f918'
      },
      url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/git/commits/390b552cf2644e2de2ba6c6fd19d0a80debc6ca2',
      comment_count: 0,
      verification: {
        verified: true,
        reason: 'valid',
        signature: '-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJe3ve8CRBK7hj4Ov3rIwAAdHIIAKIHBstNwa/E0O38hd2wFPYs\nlzMmBsh+Tqjb0dSFTeFaeKIpd//SbgwLw+hmFs08OTY7loaRIvG5s+RPtCRD6Od+\nkiQQVozDQnAra4My5DdlR44mx+uxKLyQHs+WA7P6+l7Huaq52nyk94MqqeLrZ4KV\nBmkRd2lsjsmuAdx9r9+c4MZ6fllcWzN1Os7bviqbsMQ92WC+jAFmFM6K2GNQaH9Z\nCajXVZFbjhsqMvVeOLH/cofZYwPUJ0XWTI7NXA0DjHAF/3oSDyrcshAnUFwHO0YQ\nXuuAOqgWDuWkdPX/2wdJAOe5qLVMZzrDILNZZJ0dYkG0y83C/xX9SRD10OADAgw=\n=iUQo\n-----END PGP SIGNATURE-----\n',
        payload: 'tree 198d098ae6250be56d1c358860b7342a8365f918\nparent 94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1\nauthor Alfonso Lizárraga <alfonso.lzrg@gmail.com> 1591670716 -0500\ncommitter GitHub <noreply@github.com> 1591670716 -0500\n\nAdded test instructions'
      }
    },
    author: {
      login: 'alfonsolzrg',
      avatar_url: 'https://avatars1.githubusercontent.com/u/3419377?v=4',
      html_url: 'https://github.com/alfonsolzrg'
    },
    parents: [
      {
        sha: '94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1',
        url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/commits/94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1',
        html_url: 'https://github.com/nicolkill/fullstack-interview-test/commit/94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1'
      }
    ],
    stats: {
      total: 49,
      additions: 49,
      deletions: 0
    },
    files: [
      {
        sha: '08d43605d1d35d0642323b3b5cb25f87e6ff374d',
        filename: 'README.md',
        status: 'modified',
        additions: 49,
        deletions: 0,
        changes: 49,
        blob_url: 'https://github.com/nicolkill/fullstack-interview-test/blob/390b552cf2644e2de2ba6c6fd19d0a80debc6ca2/README.md',
        raw_url: 'https://github.com/nicolkill/fullstack-interview-test/raw/390b552cf2644e2de2ba6c6fd19d0a80debc6ca2/README.md',
        contents_url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/contents/README.md?ref=390b552cf2644e2de2ba6c6fd19d0a80debc6ca2',
        patch: "@@ -1,2 +1,51 @@\n # fullstack-interview-test\n Interview test for fullstack Software Engineers\n+\n+## Welcome!\n+If you're reading this, it means we're interested in working with you and solving amazing and difficult problems in real-estate tech in Mexico.\n+\n+This README provides the instructions to a small, self-contained test for a FullStack Software Engineer position.\n+\n+## What we're looking for\n+We're looking for a talented and driven full-stack engineer, comfortable with building responsive front end experiences, as well as with designing and building rigorous APIs and backend services. \n+\n+This means that this test is designed to gather signal on your coding structure, the tradeoffs and decisions you make on API design, and how you build a lightweight frontend app to show the data coming from your API. We're excited to see what you build!\n+\n+## The test\n+Today, we'll be building an API wrapper around the git information of this project. We suggest forking this repo and start working on it on your private fork, the url of which is the only thing you need to send us when you're done.\n+\n+The main objects we'll be dealing with are:\n+- Commits\n+- Authors\n+- Branches\n+- PRs\n+\n+We'd like to see a visual representation of the git history of this repo as a web-app, using the API previously described. To be specific, we'd like to see the following:\n+- A view where we can see the existing branches\n+- A branch detail view where we can see all the commits to one specific branch, with commit messages, authors and timestamps.\n+- A commit detail view where we can see the commit message, timestamp, number of files changed and author names / emails.\n+- A \'PR\' create view, where we can choose two branches (base and compare), and merge them together, just like Pull Requests work in Github. \n+- A \'PR\' list view, where we see all created PRs and the following info: Author, Title, Description and Status (`Open`, `Closed`, `Merged`). If the status is `Open`, there should be a button that allows us to mark it as `Closed`.\n+\n+For the **PR create view**, we'll ask the user for a PR title and description, and we'll give them 2 options: either save it (Status = `Open`), or merge it. Note that merge operations can fail due to conflicts or other reasons, so make sure you handle and show whatever error happens when merging. There's no need to do something about these errors other than show them in the frontend. After a successful merge, the PR should move to a `Merged` status.\n+\n+## Deliverables\n+We expect this test to take around 4 hours, but not significantly more (your time is very valuable!). We're giving you a week from the date you receive it to complete it and send us your repo URL, using **whatever stack you feel most comfortable with**. Due to this, we ask that you also provide a `README` with instructions for running your project, both back and frontend, along with setup instructions (or provide a Dockerfile and a `docker run` instruction).\n+\n+It's up to you to design how this should look code-wise, but we don't expect you to model all git objects in a DB. We're ok with reading them using a library wrapper for git like [GitPython](https://gitpython.readthedocs.io/en/stable/), on-demand. The only DB design required is the one for PRs.\n+\n+## Grading\n+We'll grade this project according to completion percentage of the features requested, good coding style for both back and frontend. For us, good coding means:\n+- It's readable. We read code much more often than we write it, so it's important that we're clear on what we're doing and comment any hairy parts (which we don't really expect to have in this test!).\n+- It's reasonably well ordered and with a logically thought-out structure. We like to do separation of concerns, and deal with routing, DB models, serialization, etc in their own file structure / files. \n+- Clear, understandable variable names. No one wants to read the whole file to understand what the variable `c1_2` means.\n+\n+We also care about being able to run your test without significant effort on our part, so make sure you test the instructions you provide on your README.\n+\n+### Things we won't be grading\n+- Design chops: we care that you know enough CSS not to be surprised when you need to work on it, but we're not picky about your solution's UX/UI.\n+\n+### Bonus points\n+- Your code has tests.\n+\n+If you come across any questions or anything we didn't cover on this README, feel free to reach out to us and we'll get you an answer as soon as possible. Happy coding!"
      }
    ]
  },
  authors: [
    {
      login: 'alfonsolzrg',
      avatar_url: 'https://avatars1.githubusercontent.com/u/3419377?v=4',
      html_url: 'https://github.com/alfonsolzrg'
    },
    {
      login: 'nicolkill',
      avatar_url: 'https://avatars0.githubusercontent.com/u/19172553?v=4',
      html_url: 'https://github.com/nicolkill'
    }
  ],
  branches: [
    {
      name: 'alfonsolzrg-add-instructions',
      commit: {
        sha: '390b552cf2644e2de2ba6c6fd19d0a80debc6ca2',
        url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/commits/390b552cf2644e2de2ba6c6fd19d0a80debc6ca2'
      },
      protected: false
    },
    {
      name: 'master',
      commit: {
        sha: 'a5dbf28b9e108722b55f0a894155ffa6220c03f9',
        url: 'https://api.github.com/repos/nicolkill/fullstack-interview-test/commits/a5dbf28b9e108722b55f0a894155ffa6220c03f9'
      },
      protected: false
    }
  ],
};

describe('Check repo info: ',() => {

  beforeEach(() => {
    nock('https://api.github.com')
      .get('/repos/nicolkill/fullstack-interview-test')
      .reply(200, responses.repo);

    nock('https://api.github.com')
      .get('/repos/nicolkill/fullstack-interview-test/commits')
      .reply(200, responses.commits);

    nock('https://api.github.com')
      .get('/repos/nicolkill/fullstack-interview-test/commits/390b552cf2644e2de2ba6c6fd19d0a80debc6ca2')
      .reply(200, responses.commitDetail);

    nock('https://api.github.com')
      .get('/repos/nicolkill/fullstack-interview-test/contributors')
      .reply(200, responses.authors);

    nock('https://api.github.com')
      .get('/repos/nicolkill/fullstack-interview-test/branches')
      .reply(200, responses.branches);
  });

  after(function() {
    app.close();
  });

  it('Check repo general information', (done) => {
    chai.request(URL)
      .get('/nicolkill/fullstack-interview-test')
      .end( function(err, res) {
        expect(res).to.have.status(200);

        expect(res.body.data).to.have.property('full_name').to.be.equal('nicolkill/fullstack-interview-test');
        expect(res.body.data.parent).to.have.property('full_name').to.be.equal('FlatDigital/fullstack-interview-test');

        done();
      });
  });

  it('Check repo commits', (done) => {
    chai.request(URL)
      .get('/nicolkill/fullstack-interview-test/commits')
      .end( function(err, res) {
        expect(res).to.have.status(200);

        expect(res.body.data).to.have.lengthOf(3);
        expect(res.body.data[0]).to.have.property('sha').to.be.equal('17d9a4af35996ebc0af40dddb4643e11c6faa3fd');
        expect(res.body.data[1]).to.have.property('sha').to.be.equal('390b552cf2644e2de2ba6c6fd19d0a80debc6ca2');
        expect(res.body.data[2]).to.have.property('sha').to.be.equal('94181465ecc02fbc9f3d0ad25d9f6c59e166a3e1');

        done();
      });
  });

  it('Check repo commit detail of 390b552cf2644e2de2ba6c6fd19d0a80debc6ca2', (done) => {
    chai.request(URL)
      .get('/nicolkill/fullstack-interview-test/commits/390b552cf2644e2de2ba6c6fd19d0a80debc6ca2')
      .end( function(err, res) {
        expect(res).to.have.status(200);

        expect(res.body.data.commit).to.have.property('message').to.be.equal('Added test instructions');

        done();
      });
  });

  it('Check repo authors', (done) => {
    chai.request(URL)
      .get('/nicolkill/fullstack-interview-test/authors')
      .end( function(err, res) {
        expect(res).to.have.status(200);

        expect(res.body.data).to.have.lengthOf(2);
        expect(res.body.data[0]).to.have.property('login').to.be.equal('alfonsolzrg');
        expect(res.body.data[1]).to.have.property('login').to.be.equal('nicolkill');

        done();
      });
  });

  it('Check repo branches', (done) => {
    chai.request(URL)
      .get('/nicolkill/fullstack-interview-test/branches')
      .end( function(err, res) {
        expect(res).to.have.status(200);

        expect(res.body.data).to.have.lengthOf(2);
        expect(res.body.data[0]).to.have.property('name').to.be.equal('alfonsolzrg-add-instructions');
        expect(res.body.data[1]).to.have.property('name').to.be.equal('master');

        done();
      });
  });
});
