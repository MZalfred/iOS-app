const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello Alfred!'));

app.listen(port,  () => console.log(`ACE running on port ${port}!`));