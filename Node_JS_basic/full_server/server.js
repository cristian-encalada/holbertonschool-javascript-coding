const express = require('express');

const app = express();
const port = 1245;

const routes = require('./routes');

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
