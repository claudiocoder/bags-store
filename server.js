const express = require('express');

const app = express();

app.use(express.static('./dist/bags-store'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/bags-store/'}),
);

app.listen(process.env.PORT || 8080);