import { app } from './app.js';

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`⚡[SERVER]: Up and running at http://127.0.0.1:${PORT}`);
});

