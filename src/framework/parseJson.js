module.exports = (req, res) => {
  res.writeHead(200, {
    'Content-type': 'app;ication/json',
  });
  res.send = (data) => {
    res.end(JSON.stringify(data));
  };
};
