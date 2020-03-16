const alertHandler = (req, res) => {
  console.log(req.body);
  res.send('warning!');
};

module.exports = alertHandler;

