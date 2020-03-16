const expect = require('chai').expect;
const alertHandler = require('./alert');

it('says: warning!', (done) => {

  const mockReq = {
    body: {key: 'val'}
  };

  const mockRes = {
    send: (payload) => {

      expect(payload).to.equal('warning!');
      done();

    }
  };

  alertHandler(mockReq, mockRes);

});

