const express = require('express');
const app = express();

app.get('/getItems', (req, res) => {
  res.json([{
    'code': 1,
    'description': 'first description'
  }, {
    'code': 2,
    'description': 'second description'
  }]);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
