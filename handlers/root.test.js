const expect = require('chai').expect;
const rootHandler = require('./root');

it('says: hello world', (done) => {

  const mockRes = {
    send: (payload) => {

      expect(payload).to.equal('hello world');
      done();

    }
  };

  rootHandler(null, mockRes);

});

