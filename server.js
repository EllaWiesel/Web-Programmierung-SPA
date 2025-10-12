const express = require('express');
const app = express();

app.use(express.static('./dist/tasksspa/browser'));

app.get('/', (req, res) =>
  res.sendFile('index.html', { root: 'dist/tasksspa/browser/' }),
);

app.listen(process.env.PORT || 8080);
