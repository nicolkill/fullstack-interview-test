const nock = require('nock');
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;

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
