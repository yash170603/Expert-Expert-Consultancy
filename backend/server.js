const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000

const handler = require('./routes/route.js')
app.use('/api', handler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})