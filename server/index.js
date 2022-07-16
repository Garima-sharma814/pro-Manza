import { app } from './app.js'

const PORT = app.get('port')

app.listen(PORT, () => { console.log(`⚡[SERVER]: Up and running at http://127.0.0.1:${PORT} !`) })