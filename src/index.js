import app from './app'
import config from './config/index'

const port = config.port

app.listen(port, () => console.log(`Listening at port ${port}`))
